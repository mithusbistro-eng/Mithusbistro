import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";

export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  total: number;
  qtyOf: (id: string) => number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mithus-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("mithus-cart", JSON.stringify(items));
  }, [items, hydrated]);

  const add = (p: Product) =>
    setItems(prev => {
      const ex = prev.find(i => i.product.id === p.id);
      if (ex) return prev.map(i => i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product: p, qty: 1 }];
    });
  const inc = (id: string) => setItems(prev => prev.map(i => i.product.id === id ? { ...i, qty: i.qty + 1 } : i));
  const dec = (id: string) => setItems(prev => prev.flatMap(i => {
    if (i.product.id !== id) return [i];
    if (i.qty <= 1) return [];
    return [{ ...i, qty: i.qty - 1 }];
  }));
  const remove = (id: string) => setItems(prev => prev.filter(i => i.product.id !== id));
  const clear = () => setItems([]);
  const qtyOf = (id: string) => items.find(i => i.product.id === id)?.qty ?? 0;

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.product.price, 0);

  return <Ctx.Provider value={{ items, add, inc, dec, remove, clear, count, total, qtyOf }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
