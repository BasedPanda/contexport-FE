import { FadeIn } from "./ui/FadeIn";
import { Marquee } from "./ui/Marquee";

const clients = ["Claude", "ChatGPT", "Cursor", "Claude Desktop", "VS Code"];

export function MCP() {
  return (
    <section className="section-pad bg-bg-elevated/50">
      <div className="container-shell text-center">
        <FadeIn className="mx-auto max-w-3xl">
          <p className="eyebrow">BUILT ON STANDARDS</p>
          <h2 className="section-heading mt-4">Built on Model Context Protocol.</h2>
          <p className="body-copy mx-auto mt-5 max-w-2xl">
            Carryover speaks MCP, the open standard for connecting agents to tools and context. Anthropic created it.
            OpenAI and Google have since adopted it.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12">
          <Marquee items={clients} />
          <p className="mt-5 text-sm text-fg-subtle">Local-first by default.</p>
        </FadeIn>
      </div>
    </section>
  );
}
