import { RefreshCcw, Share2, Users } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const useCases = [
  {
    label: "Within sessions",
    title: "Resume a session",
    body: "Your chat gets too long. The tab dies. The model loses the thread. Or you want to restart with a cleaner context window. Contexport captures the working state of the session so you can restore the task, decisions, commands, files, QA status, and open questions without rebuilding the context from memory.",
    cta: "Resume without starting over",
    icon: RefreshCcw
  },
  {
    label: "Across agents",
    title: "Switch agents",
    body: "Use the right agent for the right job. Research and design in ChatGPT. Implement in Claude Code, Cursor, Codex, or a CLI agent. Contexport lets one agent hand off the working context to another: what the goal is, what was decided, what changed, what failed, what passed, and what the next agent should do.",
    cta: "Switch tools without losing state",
    icon: Share2
  },
  {
    label: "Across people",
    title: "Hand off to teammates",
    body: "AI-assisted work still needs human handoffs. A teammate should not have to read an entire chat, inspect terminal history, and ask what happened. Contexport packages the working context into a portable bundle your teammate's agent can restore, inspect, and continue from.",
    cta: "Give teammates the whole working state",
    icon: Users
  }
];

export function UseCases() {
  return (
    <section className="section-pad bg-bg-elevated/50">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">USE CASES</p>
          <h2 className="section-heading mt-4">Use it whenever AI work needs to continue somewhere else.</h2>
          <p className="body-copy mt-5">
            Contexport is for the moments when the context you built with one agent needs to survive a session reset, a
            tool switch, or a teammate handoff.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <FadeIn key={useCase.title} delay={index * 0.08} className="h-full">
                <article className="card-shell flex h-full flex-col transition duration-200 hover:border-border-strong hover:shadow-card-hover">
                  <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
                  <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {useCase.label}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-fg">{useCase.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-fg-muted">{useCase.body}</p>
                  <p className="mt-6 text-sm font-medium text-fg">{useCase.cta}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
