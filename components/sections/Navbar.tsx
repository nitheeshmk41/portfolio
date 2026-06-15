"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter relative z-50">
          Nitheeshmk<span className="text-[var(--color-coral)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-white transition-all">About</Link>
          <Link href="#gmmx" className="hover:text-[var(--color-coral)] transition-all">GMMX</Link>
          <Link href="#skills" className="hover:text-white transition-all">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-all">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-all">Contact</Link>
          <Link href="/resume.pdf" target="_blank" className="text-[var(--color-coral)] hover:text-white transition-all font-semibold">Resume</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 py-6 px-6 flex flex-col items-center gap-6 text-lg font-medium shadow-2xl"
          >
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-all">About</Link>
            <Link href="#gmmx" onClick={() => setIsOpen(false)} className="text-[var(--color-coral)] hover:text-white transition-all">GMMX</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-all">Skills</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-all">Projects</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-all">Contact</Link>
            <Link href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)} className="text-[var(--color-coral)] hover:text-white transition-all font-semibold mt-2">Resume</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
