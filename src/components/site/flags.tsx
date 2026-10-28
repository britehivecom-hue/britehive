import { cn } from "@/lib/utils";

const wrap = "overflow-hidden rounded-xs shadow-[0_0_0_1px_rgb(244_247_246_/_0.12)]";

export function FlagAU({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={cn(wrap, className)} aria-hidden>
      <rect width="36" height="24" fill="#012169" />
      <path d="M0 0 L16 10.5 V0 H0 Z" fill="#012169" />
      <path d="M0 0 L18 12 L0 12 Z" fill="#012169" />
      <rect width="18" height="12" fill="#012169" />
      <path d="M0 0 L18 12 M18 0 L0 12" stroke="#fff" strokeWidth="2.2" />
      <path d="M0 0 L18 12 M18 0 L0 12" stroke="#C8102E" strokeWidth="1.1" />
      <rect x="7.2" width="3.6" height="12" fill="#fff" />
      <rect y="4.4" width="18" height="3.2" fill="#fff" />
      <rect x="8" width="2" height="12" fill="#C8102E" />
      <rect y="5.2" width="18" height="1.6" fill="#C8102E" />
      <circle cx="26" cy="15" r="1.3" fill="#fff" />
      <circle cx="30.5" cy="8.5" r="0.9" fill="#fff" />
      <circle cx="22.5" cy="9" r="0.7" fill="#fff" />
      <circle cx="32" cy="16.5" r="0.7" fill="#fff" />
      <circle cx="24" cy="19" r="0.55" fill="#fff" />
    </svg>
  );
}

export function FlagAE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={cn(wrap, className)} aria-hidden>
      <rect width="36" height="8" fill="#00732F" />
      <rect y="8" width="36" height="8" fill="#fff" />
      <rect y="16" width="36" height="8" fill="#000" />
      <rect width="10" height="24" fill="#FF0000" />
    </svg>
  );
}

export function FlagCA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={cn(wrap, className)} aria-hidden>
      <rect width="36" height="24" fill="#fff" />
      <rect width="9" height="24" fill="#D52B1E" />
      <rect x="27" width="9" height="24" fill="#D52B1E" />
      <path
        fill="#D52B1E"
        d="M18 5.2l1.1 3.2 3.4-.2-2.7 2.2 1 3.2L18 11.8l-2.8 1.8 1-3.2-2.7-2.2 3.4.2Z"
      />
    </svg>
  );
}

export function MarketFlags({ className }: { className?: string }) {
  const items = [
    { Flag: FlagAU, label: "Australia" },
    { Flag: FlagAE, label: "UAE" },
    { Flag: FlagCA, label: "Canada" },
  ];
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map(({ Flag, label }) => (
        <li
          key={label}
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted"
        >
          <Flag className="h-4 w-6" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
