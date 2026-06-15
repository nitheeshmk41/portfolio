"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Provider", "REST Integration"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Linux", "VPS Deployment", "Git", "Nginx"],
  },
  {
    title: "Other",
    skills: ["System Design", "Cybersecurity", "DSA", "SaaS Architecture"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full group hover:border-[var(--color-coral)]/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="group-hover:bg-white/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
