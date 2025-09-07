import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefix static asset paths with the current base pathname so assets work under subpaths like /portfolio/
export function withBase(pathname: string): string {
  if (!pathname) return pathname
  // If it's an absolute URL or already has protocol, return as-is
  if (/^https?:\/\//i.test(pathname)) return pathname
  // Ensure leading slash
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
  // Vite injects import.meta.env.BASE_URL at build time (e.g., "/portfolio/")
  const base: string = import.meta.env.BASE_URL
  // Avoid double slashes when joining
  return `${base}`.replace(/\/$/, "") + normalized
}
