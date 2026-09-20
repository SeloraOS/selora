"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AssetImage from "@/components/ui/AssetImage";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="focus-ring group block overflow-hidden rounded-card border border-border bg-white shadow-subtle"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <AssetImage
            src={project.asset}
            alt={`${project.name} preview`}
            fallbackLabel="Project asset pending"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
