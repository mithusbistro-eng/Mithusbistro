import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import jsPDF from "jspdf";
import { Minus, Plus, Trash2, ShoppingBag, CheckCircle2, Download, MessageCircle } from "lucide-react";
import { useCart, type CartItem } from "@/lib/cart-context";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — MithusBistro" },
      { name: "description", content: "Review your order and checkout via WhatsApp." },
    ],
  }),
  component: Cart,
});

const WA_NUMBER = "919994416168";

// Palette (RGB tuples for jsPDF)
const COCOA: [number, number, number] = [98, 43, 20];
const RUST: [number, number, number] = [153, 95, 47];
const OLIVE: [number, number, number] = [151, 143, 102];
const CREAM: [number, number, number] = [228, 214, 169];
const CREAM_SOFT: [number, number, number] = [248, 242, 224];
const INK: [number, number, number] = [60, 40, 30];

type OrderSnapshot = {
  orderId: string;
  items: CartItem[];
  total: number;
  form: { name: string; email: string; phone: string; address: string };
  pdfBlobUrl: string;
  pdfFileName: string;
};

function Cart() {
  const { items, inc, dec, remove, total, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [confirmed, setConfirmed] = useState<OrderSnapshot | null>(null);

  const valid =
    form.name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    /^\+?\d[\d\s-]{7,}$/.test(form.phone) &&
    form.address.trim().length > 4;

  const canCheckout = items.length > 0 && valid;

  const generateBillPDF = (orderId: string, snapItems: CartItem[], snapTotal: number) => {
    const doc = new jsPDF();
    const now = new Date();
    const pageW = doc.internal.pageSize.getWidth();

    // Header band
    doc.setFillColor(...COCOA);
    doc.rect(0, 0, pageW, 34, "F");
    doc.setFillColor(...RUST);
    doc.rect(0, 34, pageW, 3, "F");
    doc.setFillColor(...OLIVE);
    doc.rect(0, 37, pageW, 1.5, "F");

    doc.setTextColor(...CREAM);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("MithusBistro", 15, 18);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Handcrafted Cafe Flavors", 15, 26);

    doc.setFontSize(9);
    doc.text(`Order #${orderId}`, pageW - 15, 18, { align: "right" });
    doc.text(now.toLocaleString(), pageW - 15, 25, { align: "right" });

    // Customer card
    let y = 50;
    doc.setFillColor(...CREAM_SOFT);
    doc.roundedRect(12, y - 6, pageW - 24, 42, 3, 3, "F");
    doc.setDrawColor(...OLIVE);
    doc.setLineWidth(0.4);
    doc.roundedRect(12, y - 6, pageW - 24, 42, 3, 3, "S");

    doc.setTextColor(...COCOA);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("CUSTOMER DETAILS", 18, y);
    doc.setDrawColor(...RUST);
    doc.setLineWidth(0.6);
    doc.line(18, y + 2, 60, y + 2);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    doc.text(`Name:    ${form.name}`, 18, y + 9);
    doc.text(`Phone:   ${form.phone}`, 18, y + 16);
    doc.text(`Email:   ${form.email}`, 18, y + 23);
    const addrLines = doc.splitTextToSize(`Address: ${form.address}`, pageW - 40);
    doc.text(addrLines.slice(0, 1), 18, y + 30);

    // Order table
    y = 105;
    doc.setFillColor(...COCOA);
    doc.rect(12, y, pageW - 24, 9, "F");
    doc.setTextColor(...CREAM);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("ITEM", 18, y + 6);
    doc.text("QTY", 128, y + 6, { align: "right" });
    doc.text("PRICE", 158, y + 6, { align: "right" });
    doc.text("TOTAL", pageW - 18, y + 6, { align: "right" });

    y += 9;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...INK);
    doc.setFontSize(10);

    snapItems.forEach(({ product, qty }, i) => {
      if (i % 2 === 0) {
        doc.setFillColor(...CREAM_SOFT);
        doc.rect(12, y, pageW - 24, 9, "F");
      }
      doc.text(product.name, 18, y + 6);
      doc.text(String(qty), 128, y + 6, { align: "right" });
      doc.text(`Rs. ${product.price}`, 158, y + 6, { align: "right" });
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...COCOA);
      doc.text(`Rs. ${qty * product.price}`, pageW - 18, y + 6, { align: "right" });
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...INK);
      y += 9;
    });

    // Total band
    y += 4;
    doc.setFillColor(...RUST);
    doc.roundedRect(pageW - 90, y, 78, 14, 2, 2, "F");
    doc.setTextColor(...CREAM);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("TOTAL", pageW - 85, y + 9);
    doc.text(`Rs. ${snapTotal}`, pageW - 18, y + 9, { align: "right" });

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 22;
    doc.setFillColor(...COCOA);
    doc.rect(0, footerY, pageW, 22, "F");
    doc.setTextColor(...CREAM);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text("Thank you for ordering from MithusBistro!", pageW / 2, footerY + 9, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Contact: +91 99944 16168  •  WhatsApp orders welcome", pageW / 2, footerY + 16, { align: "center" });

    const fileName = `MithusBistro-${orderId}.pdf`;
    doc.save(fileName);
    const blobUrl = URL.createObjectURL(doc.output("blob"));
    return { fileName, blobUrl };
  };

  const buildWhatsAppMessage = (orderId: string, snapItems: CartItem[], snapTotal: number) => {
    const lines = [
      `*New MithusBistro Order* #${orderId}`,
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email}`,
      `*Address:* ${form.address}`,
      "",
      "*Order:*",
      ...snapItems.map(i => `• ${i.product.name} x${i.qty} — ₹${i.product.price * i.qty}`),
      "",
      `*Total: ₹${snapTotal}*`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleCheckout = () => {
    if (!canCheckout) return;
    const orderId = `MB-${Date.now().toString().slice(-6)}`;
    const snapItems = [...items];
    const snapTotal = total;
    const { fileName, blobUrl } = generateBillPDF(orderId, snapItems, snapTotal);
    const msg = buildWhatsAppMessage(orderId, snapItems, snapTotal);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setConfirmed({
      orderId,
      items: snapItems,
      total: snapTotal,
      form: { ...form },
      pdfBlobUrl: blobUrl,
      pdfFileName: fileName,
    });
    clear();
  };

  if (confirmed) {
    return (
      <main className="px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="bg-card rounded-3xl ring-1 ring-border overflow-hidden">
            <div className="bg-cocoa text-cream p-8 text-center">
              <CheckCircle2 className="size-16 mx-auto text-cream" strokeWidth={1.5} />
              <h1 className="font-serif text-4xl md:text-5xl mt-4">Order Confirmed!</h1>
              <p className="mt-2 text-cream/80 text-sm">
                Order <span className="font-mono font-semibold">#{confirmed.orderId}</span>
              </p>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-center text-cocoa">
                Thanks <span className="font-semibold">{confirmed.form.name.split(" ")[0]}</span> — your order has been sent to our kitchen via WhatsApp.
              </p>

              <div className="bg-cream/50 rounded-2xl p-5">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-rust mb-3">Summary</h3>
                <ul className="space-y-1.5 text-sm text-cocoa">
                  {confirmed.items.map(({ product, qty }) => (
                    <li key={product.id} className="flex justify-between">
                      <span>{product.name} <span className="text-muted-foreground">×{qty}</span></span>
                      <span className="font-medium">₹{product.price * qty}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-cocoa/15 mt-3 pt-3 flex justify-between font-serif text-lg text-cocoa">
                  <span>Total</span><span>₹{confirmed.total}</span>
                </div>
              </div>

              <div className="bg-olive/15 rounded-2xl p-4 text-sm text-cocoa">
                <p className="font-semibold">Delivering to</p>
                <p className="text-cocoa/80 mt-1">{confirmed.form.address}</p>
                <p className="text-cocoa/60 mt-1 text-xs">📞 {confirmed.form.phone}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={confirmed.pdfBlobUrl}
                  download={confirmed.pdfFileName}
                  className="flex items-center justify-center gap-2 rounded-full bg-rust text-cream py-3 text-sm font-semibold hover:bg-cocoa transition-colors"
                >
                  <Download className="size-4" /> Bill again
                </a>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-cocoa text-cream py-3 text-sm font-semibold hover:bg-rust transition-colors"
                >
                  <MessageCircle className="size-4" /> Open WhatsApp
                </a>
              </div>

              <button
                onClick={() => {
                  URL.revokeObjectURL(confirmed.pdfBlobUrl);
                  setConfirmed(null);
                  navigate({ to: "/" });
                }}
                className="w-full text-center text-xs text-muted-foreground hover:text-cocoa"
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="px-6 py-24 text-center">
        <ShoppingBag className="size-16 mx-auto text-cocoa/30" />
        <h1 className="font-serif text-4xl text-cocoa mt-6">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2">Head to the menu and start building your order.</p>
        <Link to="/menu" className="mt-8 inline-flex rounded-full bg-cocoa text-cream px-6 py-3 text-sm font-semibold hover:bg-rust transition-colors">
          Browse Menu
        </Link>
      </main>
    );
  }

  return (
    <main className="px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-4xl md:text-5xl text-cocoa mb-8">Your Order</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          <div className="space-y-3">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-4 bg-card rounded-2xl p-4 ring-1 ring-border">
                <img src={product.image} alt={product.name} className="size-20 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-cocoa">{product.name}</h3>
                  <p className="text-rust font-semibold text-sm">₹{product.price}</p>
                </div>
                <div className="flex items-center gap-2 bg-cream rounded-full p-1">
                  <button onClick={() => dec(product.id)} className="size-7 flex items-center justify-center rounded-full bg-background text-cocoa hover:bg-rust hover:text-cream transition-colors">
                    <Minus className="size-3" />
                  </button>
                  <span className="text-sm font-semibold text-cocoa w-5 text-center">{qty}</span>
                  <button onClick={() => inc(product.id)} className="size-7 flex items-center justify-center rounded-full bg-cocoa text-cream hover:bg-rust transition-colors">
                    <Plus className="size-3" />
                  </button>
                </div>
                <div className="w-20 text-right">
                  <p className="font-semibold text-cocoa">₹{product.price * qty}</p>
                </div>
                <button onClick={() => remove(product.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="bg-cocoa text-cream rounded-2xl p-6">
              <div className="flex justify-between text-sm mb-2 opacity-80">
                <span>Items</span><span>{items.reduce((s, i) => s + i.qty, 0)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t border-cream/20 pt-3 mt-3">
                <span>Total</span><span>₹{total}</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 ring-1 ring-border space-y-4">
              <h2 className="font-serif text-xl text-cocoa">Your Details</h2>
              <Field label="Full Name" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Rajesh Kumar" />
              <Field label="Email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} placeholder="you@email.com" />
              <Field label="Phone" type="tel" value={form.phone} onChange={v => setForm({ ...form, phone: v })} placeholder="+91 98765 43210" />
              <Field label="Delivery Address" value={form.address} onChange={v => setForm({ ...form, address: v })} placeholder="Door no, street, city, pincode" multiline />

              <button
                onClick={handleCheckout}
                disabled={!canCheckout}
                className="w-full rounded-full bg-cocoa text-cream py-3 text-sm font-semibold hover:bg-rust transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {canCheckout ? "Checkout & Send to WhatsApp" : "Fill all details to checkout"}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Your bill downloads as a PDF, then opens WhatsApp with the order summary.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", multiline = false,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; multiline?: boolean;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label} *</span>
      {multiline ? (
        <textarea
          required
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-20 px-3 py-2 bg-cream/60 rounded-lg text-sm outline-none focus:ring-2 focus:ring-rust resize-none"
        />
      ) : (
        <input
          required
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-10 px-3 bg-cream/60 rounded-lg text-sm outline-none focus:ring-2 focus:ring-rust"
        />
      )}
    </label>
  );
}
