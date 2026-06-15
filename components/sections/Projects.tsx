"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const projects = [
  {
    title: "Hospital Management System",
    description: "A complete digitized solution for managing hospital records, appointments, and billing.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "Blind Coding Platform",
    description: "An innovative coding platform where users write code without seeing it until execution. Built for tech symposiums.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    live: "#"
  },
  {
    title: "PSGMX Leaderboard",
    description: "A real-time competitive programming leaderboard for students at PSG Tech.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    github: "#",
    live: "#"
  },
  {
    title: "Fitness Tracker App",
    description: "A minimal mobile app for tracking daily workouts and macros.",
    tech: ["Flutter", "Firebase"],
    github: "#",
    live: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Other Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my academic and side projects alongside GMMX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:shadow-[0_0_20px_rgba(255,92,115,0.05)] transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-[var(--color-coral)] transition-colors">{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-white/10 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="ghost" size="sm" asChild className="gap-2">
                    <Link href={project.github}>
                      <GithubIcon className="w-4 h-4" /> Code
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="gap-2">
                    <Link href={project.live}>
                      <ExternalLink className="w-4 h-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
