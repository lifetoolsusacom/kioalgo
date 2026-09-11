import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Check,
  ChevronDown,
  Layers,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

import texture from "@/assets/rapid3-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAPID3 — Stop Guessing. Start Executing." },
      {
        name: "description",
        content:
          "RAPID3 is a complete trading system: non-repainting signals, automatic TP/SL, smart trailing and a built-in backtest table on every chart.",
      },
      { property: "og:title", content: "RAPID3 — Stop Guessing. Start Executing." },
      {
        property: "og:description",
        content:
          "Non-repainting signals with auto take-profit, stop-loss and live backtest proof across crypto, forex, indices and metals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const markets = [
  "BTC/USD",
  "ETH/USD",
  "SOL/USD",
  "XRP/USD",
  "XAU/USD",
  "XAG/USD",
  "WTI/USD",
  "NAS100",
  "SPX500",
  "US30",
  "GER40",
  "UK100",
  "JPN225",
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "USD/CAD",
  "GBP/JPY",
  "EUR/GBP",
];

const features = [
  {
    icon: Target,
    title: "You'll know exactly what to do",
    body: "Every signal arrives with entry, TP1, TP2 and stop loss drawn on your chart. No decisions left over — just execute.",
  },
  {
    icon: ShieldCheck,
    title: "Profits that protect themselves",
    body: "Smart Trail moves your stop as price runs in your favour, so you keep more of every winning trade automatically.",
  },
  {
    icon: BellRing,
    title: "Never miss a move again",
    body: "Add alerts to entries and receive notifications as soon as a new setup is identified—without having to spend the day monitoring the chart.",
  },
  {
    icon: Layers,
    title: "See the bigger picture instantly",
    body: "The multi-timeframe panel shows trend direction across twelve timeframes at once, so you trade with the trend.",
  },
  {
    icon: LineChart,
    title: "Proof built into every chart",
    body: "The Results table reports win rate on any symbol and timeframe before you risk a dollar.",
  },
  {
    icon: Sparkles,
    title: "One single price. All-inclusive",
    body: "No upsells or add-ons. Signals, risk management, alerts, and results are included from day one.",
  },
];

const steps = [
  {
    n: "1",
    title: "Unlock access",
    body: "Choose your plan, complete checkout, and enter your TradingView username. Your invite arrives instantly.",
  },
  {
    n: "2",
    title: "Find RAPID3",
    body: "Search \"RAPID3\" in TradingView's indicator list, add it to your favorites, and apply it to any chart instantly.",
  },
  {
    n: "3",
    title: "Start trading",
    body: "Signals, levels and risk management draw themselves. Your only job is to execute the plan.",
  },
];

const others = [
  "Signals repaint after losses — you never know if they were real",
  "No TP/SL — you're left guessing every exit",
  "No backtest — no proof it actually works",
  "One market, one timeframe — limited and inflexible",
  "No community — you're on your own after purchase",
  "Support disappears when you need it most",
];

const ours = [
  "100% non-repainting — all signals confirmed at candle close",
  "Auto TP/SL at 1:1 & 1:1.5 + customization options",
  "Built-in resultados table — see win rate & profit trades live",
  "Any market, any timeframe — crypto, forex, stocks",
  "VIP Discord — Members share their best setups for every asset, every day.",
  "24/7 live chat + setup video guides included forever",
];

const faqs = [
  {
    q: "What happens after I get access?",
    a: "You'll enter your TradingView username at checkout and the indicator invite is granted within minutes. A setup guide and the member room link arrive by email straight away.",
  },
  {
    q: "Does RAPID3 repaint its signals?",
    a: "No. Every signal is confirmed and locked on candle close, so what you see in history is exactly what you would have traded live.",
  },
  {
    q: "Which markets does it work on?",
    a: "Crypto, forex, indices, metals, energies and stocks — anything with a chart and reliable price data on TradingView.",
  },
  {
    q: "Does it work on every timeframe?",
    a: "Yes. The logic adapts from the 1-minute chart to the daily. Most members trade the 15-minute and 1-hour charts.",
  },
  {
    q: "Do I need to tune the settings myself?",
    a: "No. Defaults are tuned to work out of the box. Advanced inputs are there if you want to shape risk targets or sensitivity.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes, the monthly plan can be cancelled in one click and you keep access until the end of the billing period.",
  },
  {
    q: "Will I win every trade?",
    a: "No tool wins every trade, and anyone promising that is lying. RAPID3 gives you a repeatable process with the numbers shown up front.",
  },
];

function Nav() {
  const links = [
    ["Why RAPID3", "#why"],
    ["Features", "#features"],
    ["How it works", "#how"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/20 ring-1 ring-primary/40">
            <Zap className="size-4 text-green-bright" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">RAPID3</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_0_28px_0_var(--green-bright)] transition-transform hover:scale-[1.04]"
        >
          Get access <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-60" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 text-center md:pt-28">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
          <Lock className="size-3.5 text-green-bright" /> LAUNCH PRICING
          <span className="text-foreground">· 8 founding spots</span>
        </div>
        <h1 className="mx-auto mt-8 max-w-4xl text-5xl leading-[0.95] font-extrabold uppercase sm:text-6xl md:text-7xl">
          Stop guessing.
          <br />
          <span className="text-gradient">Start executing.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground md:text-lg">
          Precision signals with automatic take-profit and stop-loss, zero repaints, and a built-in
          backtest that shows exactly how RAPID3 performs — before you risk a single dollar.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-green-bright" /> TradingView
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-blue-bright" /> Prop firm ready
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-green-bright" /> Early access
          </span>
        </div>
        <div className="mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow-green)] transition-transform hover:scale-[1.02]"
          >
            Claim early access <ArrowRight className="size-5" />
          </a>
        </div>
        <ChartMock />
      </div>
    </section>
  );
}

function ChartMock() {
  const candles = [
    38, 44, 36, 52, 47, 61, 55, 68, 60, 74, 66, 80, 71, 63, 58, 69, 77, 85, 79, 90,
  ];
  return (
    <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-[var(--shadow-glow-blue)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold">BTC/USD</span>
          <span className="rounded bg-secondary px-2 py-0.5 text-muted-foreground">1H</span>
          <span className="flex items-center gap-1 text-green-bright">
            <TrendingUp className="size-3.5" /> Trend up
          </span>
        </div>
        <span className="hidden text-muted-foreground sm:block">RAPID3 · non-repainting</span>
      </div>
      <div className="relative grid gap-4 p-4 md:grid-cols-[1fr_220px]">
        <div className="relative h-56 rounded-xl bg-ink/60 p-3 md:h-72">
          <div className="absolute inset-x-3 top-8 border-t border-dashed border-green-bright/60">
            <span className="absolute -top-2.5 right-0 rounded bg-green/40 px-1.5 text-[10px] font-semibold text-green-bright">
              TP2
            </span>
          </div>
          <div className="absolute inset-x-3 top-1/3 border-t border-dashed border-green-bright/40">
            <span className="absolute -top-2.5 right-0 rounded bg-green/30 px-1.5 text-[10px] font-semibold text-green-bright">
              TP1
            </span>
          </div>
          <div className="absolute inset-x-3 bottom-10 border-t border-dashed border-destructive/60">
            <span className="absolute -top-2.5 right-0 rounded bg-destructive/25 px-1.5 text-[10px] font-semibold text-destructive">
              SL
            </span>
          </div>
          <div className="relative flex h-full items-end gap-1.5">
            {candles.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i % 4 === 2 ? "bg-destructive/60" : "bg-green-bright/70"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-border bg-ink/60 p-3">
            <p className="text-[11px] font-semibold tracking-wider text-muted-foreground">
              BACKTEST
            </p>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Profit factor</span>
                <span className="font-semibold text-green-bright">1.31</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Win rate</span>
                <span className="font-semibold text-green-bright">71%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trades</span>
                <span className="font-semibold">248</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-ink/60 p-3">
            <p className="text-[11px] font-semibold tracking-wider text-muted-foreground">
              MTF PANEL
            </p>
            <div className="mt-2 grid grid-cols-3 gap-1.5 text-[10px] font-semibold">
              {["5m", "15m", "1H", "4H", "1D", "1W"].map((tf, i) => (
                <span
                  key={tf}
                  className={`rounded px-1.5 py-1 text-center ${
                    i === 1
                      ? "bg-destructive/20 text-destructive"
                      : "bg-green/30 text-green-bright"
                  }`}
                >
                  {tf}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <section className="border-y border-border bg-surface/40 py-5">
      <p className="mb-4 text-center text-xs font-semibold tracking-widest text-muted-foreground">
        WORKS ON EVERY MARKET
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max gap-3">
          {[...markets, ...markets].map((m, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-ink/60 px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold tracking-widest text-green-bright">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Features() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="WHY RAPID3"
          title="A complete system, not just signals"
          sub="Entry. Exit. Risk. Proof. All in one indicator, so nothing is left to interpretation."
        />
        <div id="features" className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-surface/70 p-6 transition-colors hover:border-primary/50 hover:bg-surface-2/60"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <f.icon className="size-5 text-green-bright" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="relative overflow-hidden py-24">
      <img
        src={texture}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From checkout to first signal in five minutes"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur">
              <span className="font-display text-4xl font-extrabold text-primary/70">{s.n}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="COMPARISON"
          title="RAPID3 vs. the rest"
          sub="See exactly what you've been missing."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/40 p-7">
            <h3 className="text-lg font-bold text-muted-foreground">Other indicators</h3>
            <ul className="mt-5 space-y-3">
              {others.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-primary/40 bg-surface-2/60 p-8 md:p-9 shadow-[var(--shadow-glow-green)] md:scale-[1.03]">
            <h3 className="text-xl md:text-2xl font-bold">RAPID3</h3>
            <ul className="mt-6 space-y-4">
              {ours.map((o) => (
                <li key={o} className="flex gap-3 text-sm md:text-base">
                  <Check className="mt-0.5 size-4 shrink-0 text-green-bright" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const isAnnual = billingPeriod === "annual";

  const planFeatures = [
    "Full RAPID3 indicator access",
    "Real-time BUY/SELL signals",
    "Auto TP/SL — 1:1 & 1:1.5 + Customization options",
    "Trend Cloud + Reversal Zones",
    "Built-in results table",
    "MTF Panel — 12 timeframes",
    "Real-time TradingView alerts",
    "VIP Discord community",
    "Setup & strategy video guides",
    "24/7 live chat support",
    "All future updates included",
  ];

  const lifetimePerks = [
    "Locked at $439 forever — last Founding Members pricing",
    "All future KioAlgo indicators — free forever",
    "Beta access to every new version first",
    "Direct input on future features",
    "Founding Member status — forever",
  ];

  const accent = isAnnual
    ? {
        label: "#FF4040",
        border: "#FF2B2B",
        glow: "rgba(255,43,43,0.35)",
        priceFrom: "#FF3B3B",
        priceTo: "#FF9D9D",
        button: "linear-gradient(135deg, #FF2B2B, #FF5757)",
        buttonGlow: "0 0 20px rgba(255,43,43,0.85), 0 12px 40px -8px rgba(255,43,43,0.8)",
        check: "#FF4040",
      }
    : {
        label: "#1769FF",
        border: "#1769FF",
        glow: "rgba(23,105,255,0.35)",
        priceFrom: "#1769FF",
        priceTo: "#9DC2FF",
        button: "linear-gradient(135deg, #1769FF, #3B8CFF)",
        buttonGlow: "0 0 20px rgba(23,105,255,0.85), 0 12px 40px -8px rgba(23,105,255,0.8)",
        check: "#1769FF",
      };

  const priceFont =
    '"Arial Narrow", "Roboto Condensed", Impact, Haettenschweiler, sans-serif';

  const priceClass =
    "bg-clip-text text-[52px] font-black leading-[0.82] tracking-[-0.07em] text-transparent drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-[60px]";

  return (
    <section id="pricing" className="relative py-10">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="PRICING" title="Choose your plan" sub="Cancel any time." />

        <div className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur">
          <span
            className="text-sm font-bold transition-colors duration-300"
            style={{
              color: isAnnual ? "var(--muted-foreground)" : "var(--foreground)",
            }}
          >
            Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            onClick={() => setBillingPeriod(isAnnual ? "monthly" : "annual")}
            className="relative h-8 w-[60px] shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{
              backgroundColor: isAnnual
                ? "rgba(255, 43, 43, 0.18)"
                : "rgba(23, 105, 255, 0.18)",
              boxShadow: isAnnual
                ? "0 0 18px rgba(255, 43, 43, 0.35), inset 0 0 0 1px rgba(255, 43, 43, 0.4)"
                : "0 0 18px rgba(23, 105, 255, 0.35), inset 0 0 0 1px rgba(23, 105, 255, 0.4)",
              transition: "background-color 350ms ease-in-out, box-shadow 350ms ease-in-out",
            }}
          >
            <motion.span
              className="absolute top-1 left-1 size-6 rounded-full"
              animate={{
                x: isAnnual ? 28 : 0,
                background: isAnnual
                  ? "linear-gradient(135deg, #FF2B2B, #FF6B6B)"
                  : "linear-gradient(135deg, #1769FF, #5B9CFF)",
                boxShadow: isAnnual
                  ? "0 0 12px rgba(255,43,43,0.7)"
                  : "0 0 12px rgba(23,105,255,0.7)",
              }}
              whileTap={{ scale: 0.85 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
          </button>

          <span
            className="text-sm font-bold transition-colors duration-300"
            style={{
              color: isAnnual ? "#FF4040" : "var(--muted-foreground)",
            }}
          >
            Annual
          </span>

          <span className="rounded-full bg-green/25 px-3 py-1 text-xs font-bold text-green-bright">
            SAVE $300
          </span>
        </div>

        <div className="mx-auto mt-5 grid max-w-5xl items-stretch gap-3 lg:grid-cols-2">
          {/* Monthly / Annual card */}
          <motion.div
            className="relative flex h-full flex-col rounded-[22px] border p-5 backdrop-blur"
            animate={{
              borderColor: accent.border,
              boxShadow: `0 0 32px -12px ${accent.glow}`,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ backgroundColor: "#0b0a12" }}
          >
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isAnnual ? "annual-label" : "monthly-label"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-xs font-extrabold tracking-widest"
                    style={{ color: accent.label }}
                  >
                    {isAnnual ? "ANNUAL" : "MONTHLY"}
                  </motion.span>
                </AnimatePresence>

                <AnimatePresence>
                  {isAnnual && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="rounded-full bg-[#FF6B00]/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#FF9142]"
                    >
                      MOST POPULAR
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-1 text-xs font-bold text-muted-foreground">
                Cancel any time.
              </p>

              <div className="relative mt-2.5 min-h-[68px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isAnnual ? "annual-price" : "monthly-price"}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p
                      className={priceClass}
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${accent.priceFrom}, ${accent.priceTo})`,
                        WebkitTextStroke: "0.5px rgba(255,255,255,0.15)",
                        fontFamily: priceFont,
                      }}
                    >
                      {isAnnual ? "$24.92" : "$49.99"}
                    </p>

                    <p className="mt-0.5 text-sm font-extrabold text-muted-foreground">
                      /month
                      {isAnnual && (
                        <span className="ml-2 font-extrabold text-[#FF6B6B]">
                          $299 billed annually
                        </span>
                      )}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="mt-3 text-xs font-bold tracking-widest text-muted-foreground">
                EVERYTHING INCLUDED
              </p>

              <ul className="mt-2 space-y-1.5">
                {planFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-[13px] font-bold leading-snug text-foreground/95"
                  >
                    <motion.span
                      animate={{ color: accent.check }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0" />
                    </motion.span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              href="#top"
              className="mt-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-full text-base font-bold text-white"
              animate={{
                background: accent.button,
                boxShadow: accent.buttonGlow,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileHover={{ scale: 1.01 }}
            >
              Get Instant Access <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>

          {/* Lifetime card */}
          <div
            className="relative flex h-full flex-col rounded-[22px] border p-5 backdrop-blur"
            style={{
              backgroundColor: "#0b0a12",
              borderColor: "#8B2CFF",
              boxShadow: "0 0 32px -12px rgba(139,44,255,0.4)",
            }}
          >
            <span className="absolute -top-3 left-5 rounded-full bg-[#8B2CFF] px-3 py-1 text-xs font-bold text-white">
              BEST VALUE
            </span>

            <div className="flex flex-1 flex-col">
              <p className="text-xs font-extrabold tracking-widest text-[#B98CFF]">
                LIFETIME
              </p>

              <p className="mt-1 text-xs font-bold text-muted-foreground">
                Own It Forever. No Renewals Ever.
              </p>

              <p
                className={`mt-2.5 ${priceClass}`}
                style={{
                  backgroundImage: "linear-gradient(135deg, #F3E8FF, #8B2CFF)",
                  WebkitTextStroke: "0.5px rgba(255,255,255,0.15)",
                  fontFamily: priceFont,
                }}
              >
                $439
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-muted-foreground">
                one-time payment
              </p>

              <p className="mt-3 text-xs font-bold tracking-widest text-muted-foreground">
                EVERYTHING INCLUDED, PLUS
              </p>

              <ul className="mt-2 space-y-1.5">
                {planFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-[13px] font-bold leading-snug text-foreground/95"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-[#B98CFF]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-border/60 pt-3">
                <ul className="space-y-1.5">
                  {lifetimePerks.map((perk) => (
                    <li
                      key={perk}
                      className="flex gap-2 text-[13px] font-bold leading-snug text-foreground/95"
                    >
                      <Zap className="mt-0.5 size-3.5 shrink-0 text-yellow-400" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#top"
              className="mt-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-full text-base font-bold text-white transition-transform duration-300 hover:scale-[1.01]"
              style={{
                background: "linear-gradient(135deg, #8B2CFF, #B266FF)",
                boxShadow: "0 0 20px rgba(139,44,255,0.85), 0 12px 40px -8px rgba(139,44,255,0.8)",
              }}
            >
              Get Lifetime Access <ArrowRight className="size-4" />
            </a>

            <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-xs font-bold text-amber-400">
              ⚠️ Only 1 of 8 Founding spots remaining
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title="Any questions left?"
          sub="Everything you need to know about RAPID3."
        />
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/60">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold"
              >
                {f.q}
                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">Ready to trade smarter?</h2>
        <p className="mt-4 text-muted-foreground">
          Join the traders who stopped guessing and started executing with an edge.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-[var(--shadow-glow-green)] transition-transform hover:scale-[1.02]"
        >
          Claim early access <ArrowRight className="size-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2 font-display font-extrabold text-foreground">
          <Zap className="size-4 text-green-bright" /> RAPID3
        </div>
        <p className="max-w-md text-center text-xs md:text-right">
          Trading involves risk. RAPID3 is an analysis tool, not financial advice. Past performance
          does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <How />
        <Compare />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
