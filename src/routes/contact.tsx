import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { CONSULT_EMBED, CONSULT_FORM, EMAIL, INSTAGRAM } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { MarketFlags } from "@/components/site/flags";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <header className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          Contact
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">
          Free consultation
        </h1>
        <p className="text-muted">
          Use the form. If you prefer a direct line, mail or Instagram both
          reach the studio.
        </p>
        <MarketFlags />
      </header>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href={CONSULT_FORM} target="_blank" rel="noreferrer">
            Open form in a new tab
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={`mailto:${EMAIL}`}>
            <Mail className="size-4" />
            {EMAIL}
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            <Instagram className="size-4" />
            Instagram
          </a>
        </Button>
      </div>

      <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card">
        <iframe
          title="Britehive free consultation form"
          src={CONSULT_EMBED}
          className="h-form w-full bg-foreground"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
