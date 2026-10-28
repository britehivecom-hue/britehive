import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "@/components/site/work-grid";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="rise max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          Graphic design
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">The wall</h1>
        <p className="text-muted">
          Campaign posters, product stills, and marks made in-studio. This
          gallery is the real graphic work — no filler boards, no stock
          mockups swapped in for padding.
        </p>
      </div>
      <div className="mt-10">
        <WorkGrid />
      </div>
    </div>
  );
}
