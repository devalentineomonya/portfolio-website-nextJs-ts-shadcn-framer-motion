"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { useState } from "react";

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "absolute right-3 top-3 z-10 flex size-7 items-center justify-center rounded-md",
        "border border-zinc-700 bg-zinc-800/80 text-zinc-400",
        "hover:bg-zinc-700 hover:text-zinc-200",
        "opacity-0 transition-all duration-200 group-hover:opacity-100",
        "focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500",
      )}
      aria-label={copied ? "Copied!" : "Copy code to clipboard"}
    >
      {copied ? (
        <Check className="size-3.5 text-green-400" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  );
}

/**
 * Parse highlight meta string like "{1,3-6}" into a Set of line numbers.
 */
function parseHighlightLines(meta?: string): Set<number> {
  const lines = new Set<number>();
  if (!meta) return lines;

  const match = meta.match(/\{([\d,\-\s]+)\}/);
  if (!match) return lines;

  match[1].split(",").forEach((part) => {
    const range = part.trim().split("-");
    if (range.length === 2) {
      const start = parseInt(range[0], 10);
      const end = parseInt(range[1], 10);
      for (let i = start; i <= end; i++) lines.add(i);
    } else {
      lines.add(parseInt(range[0], 10));
    }
  });

  return lines;
}

interface CodeBlockProps {
  code: string;
  language: string;
  meta?: string;
}

export function CodeBlock({ code, language, meta }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const trimmedCode = code.trimEnd();
  const lang = (language || "text") as Language;
  const highlightLines = parseHighlightLines(meta);

  const theme = resolvedTheme === "dark" ? themes.oneDark : themes.oneLight;

  return (
    <div className="group relative my-6">
      <CopyButton code={trimmedCode} />

      {language && language !== "text" && (
        <div className="absolute left-4 top-0 z-10 -translate-y-full rounded-t-md bg-zinc-200 px-3 py-1 text-xs text-zinc-600 font-mono dark:bg-zinc-800 dark:text-zinc-400">
          {language}
        </div>
      )}

      <Highlight theme={theme} code={trimmedCode} language={lang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "overflow-x-auto rounded-lg border p-4 text-sm leading-relaxed font-mono",
              "border-zinc-200 dark:border-zinc-800",
            )}
            style={{ ...style, margin: 0, backgroundColor: "transparent" }}
          >
            <code>
              {tokens.map((line, i) => {
                const lineNumber = i + 1;
                const isHighlighted = highlightLines.has(lineNumber);
                const lineProps = getLineProps({ line, key: i });

                return (
                  <div
                    key={i}
                    {...lineProps}
                    className={cn(
                      "table-row",
                      isHighlighted &&
                        "bg-blue-500/10 dark:bg-blue-400/10 border-l-2 border-blue-500 -ml-4 pl-3.5",
                    )}
                  >
                    <span className="table-cell select-none pr-4 text-right text-xs w-8 text-zinc-400 dark:text-zinc-600">
                      {lineNumber}
                    </span>
                    <span className="table-cell">
                      {line.map((token, key) => {
                        const tokenProps = getTokenProps({ token, key });
                        return <span key={key} {...tokenProps} />;
                      })}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
