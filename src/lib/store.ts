import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DAYS } from "@/data/days";
import type { Market } from "@/data/offers";
import { clamp, todayKey, uid } from "@/lib/utils";

export type LeadStatus =
  | "new"
  | "contacted"
  | "replied"
  | "call"
  | "proposed"
  | "won"
  | "lost";

export type Lead = {
  id: string;
  name: string;
  business: string;
  country: Market;
  channel: string;
  contact: string;
  broken: string;
  notes: string;
  status: LeadStatus;
  createdAt: string;
};

export type DailyScore = {
  date: string;
  outreaches: number;
  followUps: number;
  replies: number;
  calls: number;
  proposals: number;
  cash: number;
  posted: boolean;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

export type HiveState = {
  hydrated: boolean;
  onboardingComplete: boolean;
  operatorName: string;
  startDate: string;
  primaryMarket: Market | "All";
  completedTaskIds: string[];
  leads: Lead[];
  scores: Record<string, DailyScore>;
  chat: ChatMessage[];
  setHydrated: (v: boolean) => void;
  completeOnboarding: (input: {
    operatorName: string;
    startDate: string;
    primaryMarket: Market | "All";
  }) => void;
  toggleTask: (id: string) => void;
  addLead: (lead: Omit<Lead, "id" | "createdAt">) => void;
  updateLead: (id: string, patch: Partial<Lead>) => void;
  removeLead: (id: string) => void;
  seedSampleLeads: () => void;
  logScore: (patch: Partial<DailyScore>) => void;
  pushChat: (msg: Omit<ChatMessage, "id" | "createdAt">) => void;
  clearChat: () => void;
  resetWorkspace: () => void;
};

const SAMPLE_LEADS: Omit<Lead, "id" | "createdAt">[] = [
  {
    name: "Priya Shah",
    business: "Northside Dental",
    country: "AU",
    channel: "LinkedIn",
    contact: "priya@northside.example",
    broken: "Clip-art tooth mark, five typefaces, offer buried",
    notes: "Melbourne clinic. Strong reviews, weak grid.",
    status: "new",
  },
  {
    name: "Omar Al Farsi",
    business: "Noor Interiors",
    country: "UAE",
    channel: "Instagram",
    contact: "@noor.interiors",
    broken: "Luxury work, noisy gold templates, no hierarchy",
    notes: "Dubai. Move to WhatsApp after accept.",
    status: "contacted",
  },
  {
    name: "Hannah Cole",
    business: "Harbour Home Care",
    country: "CA",
    channel: "Email",
    contact: "hannah@harbour.example",
    broken: "Wordmark in default Arial, stock smiles",
    notes: "Toronto. High-ticket home services.",
    status: "replied",
  },
  {
    name: "Bilal Raza",
    business: "Raza Export Co",
    country: "PK",
    channel: "WhatsApp",
    contact: "+92 300 0000000",
    broken: "Needs an international-facing identity for buyers",
    notes: "White-label or exporter case study.",
    status: "new",
  },
];

export function currentDayNumber(startDate: string, now = new Date()) {
  const start = new Date(`${startDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return 1;
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((today.getTime() - start.getTime()) / 86400000) + 1;
  return clamp(diff, 1, 30);
}

export const useHive = create<HiveState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      onboardingComplete: false,
      operatorName: "",
      startDate: todayKey(),
      primaryMarket: "All",
      completedTaskIds: [],
      leads: [],
      scores: {},
      chat: [],
      setHydrated: (v) => set({ hydrated: v }),
      completeOnboarding: (input) =>
        set({
          onboardingComplete: true,
          operatorName: input.operatorName.trim(),
          startDate: input.startDate,
          primaryMarket: input.primaryMarket,
        }),
      toggleTask: (id) => {
        const has = get().completedTaskIds.includes(id);
        set({
          completedTaskIds: has
            ? get().completedTaskIds.filter((x) => x !== id)
            : [...get().completedTaskIds, id],
        });
      },
      addLead: (lead) =>
        set({
          leads: [
            {
              ...lead,
              id: uid(),
              createdAt: new Date().toISOString(),
            },
            ...get().leads,
          ],
        }),
      updateLead: (id, patch) =>
        set({
          leads: get().leads.map((l) => (l.id === id ? { ...l, ...patch } : l)),
        }),
      removeLead: (id) =>
        set({ leads: get().leads.filter((l) => l.id !== id) }),
      seedSampleLeads: () => {
        if (get().leads.length > 0) return;
        set({
          leads: SAMPLE_LEADS.map((l) => ({
            ...l,
            id: uid(),
            createdAt: new Date().toISOString(),
          })),
        });
      },
      logScore: (patch) => {
        const date = patch.date ?? todayKey();
        const prev = get().scores[date] ?? {
          date,
          outreaches: 0,
          followUps: 0,
          replies: 0,
          calls: 0,
          proposals: 0,
          cash: 0,
          posted: false,
        };
        set({
          scores: {
            ...get().scores,
            [date]: { ...prev, ...patch, date },
          },
        });
      },
      pushChat: (msg) =>
        set({
          chat: [
            ...get().chat,
            {
              ...msg,
              id: uid(),
              createdAt: new Date().toISOString(),
            },
          ].slice(-40),
        }),
      clearChat: () => set({ chat: [] }),
      resetWorkspace: () =>
        set({
          onboardingComplete: false,
          operatorName: "",
          startDate: todayKey(),
          primaryMarket: "All",
          completedTaskIds: [],
          leads: [],
          scores: {},
          chat: [],
        }),
    }),
    {
      name: "britehive-relaunch-agent",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
      partialize: (s) => ({
        onboardingComplete: s.onboardingComplete,
        operatorName: s.operatorName,
        startDate: s.startDate,
        primaryMarket: s.primaryMarket,
        completedTaskIds: s.completedTaskIds,
        leads: s.leads,
        scores: s.scores,
        chat: s.chat,
      }),
    },
  ),
);

export function progressSnapshot(state: HiveState) {
  const total = DAYS.reduce((n, d) => n + d.tasks.length, 0);
  const done = state.completedTaskIds.length;
  const day = currentDayNumber(state.startDate);
  const today = DAYS.find((d) => d.day === day);
  const todayDone =
    today?.tasks.filter((t) => state.completedTaskIds.includes(t.id)).length ??
    0;
  const todayTotal = today?.tasks.length ?? 0;
  return { total, done, day, todayDone, todayTotal, today };
}
