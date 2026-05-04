import { cn } from "../../lib/cn";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden px-[7%] py-5", className)}
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)"
      }}
    >
      <div className="flex w-[300%] animate-[marquee_60s_linear_infinite]">
        {[0, 1, 2].map((loop) => (
          <div key={loop} className="flex w-1/3 shrink-0 justify-center gap-4 px-4">
            {items.map((item) => (
              <span
                key={`${item}-${loop}`}
                className="inline-flex h-12 min-w-32 items-center justify-center rounded-full border border-border bg-bg-elevated/70 px-5 font-mono text-sm text-fg-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
