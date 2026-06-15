"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const topics = [
  "Spring Security JWT",
  "Multi-tenant Architecture",
  "PostgreSQL Performance",
  "Docker Deployment",
  "DSA in Java",
  "Cybersecurity Fundamentals",
];

export function LearningJourney() {
  return (
    <section className="py-20 bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Learning Journey</h2>
          <p className="text-muted-foreground max-w-xl">
            My continuous effort to master advanced engineering concepts. Here's what I've been studying recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-transparent bg-white/5 hover:bg-white/10 transition-colors h-full flex items-center group">
                <CardHeader className="flex flex-row items-center gap-4 py-6 w-full">
                  <div className="p-2 rounded-full bg-[var(--color-coral)]/10 text-[var(--color-coral)] group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-medium">
                    {topic}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
