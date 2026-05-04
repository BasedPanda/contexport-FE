import { EyeOff, FileSearch, ShieldCheck } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { TerminalBlock } from "./ui/TerminalBlock";

const bundleFeatures = [
  {
    title: "Trust levels.",
    body: "Every fact tagged authoritative, derived, or raw. The model knows what to rely on.",
    icon: ShieldCheck
  },
  {
    title: "Evidence-backed.",
    body: "Curated source excerpts with stable IDs. Claims trace back to the original.",
    icon: FileSearch
  },
  {
    title: "Capture gaps.",
    body: "What wasn't captured is logged. The model abstains instead of guessing.",
    icon: EyeOff
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
          <h2 className="section-heading mt-4">The bundle is the source of truth.</h2>
          <p className="body-copy mt-5">
            Carryover doesn't compress your session into a prompt. It exports authoritative documents — environment,
            workspace, session, decisions, evidence — that the destination agent can fetch on demand.
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
                <Dir>environment/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>agent_environment.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>tools_and_skills.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>workspace/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>git.json</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>changed_files.json</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>session/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>task_state.json</File>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>timeline.jsonl</File>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>commands.jsonl</File>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>decisions.jsonl</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>failures.jsonl</File>
                {"\n"}
                <Tree>├── </Tree>
                <Dir>context/</Dir>
                {"\n"}
                <Tree>│   ├── </Tree>
                <File>working_context.md</File>
                {"\n"}
                <Tree>│   └── </Tree>
                <File>qa_report.md</File>
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
                <Tree>└── </Tree>
                <Dir>restore/</Dir>
                {"\n"}
                <Tree>    └── </Tree>
                <File>restore_brief.json</File>
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
