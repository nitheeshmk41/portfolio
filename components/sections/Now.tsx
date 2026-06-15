"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Laptop, Activity, Code, Shield } from "lucide-react";

const nowItems = [
  { text: "MCA @ PSG Tech", icon: BookOpen },
  { text: "Building GMMX", icon: Laptop, highlight: true },
  { text: "Training for Half Marathon", icon: Activity },
  { text: "Learning DSA", icon: Code },
  { text: "Exploring Cybersecurity", icon: Shield },
];

export function Now() {
  return (
    <section id="now" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight">Currently</h2>
          <p className="text-muted-foreground mt-2">What I'm focused on right now.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-panel overflow-hidden relative">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-coral)]/10 rounded-full blur-[80px]" />
            <CardContent className="p-8 relative z-10">
              <div className="flex flex-col gap-6">
                {nowItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <div className={`p-2 rounded-lg ${item.highlight ? 'bg-[var(--color-coral)]/20 text-[var(--color-coral)]' : 'bg-white/5 text-muted-foreground'}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className={item.highlight ? 'text-white' : 'text-zinc-300'}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
