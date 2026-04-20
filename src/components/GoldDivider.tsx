export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12" aria-hidden="true">
      <span className="h-px w-24 sm:w-44 bg-gradient-to-r from-transparent via-gold to-gold/40" />
      <svg width="38" height="38" viewBox="0 0 64 64" className="text-gold shimmer">
        <defs>
          <radialGradient id="lotusG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.13 90)" />
            <stop offset="100%" stopColor="oklch(0.72 0.16 78)" />
          </radialGradient>
        </defs>
        <g fill="none" stroke="url(#lotusG)" strokeWidth="1.3" strokeLinecap="round">
          <path d="M32 44 C 22 36, 22 24, 32 16 C 42 24, 42 36, 32 44 Z" />
          <path d="M32 44 C 18 42, 12 32, 14 22 C 24 24, 30 32, 32 44 Z" />
          <path d="M32 44 C 46 42, 52 32, 50 22 C 40 24, 34 32, 32 44 Z" />
          <path d="M16 46 Q 32 52 48 46" />
        </g>
        <circle cx="32" cy="32" r="2" fill="oklch(0.55 0.13 200)" />
      </svg>
      <span className="h-px w-24 sm:w-44 bg-gradient-to-l from-transparent via-gold to-gold/40" />
    </div>
  );
}
