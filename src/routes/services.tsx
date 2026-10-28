import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CONSULT_FORM, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <header className="rise max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          What we take on
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">
          Six rooms. One studio.
        </h1>
        <p className="text-muted">
          We do not sell a menu of forty extras. If it does not make you look
          more expensive or easier to book, it is out of scope.
        </p>
      </header>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            className="rounded-lg border border-border bg-card p-6"
          >
            <p className="text-xs text-primary">0{i + 1}</p>
            <h2 className="mt-2 font-display text-2xl">{s.title}</h2>
            <p className="mt-3 text-sm text-muted">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <a href={CONSULT_FORM} target="_blank" rel="noreferrer">
            Free consultation
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link to="/systems">See systems</Link>
        </Button>
      </div>
    </div>
  );
}
