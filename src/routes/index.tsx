import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";
import { Kalash } from "@/components/Kalash";
import { PeacockFeather } from "@/components/PeacockFeather";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  component: Index,
});

const HOUSE_NAME = "Shri Nivas";
const EVENT_DATE = "Sunday, 15th December 2025";
const EVENT_TIME = "10:00 AM onwards";
const EVENT_ADDRESS = "No. 42, Lotus Avenue, Jayanagar 4th Block, Bengaluru — 560011";
const MAPS_URL = "https://maps.google.com/?q=Jayanagar+4th+Block+Bengaluru";
const FAMILY = ["Ramesh & Lakshmi", "Arjun & Priya", "Little Aanya"];
const RSVP_WHATSAPP = "https://wa.me/919999999999?text=I%20will%20attend%20the%20Gruhapravesam";

function Index() {
  return (
    <main className="relative min-h-screen mandala-bg overflow-hidden">
      {/* Decorative corner mandalas */}
      <DecorativeCorner className="absolute top-0 left-0 w-40 sm:w-64 text-gold/25" />
      <DecorativeCorner className="absolute top-0 right-0 w-40 sm:w-64 text-gold/25 scale-x-[-1]" />
      <DecorativeCorner className="absolute bottom-0 left-0 w-40 sm:w-64 text-gold/25 scale-y-[-1]" />
      <DecorativeCorner className="absolute bottom-0 right-0 w-40 sm:w-64 text-gold/25 -scale-100" />

      {/* Floating peacock feathers in background */}
      <PeacockFeather
        className="hidden md:block absolute top-10 -left-10 w-28 opacity-50 feather-glow float-slow"
        // @ts-expect-error css var
        style={{ "--r": "-22deg" }}
      />
      <PeacockFeather
        className="hidden md:block absolute top-32 -right-8 w-32 opacity-50 feather-glow float-slow"
        // @ts-expect-error css var
        style={{ "--r": "20deg", animationDelay: "1.5s" }}
      />
      <PeacockFeather
        className="hidden lg:block absolute bottom-20 left-4 w-24 opacity-40 feather-glow float-slow"
        // @ts-expect-error css var
        style={{ "--r": "-12deg", animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* HERO */}
        <section className="text-center">
          {/* Crossed peacock feathers crown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-44 sm:h-52 w-full flex items-end justify-center"
          >
            <PeacockFeather className="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 sm:w-36 -rotate-[28deg] origin-bottom feather-glow" />
            <PeacockFeather className="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 sm:w-36 rotate-[28deg] origin-bottom feather-glow" />
            <PeacockFeather className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 sm:w-40 feather-glow z-10" />
            <Kalash className="relative z-20 w-14 sm:w-16 text-gold drop-shadow-[0_0_15px_oklch(0.82_0.14_85/0.5)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xs sm:text-sm tracking-[0.45em] uppercase text-gold font-medium shimmer"
          >
            ॐ • Gṛhapravēśam • ॐ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="mt-5 font-serif italic text-6xl sm:text-8xl gradient-peacock-text leading-[1.05] drop-shadow-[0_4px_30px_oklch(0_0_0/0.5)]"
          >
            {HOUSE_NAME}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-6 text-base sm:text-lg text-cream/80 italic font-serif tracking-wide"
          >
            — A Sacred Housewarming Invitation —
          </motion.p>
        </section>

        <GoldDivider />

        {/* INVITE MESSAGE */}
        <FadeIn>
          <section className="text-center px-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream">With folded hands & open hearts</h2>
            <p className="mt-7 text-base sm:text-lg leading-relaxed text-cream/75 font-serif italic">
              As we step into our new home, we seek the blessings of Lord Krishna
              and the warm presence of those who matter most. May your love and
              good wishes fill these walls with joy, light, and prosperity —
              like the iridescence of a thousand peacock feathers.
              <br />
              <br />
              We would be deeply honoured if you could join us on this auspicious occasion.
            </p>
          </section>
        </FadeIn>

        <GoldDivider />

        {/* EVENT DETAILS */}
        <FadeIn>
          <section>
            <h2 className="text-center font-serif text-3xl sm:text-5xl gradient-gold-text mb-12">
              The Celebration
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <DetailCard icon={<Calendar className="w-5 h-5" />} label="Date" value={EVENT_DATE} />
              <DetailCard icon={<Clock className="w-5 h-5" />} label="Time" value={EVENT_TIME} />
              <DetailCard icon={<MapPin className="w-5 h-5" />} label="Venue" value={EVENT_ADDRESS} />
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full px-9 py-4 text-navy-deep font-medium transition-all hover:scale-[1.04] shadow-glow"
                style={{ background: "var(--gradient-gold)" }}
              >
                <span className="absolute inset-0 rounded-full ring-1 ring-gold/60" />
                <MapPin className="relative w-4 h-4" />
                <span className="relative font-serif italic text-lg">Navigate to our Home</span>
              </a>
            </div>
          </section>
        </FadeIn>

        <GoldDivider />

        {/* FAMILY */}
        <FadeIn>
          <section className="text-center">
            <p className="text-xs tracking-[0.45em] uppercase text-gold shimmer">With Love,</p>
            <div
              className="mt-8 inline-block px-10 py-10 sm:px-14 sm:py-12 rounded-sm border border-gold/40 shadow-elegant relative"
              style={{ background: "linear-gradient(135deg, oklch(0.20 0.08 263), oklch(0.16 0.07 265))" }}
            >
              {/* Tiny corner feathers */}
              <PeacockFeather className="absolute -top-6 -left-6 w-10 -rotate-[35deg] feather-glow" />
              <PeacockFeather className="absolute -top-6 -right-6 w-10 rotate-[35deg] feather-glow" />
              <Heart className="w-5 h-5 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <ul className="space-y-3">
                {FAMILY.map((name) => (
                  <li
                    key={name}
                    className="font-serif italic text-2xl sm:text-3xl text-cream"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        <GoldDivider />

        {/* RSVP */}
        <FadeIn>
          <section className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-cream">Kindly let us know</h2>
            <p className="mt-3 text-cream/60 text-sm">Your presence is the greatest blessing.</p>
            <a
              href={RSVP_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold bg-transparent px-8 py-3 text-cream font-medium transition-all hover:bg-gold/15 hover:shadow-glow"
            >
              <Heart className="w-4 h-4 text-gold" />
              RSVP via WhatsApp
            </a>
          </section>
        </FadeIn>

        <footer className="mt-24 text-center">
          <div className="flex justify-center mb-4 opacity-70">
            <PeacockFeather className="w-12 feather-glow" />
          </div>
          <p className="text-xs tracking-[0.35em] uppercase text-gold/80">
            Śubham Bhavatu • शुभं भवतु
          </p>
        </footer>
      </div>
    </main>
  );
}

function DetailCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div
      className="relative rounded-sm border border-gold/30 p-7 text-center shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1 hover:border-gold/60"
      style={{ background: "linear-gradient(160deg, oklch(0.20 0.08 263 / 0.95), oklch(0.15 0.07 265 / 0.95))" }}
    >
      {/* Top gold accent */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-12 bg-gold" />
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold bg-navy/40">
        {icon}
      </div>
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">{label}</p>
      <p className="font-serif text-cream text-base leading-snug">{value}</p>
    </div>
  );
}

function DecorativeCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.6">
      <circle cx="0" cy="0" r="60" />
      <circle cx="0" cy="0" r="90" />
      <circle cx="0" cy="0" r="120" strokeDasharray="2 4" />
      <circle cx="0" cy="0" r="150" />
      <g>
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={Math.cos((i * Math.PI) / 24) * 160}
            y2={Math.sin((i * Math.PI) / 24) * 160}
          />
        ))}
      </g>
    </svg>
  );
}
