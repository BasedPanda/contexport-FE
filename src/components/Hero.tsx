import { motion } from "framer-motion";
import { EmailCapture } from "./EmailCapture";
import { GradientOrbs } from "./ui/GradientOrbs";
import { GridBackground } from "./ui/GridBackground";
import { TerminalBlock } from "./ui/TerminalBlock";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] flex-col items-center justify-center pt-24 text-center">
      <GridBackground />
      <GradientOrbs />

      <div className="container-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-6 inline-flex rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle"
        >
          EARLY PREVIEW · LOCAL-FIRST · MCP-NATIVE
        </motion.div>

        <motion.h1
          className="mx-auto max-w-5xl text-[clamp(40px,7vw,84px)] font-bold leading-[1.02] tracking-[-0.035em] text-fg"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Git for AI{" "}
          <span className="bg-gradient-to-r from-accent via-accent to-accent-cool bg-clip-text text-transparent">context</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="body-copy mx-auto mt-6 max-w-2xl"
        >
          Contexport captures an AI coding session into a portable, versioned handoff bundle — task, repo state,
          decisions, commands, QA status, evidence, and what not to guess — so another agent can continue without
          starting over.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-9 flex max-w-4xl flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <EmailCapture variant="compact" />
          <a className="button-secondary shrink-0" href="#demo">
            Watch 60-sec demo
          </a>
          <a className="button-secondary shrink-0" href="https://github.com/AryanSingh1104/contextbridge-poc#readme">
            Read the docs →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-3xl text-left"
        >
          <TerminalBlock label="contexport · zsh">
            {`$ contextbridge capture \\
    --bundle-id yc-demo \\
    --include-git \\
    --include-qa \\
    --out .ctxb/yc-demo

✓ Captured task state
✓ Captured repo state
✓ Captured decisions, commands, QA status, evidence
✓ Wrote bundle: .ctxb/yc-demo

$ contextbridge serve --bundle .ctxb/yc-demo --port 8765

✓ MCP restore server live at http://127.0.0.1:8765/mcp
✓ Ready for another agent to restore`}
          </TerminalBlock>
          <p className="mt-3 text-center font-mono text-xs text-fg-subtle">
            Contexport alpha currently ships as the <code>contextbridge</code> CLI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
