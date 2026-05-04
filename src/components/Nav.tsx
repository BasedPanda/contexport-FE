import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

const repoUrl = "https://github.com/AryanSingh1104/contextbridge-poc";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled && "border-b border-border bg-bg/70 backdrop-blur-md"
      )}
    >
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium text-fg">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_var(--accent-glow)]" />
          contexport
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-fg-muted transition hover:text-fg" href={`${repoUrl}#readme`}>
            Docs
          </a>
          <a
            className="text-fg-muted transition hover:text-fg"
            href={repoUrl}
            aria-label="Contexport on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a className="button-primary" href="#early-access">
            Get early access
          </a>
        </div>
      </nav>
    </header>
  );
}
