"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";
import AssetImage from "@/components/ui/AssetImage";
import MagneticButton from "@/components/ui/MagneticButton";
import type { Service } from "@/types";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (service) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-2xl grid-cols-1 gap-0 overflow-hidden rounded-card border border-border bg-white shadow-elevated sm:grid-cols-2"
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-subtle"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-48 sm:h-full">
              <AssetImage
                src={service.asset}
                alt={`${service.title} illustration`}
                fallbackLabel="Service asset pending"
              />
            </div>

            <div className="p-7">
              <span className="text-xs font-semibold text-muted">{service.index}</span>
              <h3 id="service-modal-title" className="mt-2 text-2xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.detail}</p>

              <ul className="mt-5 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <MagneticButton href="/contact" variant="primary">
                  Start a Project →
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
