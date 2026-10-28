export const CONSULT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScNwcfhXaxDaRqlSLQciTQCd3DbmlspIEScz7z07yAPd8qplQ/viewform?usp=dialog";

export const CONSULT_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLScNwcfhXaxDaRqlSLQciTQCd3DbmlspIEScz7z07yAPd8qplQ/viewform?embedded=true";

export const EMAIL = "britehive.com@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/britehive.co/";

export const MARKETS = [
  { code: "AU", name: "Australia" },
  { code: "AE", name: "UAE" },
  { code: "CA", name: "Canada" },
] as const;

export const GRAPHIC_WORK = [
  {
    id: "visitor",
    src: "/work/the-visitor.jpeg",
    title: "The Visitor",
    kind: "Film poster",
    note: "Psychological horror campaign, A24-toned release art.",
  },
  {
    id: "zipbite",
    src: "/work/zipbite.jpeg",
    title: "Zipbite",
    kind: "Social poster",
    note: "High-velocity QSR launch creative for order-now campaigns.",
  },
  {
    id: "pinnacle",
    src: "/work/pinnacle.jpeg",
    title: "Pinnacle Properties",
    kind: "Luxury poster",
    note: "Editorial real-estate film still meets type-led identity.",
  },
  {
    id: "bloom",
    src: "/work/bloom.jpeg",
    title: "Bloom & Co",
    kind: "Product visual",
    note: "Quiet still-life system for a natural serum line.",
  },
  {
    id: "learn",
    src: "/work/learn.jpeg",
    title: "Learn Anywhere",
    kind: "Education poster",
    note: "Youth-first illustration campaign for a learning platform.",
  },
  {
    id: "sunrise",
    src: "/work/sunrise.jpeg",
    title: "Sunrise Energy",
    kind: "Logo system",
    note: "Solar mark — sun meeting a panel grid in one lockup.",
  },
  {
    id: "ironpeak",
    src: "/work/ironpeak.jpeg",
    title: "Ironpeak",
    kind: "Gym poster",
    note: "Dark motivational series for a performance gym brand.",
  },
  {
    id: "eclipse",
    src: "/work/eclipse.jpeg",
    title: "Eclipse Protocol",
    kind: "Cinematic poster",
    note: "Ensemble hero key art with a last-chance tagline stack.",
  },
  {
    id: "sandborn",
    src: "/work/sandborn.jpeg",
    title: "Sandborn",
    kind: "Sci-fi poster",
    note: "Desert myth poster — the landscape as the antagonist.",
  },
] as const;

export const SERVICES = [
  {
    slug: "identity",
    title: "Logo & identity systems",
    body: "Marks, lockups, and a short usage spine so the brand holds on a van, a grid, and a booking screen.",
  },
  {
    slug: "visuals",
    title: "Posters & product images",
    body: "Campaign posters, pack-led stills, and social frames that look like one house — not twenty moods.",
  },
  {
    slug: "booking",
    title: "Booking & lead apps",
    body: "Mobile-first booking or enquiry flows with real save, slots, and WhatsApp-style confirmation.",
  },
  {
    slug: "ops",
    title: "Mini ops systems",
    body: "Customers, orders, stock, and pipelines — small working systems, not a fake full ERP promise.",
  },
  {
    slug: "smm",
    title: "Social systems",
    body: "Content direction, templates, and a posting cadence you can actually run. Not unlimited noise.",
  },
  {
    slug: "bd",
    title: "Offer & development setup",
    body: "What you sell, who it is for, and the scripts that open the first ten conversations.",
  },
] as const;

/** Studio prototypes — fictional operators, AU / UAE / CA. */
export const STUDIO_BRANDS = [
  {
    id: "glow",
    name: "Glow Studio",
    market: "Dubai Marina, UAE",
    lane: "Booking app",
    line: "Voice-note bookings replaced with slots, stylists, and a WhatsApp-shaped confirm.",
  },
  {
    id: "atelier",
    name: "Atelier Nine",
    market: "Melbourne, AU",
    lane: "Booking app",
    line: "Colour, cut, and keratin in one mobile book flow with Friday hours locked.",
  },
  {
    id: "meridian",
    name: "Meridian Physio",
    market: "Abu Dhabi, UAE",
    lane: "Booking app",
    line: "30 / 45 / 60 minute consults, two rooms, next-available shown on the first screen.",
  },
  {
    id: "cedar",
    name: "Cedar & Salt",
    market: "Sydney, AU",
    lane: "Social system",
    line: "Fourteen-day grid for a harbour café: morning reels, weekend tables, no filler quotes.",
  },
  {
    id: "northside",
    name: "Northside Dental",
    market: "Toronto, CA",
    lane: "Social system",
    line: "Clinic grid that books, not lectures. Stories point at the consult form.",
  },
  {
    id: "drift",
    name: "Drift Coffee",
    market: "Gold Coast, AU",
    lane: "Social system",
    line: "Seasonal drop calendar + story CTA to the loyalty waitlist.",
  },
  {
    id: "kite",
    name: "Kite & Co",
    market: "Vancouver, CA",
    lane: "Ops system",
    line: "Gift retail: customers, orders, stock alerts — ShopFlow under their name.",
  },
  {
    id: "arc",
    name: "Arc HVAC",
    market: "Brisbane, AU",
    lane: "Ops system",
    line: "Job board: request → scheduled → done. Quotes stop dying in the group chat.",
  },
  {
    id: "harbour",
    name: "Harbour Home",
    market: "Toronto, CA",
    lane: "Ops system",
    line: "LeadDesk for renovations — new / warm / won, suburb on every card.",
  },
  {
    id: "lumen",
    name: "Lumen Dental",
    market: "Calgary, CA",
    lane: "Marketing strategy",
    line: "Offer stack, 30-day campaign, and the one CTA the site actually uses.",
  },
  {
    id: "vesper",
    name: "Vesper Interiors",
    market: "Dubai, UAE",
    lane: "Marketing strategy",
    line: "Showroom launch: three offers, one Instagram spine, enquiry form as the close.",
  },
  {
    id: "pinnacle-m",
    name: "Pinnacle Properties",
    market: "Melbourne, AU",
    lane: "Marketing strategy",
    line: "Listing campaign language that matches the luxury poster — not a stock slogan.",
  },
] as const;

export const PRODUCT_SHOOTS = [
  {
    id: "gown-film",
    kind: "video" as const,
    src: "/shoots/gown.mp4",
    title: "Noir gown",
    note: "Spotlit mannequin film — beadwork from full length to the hem.",
  },
  {
    id: "heels-film",
    kind: "video" as const,
    src: "/shoots/heels.mp4",
    title: "Patent heels",
    note: "Marble-floor walk. Grey wool and black patent, tight crop.",
  },
  {
    id: "ring-film",
    kind: "video" as const,
    src: "/shoots/ring.mp4",
    title: "Sapphire halo",
    note: "Slow turn on black silk. Gold band, cushion stone, diamond halo.",
  },
  {
    id: "gown-still",
    kind: "still" as const,
    src: "/shoots/gown.jpg",
    title: "Gown still",
    note: "Single-bulb studio frame of the same evening gown.",
  },
  {
    id: "linen-still",
    kind: "still" as const,
    src: "/shoots/linen.jpg",
    title: "Cream linen suit",
    note: "Oversized blazer and wide trousers, back-three-quarter portrait.",
  },
] as const;

export const AI_APPS = [
  {
    id: "ascend",
    name: "Ascend",
    tag: "Brand growth",
    line: "An AI platform that builds a brand, estimates growth, drafts a five-year plan and a marketing funnel — then exports each tool as a PDF.",
    stack: ["Gemini", "Google AI Studio", "Google Stitch"],
    points: [
      "Brand Builder with a score out of 100",
      "Growth range: low, likely, high — estimates, never guarantees",
      "One active brand across every page",
      "PDF download for every tool",
    ],
    report: "/ai/ascend.pdf",
    demo: null,
  },
  {
    id: "sentinel",
    name: "Sentinel AI",
    tag: "Code security",
    line: "Paste or upload code. Gemini returns an OWASP-aware security and quality audit, plus a production-ready fix. Submitted code is not stored.",
    stack: ["Gemini", "OWASP Top 10", "Netlify"],
    points: [
      "Quick, Standard, or Deep review",
      "Issue cards with line, severity, and how to fix",
      "Fixed code ready to copy",
      "30,000 characters per audit",
    ],
    report: "/ai/sentinel.pdf",
    demo: "https://voluble-centaur-176779.netlify.app",
  },
] as const;
