import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Normalizes an asset path served from /public/assets. Components pair this
 * with <AssetImage>, which falls back to a CSS placeholder on load error so
 * a missing generated asset never breaks the layout.
 */
export function getAsset(relativePath: string): string {
  return relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
}
