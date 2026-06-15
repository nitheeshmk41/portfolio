"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2025",
    title: "B.Sc Information Technology",
    description: "Graduated with a strong foundation in computer science principles and programming.",
    active: false,
  },
  {
    year: "2025",
    title: "Joined MCA @ PSG Tech",
    description: "Started master's degree focusing on advanced software engineering and system design.",
    active: false,
  },
  {
    year: "2026",
    title: "Started GMMX",
    description: "Began building a multi-tenant Gym Management SaaS for the Indian market.",
    active: true,
  },
  {
    year: "Future",
    title: "Software Engineer",
    description: "Looking to join an innovative engineering team while growing GMMX.",
    active: false,
    future: true,
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Journey</h2>
          <p className="text-muted-foreground">My academic and professional timeline.</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border glass shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${item.active ? 'border-[var(--color-coral)] shadow-[0_0_15px_rgba(255,92,115,0.3)] bg-[var(--color-coral)]/10 text-[var(--color-coral)]' : 'border-white/10 text-muted-foreground'}`}>
                <span className="text-xs font-bold">{item.year === "Future" ? "∞" : item.year.slice(-2)}</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl glass-panel relative hover:border-[var(--color-coral)]/30 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className={`text-sm font-bold ${item.active ? 'text-[var(--color-coral)]' : item.future ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {item.year}
                  </span>
                  <h3 className={`text-xl font-bold ${item.future ? 'text-zinc-400' : 'text-white'}`}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
