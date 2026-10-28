export type Template = {
  id: string;
  name: string;
  channel: "LinkedIn" | "Email" | "Instagram" | "WhatsApp" | "Network";
  market?: "AU" | "UAE" | "CA" | "PK" | "All";
  subject?: string;
  body: string;
  notes: string;
};

export const MERGE_HINTS = [
  { key: "Name", sample: "Priya" },
  { key: "Business", sample: "Northside Dental" },
  { key: "city", sample: "Melbourne" },
  { key: "suburb", sample: "Brunswick" },
  { key: "month", sample: "September" },
  { key: "YourName", sample: "Ali" },
];

export const TEMPLATES: Template[] = [
  {
    id: "li-connect",
    name: "LinkedIn connection",
    channel: "LinkedIn",
    market: "All",
    body: `Hi {{Name}} — looked at {{Business}}. The work is solid; the brand is quieter than it should be for {{city}}. I run a 10-day brand sprint for service businesses. Thought it was worth connecting.`,
    notes: "Under 300 characters. No pitch dump. No “pick your brain.”",
  },
  {
    id: "li-follow",
    name: "LinkedIn follow-up after accept",
    channel: "LinkedIn",
    market: "All",
    body: `Thanks for connecting. I’ll be direct: I put together brand systems for businesses like {{Business}} that already sell, but look cheaper than they are online.

I can send a 60-second Loom on the first 3 things I’d fix — no call required. Useful?`,
    notes: "Send within 48 hours of the accept.",
  },
  {
    id: "email-au",
    name: "Cold email — Australia / Canada",
    channel: "Email",
    market: "AU",
    subject: "{{Business}}’s brand is under-selling the work",
    body: `Hi {{Name}},

I was looking at businesses in {{suburb}} and {{Business}} stood out — then the website/Instagram didn’t match the quality of what you actually do.

I’m {{YourName}}, founder of Britehive. We run a 10-day Brand Launch Sprint for service businesses in Australia and Canada: logo, identity, and a 30-day content system. Fixed price, two payment points.

If it’s useful, I’ll record a short Loom of what I’d change first. If not, no follow-up after this.

{{YourName}}
Britehive · hello@britehive.co`,
    notes: "Slightly warmer than corporate, still direct. Same template works for Canada with city swap.",
  },
  {
    id: "email-uae",
    name: "Cold email — UAE",
    channel: "Email",
    market: "UAE",
    subject: "Quick look at {{Business}}",
    body: `Hi {{Name}},

Congrats on {{Business}} in {{city}}. The offer is clear; the visual brand is not there yet — common when companies grow faster than their design.

We help UAE service brands look as premium as the experience they sell. 10-day sprint, English-speaking team, WhatsApp-friendly process.

Want a 60-second screen recording of the first fixes?

{{YourName}}
Britehive`,
    notes: "Shorter. After they reply, move to WhatsApp the same day.",
  },
  {
    id: "ig-dm",
    name: "Instagram DM",
    channel: "Instagram",
    market: "All",
    body: `Your product looks more premium than the grid. That’s a positioning leak, not a “post more” problem. I can sketch the first fix on a Loom if you want it.`,
    notes: "Send after they view a Reel or follow. One follow-up four days later, then stop.",
  },
  {
    id: "follow-7",
    name: "Day-7 closer (all channels)",
    channel: "Email",
    market: "All",
    body: `Last note from me — I know this arrives in a busy inbox. If a brand refresh isn’t this quarter, no stress. If it is, I have one Sprint slot left in {{month}}.`,
    notes: "Third touch. Then stop. Chasing past this looks desperate.",
  },
  {
    id: "warm-network",
    name: "Warm network note",
    channel: "Network",
    market: "All",
    body: `We’ve quietly rebuilt Britehive.

We’re taking two Brand Launch Sprint clients this month (logo + identity + 30-day marketing system, 10 days).

If you — or someone you know in AU, UAE, or Canada — is launching or looks cheaper than they are, send them my way. I’ll treat them properly.`,
    notes: "Post on LinkedIn and send as WhatsApp to your actual network.",
  },
  {
    id: "white-label",
    name: "White-label to agencies",
    channel: "WhatsApp",
    market: "PK",
    body: `We are a brand overflow team: logo, identity, social kits in 10 days. You keep the client relationship and margin. We stay invisible. If you are turning down design work, we can take the next brief this week.`,
    notes: "Pakistan agencies and dev shops. Also works for AU studios at capacity.",
  },
  {
    id: "ig-after-view",
    name: "IG DM after they viewed a Reel",
    channel: "Instagram",
    market: "All",
    body: `Saw you’re running {{Business}} in {{city}}. The product looks stronger than the brand around it — that’s fixable in a 10-day sprint. Want a 60-second Loom of what I’d change first?`,
    notes: "Best used after a teaching Reel, not a logo dump.",
  },
  {
    id: "referral-ask",
    name: "Referral ask after a win",
    channel: "WhatsApp",
    market: "All",
    body: `Glad the Sprint landed. If you know one owner whose brand is quieter than their work, I’d like to treat them the same way. A forward of this note is enough.`,
    notes: "Ask while the files are still warm, not six months later.",
  },
];

export const BIOS = {
  instagram: `Brand studio for service businesses in AU · UAE · CA
Logo, identity & a 30-day marketing system
10-day Brand Launch Sprint →`,
  linkedinHeadline: `Founder, Britehive · Brand systems for service businesses in Australia, UAE & Canada`,
  linkedinAbout: `Most service businesses already sell. Their brand just under-sells them.

I run Britehive, a brand studio for owner-operated firms in Australia, the UAE, and Canada. We install a complete visual system in 10 days: logo, identity, and a 30-day marketing kit your VA can actually use.

The spearhead offer is the Brand Launch Sprint — fixed scope, two payments, one revision round.

If your work looks more expensive than your Instagram, that’s the brief.

hello@britehive.co`,
};

export const CALL_SCRIPT = [
  {
    q: "What prompted you to look at the brand now?",
    why: "Finds the trigger. Launch, competitor, hiring, embarrassment.",
  },
  {
    q: "What happens if this still looks the same in 6 months?",
    why: "Turns taste into cost.",
  },
  {
    q: "Who are you losing jobs to, and why?",
    why: "Positions you against a rival, not against Fiverr.",
  },
  {
    q: "Have you hired a designer before — what went wrong?",
    why: "Lets you sell process, not just files.",
  },
  {
    q: "Show two relevant case studies. Then stop talking.",
    why: "Silence is the close.",
  },
  {
    q: "The Sprint is [price], 10 days, 50% to start. I can start [date]. Want the one-pager?",
    why: "Every call ends with a date and a number.",
  },
];

export const OBJECTIONS: { they: string; you: string }[] = [
  {
    they: "Send a quote for a logo only",
    you: "I can do Mark at the listed price. Most clients who start there come back for the system — Sprint is the one that changes how you get booked.",
  },
  {
    they: "You’re more expensive than Fiverr",
    you: "Yes. Fiverr sells files. We sell a system you can hand to a VA. Different product.",
  },
  {
    they: "Can you do a free sample?",
    you: "I don’t do unpaid custom logos. I can send a 60-second Loom of your current brand and the first three fixes.",
  },
  {
    they: "We need to think",
    you: "Of course. I’ll hold [date] until Friday. After that the slot opens.",
  },
  {
    they: "Can you work in our timezone?",
    you: "Kickoff and feedback live-overlap a few hours. Production runs while you sleep — that’s why it’s 10 days, not 6 weeks.",
  },
  {
    they: "Where are you based?",
    you: "We’re an international studio. Strategy and design direction sit with me; production is a small remote team. One point of contact, English throughout, files that meet AU/CA/UAE brand standards.",
  },
];
