import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

type TerminalBlockProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export function TerminalBlock({ children, label, className }: TerminalBlockProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-surface-2 shadow-[0_24px_90px_rgba(0,0,0,0.32)]", className)}>
      <div className="flex h-11 items-center justify-between border-b border-border bg-bg-elevated px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        {label ? <span className="font-mono text-xs text-fg-subtle">{label}</span> : null}
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap p-6 font-mono text-[13px] leading-6 text-fg-muted sm:text-sm">
        {children}
      </pre>
    </div>
  );
}
