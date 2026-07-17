import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { featured, fastSellers } from "@/lib/products";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const marqueeItems = [...fastSellers, ...fastSellers];

  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-16 pb-20">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rust mb-4"></p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-cocoa text-balance">
              Handcrafted <span className="italic text-rust">bistro</span> flavors.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md">
              From buttery buns to sizzling brownies, we serve honest cafe items with extra love & care.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-cocoa text-cream px-6 py-3 text-sm font-semibold hover:bg-rust transition-colors">
                Continue to Order <ArrowRight className="size-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-full border border-cocoa/20 px-6 py-3 text-sm font-medium hover:bg-cream transition-colors">
                Our Story
              </Link>
            </div>
          </div>
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img src={featured[0].image} alt={featured[0].name} className="w-full aspect-[3/4] rounded-2xl object-cover shadow-lg" />
              <img src={featured[1].image} alt={featured[1].name} className="w-full aspect-[3/4] rounded-2xl object-cover mt-10 shadow-lg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Auto marquee */}
      <section className="overflow-hidden bg-cocoa py-6">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {marqueeItems.map((p, i) => (
            <div key={i} className="flex items-center gap-3 px-6">
              <img src={p.image} alt="" className="size-12 rounded-full object-cover ring-2 ring-cream/20" />
              <span className="font-serif italic text-cream text-xl">{p.name}</span>
              <span className="text-rust font-semibold">₹{p.price}</span>
              <span className="text-cream/30 ml-4">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rust mb-2">Chef's Picks</p>
              <h2 className="font-serif text-4xl md:text-5xl text-cocoa">Made with heart.</h2>
            </div>
            <Link to="/menu" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-cocoa hover:text-rust">
              See full menu <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <article className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl text-cocoa">{p.name}</h3>
                      <span className="font-semibold text-rust">₹{p.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl bg-cocoa text-cream rounded-3xl px-8 md:px-16 py-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Hungry yet?</h2>
          <p className="text-cream/70 max-w-lg mx-auto mb-8">Browse the full menu and build your order. We'll send it straight to WhatsApp.</p>
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-cream text-cocoa px-8 py-4 text-sm font-semibold hover:bg-background transition-colors">
            Continue to Order <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
