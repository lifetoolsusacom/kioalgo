import kioAlgoLogo from "@/assets/kio_algo_logo.png";
import rapid3Logo from "@/assets/RAPID3PNG1.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Zap } from "lucide-react";

const faqs = [
  {
    q: "What happens after I purchase RAPID3?",
    a: "After payment, you'll be redirected to enter your TradingView username. Access is granted instantly — find RAPID3 in Invite-Only Scripts on TradingView and add it to your chart.",
  },
  {
    q: "Does RAPID3 repaint its signals?",
    a: "Never. All signals lock on candle close and never change. What you see is what happened.",
  },
  {
    q: "Will I win every trade?",
    a: "No indicator wins every trade — and RAPID3 never promises that. It identifies high-probability setups, helps you manage risk, and gives you clearer signals to act on. Your execution makes the difference.",
  },
  {
    q: "Do I need to adjust the settings myself?",
    a: "No setup required. RAPID3 works right out of the box — add it to your chart and start trading instantly. Want more? Use the built-in results table to find your best setup, or join VIP Discord to access top-performing configurations shared by members.",
  },
  {
    q: "Does it work on every timeframe?",
    a: "From 1m scalps to 1H intraday trades and Daily big moves — RAPID3 adapts to them all. One indicator. Every market. Every timeframe.",
  },
  {
    q: "What markets does RAPID3 work on?",
    a: "Crypto, forex and stocks. RAPID3 works on any market available on TradingView.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. Cancel from your dashboard anytime. No questions asked, no hidden fees.",
  },
  {
    q: "Do I get support if I need help?",
    a: "Yes — 24/7 live chat, step-by-step setup guides, and VIP Discord access are included with every plan.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold tracking-widest text-green-bright">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly">("monthly");
  const isQuarterly = billingPeriod === "quarterly";

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

  const annualPerks = [
    "Full year of RAPID3 signals & updates",
    "All future KioAlgo indicators — included for 12 months",
    "Beta access to every new version first",
    "Direct input on future features",
    "Priority support & annual roadmap access",
  ];

  const accent = isQuarterly
    ? {
        label: "#FF4040",
        border: "#FF2B2B",
        glow: "rgba(255,43,43,0.35)",
        priceFrom: "#FF3B3B",
        priceTo: "#FF9D9D",
        button: "linear-gradient(135deg, #FF2B2B, #FF5757)",
        buttonGlow:
          "0 0 20px rgba(255,43,43,0.85), 0 12px 40px -8px rgba(255,43,43,0.8)",
        check: "#FF4040",
      }
    : {
        label: "#1769FF",
        border: "#1769FF",
        glow: "rgba(23,105,255,0.35)",
        priceFrom: "#1769FF",
        priceTo: "#9DC2FF",
        button: "linear-gradient(135deg, #1769FF, #3B8CFF)",
        buttonGlow:
          "0 0 20px rgba(23,105,255,0.85), 0 12px 40px -8px rgba(23,105,255,0.8)",
        check: "#1769FF",
      };

  const priceFont = '"Arial Narrow", "Roboto Condensed", Impact, Haettenschweiler, sans-serif';

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
              color: isQuarterly ? "var(--muted-foreground)" : "var(--foreground)",
            }}
          >
            Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isQuarterly}
            onClick={() => setBillingPeriod(isQuarterly ? "monthly" : "quarterly")}
            className="relative h-8 w-[60px] shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{
              backgroundColor: isQuarterly
                ? "rgba(255, 43, 43, 0.18)"
                : "rgba(23, 105, 255, 0.18)",
              boxShadow: isQuarterly
                ? "0 0 18px rgba(255, 43, 43, 0.35), inset 0 0 0 1px rgba(255, 43, 43, 0.4)"
                : "0 0 18px rgba(23, 105, 255, 0.35), inset 0 0 0 1px rgba(23, 105, 255, 0.4)",
              transition: "background-color 350ms ease-in-out, box-shadow 350ms ease-in-out",
            }}
          >
            <motion.span
              className="absolute top-1 left-1 size-6 rounded-full"
              animate={{
                x: isQuarterly ? 28 : 0,
                background: isQuarterly
                  ? "linear-gradient(135deg, #FF2B2B, #FF6B6B)"
                  : "linear-gradient(135deg, #1769FF, #5B9CFF)",
                boxShadow: isQuarterly
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
              color: isQuarterly ? "#FF4040" : "var(--muted-foreground)",
            }}
          >
            Four-Month Access
          </span>

          <span className="rounded-full bg-green/25 px-3 py-1 text-xs font-bold text-green-bright">
            SAVE $40
          </span>
        </div>

        <div className="mx-auto mt-5 grid max-w-5xl items-stretch gap-3 lg:grid-cols-2">
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
                    key={isQuarterly ? "quarterly-label" : "monthly-label"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-xs font-extrabold tracking-widest"
                    style={{ color: accent.label }}
                  >
                    {isQuarterly ? "FOUR-MONTH ACCESS" : "MONTHLY"}
                  </motion.span>
                </AnimatePresence>

                <AnimatePresence>
                  {isQuarterly && (
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

              <p className="mt-1 text-xs font-bold text-muted-foreground">Cancel any time.</p>

              <div className="relative mt-2.5 min-h-[68px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isQuarterly ? "quarterly-price" : "monthly-price"}
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
                      {isQuarterly ? "$49.99" : "$59.99"}
                    </p>

                    <p className="mt-0.5 text-sm font-extrabold text-muted-foreground">
                      /month
                      {isQuarterly && (
                        <span className="ml-2 font-extrabold text-[#FF6B6B]">
                          $199.99 billed every 4 months
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
                    <motion.span animate={{ color: accent.check }} transition={{ duration: 0.4 }}>
                      <Check className="mt-0.5 size-3.5 shrink-0" />
                    </motion.span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              href="#top"
              className="mt-auto flex h-[50px] w-full items-center justify-center gap-2 rounded-full text-base font-bold text-white"
              animate={{
                background: accent.button,
                boxShadow: accent.buttonGlow,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileHover={{ scale: 1.01 }}
            >
              Get Instant Access <ArrowRight className="size-4" />
            </motion.a>

            <p className="mt-2 flex h-[18px] items-center justify-center gap-1.5 text-center text-xs font-bold text-amber-400">
              Secure your access now.
            </p>
          </motion.div>

          <div
            className="relative flex h-full flex-col rounded-[22px] border p-5 backdrop-blur"
            style={{
              backgroundColor: "#0b0a12",
              borderColor: "#3DDC97",
              boxShadow: "0 0 32px -12px rgba(61,220,151,0.4)",
            }}
          >
            <span
              className="absolute -top-3 left-5 rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #3DDC97, #8B2CFF)",
              }}
            >
              BEST VALUE
            </span>

            <div className="flex flex-1 flex-col">
              <p
                className="bg-clip-text text-xs font-extrabold tracking-widest text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3DDC97, #B98CFF)",
                }}
              >
                ANNUAL
              </p>

              <p className="mt-1 text-xs font-bold text-muted-foreground">
                12 Months of Full Access. Renew Yearly.
              </p>

              <p
                className={`mt-2.5 ${priceClass}`}
                style={{
                  backgroundImage: "linear-gradient(135deg, #3DDC97, #8B2CFF)",
                  WebkitTextStroke: "0.5px rgba(255,255,255,0.15)",
                  fontFamily: priceFont,
                }}
              >
                $389
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-muted-foreground">
                billed annually
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
                    <Check className="mt-0.5 size-3.5 shrink-0 text-[#3DDC97]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-border/60 pt-3">
                <ul className="space-y-1.5">
                {annualPerks.map((perk) => (
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
              className="mt-auto flex h-[50px] w-full items-center justify-center gap-2 rounded-full text-base font-bold text-white transition-transform duration-300 hover:scale-[1.01]"
              style={{
                background: "linear-gradient(135deg, #3DDC97, #8B2CFF)",
                boxShadow:
                  "0 0 20px rgba(139,44,255,0.6), 0 12px 40px -8px rgba(61,220,151,0.6)",
              }}
            >
              Get Annual Access <ArrowRight className="size-4" />
            </a>

            <p className="mt-2 flex h-[18px] items-center justify-center gap-1.5 text-center text-xs font-bold text-amber-400">
              ⚠️ GET 10% DISCOUNT COUPON: RAPID10 ⚠️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4, 8);

  const renderFaqItem = (faq: (typeof faqs)[number], index: number) => {
    const isOpen = open === index;

    return (
      <div
        key={faq.q}
        className={`overflow-hidden rounded-2xl border bg-surface/70 transition-all duration-300 ${
          isOpen
            ? "border-primary/60 shadow-[var(--shadow-glow-green)]"
            : "border-border hover:border-primary/35"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(isOpen ? null : index)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
        >
          <span className="text-sm font-bold text-foreground md:text-base">{faq.q}</span>

          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-primary/10 text-xl font-medium leading-none text-green-bright transition-all duration-300 ${
              isOpen ? "rotate-45 bg-primary/20 shadow-[0_0_16px_var(--green-bright)]" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-green-bright">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-5xl">
              Still have questions?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Everything you need to know about RAPID3.
            </p>
          </div>

          <a
            href="#pricing"
            className="inline-flex w-fit items-center gap-2 border-t border-primary/30 pt-4 text-sm font-bold text-green-bright transition-colors hover:text-foreground"
          >
            Claim Early Access <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            {leftColumn.map((faq, index) => renderFaqItem(faq, index))}
          </div>

          <div className="space-y-4">
            {rightColumn.map((faq, index) => renderFaqItem(faq, index + 4))}
          </div>
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
          Join the traders who stopped guessing and started trading with confidence.
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
  const navigation = [
    ["Why RAPID3?", "#why"],
    ["Features", "#features"],
    ["How it works", "#how"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  const socials = [
    ["YouTube", "#"],
    ["Instagram", "#"],
  ];

  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)_minmax(0,0.7fr)]">
          <div className="text-center md:text-left">
            <a href="#top" className="inline-flex items-center gap-2">
              <img
                src={rapid3Logo}
                alt="RAPID3"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground md:max-w-xs">
              Powered trading indicator. Real-time signals, auto TP/SL, zero repaints.
            </p>

            <a
              href="#top"
              className="mt-16 flex items-center justify-center gap-2.5 md:justify-start"
              aria-label="Voltar ao topo"
            >
              <span className="text-sm font-medium text-muted-foreground">Powered by</span>
              <img
                src={kioAlgoLogo}
                alt="KioAlgo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-foreground">Navigation</h3>
            <nav className="mt-4 flex flex-col items-center gap-2.5 md:items-start">
              {navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-green-bright"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-foreground">Socials</h3>
            <nav className="mt-4 flex flex-col items-center gap-2.5 md:items-start">
              {socials.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-green-bright"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-[9px] text-muted-foreground/70">
            © 2026 KioAlgo. All Rights Reserved. · Built for TradingView · Available worldwide
          </p>

          <div className="mx-auto mt-6 max-w-4xl space-y-3 text-center text-[9px] leading-relaxed text-muted-foreground/70 sm:text-[11px]">
            <p>
              <span className="font-semibold text-muted-foreground">Risk Disclaimer:</span> Trading financial instruments — including forex, cryptocurrency, stocks, futures, and indices — involves substantial risk of loss and may not be suitable for every investor. Most retail traders lose money. Before trading, carefully evaluate your financial circumstances, investment objectives, and personal risk tolerance.
            </p>

            <p>
              RAPID3 and all related tools, signals, educational materials, and community resources
              are provided solely for informational and educational purposes. Nothing on this
              website, in the Discord community, or in communications from the KioAlgo team
              constitutes financial advice or a recommendation to buy or sell any financial
              instrument. All content is hypothetical and illustrative, intended to demonstrate
              product functionality, and should never be viewed as a promise or guarantee of future
              performance, results, or profits.
            </p>

            <p>
              Past performance of any signal, strategy, or trading result presented on this platform
              — including backtested results — is not indicative of future performance. Backtested
              and simulated results have inherent limitations: they are created using historical
              data and hindsight and may not account for real-world factors such as slippage,
              liquidity limitations, spreads, or execution delays.
            </p>

            <p>
              Testimonials and results shared by RAPID3 users represent individual experiences and
              should not be considered typical or representative of expected results. Individual
              outcomes will vary depending on market conditions, trading decisions, execution,
              account size, and personal risk management practices.
            </p>

            <p>
              Charts and visual examples on this site are powered by{" "}
              <a
                href="https://www.tradingview.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-muted-foreground underline decoration-primary/60 underline-offset-2 transition-colors hover:text-green-bright"
              >
                TradingView®
              </a>
              . TradingView® is a registered trademark of TradingView, Inc. RAPID3 is an
              independent third-party tool designed for use within the TradingView platform.
              TradingView® is not affiliated with KioAlgo or any of the services described herein.
            </p>

            <p className="pt-1 text-[10px] font-semibold text-muted-foreground sm:text-[11px]">
              Trade responsibly. Never risk money you cannot afford to lose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function HomeBottom() {
  return (
    <>
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
