"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-coral)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let's build something.</h2>
          <p className="text-xl text-muted-foreground">
            Looking for a software engineering role while building GMMX. 
            I bring a founder's mindset to engineering teams.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button size="lg" className="gap-2 bg-white text-black hover:bg-zinc-200" asChild>
              <Link href="mailto:nitheesh@example.com">
                <Mail className="w-4 h-4" /> Say Hello
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="https://linkedin.com/in/nitheeshmk" target="_blank">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="https://github.com/nitheeshmk" target="_blank">
                <GithubIcon className="w-4 h-4" /> GitHub
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="gap-2" asChild>
              <Link href="/resume.pdf" target="_blank">
                <FileText className="w-4 h-4" /> Resume <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
