import type { ReactNode } from "react";
import {
  parseRichTextDocument,
  type RichTextAlign,
  type RichTextInlineNode,
  type RichTextTextNode,
} from "../lib/rich-text-document";

type ArticleBodyProps = {
  body?: string | null;
};

function alignmentClass(align?: RichTextAlign) {
  if (align === "center") return "text-center";
  if (align === "right") return "text-right";
  return "text-left";
}

function renderTextNode(node: RichTextTextNode, key: string) {
  const sizeClass = node.size === "small" ? "text-sm" : node.size === "large" ? "text-xl" : node.size === "xlarge" ? "text-2xl" : "";
  let content: ReactNode = node.text.split("\n").map((part, index, parts) => (
    <span key={`${key}-line-${index}`}>
      {part}
      {index < parts.length - 1 ? <br /> : null}
    </span>
  ));

  if (sizeClass) content = <span className={sizeClass}>{content}</span>;
  if (node.underline) content = <u>{content}</u>;
  if (node.italic) content = <em>{content}</em>;
  if (node.bold) content = <strong>{content}</strong>;
  return <span key={key}>{content}</span>;
}

function renderInline(nodes: RichTextInlineNode[], keyPrefix: string) {
  return nodes.map((node, index) => {
    if (node.type === "text") return renderTextNode(node, `${keyPrefix}-text-${index}`);
    const external = /^https?:\/\//.test(node.href);
    return (
      <a
        className="text-[var(--soft-gold)] underline decoration-[rgba(216,168,79,0.55)] underline-offset-4 transition hover:text-[var(--lantern-gold)]"
        href={node.href}
        key={`${keyPrefix}-link-${index}`}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {node.children.map((child, childIndex) => renderTextNode(child, `${keyPrefix}-link-${index}-${childIndex}`))}
      </a>
    );
  });
}

function RichArticleBody({ body }: { body: string }) {
  const document = parseRichTextDocument(body);
  if (!document) return null;

  return (
    <div className="space-y-7">
      {document.blocks.map((block, index) => {
        const key = `rich-block-${index}`;

        if (block.type === "paragraph") {
          return (
            <p className={`${alignmentClass(block.align)} text-lg leading-9 text-[var(--muted-silver)]`} key={key}>
              {renderInline(block.children, key)}
            </p>
          );
        }

        if (block.type === "heading") {
          const className = `${alignmentClass(block.align)} gold-text leading-tight ${block.level === 2 ? "text-4xl md:text-5xl" : block.level === 3 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`;
          if (block.level === 3) return <h3 className={className} key={key}>{renderInline(block.children, key)}</h3>;
          if (block.level === 4) return <h4 className={className} key={key}>{renderInline(block.children, key)}</h4>;
          return <h2 className={className} key={key}>{renderInline(block.children, key)}</h2>;
        }

        if (block.type === "quote") {
          return (
            <blockquote className={`${alignmentClass(block.align)} border-l-2 border-[var(--lantern-gold)] py-3 pl-6 text-xl italic leading-9 text-[var(--soft-gold)] md:text-2xl`} key={key}>
              {renderInline(block.children, key)}
            </blockquote>
          );
        }

        if (block.type === "bullet-list" || block.type === "ordered-list") {
          const className = "space-y-3 pl-7 text-lg leading-8 text-[var(--muted-silver)]";
          const items = block.items.map((item, itemIndex) => <li key={`${key}-item-${itemIndex}`}>{renderInline(item, `${key}-item-${itemIndex}`)}</li>);
          return block.type === "bullet-list" ? <ul className={`${className} list-disc`} key={key}>{items}</ul> : <ol className={`${className} list-decimal`} key={key}>{items}</ol>;
        }

        if (block.type === "divider") {
          return <hr className="my-10 border-[rgba(216,168,79,0.3)]" key={key} />;
        }

        if (block.type === "image") {
          const justifyClass = block.align === "right" ? "ml-auto" : block.align === "center" ? "mx-auto" : "mr-auto";
          return (
            <figure className={`${justifyClass} max-w-full`} key={key}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="max-h-[46rem] w-auto max-w-full rounded-2xl object-contain" src={block.src} alt={block.alt} loading="lazy" />
              {block.caption ? <figcaption className={`${alignmentClass(block.align)} mt-3 text-sm italic leading-6 text-[var(--muted-silver)]`}>{block.caption}</figcaption> : null}
            </figure>
          );
        }

        if (block.type === "embed") {
          const compact = block.provider === "SoundCloud";
          const spotify = block.provider === "Spotify";
          return (
            <figure className={`${alignmentClass(block.align)} overflow-hidden rounded-2xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.72)]`} key={key}>
              {block.title ? <figcaption className="border-b border-[rgba(216,168,79,0.2)] px-5 py-4 text-sm uppercase tracking-[0.16em] text-[var(--soft-gold)]">{block.title}</figcaption> : null}
              <div className={compact || spotify ? "" : "aspect-video"}>
                <iframe
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full min-h-44 w-full border-0"
                  loading="lazy"
                  src={block.src}
                  title={block.title ?? `${block.provider} media`}
                  style={{ height: compact ? 180 : spotify ? 352 : undefined }}
                />
              </div>
            </figure>
          );
        }

        const external = /^https?:\/\//.test(block.href);
        return (
          <div className={alignmentClass(block.align)} key={key}>
            <a
              className="lantern-glow inline-flex rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--midnight)]"
              href={block.href}
              rel={external ? "noopener noreferrer" : undefined}
              target={external ? "_blank" : undefined}
            >
              {block.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}

function LegacyArticleBody({ value }: { value: string }) {
  const lines = value.split("\n");
  const nodes: ReactNode[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let orderedList = false;
  let key = 0;

  function flushParagraph() {
    if (!paragraphLines.length) return;
    nodes.push(<p className="text-lg leading-9 text-[var(--muted-silver)]" key={`paragraph-${key++}`}>{paragraphLines.join(" ")}</p>);
    paragraphLines = [];
  }

  function flushList() {
    if (!listItems.length) return;
    const className = "space-y-3 pl-6 text-lg leading-8 text-[var(--muted-silver)]";
    const items = listItems.map((item) => <li key={`${item}-${key++}`}>{item}</li>);
    nodes.push(orderedList ? <ol className={`${className} list-decimal`} key={`ordered-list-${key++}`}>{items}</ol> : <ul className={`${className} list-disc`} key={`unordered-list-${key++}`}>{items}</ul>);
    listItems = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)/);
    const unorderedMatch = line.match(/^[-*]\s+(.+)/);
    if (orderedMatch || unorderedMatch) {
      flushParagraph();
      const nextOrdered = Boolean(orderedMatch);
      if (listItems.length && orderedList !== nextOrdered) flushList();
      orderedList = nextOrdered;
      listItems.push((orderedMatch?.[1] ?? unorderedMatch?.[1] ?? "").trim());
      continue;
    }

    flushList();
    if (/^---+$/.test(line)) {
      flushParagraph();
      nodes.push(<hr className="border-[rgba(216,168,79,0.3)]" key={`divider-${key++}`} />);
    } else if (line.startsWith("### ")) {
      flushParagraph();
      nodes.push(<h4 className="gold-text text-2xl" key={`heading-four-${key++}`}>{line.slice(4)}</h4>);
    } else if (line.startsWith("## ")) {
      flushParagraph();
      nodes.push(<h3 className="gold-text text-3xl" key={`heading-three-${key++}`}>{line.slice(3)}</h3>);
    } else if (line.startsWith("# ")) {
      flushParagraph();
      nodes.push(<h2 className="gold-text text-4xl" key={`heading-two-${key++}`}>{line.slice(2)}</h2>);
    } else if (line.startsWith("> ")) {
      flushParagraph();
      nodes.push(<blockquote className="border-l-2 border-[var(--lantern-gold)] py-2 pl-6 text-xl italic leading-9 text-[var(--soft-gold)]" key={`quote-${key++}`}>{line.slice(2)}</blockquote>);
    } else {
      paragraphLines.push(line);
    }
  }

  flushParagraph();
  flushList();
  return <div className="space-y-7">{nodes}</div>;
}

export function ArticleBody({ body }: ArticleBodyProps) {
  const value = String(body ?? "").replace(/\r\n/g, "\n").trim();
  if (!value) return <p className="text-lg leading-9 text-[var(--muted-silver)]">This reflection is still being prepared.</p>;
  if (parseRichTextDocument(value)) return <RichArticleBody body={value} />;
  return <LegacyArticleBody value={value} />;
}
