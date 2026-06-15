"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LayoutDashboard, Target, Lightbulb, Network, Clock } from "lucide-react";

export function FeaturedProject() {
  return (
    <section id="gmmx" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-coral)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-12 text-center"
        >
          <Badge variant="coral" className="mb-4">Featured Project</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">GMMX</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive Gym Management SaaS designed specifically for the Indian fitness industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="border-[var(--color-coral)]/20 shadow-[0_0_30px_rgba(255,92,115,0.1)] relative overflow-hidden group h-full">
              <div className="h-full min-h-[300px] bg-zinc-900 p-1 flex items-center justify-center">
                 {/* Architecture / Screenshot Placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800" />
                 <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-white/50">
                    <LayoutDashboard className="w-16 h-16 opacity-50" />
                    <span className="font-mono text-sm tracking-widest uppercase">GMMX Dashboard</span>
                 </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-zinc-300">
                  <Target className="w-4 h-4 text-[var(--color-coral)]" /> Problem
                </h3>
                <p className="text-muted-foreground bg-white/5 p-4 rounded-lg text-sm">
                  Small and medium gyms struggle with manual member management, outdated excel sheets, and poor communication.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-zinc-300">
                  <Lightbulb className="w-4 h-4 text-[var(--color-coral)]" /> Solution
                </h3>
                <p className="text-muted-foreground bg-white/5 p-4 rounded-lg text-sm">
                  A modern, multi-tenant SaaS platform unifying payments, attendance, and member progress into one simple dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-zinc-300">
                  <Network className="w-4 h-4 text-[var(--color-coral)]" /> Architecture
                </h3>
                <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-lg text-sm font-mono">
                  <div className="flex items-center gap-2"><span className="text-[var(--color-coral)]">Frontend:</span> Next.js 15 App Router</div>
                  <div className="pl-4 border-l border-zinc-700 ml-2 text-zinc-500 text-xs">↓ REST API</div>
                  <div className="flex items-center gap-2"><span className="text-[var(--color-coral)]">Backend:</span> Spring Boot 3</div>
                  <div className="pl-4 border-l border-zinc-700 ml-2 text-zinc-500 text-xs">↓ Isolated Schemas</div>
                  <div className="flex items-center gap-2"><span className="text-[var(--color-coral)]">Database:</span> PostgreSQL</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-zinc-300">
                  <Clock className="w-4 h-4 text-[var(--color-coral)]" /> Status
                </h3>
                <div className="bg-[var(--color-coral)]/10 text-[var(--color-coral)] px-4 py-2 rounded-lg font-semibold w-fit border border-[var(--color-coral)]/20">
                  In Active Development
                </div>
              </div>
            </div>

            <Button variant="coral" className="gap-2 w-full mt-4">
              View Case Study <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
