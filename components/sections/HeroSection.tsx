"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const greetings = [
  "Hello",
  "வணக்கம்",     // Tamil
  "नमस्ते",      // Hindi
  "నమస్కారం",   // Telugu
  "ನಮಸ್ಕಾರ",    // Kannada
  "നമസ്കാരം",   // Malayalam
  "নমস্কার",     // Bengali
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
];

export function HeroSection() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-[800] leading-[1.1] tracking-[-0.05em] text-white flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="relative inline-flex items-center h-[1.2em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentGreetingIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-zinc-300 whitespace-nowrap"
                    >
                      {greetings[currentGreetingIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="flex items-center gap-x-4">
                <span>I'm</span>
                <div className="w-[84px] h-[84px] rounded-[24px] bg-gradient-to-tr from-zinc-800 to-zinc-900 flex items-center justify-center relative group cursor-pointer overflow-hidden border-[2px] border-[rgba(255,255,255,.1)] shadow-[0_0_20px_rgba(255,92,115,.2)] hover:scale-[1.05] hover:rotate-2 hover:shadow-[0_0_30px_rgba(255,92,115,0.3)] hover:border-[var(--color-coral)] transition-all duration-300">
                  <Image src="/nitheeshimg.png" alt="Nitheesh" fill className="object-cover" />
                </div>
                <span>Nitheesh.</span>
              </div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.1rem,2.5vw,1.25rem)] font-medium leading-[1.6] text-[rgb(160,160,160)] mb-10"
          >
            <p>MCA @ PSG Tech, Software Engineer.</p>
            <p className="mt-4">
              Building <Link href="#gmmx" className="text-[var(--color-coral)] font-bold hover:underline transition-all">gmmx.app</Link>
            </p>
            <p className="mt-4 text-[clamp(1rem,2vw,1.1rem)] text-zinc-400">A gym management SaaS platform for<br className="hidden sm:block" /> modern fitness businesses.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6 w-full max-w-[320px] sm:max-w-none mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button variant="coral" size="lg" className="w-full sm:w-auto sm:min-w-[200px] gap-2 group text-base h-12" asChild>
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px] gap-2 text-base h-12" asChild>
                <Link href="#gmmx">
                  See GMMX
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-zinc-500 pt-4">
              <Link href="https://github.com/nitheeshmk41" target="_blank" className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/nitheeshmk5/" target="_blank" className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="mailto:nitheeshmk5@gmail.com" className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
