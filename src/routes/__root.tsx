import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "../lib/cart-context";
import { Nav } from "../components/Nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-cocoa">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">This page has slipped off the menu.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-cocoa px-5 py-2 text-sm font-medium text-cream hover:bg-rust transition-colors">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-cocoa">Something burnt in the oven</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again in a moment.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-cocoa px-5 py-2 text-sm font-medium text-cream hover:bg-rust transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MithusBistro ❤" },
      { name: "description", content: "MithusBistro cafe: buns, burgers, momos, pasta, brownies, mojitos and more. Order fresh, hot, and delivered via WhatsApp." },
      { property: "og:title", content: "MithusBistro — Handcrafted Cafe Flavors" },
      { property: "og:description", content: "Cozy neighborhood cafe serving buns, burgers, momos, and sizzling desserts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" },
      
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {/* Full Screen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-screen h-screen object-cover z-[-20]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30 z-[-10]" />

        {/* Website */}
        <div className="relative z-10">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
function Footer() {
  return (
    <footer className="border-t border-border bg-cream/40 py-10 px-6 mt-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-serif text-xl text-cocoa">MithusBistro</p>
          <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} MithusBistro Cafe.</p>
        </div>
        <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Link to="/menu" className="hover:text-cocoa">Menu</Link>
          <Link to="/about" className="hover:text-cocoa">About</Link>
          <Link to="/contact" className="hover:text-cocoa">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
