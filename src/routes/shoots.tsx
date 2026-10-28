import { createFileRoute } from "@tanstack/react-router";
import { PRODUCT_SHOOTS } from "@/lib/site";

export const Route = createFileRoute("/shoots")({ component: ShootsPage });

function ShootsPage() {
  const films = PRODUCT_SHOOTS.filter((s) => s.kind === "video");
  const stills = PRODUCT_SHOOTS.filter((s) => s.kind === "still");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <header className="rise max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          Product shoot
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">
          Moving product. Quiet studio.
        </h1>
        <p className="text-muted">
          Short films and stills for fashion and jewellery. Same lighting
          language as the posters — dark ground, one source, the object doing
          the talking.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Films</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {films.map((item) => (
            <figure key={item.id} className="space-y-3">
              <video
                src={item.src}
                controls
                playsInline
                muted
                loop
                preload="metadata"
                className="aspect-reel w-full rounded-lg border border-border bg-ink object-cover"
              />
              <figcaption>
                <p className="font-display text-lg">{item.title}</p>
                <p className="text-sm text-muted">{item.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl">Stills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {stills.map((item) => (
            <figure key={item.id} className="space-y-3">
              <img
                src={item.src}
                alt={item.title}
                className="aspect-square w-full rounded-lg border border-border object-cover"
              />
              <figcaption>
                <p className="font-display text-lg">{item.title}</p>
                <p className="text-sm text-muted">{item.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
