import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

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
        <a href="#top" className="flex items-center" aria-label="Contexport home">
          <img src="/logo.png" alt="Contexport" className="h-9 w-auto" />
        </a>
      </nav>
    </header>
  );
}
