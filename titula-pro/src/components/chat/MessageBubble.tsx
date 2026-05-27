"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isLatest?: boolean;
}

export default function MessageBubble({
  role,
  content,
  isLatest,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex gap-3 max-w-[85%] ${
        isUser ? "ml-auto flex-row-reverse" : "mr-auto"
      } ${isLatest ? "animate-fade-in" : ""}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden ring-2 ring-gold/20 mt-0.5">
          <Image
            src="/meta-avatar.jpeg"
            alt="Meta"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      )}

      <div
        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-navy text-white rounded-br-md"
            : "bg-cream-light text-navy-dark border border-cream rounded-bl-md"
        }`}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => (
                <strong className="font-semibold text-navy-dark">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic text-navy/70">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-2 space-y-1 last:mb-0">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-2 space-y-1 last:mb-0">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-accent underline underline-offset-2 hover:text-navy transition-colors"
                >
                  {children}
                </a>
              ),
              h3: ({ children }) => (
                <h3 className="font-semibold text-navy-dark mt-3 mb-1">{children}</h3>
              ),
              code: ({ children }) => (
                <code className="bg-navy/5 text-navy-dark px-1.5 py-0.5 rounded text-xs font-mono">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
