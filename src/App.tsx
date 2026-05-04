import { Bundle } from "./components/Bundle";
import { EmailCapture } from "./components/EmailCapture";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { MCP } from "./components/MCP";
import { Nav } from "./components/Nav";
import { Problem } from "./components/Problem";
import { Roadmap } from "./components/Roadmap";
import { FadeIn } from "./components/ui/FadeIn";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-fg">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Bundle />
        <MCP />
        <Roadmap />
        <section id="early-access" className="section-pad relative scroll-mt-20 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.16),rgba(124,124,224,0.10)_42%,transparent_72%)] blur-3xl"
          />
          <div className="container-shell relative z-10">
            <FadeIn>
              <div className="mx-auto max-w-3xl rounded-xl border border-border bg-bg-elevated p-10 text-center shadow-[0_24px_100px_rgba(0,0,0,0.34)] md:p-16">
                <h2 className="section-heading">Ready to switch agents without losing your place?</h2>
                <p className="body-copy mx-auto mt-5 max-w-2xl">
                  Carryover is in early development. Drop your email and we'll send you setup steps when the open beta ships.
                </p>
                <div className="mt-8">
                  <EmailCapture variant="large" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
