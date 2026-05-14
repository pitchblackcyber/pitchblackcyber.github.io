"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Business Services", href: "/services" },
    { name: "Family Safety", href: "/family-safety" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-deep-space/80 backdrop-blur-md border-b border-border-glass">
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logos/PITCH BLACK CYBER LOGOoutline 2023.png" 
            alt="Pitch Black Cyber" 
            width={240} 
            height={60} 
            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(24,191,228,0.3)] transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-white px-3 py-1.5 rounded-full hover:bg-brand-purple/20 ${pathname === link.href ? "text-brand-cyan" : "text-text-primary"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Menu Slide-in */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-[#0b0c10] border-l border-border-glass transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden flex flex-col pt-20 px-6 z-50 shadow-2xl`}
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition-colors ${pathname === link.href ? "text-brand-cyan" : "text-text-primary hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile overlay backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/80 md:hidden backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
