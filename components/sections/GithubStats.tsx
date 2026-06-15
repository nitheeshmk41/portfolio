"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FolderGit2, Boxes, Wrench, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GithubStats() {
  return (
    <section className="py-20 bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Commits", value: "1500+", icon: GithubIcon },
              { label: "Repositories", value: "50+", icon: FolderGit2 },
              { label: "Projects", value: "20+", icon: Boxes },
              { label: "Tech Used Daily", value: "5+", icon: Wrench },
            ].map((stat, idx) => (
              <Card key={idx} className="bg-white/5 border-none h-full hover:bg-white/10 transition-colors">
                <CardContent className="p-6 flex flex-col gap-2">
                  <stat.icon className="w-5 h-5 text-[var(--color-coral)] mb-1" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Currently Building */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-[var(--color-coral)]/30 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-coral)]/10 rounded-full blur-2xl" />
              <CardContent className="p-8 h-full flex flex-col justify-center relative z-10">
                <h3 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-4">
                  Currently Building
                </h3>
                <h2 className="text-3xl font-bold text-white mb-2">GMMX SaaS Platform</h2>
                <p className="text-muted-foreground mb-8">
                  Building the operating system for fitness businesses in India.
                </p>
                <Button variant="coral" className="w-fit gap-2 group" asChild>
                  <Link href="#gmmx">
                    See what's cooking <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
