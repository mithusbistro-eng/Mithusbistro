import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MithusBistro — Our Story" },
      { name: "description", content: "The history of MithusBistro Cafe — from a small street stall to a neighborhood favorite." },
      { property: "og:title", content: "About MithusBistro" },
      { property: "og:description", content: "A decade of handcrafted buns, burgers, and bistro love." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rust mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cocoa text-balance">
            From a Homemade Dream to Your Favorite Café.
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
            alt="Cafe interior"
            className="mt-10 w-full aspect-[16/9] object-cover rounded-3xl"
          />
        </Reveal>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/80">
          <Reveal>
            <p>
              Every great journey begins with a simple dream. Just one year ago, 
              MithusBistro started as a small home-based kitchen with a passion for serving fresh, 
              delicious food made with love. Every bun, sandwich, brownie, and beverage was carefully 
              prepared using homemade recipes that quickly became favorites among our family, friends, and customers.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              The overwhelming love and encouragement we received inspired us to take the next
               big step. Today, we're proud to welcome you to MithusBistro Café—a cozy 
               place where great food, warm hospitality, and memorable moments come together. 
               While we've grown from a home kitchen into a café, our commitment to quality has never changed.
              
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
             We believe that great taste begins with great ingredients. 
             That's why we carefully use organic ingredients and prepare many of our recipes using brown sugar instead of refined white sugar. Every dish is freshly prepared with care because we believe food should not only taste amazing but also make you feel good. Whether you're stopping by for our signature buns, juicy burgers, crispy momos, refreshing mojitos, or our famous sizzling brownies, thank you for being part of our journey. This is just the beginning, 
             and we're excited to serve you for many years to come.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-3 gap-6 border-y border-border py-10">
            <div><p className="font-serif text-4xl text-rust">1+</p><p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years</p></div>
            <div><p className="font-serif text-4xl text-rust">70+</p><p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Fresh Menu items</p></div>
            <div><p className="font-serif text-4xl text-rust">1000s</p><p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">100%
Made With Love </p></div>
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-cocoa text-cream px-8 py-4 text-sm font-semibold hover:bg-rust transition-colors">
            Continue to Order <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
