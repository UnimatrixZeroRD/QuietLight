export const RICH_TEXT_PREFIX = "QLRT1:";

export type RichTextAlign = "left" | "center" | "right";
export type RichTextSize = "small" | "normal" | "large" | "xlarge";

export type RichTextTextNode = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  size?: RichTextSize;
};

export type RichTextLinkNode = {
  type: "link";
  href: string;
  children: RichTextTextNode[];
};

export type RichTextInlineNode = RichTextTextNode | RichTextLinkNode;

export type RichTextBlock =
  | { type: "paragraph"; align?: RichTextAlign; children: RichTextInlineNode[] }
  | { type: "heading"; level: 2 | 3 | 4; align?: RichTextAlign; children: RichTextInlineNode[] }
  | { type: "quote"; align?: RichTextAlign; children: RichTextInlineNode[] }
  | { type: "bullet-list"; items: RichTextInlineNode[][] }
  | { type: "ordered-list"; items: RichTextInlineNode[][] }
  | { type: "divider" }
  | { type: "image"; src: string; alt: string; caption?: string; align?: RichTextAlign }
  | { type: "embed"; provider: string; src: string; title?: string; align?: RichTextAlign }
  | { type: "button"; href: string; label: string; align?: RichTextAlign };

export type RichTextDocument = {
  version: 1;
  blocks: RichTextBlock[];
};

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
}

function normalizeAlign(value: unknown): RichTextAlign | undefined {
  return value === "center" || value === "right" || value === "left" ? value : undefined;
}

function normalizeSize(value: unknown): RichTextSize | undefined {
  return value === "small" || value === "normal" || value === "large" || value === "xlarge" ? value : undefined;
}

export function normalizeLinkUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("/") || trimmed.startsWith("#") || trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) return trimmed;

  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function normalizeImageUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("/")) return trimmed;

  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function normalizeEmbedUrl(value: string): { provider: string; src: string } | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id ? { provider: "YouTube", src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` } : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      const pathParts = url.pathname.split("/").filter(Boolean);
      const id = url.searchParams.get("v") ?? (pathParts[0] === "embed" || pathParts[0] === "shorts" ? pathParts[1] : null);
      return id ? { provider: "YouTube", src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` } : null;
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const pathParts = url.pathname.split("/").filter(Boolean);
      const id = pathParts[pathParts.length - 1];
      return id && /^\d+$/.test(id) ? { provider: "Vimeo", src: `https://player.vimeo.com/video/${id}` } : null;
    }

    if (host === "open.spotify.com") {
      const path = url.pathname.startsWith("/embed/") ? url.pathname : `/embed${url.pathname}`;
      return { provider: "Spotify", src: `https://open.spotify.com${path}` };
    }

    if (host === "soundcloud.com") {
      return { provider: "SoundCloud", src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url.toString())}` };
    }

    if (host === "w.soundcloud.com" && url.pathname === "/player/") {
      return { provider: "SoundCloud", src: url.toString() };
    }

    if (host === "music.apple.com") {
      return { provider: "Apple Music", src: `https://embed.music.apple.com${url.pathname}${url.search}` };
    }

    if (host === "embed.music.apple.com") {
      return { provider: "Apple Music", src: url.toString() };
    }

    return null;
  } catch {
    return null;
  }
}

function normalizeTextNode(value: unknown): RichTextTextNode | null {
  if (!isObject(value) || value.type !== "text" || typeof value.text !== "string") return null;

  return {
    type: "text",
    text: value.text,
    bold: value.bold === true || undefined,
    italic: value.italic === true || undefined,
    underline: value.underline === true || undefined,
    size: normalizeSize(value.size),
  };
}

function normalizeInlineNodes(value: unknown): RichTextInlineNode[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((item): RichTextInlineNode[] => {
    const textNode = normalizeTextNode(item);
    if (textNode) return [textNode];
    if (!isObject(item) || item.type !== "link" || typeof item.href !== "string") return [];

    const href = normalizeLinkUrl(item.href);
    const children = Array.isArray(item.children) ? item.children.map(normalizeTextNode).filter((node): node is RichTextTextNode => Boolean(node)) : [];
    return href && children.length ? [{ type: "link", href, children }] : [];
  });
}

function normalizeBlock(value: unknown): RichTextBlock | null {
  if (!isObject(value) || typeof value.type !== "string") return null;

  if (value.type === "paragraph" || value.type === "quote") {
    return { type: value.type, align: normalizeAlign(value.align), children: normalizeInlineNodes(value.children) };
  }

  if (value.type === "heading") {
    const level = value.level === 3 || value.level === 4 ? value.level : 2;
    return { type: "heading", level, align: normalizeAlign(value.align), children: normalizeInlineNodes(value.children) };
  }

  if (value.type === "bullet-list" || value.type === "ordered-list") {
    const items = Array.isArray(value.items) ? value.items.map(normalizeInlineNodes).filter((item) => item.length) : [];
    return { type: value.type, items };
  }

  if (value.type === "divider") return { type: "divider" };

  if (value.type === "image" && typeof value.src === "string") {
    const src = normalizeImageUrl(value.src);
    if (!src) return null;
    return {
      type: "image",
      src,
      alt: typeof value.alt === "string" ? value.alt : "",
      caption: typeof value.caption === "string" && value.caption.trim() ? value.caption.trim() : undefined,
      align: normalizeAlign(value.align),
    };
  }

  if (value.type === "embed" && typeof value.src === "string") {
    const embed = normalizeEmbedUrl(value.src);
    if (!embed) return null;
    return {
      type: "embed",
      provider: typeof value.provider === "string" ? value.provider : embed.provider,
      src: embed.src,
      title: typeof value.title === "string" && value.title.trim() ? value.title.trim() : undefined,
      align: normalizeAlign(value.align),
    };
  }

  if (value.type === "button" && typeof value.href === "string" && typeof value.label === "string") {
    const href = normalizeLinkUrl(value.href);
    return href && value.label.trim() ? { type: "button", href, label: value.label.trim(), align: normalizeAlign(value.align) } : null;
  }

  return null;
}

export function parseRichTextDocument(value?: string | null): RichTextDocument | null {
  const input = String(value ?? "");
  if (!input.startsWith(RICH_TEXT_PREFIX)) return null;

  try {
    const parsed: unknown = JSON.parse(input.slice(RICH_TEXT_PREFIX.length));
    if (!isObject(parsed) || parsed.version !== 1 || !Array.isArray(parsed.blocks)) return null;
    return { version: 1, blocks: parsed.blocks.map(normalizeBlock).filter((block): block is RichTextBlock => Boolean(block)) };
  } catch {
    return null;
  }
}

export function serializeRichTextDocument(document: RichTextDocument) {
  const normalized: RichTextDocument = {
    version: 1,
    blocks: document.blocks.map(normalizeBlock).filter((block): block is RichTextBlock => Boolean(block)),
  };
  return `${RICH_TEXT_PREFIX}${JSON.stringify(normalized)}`;
}

function textNodeToHtml(node: RichTextTextNode) {
  let value = escapeHtml(node.text).replace(/\n/g, "<br>");
  if (node.size && node.size !== "normal") {
    const size = node.size === "small" ? "0.875rem" : node.size === "large" ? "1.25rem" : "1.5rem";
    value = `<span style=\"font-size:${size}\">${value}</span>`;
  }
  if (node.underline) value = `<u>${value}</u>`;
  if (node.italic) value = `<em>${value}</em>`;
  if (node.bold) value = `<strong>${value}</strong>`;
  return value;
}

function inlineNodesToHtml(nodes: RichTextInlineNode[]) {
  return nodes
    .map((node) => {
      if (node.type === "text") return textNodeToHtml(node);
      return `<a href=\"${escapeHtml(node.href)}\">${node.children.map(textNodeToHtml).join("")}</a>`;
    })
    .join("");
}

function alignStyle(align?: RichTextAlign) {
  return align && align !== "left" ? ` style=\"text-align:${align}\"` : "";
}

export function richTextDocumentToEditorHtml(document: RichTextDocument) {
  return document.blocks
    .map((block) => {
      if (block.type === "paragraph") return `<p${alignStyle(block.align)}>${inlineNodesToHtml(block.children) || "<br>"}</p>`;
      if (block.type === "heading") return `<h${block.level}${alignStyle(block.align)}>${inlineNodesToHtml(block.children) || "<br>"}</h${block.level}>`;
      if (block.type === "quote") return `<blockquote${alignStyle(block.align)}>${inlineNodesToHtml(block.children) || "<br>"}</blockquote>`;
      if (block.type === "bullet-list" || block.type === "ordered-list") {
        const tag = block.type === "bullet-list" ? "ul" : "ol";
        return `<${tag}>${block.items.map((item) => `<li>${inlineNodesToHtml(item)}</li>`).join("")}</${tag}>`;
      }
      if (block.type === "divider") return "<hr>";
      if (block.type === "image") {
        return `<div data-ql-block=\"image\" data-src=\"${escapeHtml(block.src)}\" data-alt=\"${escapeHtml(block.alt)}\" data-caption=\"${escapeHtml(block.caption ?? "")}\" data-align=\"${block.align ?? "left"}\" contenteditable=\"false\" style=\"text-align:${block.align ?? "left"};padding:1rem 0\"><img src=\"${escapeHtml(block.src)}\" alt=\"${escapeHtml(block.alt)}\" style=\"max-width:100%;border-radius:1rem\">${block.caption ? `<div style=\"font-size:.875rem;opacity:.75;margin-top:.5rem\">${escapeHtml(block.caption)}</div>` : ""}</div><p><br></p>`;
      }
      if (block.type === "embed") {
        return `<div data-ql-block=\"embed\" data-src=\"${escapeHtml(block.src)}\" data-provider=\"${escapeHtml(block.provider)}\" data-title=\"${escapeHtml(block.title ?? "")}\" data-align=\"${block.align ?? "left"}\" contenteditable=\"false\" style=\"text-align:${block.align ?? "left"};padding:1rem;border:1px solid rgba(216,168,79,.35);border-radius:1rem;margin:1rem 0\"><strong>${escapeHtml(block.provider)} embed</strong>${block.title ? `<div>${escapeHtml(block.title)}</div>` : ""}</div><p><br></p>`;
      }
      return `<div data-ql-block=\"button\" data-href=\"${escapeHtml(block.href)}\" data-label=\"${escapeHtml(block.label)}\" data-align=\"${block.align ?? "left"}\" contenteditable=\"false\" style=\"text-align:${block.align ?? "left"};padding:1rem 0\"><span style=\"display:inline-block;padding:.75rem 1.25rem;border-radius:999px;background:#d8a84f;color:#07111f;font-weight:700\">${escapeHtml(block.label)}</span></div><p><br></p>`;
    })
    .join("");
}

export function legacyBodyToEditorHtml(value?: string | null) {
  const input = String(value ?? "").replace(/\r\n/g, "\n").trim();
  if (!input) return "<p><br></p>";

  return input
    .split(/\n{2,}/)
    .map((block) => {
      const line = block.trim();
      if (line.startsWith("### ")) return `<h4>${escapeHtml(line.slice(4))}</h4>`;
      if (line.startsWith("## ")) return `<h3>${escapeHtml(line.slice(3))}</h3>`;
      if (line.startsWith("# ")) return `<h2>${escapeHtml(line.slice(2))}</h2>`;
      if (line.startsWith("> ")) return `<blockquote>${escapeHtml(line.slice(2))}</blockquote>`;
      if (/^---+$/.test(line)) return "<hr>";
      return `<p>${escapeHtml(line).replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

export function richTextValueToEditorHtml(value?: string | null) {
  const document = parseRichTextDocument(value);
  return document ? richTextDocumentToEditorHtml(document) : legacyBodyToEditorHtml(value);
}

function inlineText(nodes: RichTextInlineNode[]) {
  return nodes.map((node) => (node.type === "text" ? node.text : node.children.map((child) => child.text).join(""))).join("");
}

export function richTextValueToPlainText(value?: string | null) {
  const document = parseRichTextDocument(value);
  if (!document) return String(value ?? "").replace(/[#>*_\-]/g, " ");

  return document.blocks
    .map((block) => {
      if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") return inlineText(block.children);
      if (block.type === "bullet-list" || block.type === "ordered-list") return block.items.map(inlineText).join(" ");
      if (block.type === "image") return `${block.alt} ${block.caption ?? ""}`;
      if (block.type === "embed") return block.title ?? block.provider;
      if (block.type === "button") return block.label;
      return "";
    })
    .join("\n")
    .trim();
}
