import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const steps = [
  {
    number: "01",
    label: "SNAPSHOT",
    title: "Capture operational state, not chat.",
    body: "Contexport records what your session actually did: current task, decisions made, commands run, tests passing or failing, files touched, environment, and the limits of what was captured."
  },
  {
    number: "02",
    label: "BUNDLE",
    title: "Typed, evidence-backed export.",
    body: "A versioned directory of authoritative documents on disk. Every fact is tagged with provenance and trust level. Not a giant prompt — a real artifact you can inspect and diff."
  },
  {
    number: "03",
    label: "RESTORE",
    title: "Read by any MCP-compatible agent.",
    body: "The destination model fetches typed docs by name, not similarity search. When something wasn't captured, it abstains rather than hallucinating. The restore is read-only, deterministic, and small."
  }
];

export function HowItWorks() {
  return (
    <section className="section-pad bg-bg-elevated/50">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 className="section-heading mt-4">Three steps. One canonical bundle.</h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08} className="h-full">
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-shell group relative h-full pl-9 transition duration-200 hover:border-border-strong hover:shadow-card-hover"
              >
                <span className="absolute bottom-8 left-0 top-8 w-px bg-border-strong transition group-hover:bg-accent" />
                <div className="font-mono text-5xl font-medium tracking-[-0.04em] text-fg-subtle">{step.number}</div>
                <p className="mt-7 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{step.label}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-fg">{step.title}</h3>
                <p className="mt-3 leading-7 text-fg-muted">{step.body}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
