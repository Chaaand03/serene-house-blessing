export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="coLamp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="oklch(1 0.16 90)" />
          <stop offset="40%" stopColor="oklch(0.85 0.18 75)" />
          <stop offset="100%" stopColor="oklch(0.45 0.14 55)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="coDiya" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.85 0.16 75)" />
          <stop offset="60%" stopColor="oklch(0.55 0.14 55)" />
          <stop offset="100%" stopColor="oklch(0.30 0.10 50)" />
        </linearGradient>
        <radialGradient id="coFlame" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="oklch(1 0.18 92)" />
          <stop offset="60%" stopColor="oklch(0.78 0.18 65)" />
          <stop offset="100%" stopColor="oklch(0.50 0.18 40)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coPetal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.92 0.13 90)" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 65)" />
        </radialGradient>
        <radialGradient id="coCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.65 0.15 195)" />
          <stop offset="100%" stopColor="oklch(0.30 0.12 215)" />
        </radialGradient>
      </defs>

      {/* Curving vine from corner */}
      <path
        d="M0 0 Q 50 30 70 70 Q 90 110 60 160"
        stroke="oklch(0.78 0.13 80 / 0.55)"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M0 0 Q 30 50 70 70 Q 110 90 160 60"
        stroke="oklch(0.78 0.13 80 / 0.55)"
        strokeWidth="0.9"
        fill="none"
      />

      {/* Tiny leaves along vines */}
      <g fill="oklch(0.45 0.13 150 / 0.7)">
        <ellipse cx="35" cy="22" rx="5" ry="2.2" transform="rotate(-30 35 22)" />
        <ellipse cx="55" cy="48" rx="5" ry="2.2" transform="rotate(-15 55 48)" />
        <ellipse cx="78" cy="80" rx="5" ry="2.2" transform="rotate(15 78 80)" />
        <ellipse cx="22" cy="40" rx="4" ry="2" transform="rotate(40 22 40)" />
        <ellipse cx="48" cy="65" rx="4" ry="2" transform="rotate(55 48 65)" />
      </g>

      {/* Marigold flower #1 (top-right area of the corner cluster) */}
      <g transform="translate(95, 55)">
        <circle r="22" fill="url(#coLamp)" opacity="0.4" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x = Math.cos(a) * 11;
          const y = Math.sin(a) * 11;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="6"
              ry="3.5"
              fill="url(#coPetal)"
              transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`}
              opacity="0.95"
            />
          );
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8 + Math.PI / 8;
          const x = Math.cos(a) * 6;
          const y = Math.sin(a) * 6;
          return (
            <ellipse
              key={`i-${i}`}
              cx={x}
              cy={y}
              rx="4"
              ry="2.5"
              fill="oklch(0.78 0.16 70)"
              transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`}
            />
          );
        })}
        <circle r="4" fill="url(#coCenter)" />
      </g>

      {/* Smaller flower #2 */}
      <g transform="translate(45, 95)">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8;
          const x = Math.cos(a) * 7;
          const y = Math.sin(a) * 7;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="4"
              ry="2.4"
              fill="url(#coPetal)"
              transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`}
              opacity="0.9"
            />
          );
        })}
        <circle r="2.5" fill="url(#coCenter)" />
      </g>

      {/* Diya (oil lamp) — bottom right of cluster */}
      <g transform="translate(135, 130)">
        {/* Glow */}
        <circle cx="0" cy="-18" r="28" fill="url(#coLamp)" opacity="0.55" />
        {/* Lamp body — almond shape */}
        <path
          d="M -24 0 Q -24 14, 0 16 Q 24 14, 24 0 Q 18 -4, 0 -3 Q -18 -4, -24 0 Z"
          fill="url(#coDiya)"
        />
        {/* Rim highlight */}
        <path
          d="M -22 -1 Q 0 -5 22 -1"
          stroke="oklch(0.95 0.13 90)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.8"
        />
        {/* Wick */}
        <rect x="-0.8" y="-9" width="1.6" height="6" fill="oklch(0.30 0.06 50)" />
        {/* Flame */}
        <path
          d="M0 -28 Q 5 -20 3 -12 Q 0 -8 -3 -12 Q -5 -20 0 -28 Z"
          fill="url(#coFlame)"
        />
        <path
          d="M0 -22 Q 2 -18 0 -13 Q -2 -18 0 -22 Z"
          fill="oklch(1 0.05 90)"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}
