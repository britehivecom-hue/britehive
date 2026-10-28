import { createFileRoute } from "@tanstack/react-router";
import { AI_APPS } from "@/lib/site";

export const Route = createFileRoute("/ai")({ component: AiPage });

function AiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <header className="rise max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          AI applications
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">
          Tools we shipped with Gemini.
        </h1>
        <p className="text-muted">
          Product work from the studio — not pitch slides. Each project has a
          written report. Sentinel also has a live demo.
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {AI_APPS.map((app) => (
          <article
            key={app.id}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <p className="text-xs uppercase tracking-widest text-primary">
              {app.tag}
            </p>
            <h2 className="mt-2 font-display text-3xl">{app.name}</h2>
            <p className="mt-3 max-w-2xl text-muted">{app.line}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {app.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {app.points.map((p) => (
                <li
                  key={p}
                  className="rounded-md bg-card-elevated px-3 py-3 text-sm"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={app.report}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                download
              >
                Project report
              </a>
              {app.demo ? (
                <a
                  href={app.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium"
                >
                  Live demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
