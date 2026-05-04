import { motion } from "framer-motion";
import { GitBranch, MessageSquareOff, RotateCcw } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const spring = { stiffness: 300, damping: 20 };

const problems = [
  {
    title: "Re-explaining is the default.",
    body: "Every new session starts from zero. Your task, your stack, your constraints — repeated. The context that took you an hour to build with one agent doesn't carry over.",
    icon: MessageSquareOff,
    className: "lg:col-span-2"
  },
  {
    title: "Wasted retries.",
    body: "The new agent re-attempts approaches the previous one already ruled out — because the failure history doesn't transfer.",
    icon: RotateCcw,
    className: ""
  },
  {
    title: "Lost decisions.",
    body: "Architecture choices, environment quirks, and reviewer feedback evaporate the moment you close a tab.",
    icon: GitBranch,
    className: ""
  }
];

export function Problem() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">THE PROBLEM</p>
          <h2 className="section-heading mt-4">Switching agents costs you everything.</h2>
          <p className="body-copy mt-5">
            Every AI coding session builds context — what you tried, what failed, what was decided, what's authoritative.
            Today, none of it survives the jump to another tool.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <FadeIn key={problem.title} delay={index * 0.08} className={problem.className}>
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", ...spring }}
                  className="card-shell group h-full transition duration-200 hover:border-border-strong hover:shadow-card-hover"
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-fg">{problem.title}</h3>
                  <p className="mt-3 leading-7 text-fg-muted">{problem.body}</p>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
