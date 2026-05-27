"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/chat", label: "Chatbot" },
  { href: "/proceso", label: "Proceso" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cream-light">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/meta-avatar.jpeg"
            alt="TitulaPro"
            width={36}
            height={36}
            className="rounded-full ring-2 ring-gold/30 group-hover:ring-gold transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="text-navy-dark font-semibold text-sm leading-tight tracking-tight">
              TitulaPro
            </span>
            <span className="text-[10px] text-navy/50 leading-tight">
              FACEAC · UNPRG
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-navy text-white"
                    : "text-navy/60 hover:text-navy hover:bg-cream-light"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
