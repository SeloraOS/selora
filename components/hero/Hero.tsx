"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";
import Eyebrow from "@/components/ui/Eyebrow";
import GradientBlob from "@/components/ui/GradientBlob";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HERO_METRICS } from "@/lib/constants";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />
      <GradientBlob color="violet" className="-left-32 -top-32" />
      <GradientBlob color="blue" className="-right-32 top-1/4" />

      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow icon={Zap}>SeloraOS • Enterprise Software & Systems</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
          >
            Software that Simplifies Today and{" "}
            <span className="text-accent">Scales Tomorrow</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            SeloraOS designs and builds bespoke enterprise software solutions —
            custom CRM platforms, cloud ERP systems, workflow automation, and
            scalable web platforms backed by dedicated 24/7 technical support.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.3} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="/contact" variant="primary">
              Start a Project →
            </MagneticButton>
            <MagneticButton href="/work" variant="secondary">
              See Our Work
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="mt-14 grid grid-cols-3 gap-6"
          >
            {HERO_METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroDashboard />
      </div>
    </section>
  );
}
