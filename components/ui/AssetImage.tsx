"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabel?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a generated asset via next/image, and swaps to a CSS placeholder
 * if the file hasn't been generated yet — so a missing asset never breaks
 * the layout.
 */
export default function AssetImage({
  src,
  alt,
  className,
  fallbackClassName,
  fallbackLabel,
  fill = true,
  sizes,
  priority,
}: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-grid bg-white",
          fallbackClassName ?? className
        )}
      >
        <span className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted shadow-subtle">
          {fallbackLabel ?? "Asset pending"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
