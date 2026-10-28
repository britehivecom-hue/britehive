import { DAYS } from "@/data/days";
import { progressSnapshot, type HiveState } from "@/lib/store";
import { todayKey } from "@/lib/utils";

export function buildAgentContext(state: HiveState) {
  const snap = progressSnapshot(state);
  const score = state.scores[todayKey()];
  const remaining =
    snap.today?.tasks
      .filter((t) => !state.completedTaskIds.includes(t.id))
      .map((t) => t.title)
      .join("; ") || "none";
  const leadLine = state.leads
    .slice(0, 8)
    .map((l) => `${l.business} (${l.country}, ${l.status})`)
    .join("; ");
  const byStatus = state.leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.status] = (acc[l.status] ?? 0) + 1;
    return acc;
  }, {});

  return [
    `Operator: ${state.operatorName || "unset"}`,
    `Start date: ${state.startDate}`,
    `Today is day ${snap.day}/30 — ${snap.today?.title ?? ""}`,
    `Week intent: ${DAYS.find((d) => d.day === snap.day)?.intent ?? ""}`,
    `Primary market: ${state.primaryMarket}`,
    `Tasks complete: ${snap.done}/${snap.total} (today ${snap.todayDone}/${snap.todayTotal})`,
    `Today remaining: ${remaining}`,
    `Leads: ${state.leads.length} — ${JSON.stringify(byStatus)}`,
    `Lead snapshot: ${leadLine || "none yet"}`,
    `Today score: outreaches ${score?.outreaches ?? 0}, follow-ups ${score?.followUps ?? 0}, replies ${score?.replies ?? 0}, calls ${score?.calls ?? 0}, proposals ${score?.proposals ?? 0}, cash ${score?.cash ?? 0}, posted ${score?.posted ? "yes" : "no"}`,
  ].join("\n");
}
