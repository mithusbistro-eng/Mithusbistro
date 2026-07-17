import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/products";
import { QtyButton } from "@/components/QtyButton";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — MithusBistro Cafe" },
      { name: "description", content: "Browse the full MithusBistro menu: buns, burgers, momos, pasta, milkshakes, mojitos and more." },
      { property: "og:title", content: "MithusBistro Menu" },
      { property: "og:description", content: "70+ handcrafted cafe items ready to order." },
    ],
  }),
  component: Menu,
});

function Menu() {
  const [active, setActive] = useState<string>("all");

  const grouped = useMemo(() => {
    const g: Record<string, typeof products> = {};
    for (const c of categories) g[c] = [];
    for (const p of products) g[p.category]?.push(p);
    return g;
  }, []);

  const visibleCats = active === "all" ? categories : categories.filter(c => c === active);

  return (
    <main className="px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rust mb-3">Order In-app</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cocoa"> Menu</h1>
        </div>

        {/* Category filter */}
        <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md -mx-5 px-5 py-3 border-b border-border mb-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActive("all")}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${active === "all" ? "bg-cocoa text-cream" : "bg-cream text-cocoa hover:bg-olive/30"}`}
            >
              All
            </button>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${active === c ? "bg-cocoa text-cream" : "bg-cream text-cocoa hover:bg-olive/30"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {visibleCats.map(cat => (
            <section key={cat} id={cat}>
              <h2 className="font-serif text-3xl text-cocoa mb-6 border-b border-border pb-3">{cat}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[cat].map((p, i) => (
                  <Reveal key={p.id} delay={Math.min(i * 40, 200)}>
                    <article className="bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-lg transition-shadow flex flex-col h-full">
                      <div className="aspect-[4/3] overflow-hidden bg-cream">
                        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-xl text-cocoa">{p.name}</h3>
                          <p className="text-rust font-semibold mt-1">₹{p.price}</p>
                        </div>
                        <div className="flex justify-end">
                          <QtyButton product={p} />
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
