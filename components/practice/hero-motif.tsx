/**
 * The conceptual line motif: a flat path that splits at one marked point
 * (the catalyst — "the one build") and climbs steeply, while "without it"
 * stays flat. Drawn as clean cobalt line art.
 */
export function HeroMotif() {
  return (
    <svg
      viewBox="0 0 480 220"
      role="img"
      aria-label="A flat path splits at one point: do nothing and it stays flat; make one change and the curve climbs steeply."
      className="h-auto w-full"
    >
      <line
        x1="34"
        y1="176"
        x2="452"
        y2="176"
        stroke="var(--border)"
        strokeWidth="2"
      />
      <path
        d="M214 150 L452 154"
        stroke="var(--muted-foreground)"
        strokeWidth="2"
        strokeDasharray="2 8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <text
        x="450"
        y="172"
        textAnchor="end"
        fontSize="11"
        fill="var(--muted-foreground)"
        fontFamily="var(--font-mono)"
      >
        without it
      </text>
      <path
        d="M40 152 Q 130 150 214 150 C 300 148 350 96 432 28"
        stroke="var(--primary)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="432,28 424,33 431,40" fill="var(--primary)" />
      <circle
        cx="214"
        cy="150"
        r="11"
        fill="var(--card)"
        stroke="var(--primary)"
        strokeWidth="1.5"
      />
      <circle cx="214" cy="150" r="4.5" fill="var(--primary)" />
      <text
        x="214"
        y="200"
        textAnchor="middle"
        fontSize="12"
        fill="var(--foreground)"
        fontWeight="600"
        fontFamily="var(--font-sans)"
      >
        the one build
      </text>
    </svg>
  )
}
