import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const useCases = [
  {
    label: "WITHIN SESSIONS",
    title: "Resume a session.",
    body: "Your chat gets too long. The tab dies. The model loses the thread. Or you want to restart with a cleaner context window. Contexport captures the working state of the session so you can restore the task, decisions, commands, files, QA status, and open questions without rebuilding the context from memory."
  },
  {
    label: "ACROSS AGENTS",
    title: "Switch agents.",
    body: "Use the right agent for the right job. Research and design in ChatGPT. Implement in Claude Code, Cursor, Codex, or a CLI agent. Contexport lets one agent hand off the working context to another: what the goal is, what was decided, what changed, what failed, what passed, and what the next agent should do."
  },
  {
    label: "ACROSS PEOPLE",
    title: "Hand off to teammates.",
    body: "AI-assisted work still needs human handoffs. A teammate should not have to read an entire chat, inspect terminal history, and ask what happened. Contexport packages the working context into a portable bundle your teammate's agent can restore, inspect, and continue from."
  }
];

export function UseCases() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">USE CASES</p>
          <h2 className="section-heading mt-4">Use it whenever AI work needs to continue somewhere else.</h2>
          <p className="body-copy mt-5 max-w-[720px]">
            Contexport is for the moments when the context you built with one agent needs to survive a session reset, a
            tool switch, or a teammate handoff.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <FadeIn key={useCase.label} delay={index * 0.08} className="h-full">
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-shell group relative h-full pl-9 transition duration-200 hover:border-border-strong hover:shadow-card-hover"
              >
                <span className="absolute bottom-8 left-0 top-8 w-px bg-border-strong transition group-hover:bg-accent" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{useCase.label}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-fg">{useCase.title}</h3>
                <p className="mt-3 leading-7 text-fg-muted">{useCase.body}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
