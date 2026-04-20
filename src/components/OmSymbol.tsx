export function OmSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="omGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.95 0.14 92)" />
          <stop offset="40%" stopColor="oklch(0.82 0.16 80)" />
          <stop offset="75%" stopColor="oklch(0.62 0.15 65)" />
          <stop offset="100%" stopColor="oklch(0.42 0.12 55)" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Tiro Devanagari Sanskrit', 'Noto Serif Devanagari', 'Sanskrit Text', serif"
        fontSize="170"
        fontWeight="500"
        fill="url(#omGold)"
      >
        ॐ
      </text>
    </svg>
  );
}
