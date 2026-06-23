"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Family Safety is deliberately removed from main nav to focus the enterprise/SMB positioning
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled ? "w-[calc(100%-2rem)] max-w-4xl" : "w-full max-w-7xl px-4"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? "glass-panel rounded-full px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "px-2 py-4"
          }`}
        >
          <Link href="/" className="flex items-center z-50 group">
            <Image 
              src="/images/logos/PITCH BLACK CYBER LOGOoutline 2023.png" 
              alt="Pitch Black Cyber" 
              width={240} 
              height={60} 
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? "h-8" : "h-10 md:h-12 drop-shadow-[0_0_10px_rgba(24,190,227,0.3)] group-hover:scale-105"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <div className={`flex items-center transition-all ${isScrolled ? "gap-1" : "gap-4 mr-4"}`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-full ${
                      isActive ? "text-cyan" : "text-text-secondary"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-cyan/10 rounded-full border border-cyan/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>
            
            <Link 
              href="#contact" 
              className="group flex items-center bg-cyan rounded-full pl-5 pr-2 py-2 text-void font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(24,190,227,0.35)] active:scale-[0.98]"
            >
              Consultation
              <div className="ml-3 w-8 h-8 rounded-full bg-void/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                <ArrowUpRight weight="bold" className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 z-[60] text-text-primary hover:text-cyan transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} weight="light" /> : <List size={28} weight="light" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Modal Expansion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-void/90 md:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl font-bold transition-colors ${
                        isActive ? "text-cyan" : "text-text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="mt-8"
              >
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center bg-cyan rounded-full pl-6 pr-3 py-3 text-void font-bold text-lg transition-all duration-300 hover:shadow-glow-cyan active:scale-95"
                >
                  Request Consultation
                  <div className="ml-4 w-10 h-10 rounded-full bg-void/10 flex items-center justify-center">
                    <ArrowUpRight weight="bold" className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
