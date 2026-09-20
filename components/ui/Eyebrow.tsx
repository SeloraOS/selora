import { Sparkle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: string;
  icon?: LucideIcon;
  className?: string;
}

export default function Eyebrow({ children, icon: Icon = Sparkle, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent uppercase",
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {children}
    </span>
  );
}
