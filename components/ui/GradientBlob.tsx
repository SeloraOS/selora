import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  color?: "blue" | "violet" | "emerald";
}

const COLORS = {
  blue: "from-blue-400/25 via-blue-300/10",
  violet: "from-violet-400/20 via-violet-300/10",
  emerald: "from-emerald-400/20 via-emerald-300/10",
};

export default function GradientBlob({ className, color = "blue" }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br to-transparent blur-3xl motion-safe:animate-blob-float",
        COLORS[color],
        className
      )}
    />
  );
}
