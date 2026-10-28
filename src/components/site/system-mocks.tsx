export function ShopFlowMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-4 py-3">
        <div>
          <p className="font-display text-sm">Kite & Co · ShopFlow</p>
          <p className="text-xs text-muted">Vancouver · customers · orders · stock</p>
        </div>
        <span className="rounded-full bg-primary/15 px-2 py-1 text-xs text-primary">
          Live demo
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4">
        {[
          ["Customers", "48"],
          ["Open orders", "6"],
          ["Low stock", "3"],
          ["Settled", "CAD 12.4k"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-md bg-card-elevated px-3 py-3">
            <p className="text-xs text-muted">{l}</p>
            <p className="font-display text-xl">{v}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2 px-4 pb-4">
        {[
          ["ORD-1044", "Ayesha · Gift Box", "new"],
          ["ORD-1043", "Omar · Tote + Mug", "processing"],
          ["ORD-1041", "Sara · Notebook", "done"],
        ].map(([id, who, st]) => (
          <div
            key={id}
            className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm"
          >
            <span>
              <span className="text-muted">{id}</span> · {who}
            </span>
            <span className="text-xs uppercase tracking-wider text-primary">
              {st}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BookingMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-card-elevated px-4 py-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          Glow Studio
        </p>
        <p className="font-display text-2xl">Book your glow</p>
        <p className="text-sm text-muted">Dubai Marina · Sat–Thu 10–20</p>
      </div>
      <div className="grid gap-2 p-4 sm:grid-cols-2">
        {[
          ["Hydra Glow", "75m · AED 320"],
          ["Classic Facial", "60m · AED 220"],
          ["Gel Manicure", "45m · AED 140"],
          ["Keratin Smooth", "120m · AED 550"],
        ].map(([n, m]) => (
          <div key={n} className="rounded-md border border-border px-3 py-3">
            <p className="text-sm font-medium">{n}</p>
            <p className="text-xs text-muted">{m}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {["10:00", "11:30", "13:00", "15:30", "17:00"].map((t) => (
          <span
            key={t}
            className="rounded-md border border-border px-3 py-2 text-xs"
          >
            {t}
          </span>
        ))}
        <span className="rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground">
          16:00 held
        </span>
      </div>
    </div>
  );
}

export function AtelierBookingMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-card-elevated px-4 py-4">
        <p className="text-xs uppercase tracking-widest text-primary">
          Atelier Nine
        </p>
        <p className="font-display text-2xl">Reserve a chair</p>
        <p className="text-sm text-muted">Fitzroy, Melbourne · Tue–Sat</p>
      </div>
      <div className="grid gap-2 p-4 sm:grid-cols-3">
        {[
          ["Cut & finish", "45m"],
          ["Colour", "120m"],
          ["Keratin", "150m"],
        ].map(([n, m]) => (
          <div key={n} className="rounded-md border border-border px-3 py-3">
            <p className="text-sm font-medium">{n}</p>
            <p className="text-xs text-muted">{m}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {["Maya", "Jules", "Noor"].map((s) => (
          <span
            key={s}
            className="rounded-md border border-border px-3 py-2 text-xs"
          >
            {s}
          </span>
        ))}
        <span className="rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground">
          Maya · 14:30
        </span>
      </div>
    </div>
  );
}

export function SmmMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <p className="font-display text-sm">Hive Grid</p>
        <p className="text-xs text-muted">14-day social · Northside Dental · Toronto</p>
      </div>
      <div className="grid grid-cols-7 gap-1 p-4">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xs bg-card-elevated"
            style={{ opacity: 0.45 + (i % 5) * 0.1 }}
          />
        ))}
      </div>
      <ul className="space-y-2 px-4 pb-4 text-sm">
        <li className="flex justify-between">
          <span>Reel · “Your smile is the offer”</span>
          <span className="text-primary">queued</span>
        </li>
        <li className="flex justify-between">
          <span>Carousel · 5 unspoken clinic rules</span>
          <span className="text-muted">draft</span>
        </li>
        <li className="flex justify-between">
          <span>Story · booking CTA</span>
          <span className="text-primary">live</span>
        </li>
      </ul>
    </div>
  );
}

export function CafeSmmMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <p className="font-display text-sm">Cedar & Salt</p>
        <p className="text-xs text-muted">Social system · Sydney harbour café</p>
      </div>
      <ul className="space-y-2 p-4 text-sm">
        {[
          ["Mon", "Open · oat flat white still"],
          ["Wed", "Reel · pastry drop 7am"],
          ["Fri", "Story · weekend table waitlist"],
          ["Sun", "Carousel · origin story, 4 frames"],
        ].map(([d, t]) => (
          <li
            key={d}
            className="flex justify-between rounded-md border border-border px-3 py-2"
          >
            <span className="text-primary">{d}</span>
            <span className="text-muted">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LeadDeskMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card p-4">
      <p className="font-display">Harbour Home · LeadDesk</p>
      <p className="mb-4 text-xs text-muted">Renovations pipeline · Toronto</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["New", ["Roof inspect · Mississauga", "Kitchen quote · Oakville"]],
          ["Warm", ["Deck rebuild · Etobicoke"]],
          ["Won", ["Ensuite · The Annex"]],
        ].map(([col, items]) => (
          <div key={col as string} className="rounded-md bg-card-elevated p-3">
            <p className="mb-2 text-xs uppercase tracking-widest text-primary">
              {col as string}
            </p>
            {(items as string[]).map((it) => (
              <p
                key={it}
                className="mb-2 rounded-sm border border-border bg-card px-2 py-2 text-xs last:mb-0"
              >
                {it}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function JobTrackMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <p className="font-display text-sm">Arc HVAC · JobTrack</p>
        <p className="text-xs text-muted">Field jobs · Brisbane</p>
      </div>
      <div className="space-y-2 p-4 text-sm">
        {[
          ["JOB-882", "Split install · New Farm", "scheduled"],
          ["JOB-881", "Service · West End", "in progress"],
          ["JOB-879", "Duct clean · Paddington", "done"],
        ].map(([id, who, st]) => (
          <div
            key={id}
            className="flex items-center justify-between rounded-md border border-border px-3 py-2"
          >
            <span>
              <span className="text-muted">{id}</span> · {who}
            </span>
            <span className="text-xs uppercase tracking-wider text-primary">
              {st}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarketingMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <p className="font-display text-sm">Lumen Dental · 30-day offer</p>
        <p className="text-xs text-muted">Marketing strategy · Calgary</p>
      </div>
      <div className="grid gap-2 p-4 sm:grid-cols-3">
        {[
          ["Week 1", "Position", "New-patient consult is the product"],
          ["Week 2", "Proof", "3 stories + 1 carousel of quiet work"],
          ["Week 3–4", "Close", "Form + WhatsApp. One CTA only"],
        ].map(([w, t, b]) => (
          <div key={w} className="rounded-md bg-card-elevated px-3 py-3">
            <p className="text-xs text-primary">{w}</p>
            <p className="font-display">{t}</p>
            <p className="text-xs text-muted">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VesperMarketingMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card p-4">
      <p className="font-display">Vesper Interiors</p>
      <p className="mb-4 text-xs text-muted">Showroom launch · Dubai Design District</p>
      <ol className="space-y-2 text-sm">
        <li className="rounded-md border border-border px-3 py-2">
          1 · Offer: private consult, not a catalogue
        </li>
        <li className="rounded-md border border-border px-3 py-2">
          2 · Channel: Instagram + invite list, no paid spray
        </li>
        <li className="rounded-md border border-border px-3 py-2">
          3 · Close: enquiry form on the same brand as the posters
        </li>
      </ol>
    </div>
  );
}
