import { cn } from "@/lib/utils";

export function HiveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={cn("text-primary", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 22 L32 6 L56 22 L48 22 L32 12 L16 22 Z" />
      <path d="M10 36 L32 20 L54 36 L46 36 L32 26 L18 36 Z" />
      <path d="M14 50 L32 36 L50 50 L42 50 L32 42 L22 50 Z" />
      <path d="M24 54 L32 48 L40 54 L40 64 L32 70 L24 64 Z" />
    </svg>
  );
}
