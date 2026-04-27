import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";
import { GoldDivider } from "@/components/GoldDivider";
import { OmSymbol } from "@/components/OmSymbol";
import { CornerOrnament } from "@/components/CornerOrnament";
import { Bansuri } from "@/components/Bansuri";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  component: Index,
});

const HOUSE_NAME = "Charvi Kunj";
const EVENT_DATE = "Thursday, 7th May 2026";
const EVENT_TIME = "12:30 PM onwards";
const EVENT_ADDRESS =
  "# Charvi Kunj - 69, Prithvi Orchids Villa, Behind Infosys, Next to Emarald Enclave, Mysore";
const MAPS_URL =
  "https://www.google.com/maps/place/12%C2%B022'17.2%22N+76%C2%B035'30.4%22E/@12.371445,76.5891911,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.371445!4d76.591766?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";
const FAMILY = ["Shri. Virupakshappa M P", "Smt. Nagarathna H M", "&", "Chandan V"];

function Index() {
  return (
    <main className="relative min-h-screen mandala-bg overflow-hidden">
      {/* Corner ornaments — flowers + diya lamps */}
      <CornerOrnament className="absolute top-0 left-0 w-44 sm:w-64 pointer-events-none" />
      <CornerOrnament className="absolute top-0 right-0 w-44 sm:w-64 -scale-x-100 pointer-events-none" />
      <CornerOrnament className="absolute bottom-0 left-0 w-44 sm:w-64 pointer-events-none" />
      <CornerOrnament className="absolute bottom-0 right-0 w-44 sm:w-64 -scale-x-100 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* HERO — Om symbol */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.65, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex justify-center"
          >
            {/* Soft golden halo */}
            <div
              className="absolute inset-0 -z-10 mx-auto h-56 w-56 sm:h-72 sm:w-72 rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle, oklch(0.82 0.14 85 / 0.35), transparent 70%)",
              }}
            />
            <OmSymbol className="w-28 sm:w-48 drop-shadow-[0_0_25px_oklch(0.82_0.14_85/0.55)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xs sm:text-sm tracking-[0.45em] uppercase text-gold font-medium shimmer"
          >
            ॐ • Gṛhapravēśha • ॐ
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

        <FadeIn>
          <section className="text-center px-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream">
              With folded hands & open hearts
            </h2>
            <p className="mt-7 text-lg sm:text-lg leading-relaxed text-cream/75 font-serif italic">
              As we step into our new home, we seek the blessings of Lord Krishna and the warm
              presence of those who matter most. May your love and good wishes fill these walls with
              joy, light, and prosperity.
              <br />
              <br />
              We would be deeply honoured if you could join us on this auspicious occasion.
            </p>
          </section>
        </FadeIn>

        <GoldDivider />

        <FadeIn>
          <section>
            <h2 className="text-center font-serif text-3xl sm:text-5xl gradient-gold-text mb-12">
              The Celebration
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <DetailCard icon={<Calendar className="w-5 h-5" />} label="Date" value={EVENT_DATE} />
              <DetailCard icon={<Clock className="w-5 h-5" />} label="Time" value={EVENT_TIME} />
              <DetailCard
                icon={<MapPin className="w-5 h-5" />}
                label="Venue"
                value={EVENT_ADDRESS}
              />
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

        <FadeIn>
          <section className="text-center">
            <p className="text-xs tracking-[0.45em] uppercase text-gold shimmer">With Love,</p>
            <div
              className="mt-8 inline-block px-10 py-10 sm:px-14 sm:py-12 rounded-sm border border-gold/40 shadow-elegant relative"
              style={{
                background: "linear-gradient(135deg, oklch(0.20 0.08 263), oklch(0.16 0.07 265))",
              }}
            >
              <Heart className="w-5 h-5 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <ul className="space-y-3">
                {FAMILY.map((name) => (
                  <li key={name} className="font-serif italic text-2xl sm:text-3xl text-cream">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        <GoldDivider />

        {/* KRISHNA'S FLUTE */}
        <FadeIn delay={0.1}>
          <section className="mt-6 text-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-md"
            >
              <Bansuri className="w-full" />
            </motion.div>
            <p className="mt-6 font-serif italic text-cream/70 text-lg sm:text-lg max-w-md mx-auto">
              May the divine melody of Krishna's bansuri bless this home with peace, love, and
              unending music.
            </p>
          </section>
        </FadeIn>

        <footer className="mt-20 text-center">
          <p className="text-lg tracking-[0.1em] uppercase text-gold/80">ಶುಭಂ ಭವತು</p>
        </footer>
      </div>
    </main>
  );
}

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="relative rounded-sm border border-gold/30 p-7 text-center shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1 hover:border-gold/60"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.20 0.08 263 / 0.95), oklch(0.15 0.07 265 / 0.95))",
      }}
    >
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-12 bg-gold" />
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold bg-navy/40">
        {icon}
      </div>
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">{label}</p>
      <p className="font-serif text-cream text-xl leading-snug">{value}</p>
    </div>
  );
}
