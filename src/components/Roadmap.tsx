import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const roadmap = [
  {
    version: "V1 — SHIPPED",
    status: "Live",
    title: "Local CLI handoff.",
    body: "Transcript packaging, bundle export, target-specific restore prompts. 32 passing tests. Works today across ChatGPT, Claude, Cursor, and Codex.",
    tone: "live"
  },
  {
    version: "V2 — ALPHA",
    status: "In progress",
    title: "MCP-native bundles.",
    body: "Typed authoritative documents. Hybrid restore frame. Abstention discipline. Read-only retrieval. Connect from any MCP-compatible client.",
    tone: "progress"
  },
  {
    version: "CB-Bench — COMING",
    status: "Q3 2026",
    title: "The benchmark for context portability.",
    body: "An open benchmark for context completeness, transfer fidelity, delta correctness, and abstention. The scoreboard for the category.",
    tone: "future"
  }
];

export function Roadmap() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">ROADMAP</p>
          <h2 className="section-heading mt-4">What's shipped, what's next.</h2>
        </FadeIn>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 hidden -translate-y-1/2 lg:block">
            <span className="absolute left-[16%] right-[16%] top-0 h-px bg-border" />
            <span className="absolute left-1/3 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_var(--accent-glow)]" />
            <span className="absolute left-2/3 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_var(--accent-glow)]" />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {roadmap.map((item, index) => (
              <FadeIn key={item.version} delay={index * 0.08} className="relative z-10">
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card-shell relative h-full transition duration-200 hover:border-border-strong hover:shadow-card-hover"
                >
                  <div>
                    {item.tone === "live" ? (
                      <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-[#0A0A0B]">
                        {item.status}
                      </span>
                    ) : item.tone === "progress" ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-fg-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item.status}
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-subtle">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-7 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">{item.version}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-fg">{item.title}</h3>
                  <p className="mt-3 leading-7 text-fg-muted">{item.body}</p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
