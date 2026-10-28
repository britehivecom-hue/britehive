export type Market = "AU" | "UAE" | "CA" | "PK";

export const MARKETS: {
  id: Market;
  name: string;
  currency: string;
  icp: string;
  play: string;
  hours: string;
}[] = [
  {
    id: "AU",
    name: "Australia",
    currency: "AUD",
    icp: "Trades, clinics, real estate, cafes, coaches",
    play: "Google Maps → weak branding → email/IG/LinkedIn. Facebook groups for tradies. Partner with accountants and web developers.",
    hours: "Pakistan evening hits their afternoon.",
  },
  {
    id: "UAE",
    name: "United Arab Emirates",
    currency: "USD",
    icp: "F&B, real estate, clinics, personal brands, new ventures",
    play: "Instagram + WhatsApp. LinkedIn for managers. Same-day replies. Do not compete on Pakistani gig pricing — compete on taste.",
    hours: "Sunday–Wednesday outreach. Thursday–Saturday is weekend.",
  },
  {
    id: "CA",
    name: "Canada",
    currency: "CAD",
    icp: "Home services, consultants, wellness, realtors",
    play: "LinkedIn + email. Toronto and Vancouver first. Chambers and immigrant-founded business groups.",
    hours: "Slightly more formal than UAE, warmer than AU corporate.",
  },
  {
    id: "PK",
    name: "Pakistan",
    currency: "PKR",
    icp: "Exporters, funded startups, agencies that white-label you",
    play: "Cash-flow and case studies, not the premium headline. White-label overflow for local agencies.",
    hours: "Local. Quote PKR locally, USD when they sell abroad.",
  },
];

export type Sku = {
  id: "mark" | "sprint" | "hive";
  name: string;
  tag: string;
  days: string;
  includes: string[];
  prices: Record<Market, { amount: string; note: string }>;
};

export const SKUS: Sku[] = [
  {
    id: "mark",
    name: "Mark",
    tag: "Entry",
    days: "5 days",
    includes: [
      "Logo + 3 lockups",
      "Primary colour and type pairing",
      "Basic usage sheet",
      "PNG / SVG export pack",
      "One revision round",
    ],
    prices: {
      AU: { amount: "A$900–1,800", note: "Use when they insist on logo-only." },
      UAE: { amount: "US$500–1,000", note: "Do not lead with this in Dubai." },
      CA: { amount: "C$900–1,800", note: "Same posture as AU." },
      PK: { amount: "Rs 40,000–110,000", note: "Local / white-label only." },
    },
  },
  {
    id: "sprint",
    name: "Brand Launch Sprint",
    tag: "Hero",
    days: "10 days",
    includes: [
      "Logo + 3 lockups",
      "Colour, type, mini brand guide",
      "10 social templates (IG + LinkedIn)",
      "Bio rewrite + highlight covers",
      "30-day content calendar",
      "One 60-min strategy call",
      "One revision round",
    ],
    prices: {
      AU: { amount: "A$1,800–2,800", note: "Default quote." },
      UAE: { amount: "US$1,400–2,200", note: "Default quote." },
      CA: { amount: "C$1,800–2,800", note: "Default quote." },
      PK: { amount: "Rs 110,000–250,000", note: "Or USD if they sell abroad." },
    },
  },
  {
    id: "hive",
    name: "Monthly Hive",
    tag: "Retainer",
    days: "Ongoing",
    includes: [
      "8–12 assets / month",
      "Captions",
      "Light strategy",
      "48h turnaround on in-scope requests",
    ],
    prices: {
      AU: { amount: "A$1,200–2,200 / mo", note: "Sell after a Sprint." },
      UAE: { amount: "US$900–1,600 / mo", note: "Sell after a Sprint." },
      CA: { amount: "C$1,200–2,200 / mo", note: "Sell after a Sprint." },
      PK: { amount: "Rs 70,000–170,000 / mo", note: "White-label overflow." },
    },
  },
];

export const PROPOSAL_SKELETON = `BRITEHIVE — one-page proposal

For: {{Business}} ({{city}})
Offer: Brand Launch Sprint · 10 days
Investment: {{price}}
Payment: 50% to start, 50% on delivery

1. The problem (in their words)
{{problem}}

2. What “done” looks like
- Logo + 3 lockups
- Colour, type, mini brand guide
- 10 social templates
- Bio rewrite + highlight covers
- 30-day content calendar
- 1 strategy call + 1 revision round

3. Timeline
Day 1 kickoff → Day 10 file handoff

4. What we need from you
Logo refs, 48-hour feedback on the first presentation

5. Next step
Pay the invoice to lock the {{date}} slot.

{{YourName}}
Britehive · hello@britehive.co`;

export const LOOM_SCRIPT = `60-second teardown

0:00 — “{{Name}}, I looked at {{Business}} in {{city}}.”
0:08 — Point at the current grid or site. Name one mismatch (quality of work vs. look).
0:20 — Three fixes, one sentence each. Be specific: type, colour, spacing, photography, offer hierarchy.
0:42 — Flash one mock of the mark or a post template.
0:52 — “I can run this as a 10-day Sprint. If you want the 20-minute call, reply here.”`;
