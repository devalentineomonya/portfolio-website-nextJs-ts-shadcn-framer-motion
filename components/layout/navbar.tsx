"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GithubIcon } from "@/components/ui/icons";
import { navLinks } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Link
            href="/"
            className="font-bold text-lg sm:text-xl tracking-tighter cursor-pointer no-underline text-black border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300"
          >
            devalentine.
          </Link>

          <nav className="hidden md:flex gap-1 text-[10px] font-bold uppercase tracking-widest bg-gray-50 border border-black p-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={`px-3 py-1.5 transition-colors duration-300 no-underline ${
                  activeSection === link.id
                    ? "bg-black text-white"
                    : "text-black hover:bg-black/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center border border-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </button>

            <a
              href="https://github.com/devalentineomonya"
              target="_blank"
              className="flex items-center gap-2 border border-black px-3 py-1.5 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center p-6 md:hidden"
          >
            <nav className="flex flex-col w-full max-w-sm mx-auto font-bold uppercase tracking-widest text-xs gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center py-5 border border-black transition-colors duration-300 no-underline ${
                    activeSection === link.id
                      ? "bg-black text-white"
                      : "text-black bg-gray-50 hover:bg-black hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
