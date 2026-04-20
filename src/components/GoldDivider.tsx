export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-10" aria-hidden="true">
      <span className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent via-gold to-gold/40" />
      <svg width="32" height="32" viewBox="0 0 64 64" className="text-gold">
        {/* Lotus */}
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M32 44 C 22 36, 22 24, 32 16 C 42 24, 42 36, 32 44 Z" />
          <path d="M32 44 C 18 42, 12 32, 14 22 C 24 24, 30 32, 32 44 Z" />
          <path d="M32 44 C 46 42, 52 32, 50 22 C 40 24, 34 32, 32 44 Z" />
          <path d="M16 46 Q 32 52 48 46" />
        </g>
      </svg>
      <span className="h-px w-24 sm:w-40 bg-gradient-to-l from-transparent via-gold to-gold/40" />
    </div>
  );
}
