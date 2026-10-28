import { createFileRoute } from "@tanstack/react-router";
import { BrandCards } from "@/components/site/brand-cards";
import {
  AtelierBookingMock,
  BookingMock,
  CafeSmmMock,
  JobTrackMock,
  LeadDeskMock,
  MarketingMock,
  ShopFlowMock,
  SmmMock,
  VesperMarketingMock,
} from "@/components/site/system-mocks";
import { CONSULT_FORM } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/systems")({ component: SystemsPage });

function SystemsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6">
      <header className="rise max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          Productised systems
        </p>
        <h1 className="font-display text-4xl sm:text-5xl">
          Ops, booking, social, strategy
        </h1>
        <p className="text-muted">
          Named studio prototypes for Australia, the UAE, and Canada. We swap
          in your services and hours. We do not pretend they are SAP.
        </p>
      </header>

      <article className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary">01 · Ops</p>
          <h2 className="font-display text-3xl">Kite & Co · ShopFlow</h2>
          <p className="text-muted">
            Gift retail in Vancouver. Customers persist, orders decrement
            stock, cancellations restock once.
          </p>
        </div>
        <ShopFlowMock />
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <JobTrackMock />
        <div className="space-y-3 lg:order-first">
          <p className="text-xs uppercase tracking-widest text-primary">02 · Ops</p>
          <h2 className="font-display text-3xl">Arc HVAC · JobTrack</h2>
          <p className="text-muted">
            Brisbane field jobs. Request, scheduled, done — quotes stop dying
            in the group chat.
          </p>
        </div>
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <LeadDeskMock />
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary">03 · Ops</p>
          <h2 className="font-display text-3xl">Harbour Home · LeadDesk</h2>
          <p className="text-muted">
            Toronto renovations. New / warm / won, suburb on every card.
          </p>
        </div>
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary">
            04 · Booking
          </p>
          <h2 className="font-display text-3xl">Glow Studio</h2>
          <p className="text-muted">
            Dubai Marina salon. Duration-aware slots. Friday hours respected.
          </p>
        </div>
        <BookingMock />
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <AtelierBookingMock />
        <div className="space-y-3 lg:order-first">
          <p className="text-xs uppercase tracking-widest text-primary">
            05 · Booking
          </p>
          <h2 className="font-display text-3xl">Atelier Nine</h2>
          <p className="text-muted">
            Fitzroy colour house. Chair, stylist, keratin — one mobile flow.
          </p>
        </div>
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary">06 · SMM</p>
          <h2 className="font-display text-3xl">Northside Dental</h2>
          <p className="text-muted">
            Toronto clinic grid. Reels and stories that point at the consult.
          </p>
        </div>
        <SmmMock />
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <CafeSmmMock />
        <div className="space-y-3 lg:order-first">
          <p className="text-xs uppercase tracking-widest text-primary">07 · SMM</p>
          <h2 className="font-display text-3xl">Cedar & Salt</h2>
          <p className="text-muted">
            Sydney café. Fourteen days of stills, pastry drops, table waitlist.
          </p>
        </div>
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary">
            08 · Strategy
          </p>
          <h2 className="font-display text-3xl">Lumen Dental</h2>
          <p className="text-muted">
            Calgary. Thirty days, one offer, one CTA. Marketing as a spine,
            not a moodboard.
          </p>
        </div>
        <MarketingMock />
      </article>

      <article className="grid gap-8 lg:grid-cols-2">
        <VesperMarketingMock />
        <div className="space-y-3 lg:order-first">
          <p className="text-xs uppercase tracking-widest text-primary">
            09 · Strategy
          </p>
          <h2 className="font-display text-3xl">Vesper Interiors</h2>
          <p className="text-muted">
            Dubai Design District showroom launch. Private consult as the
            product.
          </p>
        </div>
      </article>

      <div>
        <h2 className="mb-6 font-display text-2xl">All studio brands</h2>
        <BrandCards />
      </div>

      <div className="rounded-xl border border-border bg-card px-6 py-10 text-center">
        <h2 className="font-display text-2xl">Want one under your name?</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
          We start from these rooms and swap in your services, hours, and
          language. Scope stays small so the thing actually ships.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href={CONSULT_FORM} target="_blank" rel="noreferrer">
              Free consultation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
