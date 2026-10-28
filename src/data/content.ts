export type ContentPost = {
  id: string;
  day: number;
  type: "Reel" | "Carousel" | "Static" | "Stories";
  title: string;
  caption: string;
  firstComment: string;
  mix: "proof" | "teaching" | "studio";
};

export const CONTENT_POSTS: ContentPost[] = [
  {
    id: "p1",
    day: 1,
    type: "Carousel",
    title: "We relaunched. Here’s who we help.",
    mix: "studio",
    caption: `Britehive is a brand studio for service businesses that already sell — and look cheaper than they are.

Australia. UAE. Canada.

The product is a 10-day Brand Launch Sprint: logo, identity, and a 30-day marketing system.

If the work is strong and the grid is not, that’s the brief.`,
    firstComment: "Brand studio · AU · UAE · CA",
  },
  {
    id: "p2",
    day: 2,
    type: "Carousel",
    title: "Before / after 1",
    mix: "proof",
    caption: `Same business. Different spine.

A logo is not a brand. A system is: type, colour, space, and how the offer reads at a glance.

Concept rebrand — labelled as such. The method is what we sell.`,
    firstComment: "Want the 10-day version of this? Link in bio.",
  },
  {
    id: "p3",
    day: 3,
    type: "Reel",
    title: "3 reasons your brand looks cheaper than your prices",
    mix: "teaching",
    caption: `1. The type is trying to be friendly and premium at once.
2. The photos are better than the layout holding them.
3. The offer is buried under a cute icon.

None of these are “post more.” All of them are design decisions.`,
    firstComment: "Save this before you hire another “content person.”",
  },
  {
    id: "p4",
    day: 4,
    type: "Carousel",
    title: "The Brand Launch Sprint",
    mix: "studio",
    caption: `10 days. Fixed scope. Two payments.

Logo + lockups
Mini brand guide
10 social templates
Bio + highlights
30-day calendar
One strategy call

This is the front door. Strategy decks and retainers come after.`,
    firstComment: "AU / CA / UAE pricing in the one-pager.",
  },
  {
    id: "p5",
    day: 5,
    type: "Carousel",
    title: "UAE vs AU brand taste",
    mix: "teaching",
    caption: `Dubai rewards polish and pace.
Melbourne rewards restraint and craft.
Toronto sits between.

Same studio. Different temperature.

If you copy a US SaaS look into a clinic in Sharjah, you will look rented.`,
    firstComment: "We design for the room you actually sell in.",
  },
  {
    id: "p6",
    day: 6,
    type: "Reel",
    title: "10-day sprint in 20 seconds",
    mix: "studio",
    caption: `Day 1 kickoff.
Days 2–4 the mark.
Days 5–7 the system.
Days 8–9 templates and calendar.
Day 10 files.

You sleep. We produce. Feedback in your morning.`,
    firstComment: "Process is the product.",
  },
  {
    id: "p7",
    day: 7,
    type: "Reel",
    title: "Public logo critique",
    mix: "teaching",
    caption: `Kind, but sharp.

I’m not dunking on a small business. I’m showing the three decisions that quietly cheapen a good offer.

Watch through once. Then look at your own grid.`,
    firstComment: "Need the private version? That’s a Loom.",
  },
  {
    id: "p8",
    day: 8,
    type: "Carousel",
    title: "What $2k actually buys",
    mix: "teaching",
    caption: `Not 40 logo options.
Not unlimited revisions.
Not a VA with Canva.

A system: mark, type, colour, templates, a month of content architecture, and a call where we decide how you should look next to the people you lose jobs to.

Fiverr sells files. This is not Fiverr.`,
    firstComment: "Price list lives on the site. No mystery discounts.",
  },
  {
    id: "p9",
    day: 9,
    type: "Carousel",
    title: "Templates your VA can actually use",
    mix: "proof",
    caption: `A brand that only lives in a PDF will die in week two.

We hand over frames: IG, LinkedIn, story covers. Your VA fills them. You stay on-brand without another designer on retainer — unless you want Hive.`,
    firstComment: "Sprint includes ten. Hive refills them monthly.",
  },
  {
    id: "p10",
    day: 10,
    type: "Reel",
    title: "If you’re a trade, clinic, or realtor",
    mix: "teaching",
    caption: `If you sell a high-ticket local service and still look like a side project, you are training people to negotiate.

Sydney. Dubai. Toronto.

The fix is not more posts. The fix is a spine.`,
    firstComment: "Brand Launch Sprint. 10 days.",
  },
  {
    id: "p11",
    day: 11,
    type: "Carousel",
    title: "Before / after 2",
    mix: "proof",
    caption: `The after is quieter. That’s the point.

Premium is usually subtraction: fewer typefaces, fewer colours, more space, a clearer offer.`,
    firstComment: "Concept labelled. Method for sale.",
  },
  {
    id: "p12",
    day: 12,
    type: "Stories",
    title: "This or that — two marks",
    mix: "studio",
    caption: `Stories: two directions. Poll. Behind the brief. No performance.`,
    firstComment: "",
  },
  {
    id: "p13",
    day: 13,
    type: "Reel",
    title: "Your logo isn’t the problem",
    mix: "teaching",
    caption: `Sometimes the mark is fine.
The grid is crowded.
The photography is phone-in-the-kitchen.
The bio is a paragraph of services.

We still might redraw the mark. We always rebuild the system around it.`,
    firstComment: "Sprint, not a logo contest.",
  },
  {
    id: "p14",
    day: 14,
    type: "Carousel",
    title: "Taking two Sprint clients",
    mix: "studio",
    caption: `Two slots. That’s not fake scarcity — it’s how 10-day work stays 10 days.

If you are launching or look cheaper than you are, the next two weeks are the window.`,
    firstComment: "AU · UAE · CA. Link in bio.",
  },
];

export const SUGGESTED_PROMPTS = [
  "Write today’s briefing from my progress.",
  "Personalize a LinkedIn note for a Melbourne dental clinic named Northside Dental, owner Priya.",
  "Draft a 60-second Loom script for a Dubai cafe with a cluttered grid.",
  "Rewrite my Instagram bio. Keep it sharp.",
  "How should I answer “you’re more expensive than Fiverr?”",
  "Give me five Reel ideas for Australian tradies this week.",
  "Build a one-page proposal for a Toronto home-services company at Sprint pricing.",
  "I have no replies after 40 outreaches. Diagnose it.",
];
