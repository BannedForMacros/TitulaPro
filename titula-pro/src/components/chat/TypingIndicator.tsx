"use client";

import Image from "next/image";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 mr-auto animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden ring-2 ring-gold/20 mt-0.5">
        <Image
          src="/meta-avatar.jpeg"
          alt="Meta"
          width={32}
          height={32}
          className="object-cover"
        />
      </div>

      <div className="bg-cream-light border border-cream rounded-2xl rounded-bl-md px-5 py-3.5 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-navy/30"
            style={{
              animation: `pulse-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
