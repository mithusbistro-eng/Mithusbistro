import { Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function QtyButton({ product }: { product: Product }) {
  const { qtyOf, add, inc, dec } = useCart();
  const qty = qtyOf(product.id);

  if (qty === 0) {
    return (
      <button
        onClick={() => add(product)}
        className="h-9 px-4 text-xs font-semibold uppercase tracking-wider bg-cocoa text-cream rounded-full hover:bg-rust transition-colors"
      >
        Add
      </button>
    );
  }
  return (
    <div className="flex items-center gap-2 bg-cream rounded-full p-1">
      <button onClick={() => dec(product.id)} aria-label="Decrease" className="size-7 flex items-center justify-center rounded-full bg-background text-cocoa hover:bg-rust hover:text-cream transition-colors">
        <Minus className="size-3" />
      </button>
      <span className="text-sm font-semibold text-cocoa w-5 text-center">{qty}</span>
      <button onClick={() => inc(product.id)} aria-label="Increase" className="size-7 flex items-center justify-center rounded-full bg-cocoa text-cream hover:bg-rust transition-colors">
        <Plus className="size-3" />
      </button>
    </div>
  );
}
