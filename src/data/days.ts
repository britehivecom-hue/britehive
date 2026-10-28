export type Task = {
  id: string;
  title: string;
  detail: string;
  minutes: number;
};

export type DayPlan = {
  day: number;
  week: 1 | 2 | 3 | 4;
  title: string;
  intent: string;
  tasks: Task[];
};

export const WEEKS: {
  id: 1 | 2 | 3 | 4;
  name: string;
  range: string;
  goal: string;
}[] = [
  {
    id: 1,
    name: "Foundation",
    range: "Days 1–7",
    goal: "Look hireable. One offer. One portfolio. One way to get paid.",
  },
  {
    id: 2,
    name: "Presence",
    range: "Days 8–14",
    goal: "Be findable. Start conversations. Do not wait to feel ready.",
  },
  {
    id: 3,
    name: "Pipeline",
    range: "Days 15–21",
    goal: "Eight to twelve live conversations. First paid yes.",
  },
  {
    id: 4,
    name: "Close",
    range: "Days 22–30",
    goal: "One to three paid sprints and a machine you can repeat.",
  },
];

export const DAYS: DayPlan[] = [
  {
    day: 1,
    week: 1,
    title: "Strategy lock and teardown",
    intent: "Stop looking like a hiring page. Lock who you sell and what you sell.",
    tasks: [
      {
        id: "d1-offer",
        title: "Write the one-sentence offer",
        detail:
          "Use: Britehive is a brand studio for growing service businesses. We make you look as expensive as you actually are — logo, identity, and a 30-day marketing system.",
        minutes: 20,
      },
      {
        id: "d1-icp",
        title: "Write the ICP on one card",
        detail:
          "Owner-operated, 1–20 staff, sells locally, looks amateur online. Triggers: just launched, rebranding, still using a Canva logo.",
        minutes: 20,
      },
      {
        id: "d1-archive",
        title: "Archive every hiring post on Instagram",
        detail:
          "Hiring posts convert the wrong audience. Screenshot first, then archive. Rewrite the bio later this week.",
        minutes: 15,
      },
      {
        id: "d1-list10",
        title: "List 10 weak-brand businesses per market",
        detail:
          "Australia, UAE, Canada, Pakistan. These become spec-work subjects and outreach targets. Capture Instagram, city, and what looks broken.",
        minutes: 45,
      },
    ],
  },
  {
    day: 2,
    week: 1,
    title: "Britehive visual identity",
    intent: "You cannot sell brand if yours looks generic.",
    tasks: [
      {
        id: "d2-mark",
        title: "Design the Britehive mark, colour, and type",
        detail:
          "Honey accent + near-black + off-white. No rainbow gradients. Handle: Britehive, not Brite Hive.Co.",
        minutes: 90,
      },
      {
        id: "d2-templates",
        title: "Build three reusable templates",
        detail:
          "IG post, LinkedIn post, proposal cover. Same type, same margins, same mark.",
        minutes: 45,
      },
      {
        id: "d2-bio",
        title: "Rewrite the Instagram bio",
        detail:
          "Brand studio for service businesses in AU · UAE · CA. Logo, identity and a 30-day marketing system. 10-day Brand Launch Sprint → link.",
        minutes: 15,
      },
    ],
  },
  {
    day: 3,
    week: 1,
    title: "Portfolio sprint",
    intent: "Proof before clients. One strong before/after closes more than fifty generic logos.",
    tasks: [
      {
        id: "d3-pick6",
        title: "Pick six real businesses to reimagine",
        detail:
          "Two AU, two UAE, one CA, one PK. Label clearly: Concept rebrand — not a client.",
        minutes: 20,
      },
      {
        id: "d3-cases",
        title: "Produce six before/after case cards",
        detail:
          "Each card: before screenshot, after system, four-line rationale (who, what was broken, what changed, business effect).",
        minutes: 150,
      },
    ],
  },
  {
    day: 4,
    week: 1,
    title: "One-page presence and payment",
    intent: "Instagram alone will not close AU, CA, or UAE clients.",
    tasks: [
      {
        id: "d4-page",
        title: "Ship a one-page site",
        detail:
          "Headline, who it’s for, three packages, six portfolio pieces, process, FAQ, Calendly or WhatsApp. Carrd, Framer, or Notion is fine.",
        minutes: 90,
      },
      {
        id: "d4-pay",
        title: "Turn on payment",
        detail:
          "Stripe + PayPal. Wise for UAE. 50% to start, 50% on delivery. Professional email: hello@britehive.co.",
        minutes: 40,
      },
      {
        id: "d4-contract",
        title: "Save a two-page contract",
        detail:
          "Scope, one revision round, 48h feedback, IP transfers after final payment, delay clause.",
        minutes: 30,
      },
    ],
  },
  {
    day: 5,
    week: 1,
    title: "LinkedIn — the AU/CA channel",
    intent: "LinkedIn will beat Instagram for Australia and Canada.",
    tasks: [
      {
        id: "d5-profile",
        title: "Rebuild the founder profile",
        detail:
          "Headline: Founder, Britehive · Brand systems for service businesses in Australia, UAE and Canada. Client-first About. Featured: portfolio + Calendly.",
        minutes: 45,
      },
      {
        id: "d5-company",
        title: "Create or clean the company page",
        detail:
          "Same offer, same visual system, link to the one-pager.",
        minutes: 20,
      },
      {
        id: "d5-post",
        title: "Publish the first authority post",
        detail:
          "A respectful teardown of a public weak brand with a useful fix. No dunking.",
        minutes: 40,
      },
    ],
  },
  {
    day: 6,
    week: 1,
    title: "Instagram rebuild and 14-day batch",
    intent: "Rebuild the profile once, properly. Batch content so you never live-post from panic.",
    tasks: [
      {
        id: "d6-profile",
        title: "Finish profile, highlights, and contact buttons",
        detail:
          "Category: Design Agency. Highlights: Work, Sprint, Reviews, FAQs. Name field: Britehive | Brand Studio.",
        minutes: 30,
      },
      {
        id: "d6-batch",
        title: "Batch fourteen days of content",
        detail:
          "Grid mix: 40% proof, 40% teaching, 20% studio. Reels over carousels over static. Use the Content calendar in this agent.",
        minutes: 120,
      },
    ],
  },
  {
    day: 7,
    week: 1,
    title: "Tooling and the 200-name list",
    intent: "Week 1 output: offer, prices, six concepts, one-pager, IG rebuilt, LinkedIn live, 200 names.",
    tasks: [
      {
        id: "d7-stack",
        title: "Stand up the free stack",
        detail:
          "Workspace email, Notion CRM, Hunter or Apollo free, Calendly, WhatsApp Business, Loom.",
        minutes: 40,
      },
      {
        id: "d7-lists",
        title: "Build four lists of 50 leads",
        detail:
          "AU from Google Maps (clinics, cafes, tradies). UAE F&B, realtors, clinics. CA home services and consultants. PK exporters and agencies for white-label.",
        minutes: 90,
      },
      {
        id: "d7-import",
        title: "Import the first twenty into this agent",
        detail:
          "Name, business, country, channel, what looks broken. Status: New.",
        minutes: 25,
      },
    ],
  },
  {
    day: 8,
    week: 2,
    title: "Outbound day one",
    intent: "Volume starts now. Personalized, not blasted.",
    tasks: [
      {
        id: "d8-twenty",
        title: "Send twenty personalized outreaches",
        detail:
          "Mix LinkedIn, email, and IG DMs. Use Outreach templates. First line must prove you looked at them.",
        minutes: 90,
      },
      {
        id: "d8-post",
        title: "Publish one Reel and Stories",
        detail:
          "Proof or teaching. First line of the caption must work without tapping more.",
        minutes: 30,
      },
      {
        id: "d8-engage",
        title: "Engage fifteen ICP accounts",
        detail:
          "Useful comments, not “great post.” Target the four markets.",
        minutes: 20,
      },
    ],
  },
  {
    day: 9,
    week: 2,
    title: "Follow-up and platforms",
    intent: "Platforms fund the studio. Direct clients become the studio.",
    tasks: [
      {
        id: "d9-follow",
        title: "Follow up yesterday’s unanswered threads",
        detail:
          "One short bump. Then wait for the day-7 closer.",
        minutes: 30,
      },
      {
        id: "d9-twenty",
        title: "Send twenty new outreaches",
        detail:
          "Same standard as day 8. Log them on the scoreboard.",
        minutes: 90,
      },
      {
        id: "d9-upwork",
        title: "Open Upwork agency profile + three catalog products",
        detail:
          "Logo, Brand Sprint, Monthly. Bid five high-fit AU/CA/AE jobs with $1k+ budget.",
        minutes: 50,
      },
    ],
  },
  {
    day: 10,
    week: 2,
    title: "Google, Behance, partnerships",
    intent: "Quiet inbound from serious buyers.",
    tasks: [
      {
        id: "d10-gbp",
        title: "Create a Google Business Profile",
        detail:
          "Service-area is fine if you are remote. Categories around brand and graphic design.",
        minutes: 25,
      },
      {
        id: "d10-behance",
        title: "Upload three case studies to Behance and Dribbble",
        detail:
          "Same six-piece system. Full case, not a logo dump.",
        minutes: 40,
      },
      {
        id: "d10-partners",
        title: "Message five complementary operators",
        detail:
          "AU copywriters, UAE photographers, CA web designers, PK printers. Offer a sprint for a shoutout or joint Reel. 10–15% referral split in writing.",
        minutes: 40,
      },
      {
        id: "d10-out",
        title: "Send twenty outreaches + follow-ups",
        detail: "Daily rhythm does not pause for setup days.",
        minutes: 90,
      },
    ],
  },
  {
    day: 11,
    week: 2,
    title: "Market-specific motion — Australia",
    intent: "AU trades, clinics, real estate, cafes, coaches.",
    tasks: [
      {
        id: "d11-au",
        title: "Twenty AU-only outreaches",
        detail:
          "Google Maps businesses with weak branding in Sydney, Melbourne, Brisbane. Evening PK time hits their afternoon.",
        minutes: 90,
      },
      {
        id: "d11-fb",
        title: "Join two AU small-business Facebook groups",
        detail:
          "Read rules. Contribute value. No spam pitch.",
        minutes: 20,
      },
      {
        id: "d11-content",
        title: "Post the AU-flavoured teaching Reel",
        detail:
          "Three reasons your brand looks cheaper than your prices.",
        minutes: 25,
      },
    ],
  },
  {
    day: 12,
    week: 2,
    title: "Market-specific motion — UAE",
    intent: "Image-driven. WhatsApp is the CRM. Same-day replies win.",
    tasks: [
      {
        id: "d12-uae",
        title: "Twenty UAE outreaches",
        detail:
          "F&B, realtors, clinics, personal brands in Dubai and Abu Dhabi. After LinkedIn accept, move to WhatsApp.",
        minutes: 90,
      },
      {
        id: "d12-group",
        title: "Offer a 20-minute brand teardown to one community manager",
        detail:
          "Dubai startup, women-in-business, or real-estate groups.",
        minutes: 25,
      },
      {
        id: "d12-content",
        title: "Post the UAE vs AU brand-taste carousel",
        detail: "Opinion travels. Keep it sharp, not snarky.",
        minutes: 25,
      },
    ],
  },
  {
    day: 13,
    week: 2,
    title: "Market-specific motion — Canada and Pakistan",
    intent: "CA is LinkedIn + email. PK is cashflow and white-label.",
    tasks: [
      {
        id: "d13-ca",
        title: "Fifteen Canada outreaches",
        detail:
          "Toronto and Vancouver home services, consultants, realtors. Slightly more formal than UAE.",
        minutes: 70,
      },
      {
        id: "d13-pk",
        title: "Message ten PK agencies for white-label overflow",
        detail:
          "You stay invisible. They keep the client. 10-day delivery.",
        minutes: 40,
      },
      {
        id: "d13-fiverr",
        title: "List one premium Fiverr gig only",
        detail:
          "Brand Launch Sprint, top-of-range pricing. Overflow, not home.",
        minutes: 30,
      },
    ],
  },
  {
    day: 14,
    week: 2,
    title: "Week 2 review",
    intent: "Target by now: 100 new contacts, 8–15 replies, 3–5 calls.",
    tasks: [
      {
        id: "d14-audit",
        title: "Audit reply rates by channel and country",
        detail:
          "Double down on the channel that got replies. Kill the one that got silence.",
        minutes: 30,
      },
      {
        id: "d14-score",
        title: "Fill the scoreboard for the week",
        detail:
          "Outreaches, follow-ups, replies, calls, proposals, cash, posts.",
        minutes: 15,
      },
      {
        id: "d14-out",
        title: "Send twenty outreaches, including day-7 closers",
        detail: "Last note, then stop chasing that thread.",
        minutes: 80,
      },
    ],
  },
  {
    day: 15,
    week: 3,
    title: "Raise volume",
    intent: "Twenty-five new outreaches a day from here.",
    tasks: [
      {
        id: "d15-25",
        title: "Send twenty-five new outreaches",
        detail: "Keep personalization. First line still has to earn the rest.",
        minutes: 110,
      },
      {
        id: "d15-book",
        title: "Push three discovery calls this week",
        detail:
          "Every reply gets a 20-minute slot, not a custom strategy dump.",
        minutes: 30,
      },
    ],
  },
  {
    day: 16,
    week: 3,
    title: "The 15-minute teardown",
    intent: "Highest-converting cheap asset in this business. Do not give unpaid logos.",
    tasks: [
      {
        id: "d16-looms",
        title: "Record five Loom teardowns for warmest leads",
        detail:
          "Three specific notes on their current IG or site. One mock of “if we touched the mark.” Ask for 20 minutes.",
        minutes: 90,
      },
      {
        id: "d16-25",
        title: "Send twenty-five outreaches",
        detail: "Include the Looms as the asset, not a PDF of logos.",
        minutes: 80,
      },
    ],
  },
  {
    day: 17,
    week: 3,
    title: "Networking that produces work",
    intent: "One event, two partners, written splits.",
    tasks: [
      {
        id: "d17-event",
        title: "Book or attend one low-cost event",
        detail:
          "AU chamber, Creative Mornings, Dubai community, Toronto mixer. If remote: offer a 20-minute Zoom brand clinic to the organiser.",
        minutes: 40,
      },
      {
        id: "d17-split",
        title: "Close two referral partnerships in writing",
        detail: "Web developers, accountants, copywriters. 10–15%.",
        minutes: 30,
      },
      {
        id: "d17-25",
        title: "Send twenty-five outreaches",
        detail: "Daily volume holds.",
        minutes: 100,
      },
    ],
  },
  {
    day: 18,
    week: 3,
    title: "Calls and proposals",
    intent: "Every call ends with a written summary and a one-page proposal the same day.",
    tasks: [
      {
        id: "d18-script",
        title: "Run discovery with the six-question script",
        detail:
          "Use Offers → Call script. Stop talking after two case studies. Offer the Sprint.",
        minutes: 60,
      },
      {
        id: "d18-prop",
        title: "Send same-day Loom + one-page proposals",
        detail:
          "Problem in their words, done looks like, timeline, price, next step: pay the invoice.",
        minutes: 50,
      },
      {
        id: "d18-out",
        title: "Send twenty-five outreaches",
        detail: "Do not let delivery prep kill outbound.",
        minutes: 90,
      },
    ],
  },
  {
    day: 19,
    week: 3,
    title: "Social proof before you have famous clients",
    intent: "Spec work, process, and honest testimonials.",
    tasks: [
      {
        id: "d19-proof",
        title: "Publish two process case carousels",
        detail: "Here’s the brief. Here’s the system. Label concepts honestly.",
        minutes: 50,
      },
      {
        id: "d19-testimonial",
        title: "Collect two real testimonials",
        detail:
          "Anyone you have actually designed for. Four lines. Permission to post before/after.",
        minutes: 25,
      },
      {
        id: "d19-out",
        title: "Send twenty-five outreaches",
        detail: "Warm network post: taking two Sprint clients this month.",
        minutes: 90,
      },
    ],
  },
  {
    day: 20,
    week: 3,
    title: "White-label and overflow",
    intent: "Pakistan agencies can be the first invoice if AU is slow.",
    tasks: [
      {
        id: "d20-wl",
        title: "Follow up every white-label thread",
        detail: "Offer to take the next brief this week.",
        minutes: 30,
      },
      {
        id: "d20-upwork",
        title: "Five selective Upwork bids",
        detail: "High-fit only. Catalog link in the proposal.",
        minutes: 35,
      },
      {
        id: "d20-out",
        title: "Send twenty-five outreaches",
        detail: "Include day-7 closers.",
        minutes: 90,
      },
    ],
  },
  {
    day: 21,
    week: 3,
    title: "Week 3 review",
    intent: "Eight to twelve conversations should be live.",
    tasks: [
      {
        id: "d21-pipeline",
        title: "Clean the lead pipeline",
        detail:
          "Move statuses. Lose the dead. Put a next action on every open lead.",
        minutes: 30,
      },
      {
        id: "d21-calls",
        title: "Book remaining discovery slots for next week",
        detail: "Three live conversations on the calendar is the floor.",
        minutes: 25,
      },
      {
        id: "d21-out",
        title: "Send twenty-five outreaches",
        detail: "Week closes with volume, not a retrospective essay.",
        minutes: 90,
      },
    ],
  },
  {
    day: 22,
    week: 4,
    title: "Close with a true slot",
    intent: "You can only run two or three sprints at once. Say so.",
    tasks: [
      {
        id: "d22-close",
        title: "Send payment links on every open proposal",
        detail:
          "To lock your 10-day slot, 50% is due. Next start date: [date].",
        minutes: 40,
      },
      {
        id: "d22-friction",
        title: "If nobody has paid, lower friction not quality",
        detail:
          "Offer the $900 Mark + 6 templates entry SKU. Do not discount below 40% of list.",
        minutes: 30,
      },
      {
        id: "d22-out",
        title: "Send twenty-five outreaches",
        detail: "Closing week is still a prospecting week.",
        minutes: 90,
      },
    ],
  },
  {
    day: 23,
    week: 4,
    title: "Five more Looms",
    intent: "The teardown is still the closer.",
    tasks: [
      {
        id: "d23-looms",
        title: "Record five new Looms for the hottest remaining leads",
        detail: "Same 60-second format. One mock of the mark.",
        minutes: 80,
      },
      {
        id: "d23-network",
        title: "Send the warm-network note to everyone you know",
        detail:
          "We’ve rebuilt Britehive. Two Sprint slots this month. Treat referrals properly.",
        minutes: 25,
      },
      {
        id: "d23-out",
        title: "Send twenty-five outreaches",
        detail: "Include PK white-label if AU/CA/UAE is quiet.",
        minutes: 80,
      },
    ],
  },
  {
    day: 24,
    week: 4,
    title: "Deliver or stage delivery",
    intent: "A paid sprint this week needs a kickoff ritual.",
    tasks: [
      {
        id: "d24-kickoff",
        title: "Run kickoff for any won Sprint",
        detail:
          "Brand questionnaire, refs, 48h feedback rule, shared Figma/Drive.",
        minutes: 45,
      },
      {
        id: "d24-stage",
        title: "If not yet won, stage a sample kickoff pack",
        detail:
          "Questionnaire + timeline graphic you can attach to the next proposal.",
        minutes: 35,
      },
      {
        id: "d24-out",
        title: "Send twenty-five outreaches",
        detail: "Protect the outbound block.",
        minutes: 90,
      },
    ],
  },
  {
    day: 25,
    week: 4,
    title: "Retainers after Sprints",
    intent: "Do not lead with retainers. Bundle after the Sprint.",
    tasks: [
      {
        id: "d25-bundle",
        title: "Offer Sprint + first month Hive at a small bundle",
        detail:
          "Only to proposals still open. Monthly is 8–12 assets, captions, light strategy.",
        minutes: 30,
      },
      {
        id: "d25-out",
        title: "Send twenty-five outreaches",
        detail: "New names, not just the same ten.",
        minutes: 90,
      },
    ],
  },
  {
    day: 26,
    week: 4,
    title: "Content that supports outbound",
    intent: "Instagram is a trust layer for people you already messaged.",
    tasks: [
      {
        id: "d26-price",
        title: "Publish the price-transparency carousel",
        detail: "What $2k actually buys. Kill the Fiverr objection in public.",
        minutes: 40,
      },
      {
        id: "d26-stories",
        title: "Stories: this-or-that logos and process",
        detail: "Daily Stories still matter more than one more static post.",
        minutes: 15,
      },
      {
        id: "d26-out",
        title: "Send twenty-five outreaches",
        detail: "Point warm leads at the price carousel.",
        minutes: 90,
      },
    ],
  },
  {
    day: 27,
    week: 4,
    title: "Pakistan case study if needed",
    intent: "One local or white-label job for a review is allowed. Do not become a cheap PK shop.",
    tasks: [
      {
        id: "d27-case",
        title: "Close one PK or white-label job for a review",
        detail:
          "Quote in PKR locally, USD when they sell abroad. Get the testimonial in English.",
        minutes: 40,
      },
      {
        id: "d27-out",
        title: "Send twenty-five outreaches",
        detail: "Keep international as the headline market.",
        minutes: 90,
      },
    ],
  },
  {
    day: 28,
    week: 4,
    title: "Operating system — document",
    intent: "The relaunch is a sales habit with a sharp product.",
    tasks: [
      {
        id: "d28-notion",
        title: "Document the machine in Notion",
        detail:
          "Offer one-pager, discovery script, proposal, contract, revision rules, content calendar, outreach tracker.",
        minutes: 60,
      },
      {
        id: "d28-out",
        title: "Send twenty-five outreaches",
        detail: "Systems day is not a day off outbound.",
        minutes: 80,
      },
    ],
  },
  {
    day: 29,
    week: 4,
    title: "Month 2 targets",
    intent: "Same machine, more volume. Four Sprints or two Sprints plus two retainers.",
    tasks: [
      {
        id: "d29-targets",
        title: "Set month 2 numbers",
        detail:
          "300+ outreaches, 20–40 replies, 8–12 calls, 4–8 proposals, 1–3 wins was month 1. Raise list quality, not discounting.",
        minutes: 25,
      },
      {
        id: "d29-batch",
        title: "Batch the next fourteen days of content",
        detail: "Do not start month 2 already behind on posting.",
        minutes: 90,
      },
      {
        id: "d29-out",
        title: "Send twenty-five outreaches",
        detail: "Include a fresh 50-name list if the original 200 is spent.",
        minutes: 90,
      },
    ],
  },
  {
    day: 30,
    week: 4,
    title: "Close the cycle",
    intent: "Review honestly. Restart the 30-day loop if needed — with proof this time.",
    tasks: [
      {
        id: "d30-review",
        title: "Write the 30-day review",
        detail:
          "What converted, which market, which channel, what you will not do again. Hiring is still not allowed until there is a waitlist of work.",
        minutes: 40,
      },
      {
        id: "d30-ask",
        title: "Ask every won or almost-won client for a referral",
        detail: "One sentence. Make it easy to forward.",
        minutes: 20,
      },
      {
        id: "d30-out",
        title: "Send twenty-five outreaches",
        detail: "Day 30 is still a selling day.",
        minutes: 90,
      },
    ],
  },
];

export function tasksForDay(day: number) {
  return DAYS.find((d) => d.day === day);
}

export function allTasks() {
  return DAYS.flatMap((d) => d.tasks.map((t) => ({ ...t, day: d.day, week: d.week })));
}

export function weekOf(day: number): 1 | 2 | 3 | 4 {
  if (day <= 7) return 1;
  if (day <= 14) return 2;
  if (day <= 21) return 3;
  return 4;
}
