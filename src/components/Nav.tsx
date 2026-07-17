import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function Nav() {
  const { count } = useCart();
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
       <Link to="/" className="flex items-center">
  <img
    src="/public/logo.png"
    alt="MithusBistro"
    className="h-12 w-auto object-contain scale-130"
  />
</Link>
        <div className="hidden md:flex gap-7 text-sm font-medium text-foreground/70">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-cocoa" }} className="hover:text-cocoa transition-colors">Home</Link>
          <Link to="/menu" activeProps={{ className: "text-cocoa" }} className="hover:text-cocoa transition-colors">Menu</Link>
          <Link to="/about" activeProps={{ className: "text-cocoa" }} className="hover:text-cocoa transition-colors">About</Link>
          <Link to="/contact" activeProps={{ className: "text-cocoa" }} className="hover:text-cocoa transition-colors">Contact</Link>
        </div>
        <Link to="/cart" className="relative flex items-center gap-2 rounded-full bg-cocoa text-cream px-4 py-2 text-sm font-medium hover:bg-rust transition-colors">
          <ShoppingBag className="size-4" />
          <span>Cart</span>
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-rust text-cream text-[10px] font-bold rounded-full size-5 flex items-center justify-center border-2 border-background">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
