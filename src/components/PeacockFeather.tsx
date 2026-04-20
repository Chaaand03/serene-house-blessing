export function PeacockFeather({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 420" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Realistic eye gradients */}
        <radialGradient id="rfEyeOuter" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="oklch(0.95 0.14 92)" />
          <stop offset="25%" stopColor="oklch(0.82 0.16 80)" />
          <stop offset="55%" stopColor="oklch(0.55 0.13 60)" stopOpacity="0.9" />
          <stop offset="80%" stopColor="oklch(0.30 0.11 258)" />
          <stop offset="100%" stopColor="oklch(0.12 0.06 265)" />
        </radialGradient>
        <radialGradient id="rfEyeMid" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.65 0.15 195)" />
          <stop offset="55%" stopColor="oklch(0.40 0.13 215)" />
          <stop offset="100%" stopColor="oklch(0.18 0.09 265)" />
        </radialGradient>
        <radialGradient id="rfPupil" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="oklch(0.30 0.13 258)" />
          <stop offset="60%" stopColor="oklch(0.12 0.07 265)" />
          <stop offset="100%" stopColor="oklch(0.06 0.04 265)" />
        </radialGradient>
        <radialGradient id="rfHeart" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.55 0.12 165)" />
          <stop offset="100%" stopColor="oklch(0.28 0.12 200)" />
        </radialGradient>
        <linearGradient id="rfBarbTeal" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.62 0.14 195)" stopOpacity="0.95" />
          <stop offset="60%" stopColor="oklch(0.42 0.13 215)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="oklch(0.22 0.09 262)" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="rfBarbGreen" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.60 0.13 165)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.30 0.10 200)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Lower fluffy plume — soft teal barbs in two passes for depth */}
      <g opacity="0.55">
        {Array.from({ length: 60 }).map((_, i) => {
          const t = i / 59;
          const y = 130 + t * 270;
          const spread = 14 + Math.sin(t * Math.PI * 0.9) * 48 * (1 - t * 0.35);
          const droop = 4 + t * 10;
          return (
            <g key={`l1-${i}`}>
              <path
                d={`M70 ${y} Q ${70 - spread * 0.5} ${y + droop * 0.4} ${70 - spread} ${y + droop}`}
                stroke="url(#rfBarbGreen)"
                strokeWidth="0.7"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d={`M70 ${y} Q ${70 + spread * 0.5} ${y + droop * 0.4} ${70 + spread} ${y + droop}`}
                stroke="url(#rfBarbGreen)"
                strokeWidth="0.7"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          );
        })}
      </g>
      <g opacity="0.85">
        {Array.from({ length: 80 }).map((_, i) => {
          const t = i / 79;
          const y = 135 + t * 265;
          const spread = 8 + Math.sin(t * Math.PI * 0.95) * 38 * (1 - t * 0.3);
          const droop = 3 + t * 8;
          return (
            <g key={`l2-${i}`}>
              <path
                d={`M70 ${y} Q ${70 - spread * 0.55} ${y + droop * 0.5} ${70 - spread} ${y + droop}`}
                stroke="url(#rfBarbTeal)"
                strokeWidth="0.55"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d={`M70 ${y} Q ${70 + spread * 0.55} ${y + droop * 0.5} ${70 + spread} ${y + droop}`}
                stroke="url(#rfBarbTeal)"
                strokeWidth="0.55"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          );
        })}
      </g>

      {/* Central rachis / stem */}
      <path
        d="M70 110 Q 71 220 70 405"
        stroke="oklch(0.78 0.13 80 / 0.55)"
        strokeWidth="1"
        fill="none"
      />

      {/* Eye — outermost golden-bronze halo (oval, slightly pointed top) */}
      <path
        d="M70 18 C 108 30, 112 92, 70 120 C 28 92, 32 30, 70 18 Z"
        fill="url(#rfEyeOuter)"
      />
      {/* Inner blue-teal */}
      <path
        d="M70 32 C 96 42, 98 86, 70 108 C 42 86, 44 42, 70 32 Z"
        fill="url(#rfEyeMid)"
      />
      {/* Signature crescent — Krishna's peacock motif */}
      <path
        d="M70 42 C 88 58, 88 84, 70 100 C 60 84, 60 58, 70 42 Z"
        fill="url(#rfHeart)"
        opacity="0.95"
      />
      {/* Dark inner pupil */}
      <ellipse cx="70" cy="72" rx="10" ry="17" fill="url(#rfPupil)" />
      {/* Specular highlights */}
      <ellipse cx="66" cy="64" rx="2.2" ry="4.5" fill="oklch(0.96 0.12 90)" opacity="0.95" />
      <ellipse cx="73" cy="80" rx="0.9" ry="1.6" fill="oklch(0.95 0.05 90)" opacity="0.6" />

      {/* Top wisps — fine afterfeather strands */}
      <g stroke="oklch(0.82 0.14 85 / 0.8)" strokeWidth="0.7" fill="none" strokeLinecap="round">
        <path d="M70 4 Q 64 12 56 18" />
        <path d="M70 4 Q 76 12 84 18" />
        <path d="M70 2 V 16" />
        <path d="M70 6 Q 60 10 50 14" opacity="0.6" />
        <path d="M70 6 Q 80 10 90 14" opacity="0.6" />
      </g>
    </svg>
  );
}
