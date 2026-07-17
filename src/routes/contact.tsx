import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MithusBistro — Visit, Call or Order" },
      {
        name: "description",
        content:
          "Reach MithusBistro on WhatsApp, phone, Instagram, email, or visit the cafe.",
      },
      { property: "og:title", content: "Contact MithusBistro" },
      {
        property: "og:description",
        content: "Get in touch with your neighborhood bistro.",
      },
    ],
  }),
  component: Contact,
});

const PHONE = "9994416168";
const WA = "919994416168";

const INSTAGRAM_URL =
  "https://www.instagram.com/mithu_baking_mart_17/";

const MAP_URL =
  "https://maps.app.goo.gl/BUgYRwNrpdYcc9Zk7?g_st=aw";

const EMAIL = "mithusbistro@gmail.com";

function Contact() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-rust">
            Get in Touch
          </p>

          <h1 className="font-serif text-5xl text-cocoa md:text-6xl">
            Find us. Follow us. Feed with us.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition-colors hover:bg-cocoa hover:text-cream"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-cocoa text-cream transition-colors group-hover:bg-cream group-hover:text-cocoa">
                  <MessageCircle className="size-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    WhatsApp
                  </p>
                  <p className="font-serif text-xl">+91 99944 16168</p>
                </div>
              </a>

              {/* Call */}
              <a
                href={`tel:+91${PHONE}`}
                className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition-colors hover:bg-cocoa hover:text-cream"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-cocoa text-cream transition-colors group-hover:bg-cream group-hover:text-cocoa">
                  <Phone className="size-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    Call Us
                  </p>
                  <p className="font-serif text-xl">+91 99944 16168</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition-colors hover:bg-cocoa hover:text-cream"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-cocoa text-cream transition-colors group-hover:bg-cream group-hover:text-cocoa">
                  <Instagram className="size-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    Instagram
                  </p>
                  <p className="font-serif text-xl">
                    @mithu_baking_mart_17
                  </p>
                </div>
              </a>

              {/* Email */}
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mithusbistro@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition-colors hover:bg-cocoa hover:text-cream"
>
  <span className="flex size-12 items-center justify-center rounded-full bg-cocoa text-cream transition-colors group-hover:bg-cream group-hover:text-cocoa">
    <Mail className="size-5" />
  </span>

  <div>
    <p className="text-xs uppercase tracking-widest opacity-70">
      Email
    </p>

    <p className="font-serif text-xl">
      mithusbistro@gmail.com
    </p>
  </div>
</a>

              {/* Location */}
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition-colors hover:bg-cocoa hover:text-cream"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-cocoa text-cream transition-colors group-hover:bg-cream group-hover:text-cocoa">
                  <MapPin className="size-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    Visit Us
                  </p>

                  <p className="font-serif text-xl">
                    MithusBistro Cafe
                  </p>

                  <p className="text-sm opacity-80">
                    Open in Google Maps
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="aspect-square min-h-[400px] overflow-hidden rounded-3xl ring-1 ring-border md:h-full md:aspect-auto">
              <iframe
                title="MithusBistro Location"
                src="https://www.google.com/maps?q=https://maps.app.goo.gl/BUgYRwNrpdYcc9Zk7&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}