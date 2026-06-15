"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FounderDashboard() {
  return (
    <section id="founder-dashboard" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Founder Dashboard</h2>
          <p className="text-muted-foreground">Behind the scenes of building GMMX.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-panel h-full border-t-4 border-t-[var(--color-coral)]">
              <CardContent className="p-6">
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Current Stage</h3>
                <div className="text-2xl font-bold text-white mb-2">MVP Development</div>
                <p className="text-sm text-zinc-400">
                  Actively building core features, finalizing architecture, and preparing for initial beta testing with early adopters.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-panel h-full border-t-4 border-t-zinc-600">
              <CardContent className="p-6">
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Target Market</h3>
                <div className="text-2xl font-bold text-white mb-2">Small & Medium Gyms</div>
                <p className="text-sm text-zinc-400">
                  Focusing on the untapped tier-2 and tier-3 Indian fitness market, providing enterprise tools at affordable pricing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="glass-panel h-full border-t-4 border-t-zinc-600">
              <CardContent className="p-6">
                <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <p className="text-sm text-zinc-400">
                  A resilient, scalable architecture designed for multi-tenant isolation and high performance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Card className="bg-gradient-to-br from-zinc-900 to-black border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--color-coral)]/5 mix-blend-overlay" />
              <CardContent className="p-8 md:p-12 relative z-10 text-center">
                <h3 className="text-sm font-mono text-[var(--color-coral)] mb-4 uppercase tracking-widest">Vision</h3>
                <div className="text-2xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  To build the Operating System for Fitness Businesses.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
