import type { CategorySlug } from "@/types/content";

function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed: number) {
  let state = seed;
  return function random() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CATEGORY_TONE: Record<CategorySlug, string> = {
  musica: "#141210",
  cine: "#101113",
  libros: "#121110",
  ideas: "#111111",
  cultura: "#131110",
  play: "#0f1213",
  tech: "#0e1214",
};

type EditorialArtProps = {
  seed: string;
  category?: CategorySlug;
  index?: string;
  className?: string;
  scale?: "hero" | "default" | "small";
};

export function EditorialArt({
  seed,
  category,
  index,
  className,
  scale = "default",
}: EditorialArtProps) {
  const random = mulberry32(hashString(seed));
  const base = category ? CATEGORY_TONE[category] : "#121210";
  const uid = seed.replace(/[^a-zA-Z0-9]/g, "").slice(0, 24);
  const blobCount = scale === "hero" ? 4 : 3;
  const spread = scale === "small" ? 55 : 70;

  const blobs = Array.from({ length: blobCount }).map(() => ({
    cx: 10 + random() * spread,
    cy: 10 + random() * spread,
    r: (scale === "hero" ? 34 : scale === "small" ? 22 : 28) + random() * 26,
    light: random() > 0.42,
    opacity: 0.1 + random() * 0.22,
  }));

  const grainSeed = Math.floor(random() * 1000);
  const angle = Math.floor(random() * 360);

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`base-${uid}`}
          gradientTransform={`rotate(${angle} 0.5 0.5)`}
        >
          <stop offset="0%" stopColor={base} />
          <stop offset="100%" stopColor="#050504" />
        </linearGradient>
        <radialGradient id={`vignette-${uid}`} cx="50%" cy="42%" r="72%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
        </radialGradient>
        <filter id={`grain-${uid}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            seed={grainSeed}
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.045 0"
          />
        </filter>
      </defs>

      <rect width="400" height="300" fill={`url(#base-${uid})`} />

      <g>
        {blobs.map((b, i) => (
          <circle
            key={i}
            cx={`${b.cx}%`}
            cy={`${b.cy}%`}
            r={b.r}
            fill={b.light ? "#f6f5f1" : "#000000"}
            opacity={b.opacity}
            filter="blur(28px)"
          />
        ))}
      </g>

      <rect width="400" height="300" fill={`url(#vignette-${uid})`} />
      <rect width="400" height="300" filter={`url(#grain-${uid})`} opacity="0.55" />

      {index ? (
        <text
          x="382"
          y="284"
          textAnchor="end"
          fontSize="13"
          fill="#f6f5f1"
          opacity="0.4"
          letterSpacing="0.08em"
          fontFamily="var(--font-sans)"
        >
          {index}
        </text>
      ) : null}
    </svg>
  );
}
