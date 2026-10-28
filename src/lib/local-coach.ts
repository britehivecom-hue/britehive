import { CONTENT_POSTS } from "@/data/content";
import { DAYS } from "@/data/days";
import { LOOM_SCRIPT, PROPOSAL_SKELETON, SKUS } from "@/data/offers";
import { BIOS, OBJECTIONS, TEMPLATES } from "@/data/templates";
import { progressSnapshot, type HiveState } from "@/lib/store";
import { fillMerge, todayKey } from "@/lib/utils";

export function localCoach(question: string, state: HiveState): string {
  const q = question.toLowerCase();
  const snap = progressSnapshot(state);
  const name = state.operatorName || "Founder";
  const vars = {
    Name: "Priya",
    Business: "Northside Dental",
    city: "Melbourne",
    suburb: "Brunswick",
    month: "September",
    YourName: name,
    price: SKUS[1]?.prices.AU.amount ?? "A$2,400",
    problem: "The work is trusted; the grid still looks like a template pack.",
    date: "next Monday",
  };

  if (q.includes("briefing") || q.includes("today")) {
    const remaining =
      snap.today?.tasks
        .filter((t) => !state.completedTaskIds.includes(t.id))
        .map((t) => `• ${t.title} (${t.minutes}m)`)
        .join("\n") || "• All of today’s tasks are checked. Send the 20 outreaches anyway.";
    const score = state.scores[todayKey()];
    return `${name} — Day ${snap.day}/30, ${snap.today?.title}.

${snap.today?.intent}

Still open today:
${remaining}

Score so far: ${score?.outreaches ?? 0} outreaches, ${score?.replies ?? 0} replies, ${score?.calls ?? 0} calls.

Do not open Instagram first. Open the list. First line of every message has to prove you looked at them.`;
  }

  if (q.includes("fiverr") || q.includes("expensive")) {
    const row = OBJECTIONS.find((o) => o.they.toLowerCase().includes("fiverr"));
    return `Say this, then stop talking:

“${row?.you ?? "Fiverr sells files. We sell a system you can hand to a VA."}”

If they push: “A $200 logo that you still have to art-direct is not cheaper. The Sprint is a 10-day install — mark, type, templates, calendar — so you stop buying design every Thursday.”`;
  }

  if (q.includes("bio")) {
    return `Instagram bio (paste):

${BIOS.instagram}

LinkedIn headline:

${BIOS.linkedinHeadline}

LinkedIn About:

${BIOS.linkedinAbout}`;
  }

  if (q.includes("linkedin") || q.includes("personalize") || q.includes("priya") || q.includes("northside")) {
    const t = TEMPLATES.find((x) => x.id === "li-connect");
    const follow = TEMPLATES.find((x) => x.id === "li-follow");
    return `Connection note:

${fillMerge(t?.body ?? "", vars)}

After they accept:

${fillMerge(follow?.body ?? "", vars)}

Do not attach a PDF. Offer the Loom.`;
  }

  if (q.includes("loom") || q.includes("dubai cafe") || q.includes("60-second")) {
    return fillMerge(LOOM_SCRIPT, {
      ...vars,
      Name: "Layla",
      Business: "the cafe",
      city: "Dubai",
    });
  }

  if (q.includes("proposal") || q.includes("toronto") || q.includes("home-services")) {
    return fillMerge(PROPOSAL_SKELETON, {
      ...vars,
      Business: "Harbour Home Care",
      city: "Toronto",
      price: SKUS[1]?.prices.CA.amount ?? "C$2,400",
      problem: "High-ticket home services selling against a default Arial wordmark.",
    });
  }

  if (q.includes("reel") || q.includes("tradies") || q.includes("five")) {
    return `Five Reels for Australian tradies this week:

1. “Your van is branded. Your Instagram is not.” 12 seconds, before/after grid.
2. “Why the cheapest quote still looks expensive on site — and cheap online.”
3. Three screenshots of competitor pages. Mute roast. Fix one type crime.
4. Process: mark → van door mock → invoice header. Same system, three surfaces.
5. Price transparency: what the Sprint includes vs a $99 logo.

Captions stay under 400 characters. First line must work closed.`;
  }

  if (q.includes("repl") || q.includes("silence") || q.includes("40 outreach") || q.includes("diagnose")) {
    return `If 40 outreaches produced zero replies, it is not the market.

Check, in order:
1. First line is generic. “Hope you’re well / love what you do” is deleted on sight.
2. You pitched the agency, not their leak. Name the visual problem.
3. Wrong channel. AU trades live on email and Facebook; UAE on IG/WhatsApp; CA on LinkedIn.
4. You asked for a call too soon. Offer a 60-second Loom with no meeting.
5. Volume is actually 40 over ten days, not 40 today.

Fix: rewrite 15 with a specific broken thing. Send. Follow up day 3 and day 7. Then stop.`;
  }

  const day = DAYS.find((d) => d.day === snap.day);
  const sample = TEMPLATES[0];
  return `I’m on the playbook even without the live model.

Today is Day ${snap.day}: ${day?.title}. ${day?.intent}

Paste-ready ${sample?.channel} note:

${fillMerge(sample?.body ?? "", vars)}

${CONTENT_POSTS[0]?.title} is the post if you haven’t published yet.

Ask me to write a specific DM, email, Loom, bio, or proposal with a name and city.`;
}
