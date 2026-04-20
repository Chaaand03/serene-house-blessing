import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";
import { Kalash } from "@/components/Kalash";
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
      <DecorativeCorner className="absolute top-0 left-0 w-40 sm:w-64 text-gold/30" />
      <DecorativeCorner className="absolute top-0 right-0 w-40 sm:w-64 text-gold/30 scale-x-[-1]" />
      <DecorativeCorner className="absolute bottom-0 left-0 w-40 sm:w-64 text-gold/30 scale-y-[-1]" />
      <DecorativeCorner className="absolute bottom-0 right-0 w-40 sm:w-64 text-gold/30 -scale-100" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <Kalash className="w-16 sm:w-20 text-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xs sm:text-sm tracking-[0.4em] uppercase text-gold font-medium"
          >
            ॐ • Gṛhapravēśam • ॐ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="mt-4 font-serif italic text-5xl sm:text-7xl text-navy leading-[1.05]"
          >
            {HOUSE_NAME}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground italic font-serif"
          >
            — A Housewarming Invitation —
          </motion.p>
        </section>

        <GoldDivider />

        {/* INVITE MESSAGE */}
        <FadeIn>
          <section className="text-center px-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-navy">With folded hands & open hearts</h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/80 font-serif italic">
              As we step into our new home, we seek the blessings of the divine
              and the warm presence of those who matter most. Your love and good
              wishes will fill these walls with joy, light, and prosperity.
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
            <h2 className="text-center font-serif text-3xl sm:text-4xl text-navy mb-10">
              The Celebration
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <DetailCard icon={<Calendar className="w-5 h-5" />} label="Date" value={EVENT_DATE} />
              <DetailCard icon={<Clock className="w-5 h-5" />} label="Time" value={EVENT_TIME} />
              <DetailCard icon={<MapPin className="w-5 h-5" />} label="Venue" value={EVENT_ADDRESS} />
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-cream shadow-elegant transition-all hover:scale-[1.03] hover:shadow-[0_25px_70px_-20px_oklch(0.24_0.06_260/0.4)]"
              >
                <span className="absolute inset-0 rounded-full ring-1 ring-gold/40" />
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-serif italic text-lg">Navigate to our Home</span>
              </a>
            </div>
          </section>
        </FadeIn>

        <GoldDivider />

        {/* FAMILY */}
        <FadeIn>
          <section className="text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">With Love,</p>
            <div className="mt-6 inline-block px-8 py-8 sm:px-12 sm:py-10 rounded-sm border border-gold/40 bg-card/60 backdrop-blur-sm shadow-soft">
              <Heart className="w-5 h-5 text-gold mx-auto mb-4" strokeWidth={1.5} />
              <ul className="space-y-3">
                {FAMILY.map((name) => (
                  <li
                    key={name}
                    className="font-serif italic text-xl sm:text-2xl text-navy"
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
            <h2 className="font-serif text-2xl text-navy">Kindly let us know</h2>
            <p className="mt-3 text-muted-foreground text-sm">Your presence is the greatest blessing.</p>
            <a
              href={RSVP_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold bg-transparent px-7 py-3 text-navy font-medium transition-all hover:bg-gold/10"
            >
              <Heart className="w-4 h-4 text-gold" />
              RSVP via WhatsApp
            </a>
          </section>
        </FadeIn>

        <footer className="mt-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
            Śubham Bhavatu • शुभं भवतु
          </p>
        </footer>
      </div>
    </main>
  );
}

function DetailCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="relative rounded-sm border border-gold/40 bg-card/70 backdrop-blur-sm p-6 text-center shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold">
        {icon}
      </div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{label}</p>
      <p className="font-serif text-navy text-base leading-snug">{value}</p>
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
