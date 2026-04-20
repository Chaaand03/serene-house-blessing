export function Bansuri({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 140" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.10 70)" />
          <stop offset="35%" stopColor="oklch(0.62 0.11 60)" />
          <stop offset="70%" stopColor="oklch(0.42 0.10 55)" />
          <stop offset="100%" stopColor="oklch(0.28 0.08 50)" />
        </linearGradient>
        <linearGradient id="flShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.95 0.10 90)" stopOpacity="0.7" />
          <stop offset="50%" stopColor="oklch(0.95 0.10 90)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.20 0.05 50)" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="flBind" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.85 0.16 80)" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 60)" />
        </linearGradient>
      </defs>

      {/* Subtle shadow */}
      <ellipse cx="210" cy="118" rx="180" ry="4" fill="oklch(0 0 0)" opacity="0.35" />

      {/* Flute body */}
      <rect x="20" y="58" width="380" height="22" rx="11" fill="url(#flBody)" />
      <rect x="20" y="58" width="380" height="22" rx="11" fill="url(#flShine)" />

      {/* End caps */}
      <rect x="14" y="56" width="14" height="26" rx="4" fill="url(#flBind)" />
      <rect x="392" y="56" width="14" height="26" rx="4" fill="url(#flBind)" />

      {/* Decorative bindings */}
      <rect x="60" y="55" width="6" height="28" rx="1.5" fill="url(#flBind)" />
      <rect x="350" y="55" width="6" height="28" rx="1.5" fill="url(#flBind)" />

      {/* Blow hole */}
      <ellipse cx="90" cy="69" rx="5" ry="3.5" fill="oklch(0.10 0.04 50)" />

      {/* Finger holes */}
      {[160, 195, 230, 265, 300, 335].map((x) => (
        <ellipse key={x} cx={x} cy="69" rx="4" ry="3" fill="oklch(0.10 0.04 50)" />
      ))}

      {/* Fine rings */}
      {[110, 140, 380].map((x) => (
        <line
          key={x}
          x1={x}
          y1="58"
          x2={x}
          y2="80"
          stroke="oklch(0.30 0.08 50)"
          strokeWidth="0.6"
          opacity="0.7"
        />
      ))}

      {/* Tassel/ribbon at the end */}
      <g>
        <path
          d="M406 68 Q 416 70 418 80 Q 414 96 408 110"
          stroke="oklch(0.55 0.14 60)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M406 70 Q 414 76 412 92 Q 408 102 402 112"
          stroke="oklch(0.85 0.16 80)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="408" cy="112" r="3" fill="oklch(0.45 0.18 25)" />
      </g>

      {/* Floating musical notes */}
      <g fill="oklch(0.85 0.14 85 / 0.85)">
        <g transform="translate(120, 30)">
          <circle cx="0" cy="8" r="3" />
          <rect x="2.4" y="-6" width="1.2" height="14" />
          <path d="M3.6 -6 Q 10 -2 8 6" stroke="oklch(0.85 0.14 85 / 0.85)" strokeWidth="1.2" fill="none" />
        </g>
        <g transform="translate(220, 18)">
          <circle cx="0" cy="8" r="2.5" />
          <rect x="2" y="-4" width="1" height="12" />
          <circle cx="10" cy="6" r="2.5" />
          <rect x="11.5" y="-6" width="1" height="12" />
          <path d="M3 -4 Q 8 -6 12.5 -6" stroke="oklch(0.85 0.14 85 / 0.85)" strokeWidth="1" fill="none" />
        </g>
        <g transform="translate(310, 28)">
          <circle cx="0" cy="8" r="3" />
          <rect x="2.4" y="-6" width="1.2" height="14" />
          <path d="M3.6 -6 Q 10 -2 8 6" stroke="oklch(0.85 0.14 85 / 0.85)" strokeWidth="1.2" fill="none" />
        </g>
      </g>
    </svg>
  );
}
