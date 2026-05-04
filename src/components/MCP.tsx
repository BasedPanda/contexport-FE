import { FadeIn } from "./ui/FadeIn";
import { Marquee } from "./ui/Marquee";

const clients = ["Codex", "ChatGPT", "Claude Code", "Cursor", "Local CLI agents"];

export function MCP() {
  return (
    <section className="section-pad bg-bg-elevated/50">
      <div className="container-shell text-center">
        <FadeIn className="mx-auto max-w-3xl">
          <p className="eyebrow">BUILT ON MCP</p>
          <h2 className="section-heading mt-4">MCP is the pipe. Contexport is the state.</h2>
          <p className="body-copy mx-auto mt-5 max-w-2xl">
            Model Context Protocol lets agents call tools and fetch context. Contexport uses MCP to expose portable
            handoff bundles to compatible clients. The key primitive is not the transport. It is the context package:
            a local, versioned source of truth another agent can restore from.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12">
          <Marquee items={clients} />
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">Today</p>
              <p className="mt-3 text-sm leading-6 text-fg-muted">Local bundles and target-specific restore prompts.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">Alpha</p>
              <p className="mt-3 text-sm leading-6 text-fg-muted">MCP-native restore for compatible clients.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
