import { cn } from "@/lib/utils";

interface AvatarStackProps {
  count?: number;
  label: string;
  dark?: boolean;
  className?: string;
}

const COLORS = ["bg-blue-200", "bg-violet-200", "bg-emerald-200", "bg-amber-200"];

export default function AvatarStack({ count = 4, label, dark = false, className }: AvatarStackProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-2.5">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-8 w-8 rounded-full border-2",
              dark ? "border-foreground" : "border-white",
              COLORS[i % COLORS.length]
            )}
          />
        ))}
      </div>
      <span className={cn("text-sm font-medium", dark ? "text-white/80" : "text-muted")}>
        {label}
      </span>
    </div>
  );
}
