"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { projects, PROJECT_FILTERS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface WorkSectionProps {
  showAll?: boolean;
}

export default function WorkSection({ showAll = false }: WorkSectionProps) {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return showAll ? list : list.slice(0, 6);
  }, [filter, showAll]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SectionHeading eyebrow="Our Work" title="Some of Our Recent Builds" />

        <div className="mt-10 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={cn(
                "focus-ring rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                filter === tab
                  ? "border-foreground bg-foreground text-white"
                  : "border-border bg-white text-muted hover:border-accent hover:text-accent"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
