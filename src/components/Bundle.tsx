import { EyeOff, FileSearch, ShieldCheck } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { TerminalBlock } from "./ui/TerminalBlock";

const bundleFeatures = [
  {
    title: "Trust levels.",
    body: "Every important fact is labeled by authority: exported state, derived summary, evidence excerpt, or raw source.",
    icon: ShieldCheck
  },
  {
    title: "Explicit unknowns.",
    body: "The bundle records what was not captured: hidden runtime state, missing diffs, or unavailable tool history.",
    icon: EyeOff
  },
  {
    title: "Handoff eval.",
    body: "eval-handoff checks whether another agent can restore the task, preserve boundaries, and avoid inventing missing state.",
    icon: FileSearch
  }
];

function Dir({ children }: { children: string }) {
  return <span className="text-accent/80">{children}</span>;
}

function File({ children }: { children: string }) {
  return <span className="text-fg">{children}</span>;
}

function Tree({ children }: { children: string }) {
  return <span className="text-fg-muted">{children}</span>;
}

export function Bundle() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow">THE ARTIFACT</p>
          <h2 className="section-heading mt-4">One handoff object. Detailed docs behind it.</h2>
          <p className="body-copy mt-5">
            The first thing a receiving agent reads is <code>context/handoff_context.json</code>: the canonical snapshot
            of role, task, next action, repo state, tools, evidence, and unknowns. Detailed docs still exist for audit
            and drill-down. The raw transcript is not the restore path.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)]">
          <FadeIn>
            <TerminalBlock label="ctxb/" className="h-full">
              <>
                <Dir>ctxb/</Dir>
                {"\n"}
                <Tree>├── </Tree>
                <File>manifest.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>context/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>handoff_context.json</File>
                <Tree>      # first restore object</Tree>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>knowledge_objects.json</File>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>working_context.md</File>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>git_state.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>qa_report.md</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>environment/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>persona.json</File>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>agent_environment.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>tools_and_skills.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>session/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>task_state.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>timeline.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>evidence/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>source_excerpt_index.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>capture_gaps.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>provenance/</Dir>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>package_history.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>reports/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>handoff_eval.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>context_versions.jsonl</File>
                {"\n"}
                <Tree>└── </Tree>
                <File>checksums.sha256.json</File>
              </>
            </TerminalBlock>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="h-full rounded-xl border border-border bg-surface">
              {bundleFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className={index === 0 ? "p-8" : "border-t border-border p-8"}>
                    <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
                    <h3 className="mt-5 text-lg font-semibold text-fg">{feature.title}</h3>
                    <p className="mt-2 leading-7 text-fg-muted">{feature.body}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
