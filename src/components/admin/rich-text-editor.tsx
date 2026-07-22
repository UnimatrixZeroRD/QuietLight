"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArticleBody } from "../article-body";
import {
  normalizeEmbedUrl,
  normalizeImageUrl,
  normalizeLinkUrl,
  richTextValueToEditorHtml,
  richTextValueToPlainText,
  serializeRichTextDocument,
  type RichTextAlign,
  type RichTextDocument,
  type RichTextInlineNode,
  type RichTextSize,
  type RichTextTextNode,
} from "../../lib/rich-text-document";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

type ImageAsset = {
  id: string;
  title: string;
  url: string;
};

type InsertMode = "link" | "image" | "embed" | "button" | null;

type RichTextEditorProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  minHeightClassName?: string;
};

type Marks = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  size?: RichTextSize;
};

function sizeFromElement(element: HTMLElement, inherited?: RichTextSize): RichTextSize | undefined {
  if (element.tagName === "FONT") {
    const size = Number(element.getAttribute("size"));
    if (size <= 2) return "small";
    if (size >= 6) return "xlarge";
    if (size >= 4) return "large";
    return "normal";
  }

  const fontSize = element.style.fontSize;
  if (!fontSize) return inherited;
  const numeric = Number.parseFloat(fontSize);
  if (fontSize.includes("rem")) {
    if (numeric <= 0.9) return "small";
    if (numeric >= 1.45) return "xlarge";
    if (numeric >= 1.15) return "large";
    return "normal";
  }
  if (fontSize.includes("px")) {
    if (numeric <= 14) return "small";
    if (numeric >= 24) return "xlarge";
    if (numeric >= 19) return "large";
    return "normal";
  }
  return inherited;
}

function marksForElement(element: HTMLElement, inherited: Marks): Marks {
  const fontWeight = element.style.fontWeight;
  const numericWeight = Number.parseInt(fontWeight, 10);
  return {
    bold: inherited.bold || element.tagName === "B" || element.tagName === "STRONG" || fontWeight === "bold" || numericWeight >= 600 || undefined,
    italic: inherited.italic || element.tagName === "I" || element.tagName === "EM" || element.style.fontStyle === "italic" || undefined,
    underline: inherited.underline || element.tagName === "U" || element.style.textDecoration.includes("underline") || undefined,
    size: sizeFromElement(element, inherited.size),
  };
}

function textNode(text: string, marks: Marks): RichTextTextNode | null {
  if (!text) return null;
  return {
    type: "text",
    text,
    bold: marks.bold || undefined,
    italic: marks.italic || undefined,
    underline: marks.underline || undefined,
    size: marks.size && marks.size !== "normal" ? marks.size : undefined,
  };
}

function parseInlineChildren(parent: Node, inherited: Marks = {}): RichTextInlineNode[] {
  const output: RichTextInlineNode[] = [];

  parent.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parsed = textNode(node.textContent ?? "", inherited);
      if (parsed) output.push(parsed);
      return;
    }

    if (!(node instanceof HTMLElement)) return;
    if (node.tagName === "BR") {
      const parsed = textNode("\n", inherited);
      if (parsed) output.push(parsed);
      return;
    }

    const marks = marksForElement(node, inherited);
    if (node.tagName === "A") {
      const href = normalizeLinkUrl(node.getAttribute("href") ?? "");
      const children = parseInlineChildren(node, marks).flatMap((child) => (child.type === "text" ? [child] : child.children));
      if (href && children.length) output.push({ type: "link", href, children });
      else output.push(...children);
      return;
    }

    output.push(...parseInlineChildren(node, marks));
  });

  return output;
}

function getAlignment(element: HTMLElement): RichTextAlign | undefined {
  const value = element.dataset.align ?? element.style.textAlign;
  return value === "center" || value === "right" || value === "left" ? value : undefined;
}

function documentFromEditor(editor: HTMLElement): RichTextDocument {
  const blocks: RichTextDocument["blocks"] = [];

  editor.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (text) blocks.push({ type: "paragraph", children: [{ type: "text", text }] });
      return;
    }

    if (!(node instanceof HTMLElement)) return;
    const blockType = node.dataset.qlBlock;

    if (blockType === "image") {
      const src = normalizeImageUrl(node.dataset.src ?? "");
      if (src) {
        blocks.push({
          type: "image",
          src,
          alt: node.dataset.alt ?? "",
          caption: node.dataset.caption?.trim() || undefined,
          align: getAlignment(node),
        });
      }
      return;
    }

    if (blockType === "embed") {
      const embed = normalizeEmbedUrl(node.dataset.src ?? "");
      if (embed) {
        blocks.push({
          type: "embed",
          provider: node.dataset.provider ?? embed.provider,
          src: embed.src,
          title: node.dataset.title?.trim() || undefined,
          align: getAlignment(node),
        });
      }
      return;
    }

    if (blockType === "button") {
      const href = normalizeLinkUrl(node.dataset.href ?? "");
      const label = node.dataset.label?.trim();
      if (href && label) blocks.push({ type: "button", href, label, align: getAlignment(node) });
      return;
    }

    if (node.tagName === "HR") {
      blocks.push({ type: "divider" });
      return;
    }

    if (node.tagName === "UL" || node.tagName === "OL") {
      const items = Array.from(node.querySelectorAll(":scope > li")).map((item) => parseInlineChildren(item)).filter((item) => item.length);
      blocks.push({ type: node.tagName === "UL" ? "bullet-list" : "ordered-list", items });
      return;
    }

    const children = parseInlineChildren(node);
    if (!children.length && !node.innerText.trim()) return;
    const align = getAlignment(node);

    if (node.tagName === "H2" || node.tagName === "H3" || node.tagName === "H4") {
      const level = Number(node.tagName.slice(1)) as 2 | 3 | 4;
      blocks.push({ type: "heading", level, align, children });
    } else if (node.tagName === "BLOCKQUOTE") {
      blocks.push({ type: "quote", align, children });
    } else {
      blocks.push({ type: "paragraph", align, children });
    }
  });

  return { version: 1, blocks };
}

function ToolButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      className="min-w-10 rounded-xl border border-[rgba(216,168,79,0.28)] px-3 py-2 text-sm text-[var(--ivory)] transition hover:border-[var(--lantern-gold)] hover:text-[var(--soft-gold)]"
      title={label}
      type="button"
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function RichTextEditor({ id, value, onChange, label = "Article body", minHeightClassName = "min-h-[34rem]" }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const savedRangeRef = useRef<Range | null>(null);
  const lastEmittedValueRef = useRef<string | null>(null);
  const [insertMode, setInsertMode] = useState<InsertMode>(null);
  const [insertUrl, setInsertUrl] = useState("");
  const [insertLabel, setInsertLabel] = useState("");
  const [insertCaption, setInsertCaption] = useState("");
  const [insertAlt, setInsertAlt] = useState("");
  const [insertMessage, setInsertMessage] = useState("");
  const [preview, setPreview] = useState(false);
  const [libraryImages, setLibraryImages] = useState<ImageAsset[]>([]);

  const plainText = useMemo(() => richTextValueToPlainText(value), [value]);
  const wordCount = plainText.trim() ? plainText.trim().split(/\s+/).filter(Boolean).length : 0;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || lastEmittedValueRef.current === value) return;
    editor.innerHTML = richTextValueToEditorHtml(value);
    lastEmittedValueRef.current = value;
  }, [value]);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    supabase
      .from("media_assets")
      .select("id,title,bucket,path")
      .eq("media_type", "image")
      .eq("access_level", "public")
      .order("created_at", { ascending: false })
      .limit(100)
      .then(({ data }) => {
        const images = (data ?? []).map((asset) => ({
          id: asset.id as string,
          title: asset.title as string,
          url: supabase.storage.from(asset.bucket as string).getPublicUrl(asset.path as string).data.publicUrl,
        }));
        setLibraryImages(images);
      });
  }, []);

  function rememberSelection() {
    const editor = editorRef.current;
    const selection = window.getSelection();
    if (!editor || !selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    if (editor.contains(range.commonAncestorContainer)) savedRangeRef.current = range.cloneRange();
  }

  function restoreSelection() {
    const editor = editorRef.current;
    if (!editor) return;
    editor.focus();
    const selection = window.getSelection();
    selection?.removeAllRanges();
    if (savedRangeRef.current) selection?.addRange(savedRangeRef.current);
  }

  function emitChange() {
    const editor = editorRef.current;
    if (!editor) return;
    const nextValue = serializeRichTextDocument(documentFromEditor(editor));
    lastEmittedValueRef.current = nextValue;
    onChange(nextValue);
    rememberSelection();
  }

  function command(name: string, commandValue?: string) {
    restoreSelection();
    document.execCommand(name, false, commandValue);
    emitChange();
  }

  function openInsert(mode: Exclude<InsertMode, null>) {
    rememberSelection();
    setInsertMode(mode);
    setInsertUrl("");
    setInsertLabel("");
    setInsertCaption("");
    setInsertAlt("");
    setInsertMessage("");
  }

  function closeInsert() {
    setInsertMode(null);
    setInsertMessage("");
  }

  function insertBlock(block: HTMLElement) {
    const editor = editorRef.current;
    if (!editor) return;
    restoreSelection();

    const selection = window.getSelection();
    const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
    const spacer = document.createElement("p");
    spacer.appendChild(document.createElement("br"));

    if (range && editor.contains(range.commonAncestorContainer)) {
      range.deleteContents();
      range.insertNode(spacer);
      range.insertNode(block);
      range.setStartAfter(spacer);
      range.collapse(true);
      selection?.removeAllRanges();
      selection?.addRange(range);
    } else {
      editor.append(block, spacer);
    }

    emitChange();
  }

  function handleInsert(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInsertMessage("");

    if (insertMode === "link") {
      const href = normalizeLinkUrl(insertUrl);
      if (!href) return setInsertMessage("Enter a valid website, email, telephone, internal, or anchor link.");
      restoreSelection();
      const selection = window.getSelection();
      if (selection?.isCollapsed) {
        const label = insertLabel.trim() || href;
        document.execCommand("insertHTML", false, `<a href=\"${href.replace(/\"/g, "&quot;")}\">${label.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>`);
      } else {
        document.execCommand("createLink", false, href);
      }
      emitChange();
      closeInsert();
      return;
    }

    if (insertMode === "image") {
      const src = normalizeImageUrl(insertUrl);
      if (!src) return setInsertMessage("Choose an uploaded image or enter a valid image URL.");
      const block = document.createElement("div");
      block.dataset.qlBlock = "image";
      block.dataset.src = src;
      block.dataset.alt = insertAlt.trim();
      block.dataset.caption = insertCaption.trim();
      block.dataset.align = "center";
      block.contentEditable = "false";
      block.style.textAlign = "center";
      block.style.padding = "1rem 0";
      const image = document.createElement("img");
      image.src = src;
      image.alt = insertAlt.trim();
      image.style.maxWidth = "100%";
      image.style.borderRadius = "1rem";
      block.appendChild(image);
      if (insertCaption.trim()) {
        const caption = document.createElement("div");
        caption.textContent = insertCaption.trim();
        caption.style.fontSize = ".875rem";
        caption.style.opacity = ".75";
        caption.style.marginTop = ".5rem";
        block.appendChild(caption);
      }
      insertBlock(block);
      closeInsert();
      return;
    }

    if (insertMode === "embed") {
      const embed = normalizeEmbedUrl(insertUrl);
      if (!embed) return setInsertMessage("This first version supports YouTube, Vimeo, Spotify, SoundCloud, and Apple Music links.");
      const block = document.createElement("div");
      block.dataset.qlBlock = "embed";
      block.dataset.src = embed.src;
      block.dataset.provider = embed.provider;
      block.dataset.title = insertLabel.trim();
      block.dataset.align = "center";
      block.contentEditable = "false";
      block.style.textAlign = "center";
      block.style.padding = "1rem";
      block.style.border = "1px solid rgba(216,168,79,.35)";
      block.style.borderRadius = "1rem";
      block.style.margin = "1rem 0";
      const heading = document.createElement("strong");
      heading.textContent = `${embed.provider} embed`;
      block.appendChild(heading);
      if (insertLabel.trim()) {
        const title = document.createElement("div");
        title.textContent = insertLabel.trim();
        block.appendChild(title);
      }
      insertBlock(block);
      closeInsert();
      return;
    }

    if (insertMode === "button") {
      const href = normalizeLinkUrl(insertUrl);
      const label = insertLabel.trim();
      if (!href || !label) return setInsertMessage("Enter both button text and a valid destination.");
      const block = document.createElement("div");
      block.dataset.qlBlock = "button";
      block.dataset.href = href;
      block.dataset.label = label;
      block.dataset.align = "center";
      block.contentEditable = "false";
      block.style.textAlign = "center";
      block.style.padding = "1rem 0";
      const button = document.createElement("span");
      button.textContent = label;
      button.style.display = "inline-block";
      button.style.padding = ".75rem 1.25rem";
      button.style.borderRadius = "999px";
      button.style.background = "#d8a84f";
      button.style.color = "#07111f";
      button.style.fontWeight = "700";
      block.appendChild(button);
      insertBlock(block);
      closeInsert();
    }
  }

  return (
    <section className="mt-6" aria-labelledby={`${id}-label`}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--soft-gold)]" id={`${id}-label`}>
            {label}
          </p>
          <p className="mt-2 text-xs leading-5 text-[var(--muted-silver)]">Write and format visually. The saved article uses a safe structured document rather than raw embed code.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted-silver)]">
          <span>{wordCount} words</span>
          <span>about {readingMinutes} min read</span>
          <button className="rounded-full border border-[rgba(216,168,79,0.35)] px-4 py-2 text-[var(--ivory)]" type="button" onClick={() => setPreview((current) => !current)}>
            {preview ? "Edit" : "Preview"}
          </button>
        </div>
      </div>

      {!preview ? (
        <div className="mt-4 overflow-hidden rounded-3xl border border-[rgba(216,168,79,0.4)] bg-[rgba(7,17,31,0.86)]">
          <div className="sticky top-0 z-10 flex flex-wrap gap-2 border-b border-[rgba(216,168,79,0.22)] bg-[rgba(7,17,31,0.96)] p-3 backdrop-blur-xl" role="toolbar" aria-label="Article formatting">
            <select
              aria-label="Paragraph style"
              className="rounded-xl border border-[rgba(216,168,79,0.28)] bg-[var(--midnight)] px-3 py-2 text-sm text-[var(--ivory)]"
              defaultValue="p"
              onMouseDown={rememberSelection}
              onChange={(event) => command("formatBlock", event.target.value)}
            >
              <option value="p">Paragraph</option>
              <option value="h2">Large heading</option>
              <option value="h3">Medium heading</option>
              <option value="h4">Small heading</option>
              <option value="blockquote">Pull quote</option>
            </select>
            <select
              aria-label="Font size"
              className="rounded-xl border border-[rgba(216,168,79,0.28)] bg-[var(--midnight)] px-3 py-2 text-sm text-[var(--ivory)]"
              defaultValue="3"
              onMouseDown={rememberSelection}
              onChange={(event) => command("fontSize", event.target.value)}
            >
              <option value="2">Small text</option>
              <option value="3">Normal text</option>
              <option value="5">Large text</option>
              <option value="6">Extra-large text</option>
            </select>
            <ToolButton label="Bold" onClick={() => command("bold")}><strong>B</strong></ToolButton>
            <ToolButton label="Italic" onClick={() => command("italic")}><em>I</em></ToolButton>
            <ToolButton label="Underline" onClick={() => command("underline")}><u>U</u></ToolButton>
            <ToolButton label="Align left" onClick={() => command("justifyLeft")}>⇤</ToolButton>
            <ToolButton label="Align centre" onClick={() => command("justifyCenter")}>≡</ToolButton>
            <ToolButton label="Align right" onClick={() => command("justifyRight")}>⇥</ToolButton>
            <ToolButton label="Bullet list" onClick={() => command("insertUnorderedList")}>• List</ToolButton>
            <ToolButton label="Numbered list" onClick={() => command("insertOrderedList")}>1. List</ToolButton>
            <ToolButton label="Add link" onClick={() => openInsert("link")}>Link</ToolButton>
            <ToolButton label="Add image" onClick={() => openInsert("image")}>Image</ToolButton>
            <ToolButton label="Add media embed" onClick={() => openInsert("embed")}>Embed</ToolButton>
            <ToolButton label="Add call-to-action button" onClick={() => openInsert("button")}>Button</ToolButton>
            <ToolButton label="Insert divider" onClick={() => command("insertHorizontalRule")}>—</ToolButton>
            <ToolButton label="Undo" onClick={() => command("undo")}>↶</ToolButton>
            <ToolButton label="Redo" onClick={() => command("redo")}>↷</ToolButton>
          </div>

          {insertMode ? (
            <form className="border-b border-[rgba(216,168,79,0.22)] bg-[rgba(216,168,79,0.05)] p-5" onSubmit={handleInsert}>
              <div className="grid gap-4 md:grid-cols-2">
                {insertMode === "image" && libraryImages.length ? (
                  <label className="md:col-span-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--soft-gold)]">Choose an uploaded image</span>
                    <select className="mt-2 w-full rounded-xl border border-[rgba(216,168,79,0.35)] bg-[var(--midnight)] px-4 py-3 text-[var(--ivory)]" value={insertUrl} onChange={(event) => setInsertUrl(event.target.value)}>
                      <option value="">Select from the media library</option>
                      {libraryImages.map((image) => <option key={image.id} value={image.url}>{image.title}</option>)}
                    </select>
                  </label>
                ) : null}

                <label className={insertMode === "image" ? "md:col-span-2" : ""}>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--soft-gold)]">
                    {insertMode === "image" ? "Image URL" : insertMode === "embed" ? "Media URL" : "Destination URL"}
                  </span>
                  <input
                    className="mt-2 w-full rounded-xl border border-[rgba(216,168,79,0.35)] bg-[var(--midnight)] px-4 py-3 text-[var(--ivory)]"
                    value={insertUrl}
                    onChange={(event) => setInsertUrl(event.target.value)}
                    placeholder={insertMode === "embed" ? "YouTube, Spotify, Vimeo, SoundCloud, or Apple Music" : "https://..."}
                  />
                </label>

                {insertMode === "link" || insertMode === "embed" || insertMode === "button" ? (
                  <label>
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--soft-gold)]">
                      {insertMode === "button" ? "Button text" : insertMode === "embed" ? "Embed title (optional)" : "Link text if nothing is selected"}
                    </span>
                    <input className="mt-2 w-full rounded-xl border border-[rgba(216,168,79,0.35)] bg-[var(--midnight)] px-4 py-3 text-[var(--ivory)]" value={insertLabel} onChange={(event) => setInsertLabel(event.target.value)} />
                  </label>
                ) : null}

                {insertMode === "image" ? (
                  <>
                    <label>
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--soft-gold)]">Alternative text</span>
                      <input className="mt-2 w-full rounded-xl border border-[rgba(216,168,79,0.35)] bg-[var(--midnight)] px-4 py-3 text-[var(--ivory)]" value={insertAlt} onChange={(event) => setInsertAlt(event.target.value)} placeholder="Describe the image" />
                    </label>
                    <label>
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--soft-gold)]">Caption (optional)</span>
                      <input className="mt-2 w-full rounded-xl border border-[rgba(216,168,79,0.35)] bg-[var(--midnight)] px-4 py-3 text-[var(--ivory)]" value={insertCaption} onChange={(event) => setInsertCaption(event.target.value)} />
                    </label>
                  </>
                ) : null}
              </div>
              {insertMessage ? <p className="mt-4 text-sm text-[var(--soft-gold)]">{insertMessage}</p> : null}
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full bg-[var(--lantern-gold)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]" type="submit">Insert</button>
                <button className="rounded-full border border-[rgba(216,168,79,0.35)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ivory)]" type="button" onClick={closeInsert}>Cancel</button>
              </div>
            </form>
          ) : null}

          <div
            aria-label={label}
            className={`${minHeightClassName} px-6 py-8 text-lg leading-9 text-[var(--muted-silver)] outline-none [&_a]:text-[var(--soft-gold)] [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--lantern-gold)] [&_blockquote]:pl-6 [&_blockquote]:text-xl [&_blockquote]:italic [&_h2]:my-6 [&_h2]:text-4xl [&_h2]:text-[var(--soft-gold)] [&_h3]:my-5 [&_h3]:text-3xl [&_h3]:text-[var(--soft-gold)] [&_h4]:my-4 [&_h4]:text-2xl [&_h4]:text-[var(--soft-gold)] [&_hr]:my-8 [&_hr]:border-[rgba(216,168,79,0.35)] [&_li]:my-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_p]:my-4 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-7 empty:before:text-[var(--muted-silver)] empty:before:content-['Begin_writing_your_article…']`}
            contentEditable
            id={id}
            ref={editorRef}
            role="textbox"
            suppressContentEditableWarning
            onBlur={rememberSelection}
            onInput={emitChange}
            onKeyUp={rememberSelection}
            onMouseUp={rememberSelection}
          />
        </div>
      ) : (
        <div className="lantern-panel mt-4 rounded-3xl p-8 md:p-12">
          <ArticleBody body={value} />
        </div>
      )}
    </section>
  );
}
