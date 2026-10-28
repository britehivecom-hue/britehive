import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Instagram, i as Mail, n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { c as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CWOVLzZO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var CONSULT_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScNwcfhXaxDaRqlSLQciTQCd3DbmlspIEScz7z07yAPd8qplQ/viewform?usp=dialog";
var CONSULT_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLScNwcfhXaxDaRqlSLQciTQCd3DbmlspIEScz7z07yAPd8qplQ/viewform?embedded=true";
var EMAIL = "britehive.com@gmail.com";
var INSTAGRAM = "https://www.instagram.com/britehive.co/";
var GRAPHIC_WORK = [
	{
		id: "visitor",
		src: "/work/the-visitor.jpeg",
		title: "The Visitor",
		kind: "Film poster",
		note: "Psychological horror campaign, A24-toned release art."
	},
	{
		id: "zipbite",
		src: "/work/zipbite.jpeg",
		title: "Zipbite",
		kind: "Social poster",
		note: "High-velocity QSR launch creative for order-now campaigns."
	},
	{
		id: "pinnacle",
		src: "/work/pinnacle.jpeg",
		title: "Pinnacle Properties",
		kind: "Luxury poster",
		note: "Editorial real-estate film still meets type-led identity."
	},
	{
		id: "bloom",
		src: "/work/bloom.jpeg",
		title: "Bloom & Co",
		kind: "Product visual",
		note: "Quiet still-life system for a natural serum line."
	},
	{
		id: "learn",
		src: "/work/learn.jpeg",
		title: "Learn Anywhere",
		kind: "Education poster",
		note: "Youth-first illustration campaign for a learning platform."
	},
	{
		id: "sunrise",
		src: "/work/sunrise.jpeg",
		title: "Sunrise Energy",
		kind: "Logo system",
		note: "Solar mark — sun meeting a panel grid in one lockup."
	},
	{
		id: "ironpeak",
		src: "/work/ironpeak.jpeg",
		title: "Ironpeak",
		kind: "Gym poster",
		note: "Dark motivational series for a performance gym brand."
	},
	{
		id: "eclipse",
		src: "/work/eclipse.jpeg",
		title: "Eclipse Protocol",
		kind: "Cinematic poster",
		note: "Ensemble hero key art with a last-chance tagline stack."
	},
	{
		id: "sandborn",
		src: "/work/sandborn.jpeg",
		title: "Sandborn",
		kind: "Sci-fi poster",
		note: "Desert myth poster — the landscape as the antagonist."
	}
];
var SERVICES = [
	{
		slug: "identity",
		title: "Logo & identity systems",
		body: "Marks, lockups, and a short usage spine so the brand holds on a van, a grid, and a booking screen."
	},
	{
		slug: "visuals",
		title: "Posters & product images",
		body: "Campaign posters, pack-led stills, and social frames that look like one house — not twenty moods."
	},
	{
		slug: "booking",
		title: "Booking & lead apps",
		body: "Mobile-first booking or enquiry flows with real save, slots, and WhatsApp-style confirmation."
	},
	{
		slug: "ops",
		title: "Mini ops systems",
		body: "Customers, orders, stock, and pipelines — small working systems, not a fake full ERP promise."
	},
	{
		slug: "smm",
		title: "Social systems",
		body: "Content direction, templates, and a posting cadence you can actually run. Not unlimited noise."
	},
	{
		slug: "bd",
		title: "Offer & development setup",
		body: "What you sell, who it is for, and the scripts that open the first ten conversations."
	}
];
/** Studio prototypes — fictional operators, AU / UAE / CA. */
var STUDIO_BRANDS = [
	{
		id: "glow",
		name: "Glow Studio",
		market: "Dubai Marina, UAE",
		lane: "Booking app",
		line: "Voice-note bookings replaced with slots, stylists, and a WhatsApp-shaped confirm."
	},
	{
		id: "atelier",
		name: "Atelier Nine",
		market: "Melbourne, AU",
		lane: "Booking app",
		line: "Colour, cut, and keratin in one mobile book flow with Friday hours locked."
	},
	{
		id: "meridian",
		name: "Meridian Physio",
		market: "Abu Dhabi, UAE",
		lane: "Booking app",
		line: "30 / 45 / 60 minute consults, two rooms, next-available shown on the first screen."
	},
	{
		id: "cedar",
		name: "Cedar & Salt",
		market: "Sydney, AU",
		lane: "Social system",
		line: "Fourteen-day grid for a harbour café: morning reels, weekend tables, no filler quotes."
	},
	{
		id: "northside",
		name: "Northside Dental",
		market: "Toronto, CA",
		lane: "Social system",
		line: "Clinic grid that books, not lectures. Stories point at the consult form."
	},
	{
		id: "drift",
		name: "Drift Coffee",
		market: "Gold Coast, AU",
		lane: "Social system",
		line: "Seasonal drop calendar + story CTA to the loyalty waitlist."
	},
	{
		id: "kite",
		name: "Kite & Co",
		market: "Vancouver, CA",
		lane: "Ops system",
		line: "Gift retail: customers, orders, stock alerts — ShopFlow under their name."
	},
	{
		id: "arc",
		name: "Arc HVAC",
		market: "Brisbane, AU",
		lane: "Ops system",
		line: "Job board: request → scheduled → done. Quotes stop dying in the group chat."
	},
	{
		id: "harbour",
		name: "Harbour Home",
		market: "Toronto, CA",
		lane: "Ops system",
		line: "LeadDesk for renovations — new / warm / won, suburb on every card."
	},
	{
		id: "lumen",
		name: "Lumen Dental",
		market: "Calgary, CA",
		lane: "Marketing strategy",
		line: "Offer stack, 30-day campaign, and the one CTA the site actually uses."
	},
	{
		id: "vesper",
		name: "Vesper Interiors",
		market: "Dubai, UAE",
		lane: "Marketing strategy",
		line: "Showroom launch: three offers, one Instagram spine, enquiry form as the close."
	},
	{
		id: "pinnacle-m",
		name: "Pinnacle Properties",
		market: "Melbourne, AU",
		lane: "Marketing strategy",
		line: "Listing campaign language that matches the luxury poster — not a stock slogan."
	}
];
function HiveMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 72",
		className: cn("text-primary", className),
		fill: "currentColor",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 22 L32 6 L56 22 L48 22 L32 12 L16 22 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 36 L32 20 L54 36 L46 36 L32 26 L18 36 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 50 L32 36 L50 50 L42 50 L32 42 L22 50 Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 54 L32 48 L40 54 L40 64 L32 70 L24 64 Z" })
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:enabled:scale-press", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-card-elevated text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-foreground hover:bg-card-elevated",
			ghost: "text-muted hover:bg-card-elevated hover:text-foreground",
			honey: "bg-honey text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var wrap = "overflow-hidden rounded-xs shadow-[0_0_0_1px_rgb(244_247_246_/_0.12)]";
function FlagAU({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 36 24",
		className: cn(wrap, className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "36",
				height: "24",
				fill: "#012169"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0 L16 10.5 V0 H0 Z",
				fill: "#012169"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0 L18 12 L0 12 Z",
				fill: "#012169"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "18",
				height: "12",
				fill: "#012169"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0 L18 12 M18 0 L0 12",
				stroke: "#fff",
				strokeWidth: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0 L18 12 M18 0 L0 12",
				stroke: "#C8102E",
				strokeWidth: "1.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.2",
				width: "3.6",
				height: "12",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "4.4",
				width: "18",
				height: "3.2",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				width: "2",
				height: "12",
				fill: "#C8102E"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "5.2",
				width: "18",
				height: "1.6",
				fill: "#C8102E"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "26",
				cy: "15",
				r: "1.3",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30.5",
				cy: "8.5",
				r: "0.9",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22.5",
				cy: "9",
				r: "0.7",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "16.5",
				r: "0.7",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "19",
				r: "0.55",
				fill: "#fff"
			})
		]
	});
}
function FlagAE({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 36 24",
		className: cn(wrap, className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "36",
				height: "8",
				fill: "#00732F"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "8",
				width: "36",
				height: "8",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "16",
				width: "36",
				height: "8",
				fill: "#000"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "10",
				height: "24",
				fill: "#FF0000"
			})
		]
	});
}
function FlagCA({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 36 24",
		className: cn(wrap, className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "36",
				height: "24",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "9",
				height: "24",
				fill: "#D52B1E"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "27",
				width: "9",
				height: "24",
				fill: "#D52B1E"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#D52B1E",
				d: "M18 5.2l1.1 3.2 3.4-.2-2.7 2.2 1 3.2L18 11.8l-2.8 1.8 1-3.2-2.7-2.2 3.4.2Z"
			})
		]
	});
}
function MarketFlags({ className }) {
	const items = [
		{
			Flag: FlagAU,
			label: "Australia"
		},
		{
			Flag: FlagAE,
			label: "UAE"
		},
		{
			Flag: FlagCA,
			label: "Canada"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("flex flex-wrap items-center gap-3", className),
		children: items.map(({ Flag, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "h-4 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
		}, label))
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/systems",
		label: "Systems"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiveMark, { className: "h-8 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold tracking-tight",
								children: ["Brite", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "hive"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							children: NAV.map((item) => {
								const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground", active && "text-foreground"),
									children: item.label
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONSULT_FORM,
									target: "_blank",
									rel: "noreferrer",
									children: "Free consultation"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md text-foreground lg:hidden",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-card px-4 py-4 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-1",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-md px-3 py-3 text-base text-foreground",
							onClick: () => setOpen(false),
							children: item.label
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CONSULT_FORM,
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-md bg-primary px-3 py-3 text-center font-medium text-primary-foreground",
							onClick: () => setOpen(false),
							children: "Free consultation"
						})]
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-20 border-t border-border bg-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiveMark, { className: "h-7 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-bold",
										children: "Britehive"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm text-muted",
									children: "Bookable brands for service businesses. Design that holds, systems that take the next client."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketFlags, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-subtle",
							children: "Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-muted hover:text-foreground",
								children: item.label
							}) }, item.to))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-subtle",
							children: "Talk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${EMAIL}`,
									className: "inline-flex items-center gap-2 text-muted hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), EMAIL]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: INSTAGRAM,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 text-muted hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }), "@britehive.co"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONSULT_FORM,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 text-primary",
									children: "Book a free consultation"
								}) })
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/70 py-5 text-center text-xs text-subtle",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Britehive. Built for operators who want to look expensive and actually get booked."
					]
				})]
			})
		]
	});
}
var styles_default = "/assets/styles-BCoquvR_.css";
var APP_NAME = "Britehive";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Britehive builds bookable brands for service businesses in Australia, the UAE, and Canada — identity, posters, booking apps, and mini ops systems."
			},
			{
				name: "theme-color",
				content: "#071c21"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-BInqepox.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./about-CbMzAi43.mjs");
var Route$4 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-BO_rSWW6.mjs");
var Route$3 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./services-DV3tK0HO.mjs");
var Route$2 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./systems-A8NKCfHG.mjs");
var Route$1 = createFileRoute("/systems")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./work-BXZFxNUD.mjs");
var Route = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	}),
	SystemsRoute: Route$1.update({
		id: "/systems",
		path: "/systems",
		getParentRoute: () => Route$6
	}),
	WorkRoute: Route.update({
		id: "/work",
		path: "/work",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { CONSULT_FORM as a, INSTAGRAM as c, cn as d, CONSULT_EMBED as i, SERVICES as l, MarketFlags as n, EMAIL as o, Button as r, GRAPHIC_WORK as s, router_exports as t, STUDIO_BRANDS as u };
