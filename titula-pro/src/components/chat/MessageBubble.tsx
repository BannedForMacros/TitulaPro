"use client";

import Image from "next/image";

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
        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-navy text-white rounded-br-md"
            : "bg-cream-light text-navy-dark border border-cream rounded-bl-md"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
