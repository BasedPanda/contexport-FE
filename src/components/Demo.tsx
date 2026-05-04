import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const restoredState = [
  "what the task is",
  "what changed",
  "what workflow is active",
  "what QA status says",
  "what to do next",
  "what not to guess"
];

export function Demo() {
  return (
    <section id="demo" className="section-pad scroll-mt-20">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">THE DEMO</p>
          <h2 className="section-heading mt-4">Codex hands work to ChatGPT without a paste.</h2>
          <p className="body-copy mt-5">
            In the demo, a Codex-side agent captures the current coding session. ChatGPT restores it through Contexport
            and answers what the task is, what changed, what workflow is active, what QA status says, what to do next,
            and what not to guess.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
          <FadeIn>
            <div className="card-shell h-full">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
                Before Contexport
              </p>
              <p className="mt-5 text-2xl font-semibold leading-tight text-fg">
                "Can you summarize what happened so I can paste it into another agent?"
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="hidden lg:flex lg:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-elevated">
              <ArrowRight aria-hidden="true" className="h-5 w-5 text-accent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="card-shell h-full border-border-strong bg-bg-elevated">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">After Contexport</p>
              <p className="mt-5 text-2xl font-semibold leading-tight text-fg">
                "Restore <code className="font-mono text-accent">yc-demo</code> and continue from the exported handoff
                state."
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} className="mt-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <p className="text-sm font-medium text-fg">The restored agent can answer:</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {restoredState.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-fg-muted">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a className="button-secondary mt-8" href="#early-access">
              Get early access
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
