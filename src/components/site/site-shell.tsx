import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { CONSULT_FORM, EMAIL, INSTAGRAM } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HiveMark } from "@/components/hive-mark";
import { Button } from "@/components/ui/button";
import { MarketFlags } from "./flags";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/shoots", label: "Product shoot" },
  { to: "/ai", label: "AI apps" },
  { to: "/systems", label: "Systems" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <HiveMark className="h-8 w-7" />
            <span className="font-display text-lg font-bold tracking-tight">
              Brite<span className="text-primary">hive</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground",
                    active && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={CONSULT_FORM} target="_blank" rel="noreferrer">
                Free consultation
              </a>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md text-foreground lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-3 py-3 text-base text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={CONSULT_FORM}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-3 py-3 text-center font-medium text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                Free consultation
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-border bg-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HiveMark className="h-7 w-6" />
              <span className="font-display text-lg font-bold">Britehive</span>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Bookable brands for service businesses. Design that holds, systems
              that take the next client.
            </p>
            <MarketFlags />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-subtle">Studio</p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-subtle">Talk</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-muted hover:text-primary"
                >
                  <Mail className="size-4" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-primary"
                >
                  <Instagram className="size-4" />
                  @britehive.co
                </a>
              </li>
              <li>
                <a
                  href={CONSULT_FORM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary"
                >
                  Book a free consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70 py-5 text-center text-xs text-subtle">
          © {new Date().getFullYear()} Britehive. Built for operators who want to look
          expensive and actually get booked.
        </div>
      </footer>
    </div>
  );
}
