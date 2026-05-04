const repoUrl = "https://github.com/AryanSingh1104/contexport";
const mailtoHref =
  "mailto:aaravsingh16@gmail.com,aryanansh1104@gmail.com?subject=Contexport%20early%20access";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium text-fg">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_var(--accent-glow)]" />
              contexport
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-fg-muted">Git for AI context.</p>
          </div>

          <div>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">Links</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              <a className="text-fg-muted transition hover:text-fg" href={`${repoUrl}#readme`}>
                Docs
              </a>
              <a className="text-fg-muted transition hover:text-fg" href={repoUrl}>
                GitHub
              </a>
              <a className="text-fg-muted transition hover:text-fg" href={mailtoHref}>
                Email
              </a>
            </div>
          </div>

          <p className="text-sm leading-6 text-fg-muted md:text-right">Built by Aarav Singh & Aryan Singh in NYC.</p>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-fg-subtle">
          <p>© 2026 Contexport.</p>
        </div>
      </div>
    </footer>
  );
}
