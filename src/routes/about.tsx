import { createFileRoute } from "@tanstack/react-router";
import { MarketFlags } from "@/components/site/flags";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs uppercase tracking-widest text-primary">About</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">
        A hive, not a holding company.
      </h1>
      <div className="mt-8 space-y-5 text-muted">
        <p>
          Britehive started as a design practice and refused to stay there.
          Too many service businesses already had a decent product and a quiet
          Instagram. The gap was never “more posts.” It was a spine: a mark
          that holds, a grid that matches the price, and a small system that
          takes the next yes.
        </p>
        <p>
          We work with clinics, salons, shops, tutors, and operators across
          Australia, the UAE, and Canada. Same craft, different street. We
          write in the language of the room we are hired into — not a generic
          international brochure voice.
        </p>
        <p>
          The studio is deliberately small. That is the point. You get a
          named sprint, a live preview, and a handover you can actually use
          — files, a link, a support window. We do not park a junior in your
          Slack forever.
        </p>
        <p>
          If an agency promises full ERP, unlimited creative, and a sales
          team in the same breath, that is a different animal. We build the
          bookable layer: identity, posters, booking or ops rooms, and the
          offer that makes the first ten conversations less awkward.
        </p>
      </div>
      <div className="mt-10">
        <MarketFlags />
      </div>
    </div>
  );
}
