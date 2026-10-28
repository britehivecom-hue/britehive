import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketFlags } from "@/components/site/flags";
import { BrandCards } from "@/components/site/brand-cards";
import {
  AtelierBookingMock,
  BookingMock,
  CafeSmmMock,
  JobTrackMock,
  MarketingMock,
  ShopFlowMock,
} from "@/components/site/system-mocks";
import { AI_APPS, CONSULT_FORM, GRAPHIC_WORK, PRODUCT_SHOOTS, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-primary/10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="rise space-y-6">
            <MarketFlags />
            <p className="text-xs uppercase tracking-widest text-primary">
              Studio · Australia · UAE · Canada
            </p>
            <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
              Brands that book.
              <span className="block text-primary">Not just look busy.</span>
            </h1>
            <p className="max-w-lg text-lg text-muted">
              Britehive is a studio for service businesses. We design the face of
              the company — then we wire the system that actually takes the
              appointment, the order, the lead.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={CONSULT_FORM} target="_blank" rel="noreferrer">
                  Free consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/work">See the work</Link>
              </Button>
            </div>
          </div>
          <div className="rise-2 mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-xl border border-border bg-ink shadow-[var(--shadow-lift)]">
              <img
                src="/brand/logo.jpeg"
                alt="Britehive logo — gold hive mark on deep teal"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6">
          {[
            ["Design that holds", "Marks and posters that still look expensive on a phone."],
            ["Systems that take the yes", "Booking, ops, and leads — small rooms, actually live."],
            ["A sprint, not a retainer fog", "Named scope. Preview link. Handover you can use."],
          ].map(([t, b]) => (
            <div key={t}>
              <h2 className="font-display text-xl">{t}</h2>
              <p className="mt-2 text-sm text-muted">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">
              Graphic design
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">Selected posters & marks</h2>
          </div>
          <Link
            to="/work"
            className="hidden items-center gap-1 text-sm text-primary sm:inline-flex"
          >
            Full gallery <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {GRAPHIC_WORK.slice(0, 8).map((item) => (
            <Link
              key={item.id}
              to="/work"
              className="group overflow-hidden rounded-md border border-border"
            >
              <img
                src={item.src}
                alt={item.title}
                className="aspect-poster w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">
                Product shoot
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Films and stills
              </h2>
            </div>
            <Link
              to="/shoots"
              className="hidden items-center gap-1 text-sm text-primary sm:inline-flex"
            >
              All shoots <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {PRODUCT_SHOOTS.filter((s) => s.kind === "video").map((item) => (
              <Link
                key={item.id}
                to="/shoots"
                className="overflow-hidden rounded-md border border-border"
              >
                <video
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="aspect-reel w-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">
              AI applications
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">Shipped tools</h2>
          </div>
          <Link
            to="/ai"
            className="hidden items-center gap-1 text-sm text-primary sm:inline-flex"
          >
            Both projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {AI_APPS.map((app) => (
            <Link
              key={app.id}
              to="/ai"
              className="rounded-lg border border-border bg-card p-6"
            >
              <p className="text-xs uppercase tracking-widest text-primary">
                {app.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl">{app.name}</h3>
              <p className="mt-2 text-sm text-muted">{app.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-widest text-primary">
              Booking · ops · social · strategy
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Working rooms. Named brands.
            </h2>
            <p className="text-muted">
              Studio prototypes for operators in Australia, the UAE, and Canada.
              We customise the brand and the numbers — we do not invent a full ERP.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <ShopFlowMock />
            <BookingMock />
            <AtelierBookingMock />
            <JobTrackMock />
            <CafeSmmMock />
            <MarketingMock />
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/systems">Open the systems room</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary">
            Studio brands
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            Fictional operators we built against
          </h2>
          <p className="mt-3 text-muted">
            These are named prototypes — not client testimonials. They show how
            booking, social, ops, and strategy look when the brand is specific.
          </p>
        </div>
        <BrandCards />
      </section>

      <section className="bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-widest text-primary">Rooms</p>
          <h2 className="font-display text-3xl sm:text-4xl">What we take on</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.slug}
                className="rounded-lg border border-border bg-card p-5"
              >
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/services">All services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-widest text-primary">Process</p>
        <h2 className="font-display text-3xl sm:text-4xl">Four gates</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Brief", "Goals, examples, the one job the system must do."],
            ["02", "Build", "Brand plus a live room in a named sprint."],
            ["03", "Preview", "You click through the link. We fix what breaks."],
            ["04", "Handover", "Files, app link, a short support window."],
          ].map(([n, t, b]) => (
            <li key={n} className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs text-primary">{n}</p>
              <p className="mt-2 font-display text-xl">{t}</p>
              <p className="mt-2 text-sm text-muted">{b}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl sm:text-5xl">
          A free consult. No pitch theatre.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Tell us the business, the market, and the one thing that is stuck —
          brand, bookings, or both. We reply with a clear next step.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href={CONSULT_FORM} target="_blank" rel="noreferrer">
              Open consultation form
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
