import { motion } from "framer-motion";
import { MessageSquareOff, RotateCcw, TriangleAlert } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const spring = { stiffness: 300, damping: 20 };

const problems = [
  {
    title: "Every handoff starts from zero.",
    body: "You paste summaries, screenshots, terminal snippets, and \"here's what happened\" messages. The new agent still misses half the state.",
    icon: MessageSquareOff,
    className: "lg:col-span-2"
  },
  {
    title: "Agents repeat failed work.",
    body: "The next model retries commands, approaches, and assumptions the previous one already ruled out.",
    icon: RotateCcw,
    className: ""
  },
  {
    title: "Missing context becomes hallucination.",
    body: "When the receiving agent does not know what was exported, it guesses. Tool usage, QA status, and repo state get invented.",
    icon: TriangleAlert,
    className: ""
  }
];

export function Problem() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">THE PROBLEM</p>
          <h2 className="section-heading mt-4">AI work dies inside chats.</h2>
          <p className="body-copy mt-5">
            AI coding agents can now debug, refactor, plan, and review. But the work they do is trapped inside one
            session. Move to another agent, and the useful state disappears: what changed, what QA status says, what
            failed, what to do next, and what not to guess.
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
