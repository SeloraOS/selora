import { Quote } from "lucide-react";
import AssetImage from "@/components/ui/AssetImage";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import GradientBlob from "@/components/ui/GradientBlob";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <GradientBlob color="emerald" className="-right-40 top-1/3" />
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <SplitHeading
          eyebrow="Client Stories"
          title={
            <>
              Trusted by Businesses That <span className="text-accent">Build the Future</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-card border border-border bg-white p-7 shadow-subtle">
                <Quote className="h-6 w-6 text-accent/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
                    <AssetImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fallbackLabel=""
                      fallbackClassName="bg-accent/10"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
