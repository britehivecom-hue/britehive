import { useState } from "react";
import { GRAPHIC_WORK } from "@/lib/site";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function WorkGrid() {
  const [active, setActive] = useState<(typeof GRAPHIC_WORK)[number] | null>(
    null,
  );

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GRAPHIC_WORK.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            className="group overflow-hidden rounded-lg border border-border bg-card text-left shadow-[var(--shadow-lift)] transition-transform duration-200 hover:-translate-y-1"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="aspect-poster overflow-hidden bg-ink">
              <img
                src={item.src}
                alt={`${item.title} — ${item.kind}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 px-4 py-4">
              <p className="text-xs uppercase tracking-widest text-primary">
                {item.kind}
              </p>
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="text-sm text-muted">{item.note}</p>
            </div>
          </button>
        ))}
      </div>
      <Dialog open={Boolean(active)} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-h-svh max-w-3xl overflow-y-auto border-border bg-card p-0">
          {active ? (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <img
                src={active.src}
                alt={active.title}
                className="w-full object-contain"
              />
              <div className="space-y-1 px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-primary">
                  {active.kind}
                </p>
                <p className="font-display text-xl">{active.title}</p>
                <p className="text-sm text-muted">{active.note}</p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
