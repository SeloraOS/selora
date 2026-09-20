import { cn } from "@/lib/utils";

interface AnnotationProps {
  text: string;
  className?: string;
  flip?: boolean;
}

/**
 * A hand-drawn-style caption with a small curved arrow, used to add an
 * editorial, human touch next to product screenshots.
 */
export default function Annotation({ text, className, flip = false }: AnnotationProps) {
  return (
    <div className={cn("pointer-events-none flex items-end gap-2", className)}>
      <svg
        width="46"
        height="40"
        viewBox="0 0 46 40"
        fill="none"
        aria-hidden
        className={cn("shrink-0 text-muted/70", flip && "-scale-x-100")}
      >
        <path
          d="M4 4C6 18 16 30 40 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M31 27L40 32L36 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-hand text-lg leading-tight text-muted/80">{text}</p>
    </div>
  );
}
