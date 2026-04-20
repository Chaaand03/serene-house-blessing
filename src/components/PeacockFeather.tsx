export function PeacockFeather({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="eyeOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.92 0.13 90)" />
          <stop offset="40%" stopColor="oklch(0.78 0.16 78)" />
          <stop offset="70%" stopColor="oklch(0.40 0.13 215)" />
          <stop offset="100%" stopColor="oklch(0.18 0.09 265)" />
        </radialGradient>
        <radialGradient id="eyeInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.55 0.12 165)" />
          <stop offset="60%" stopColor="oklch(0.32 0.13 215)" />
          <stop offset="100%" stopColor="oklch(0.15 0.07 265)" />
        </radialGradient>
        <radialGradient id="pupil" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.18 0.09 265)" />
          <stop offset="100%" stopColor="oklch(0.08 0.05 265)" />
        </radialGradient>
        <linearGradient id="plume" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.22 0.09 262)" />
          <stop offset="50%" stopColor="oklch(0.40 0.13 215)" />
          <stop offset="100%" stopColor="oklch(0.55 0.13 200)" />
        </linearGradient>
      </defs>

      {/* Soft barbs / plume */}
      <g opacity="0.85" stroke="url(#plume)" strokeWidth="1" strokeLinecap="round">
        {Array.from({ length: 28 }).map((_, i) => {
          const t = i / 27;
          const y = 80 + t * 200;
          const spread = 10 + Math.sin(t * Math.PI) * 38;
          return (
            <g key={i}>
              <line x1="60" y1={y} x2={60 - spread} y2={y + 6} />
              <line x1="60" y1={y} x2={60 + spread} y2={y + 6} />
            </g>
          );
        })}
      </g>

      {/* Stem */}
      <path d="M60 70 Q 62 180 60 310" stroke="oklch(0.82 0.14 85 / 0.7)" strokeWidth="1.2" />

      {/* Eye outer leaf */}
      <ellipse cx="60" cy="56" rx="34" ry="56" fill="url(#eyeOuter)" />
      {/* Eye middle */}
      <ellipse cx="60" cy="58" rx="22" ry="38" fill="url(#eyeInner)" />
      {/* Eye crescent — peacock signature */}
      <path
        d="M60 30 Q 78 60 60 88 Q 50 60 60 30 Z"
        fill="oklch(0.55 0.13 200)"
        opacity="0.85"
      />
      {/* Pupil */}
      <ellipse cx="60" cy="60" rx="9" ry="16" fill="url(#pupil)" />
      {/* Gold highlight */}
      <ellipse cx="56" cy="52" rx="2" ry="4" fill="oklch(0.95 0.13 90)" opacity="0.9" />

      {/* Top fine wisps */}
      <g stroke="oklch(0.82 0.14 85 / 0.7)" strokeWidth="0.7" fill="none" strokeLinecap="round">
        <path d="M60 6 Q 56 16 50 22" />
        <path d="M60 6 Q 64 16 70 22" />
        <path d="M60 4 V 18" />
      </g>
    </svg>
  );
}
