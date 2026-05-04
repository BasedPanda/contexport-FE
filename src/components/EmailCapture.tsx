import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { type FormEvent, useState } from "react";
import { cn } from "../lib/cn";

type EmailCaptureProps = {
  variant: "compact" | "large";
};

const endpoint = "https://formspree.io/f/xgodoopj";
const mailtoHref =
  "mailto:aaravsingh16@gmail.com,aryanansh1104@gmail.com?subject=Contexport%20early%20access";

export function EmailCapture({ variant }: EmailCaptureProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: new FormData(event.currentTarget)
      });

      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const isLarge = variant === "large";

  return (
    <div className={cn(isLarge ? "mx-auto w-full max-w-xl" : "w-full md:max-w-md")}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-3 rounded-xl border border-border-strong bg-bg-elevated px-4 py-3 text-left"
            role="status"
          >
            <CircleCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-[#28C840]" />
            <span className="text-sm font-medium text-fg">Thanks — we'll be in touch shortly.</span>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <form
              action={endpoint}
              method="POST"
              onSubmit={handleSubmit}
              className={cn(isLarge ? "space-y-3" : "flex flex-col gap-3 sm:flex-row")}
            >
              <input type="hidden" name="_subject" value="New Contexport early access signup" />
              <label className="sr-only" htmlFor={`email-${variant}`}>
                Email address
              </label>
              <input
                id={`email-${variant}`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={cn(
                  "min-h-11 w-full rounded-full border border-border bg-bg-elevated px-4 text-sm text-fg outline-none transition placeholder:text-fg-subtle focus:border-accent focus:ring-4 focus:ring-[rgba(245,158,11,0.12)]",
                  isLarge ? "px-5" : "sm:flex-1"
                )}
                disabled={status === "sending"}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className={cn("button-primary shrink-0", isLarge && "w-full")}
              >
                {status === "sending" ? "Sending..." : "Get early access"}
              </button>
            </form>

            {isLarge ? <p className="mt-3 text-center text-xs text-fg-subtle">No spam. Setup steps and updates only.</p> : null}

            <AnimatePresence>
              {status === "error" ? (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 text-sm text-fg-muted"
                  role="alert"
                >
                  Something went wrong. Email us directly:{" "}
                  <a className="text-accent underline decoration-accent/60 underline-offset-4" href={mailtoHref}>
                    aaravsingh16@gmail.com,aryanansh1104@gmail.com
                  </a>
                </motion.p>
              ) : null}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
