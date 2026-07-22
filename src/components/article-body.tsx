import type { ReactNode } from "react";

type ArticleBodyProps = {
  body?: string | null;
};

export function ArticleBody({ body }: ArticleBodyProps) {
  const value = String(body ?? "").replace(/\r\n/g, "\n").trim();

  if (!value) {
    return <p className="text-lg leading-9 text-[var(--muted-silver)]">This reflection is still being prepared.</p>;
  }

  const lines = value.split("\n");
  const nodes: ReactNode[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let orderedList = false;
  let key = 0;

  function flushParagraph() {
    if (!paragraphLines.length) return;

    nodes.push(
      <p className="text-lg leading-9 text-[var(--muted-silver)]" key={`paragraph-${key++}`}>
        {paragraphLines.join(" ")}
      </p>,
    );
    paragraphLines = [];
  }

  function flushList() {
    if (!listItems.length) return;

    const className = "space-y-3 pl-6 text-lg leading-8 text-[var(--muted-silver)]";
    const items = listItems.map((item) => <li key={`${item}-${key++}`}>{item}</li>);

    nodes.push(
      orderedList ? (
        <ol className={`${className} list-decimal`} key={`ordered-list-${key++}`}>
          {items}
        </ol>
      ) : (
        <ul className={`${className} list-disc`} key={`unordered-list-${key++}`}>
          {items}
        </ul>
      ),
    );

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

      if (listItems.length && orderedList !== nextOrdered) {
        flushList();
      }

      orderedList = nextOrdered;
      listItems.push((orderedMatch?.[1] ?? unorderedMatch?.[1] ?? "").trim());
      continue;
    }

    flushList();

    if (/^---+$/.test(line)) {
      flushParagraph();
      nodes.push(<hr className="border-[rgba(216,168,79,0.3)]" key={`divider-${key++}`} />);
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      nodes.push(
        <h4 className="gold-text text-2xl" key={`heading-four-${key++}`}>
          {line.slice(4)}
        </h4>,
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      nodes.push(
        <h3 className="gold-text text-3xl" key={`heading-three-${key++}`}>
          {line.slice(3)}
        </h3>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      nodes.push(
        <h2 className="gold-text text-4xl" key={`heading-two-${key++}`}>
          {line.slice(2)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      nodes.push(
        <blockquote
          className="border-l-2 border-[var(--lantern-gold)] py-2 pl-6 text-xl italic leading-9 text-[var(--soft-gold)]"
          key={`quote-${key++}`}
        >
          {line.slice(2)}
        </blockquote>,
      );
      continue;
    }

    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return <div className="space-y-7">{nodes}</div>;
}
