export function Kalash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Coconut */}
      <ellipse cx="40" cy="18" rx="9" ry="11" />
      {/* Mango leaves */}
      <path d="M22 30 Q 30 22 40 28 Q 50 22 58 30" />
      <path d="M26 32 Q 32 28 38 32" />
      <path d="M42 32 Q 48 28 54 32" />
      {/* Pot rim */}
      <path d="M18 34 H 62" />
      <path d="M20 38 H 60" />
      {/* Pot body */}
      <path d="M20 38 C 14 50, 14 70, 26 82 H 54 C 66 70, 66 50, 60 38" />
      {/* Decorative band */}
      <path d="M22 58 H 58" strokeDasharray="2 3" />
      {/* Base */}
      <path d="M22 82 H 58" />
      <path d="M26 86 H 54" />
    </svg>
  );
}
