export function Kalash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kPot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.95 0.14 92)" />
          <stop offset="40%" stopColor="oklch(0.78 0.16 80)" />
          <stop offset="70%" stopColor="oklch(0.55 0.14 65)" />
          <stop offset="100%" stopColor="oklch(0.35 0.10 60)" />
        </linearGradient>
        <linearGradient id="kPotShade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.30 0.08 60)" stopOpacity="0.5" />
          <stop offset="50%" stopColor="oklch(0.95 0.13 90)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.30 0.08 60)" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="kLeaf" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.65 0.16 145)" />
          <stop offset="60%" stopColor="oklch(0.45 0.15 150)" />
          <stop offset="100%" stopColor="oklch(0.28 0.10 155)" />
        </linearGradient>
        <radialGradient id="kCoco" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="oklch(0.55 0.10 55)" />
          <stop offset="70%" stopColor="oklch(0.35 0.09 45)" />
          <stop offset="100%" stopColor="oklch(0.20 0.06 40)" />
        </radialGradient>
      </defs>

      {/* Coconut on top */}
      <ellipse cx="70" cy="28" rx="14" ry="18" fill="url(#kCoco)" />
      <path d="M64 14 Q 70 8 76 14" stroke="oklch(0.30 0.08 50)" strokeWidth="1" fill="none" />
      <ellipse cx="65" cy="22" rx="1.2" ry="1.8" fill="oklch(0.20 0.05 40)" />
      <ellipse cx="70" cy="20" rx="1.2" ry="1.8" fill="oklch(0.20 0.05 40)" />
      <ellipse cx="75" cy="22" rx="1.2" ry="1.8" fill="oklch(0.20 0.05 40)" />

      {/* Mango leaves around the rim */}
      <g>
        <path d="M40 50 Q 30 38 24 48 Q 28 60 44 56 Z" fill="url(#kLeaf)" />
        <path d="M52 48 Q 46 34 38 42 Q 40 56 54 54 Z" fill="url(#kLeaf)" />
        <path d="M88 48 Q 94 34 102 42 Q 100 56 86 54 Z" fill="url(#kLeaf)" />
        <path d="M100 50 Q 110 38 116 48 Q 112 60 96 56 Z" fill="url(#kLeaf)" />
        {/* leaf veins */}
        <path d="M30 48 Q 36 50 42 54" stroke="oklch(0.25 0.08 150)" strokeWidth="0.5" fill="none" />
        <path d="M110 48 Q 104 50 98 54" stroke="oklch(0.25 0.08 150)" strokeWidth="0.5" fill="none" />
      </g>

      {/* Pot rim — double band */}
      <rect x="32" y="54" width="76" height="6" rx="1.5" fill="url(#kPot)" />
      <rect x="32" y="54" width="76" height="6" rx="1.5" fill="url(#kPotShade)" />
      <rect x="36" y="62" width="68" height="3" rx="1" fill="oklch(0.55 0.14 65)" />

      {/* Pot body */}
      <path
        d="M36 66
           C 18 80, 16 120, 34 150
           L 106 150
           C 124 120, 122 80, 104 66 Z"
        fill="url(#kPot)"
      />
      <path
        d="M36 66
           C 18 80, 16 120, 34 150
           L 106 150
           C 124 120, 122 80, 104 66 Z"
        fill="url(#kPotShade)"
      />

      {/* Decorative engraved bands */}
      <path d="M28 92 Q 70 100 112 92" stroke="oklch(0.40 0.10 55)" strokeWidth="0.8" fill="none" />
      <path d="M30 100 Q 70 108 110 100" stroke="oklch(0.95 0.13 90)" strokeWidth="0.5" fill="none" opacity="0.8" />
      <path d="M28 116 Q 70 124 112 116" stroke="oklch(0.40 0.10 55)" strokeWidth="0.8" fill="none" />

      {/* Center medallion */}
      <circle cx="70" cy="115" r="8" fill="none" stroke="oklch(0.40 0.10 55)" strokeWidth="0.8" />
      <circle cx="70" cy="115" r="3" fill="oklch(0.40 0.13 215)" />
      <g stroke="oklch(0.95 0.13 90)" strokeWidth="0.5" fill="none">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={i}
              x1={70 + Math.cos(a) * 4}
              y1={115 + Math.sin(a) * 4}
              x2={70 + Math.cos(a) * 8}
              y2={115 + Math.sin(a) * 8}
            />
          );
        })}
      </g>

      {/* Dotted decoration */}
      <g fill="oklch(0.30 0.08 50)">
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={32 + i * 6.8} cy={134} r="0.9" />
        ))}
      </g>

      {/* Base */}
      <rect x="30" y="150" width="80" height="5" rx="1.5" fill="url(#kPot)" />
      <rect x="36" y="155" width="68" height="4" rx="1" fill="oklch(0.45 0.12 60)" />

      {/* Highlight */}
      <path
        d="M50 75 Q 42 100 50 140"
        stroke="oklch(0.96 0.12 90)"
        strokeWidth="1.5"
        opacity="0.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
