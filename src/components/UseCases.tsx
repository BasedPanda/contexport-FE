import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const useCases = [
  {
    action: "COMMIT",
    label: "WITHIN SESSIONS",
    title: "Resume a session.",
    pain: "Long chats get noisy, tabs die, and context windows reset.",
    value:
      "Pull a clean restore point with the task, decisions, commands, files, QA state, open questions, and next action.",
    terminal: "$ contexport commit session\n✓ restore point ready"
  },
  {
    action: "PUSH",
    label: "ACROSS AGENTS",
    title: "Switch agents.",
    pain: "ChatGPT, Claude Code, Codex, Cursor, and CLI agents each have different strengths, but context gets trapped.",
    value: "Package the working state from one agent and restore it in another.",
    terminal: "$ contexport push agent\n✓ context package exported"
  },
  {
    action: "PULL",
    label: "ACROSS PEOPLE",
    title: "Hand off to teammates.",
    pain: "Teammates should not read an entire chat log or reconstruct terminal history.",
    value: "Send a portable context package their agent can inspect and continue from.",
    terminal: "$ contexport pull handoff\n✓ next action restored"
  }
];

const transfers = ["Task", "Decisions", "Files", "Commands", "QA", "Evidence", "Next action", "Not-exported boundaries"];

export function UseCases() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">USE CASES</p>
          <h2 className="section-heading mt-4">AI work should survive the handoff.</h2>
          <p className="body-copy mt-5 max-w-[720px]">
            Contexport turns an AI work session into a portable context package so another session, tool, or teammate
            can continue without rebuilding context from memory.
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
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{useCase.label}</p>
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
                    {useCase.action}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-fg">{useCase.title}</h3>
                <p className="mt-3 leading-7 text-fg-muted">{useCase.pain}</p>
                <p className="mt-3 leading-7 text-fg">{useCase.value}</p>
                <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-bg-elevated p-4 font-mono text-xs leading-5 text-fg-muted">
                  {useCase.terminal}
                </pre>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.28} className="mt-8">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">What transfers</p>
            <p className="mt-3 text-sm leading-6 text-fg-muted">{transfers.join(" · ")}</p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-fg-subtle">
            Contexport does not pretend to remember everything. It tells the next agent what transferred, what did not,
            and where to continue.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
