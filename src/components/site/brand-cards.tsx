import { STUDIO_BRANDS } from "@/lib/site";

export function BrandCards({
  lanes,
}: {
  lanes?: ReadonlyArray<(typeof STUDIO_BRANDS)[number]["lane"]>;
}) {
  const items = lanes
    ? STUDIO_BRANDS.filter((b) => lanes.includes(b.lane))
    : STUDIO_BRANDS;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
        <article
          key={b.id}
          className="rounded-lg border border-border bg-card p-5"
        >
          <p className="text-xs uppercase tracking-widest text-primary">
            {b.lane}
          </p>
          <h3 className="mt-2 font-display text-xl">{b.name}</h3>
          <p className="mt-1 text-xs text-subtle">{b.market}</p>
          <p className="mt-3 text-sm text-muted">{b.line}</p>
        </article>
      ))}
    </div>
  );
}
