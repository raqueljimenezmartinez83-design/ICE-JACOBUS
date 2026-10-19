import type { ScoopColor } from "@/data/flavors";
import styles from "./FlavorArt.module.css";

const fill: Record<ScoopColor, string> = {
  mint: "var(--leaf)",
  lavender: "var(--amethyst)",
  peach: "var(--sand)",
  pink: "var(--grass)",
  lime: "var(--gold)",
  cyan: "var(--diamond)",
  cream: "var(--bone)",
  ink: "var(--obsidian)",
};

type Props = {
  scoop: ScoopColor;
  topping?: ScoopColor;
  variant?: "cone" | "cup" | "double";
  className?: string;
  title?: string;
};

/**
 * Ilustración plana de helado. Coordenadas internas del viewBox (no son tokens de
 * layout): el tamaño real lo pone el contenedor vía CSS.
 */
export function FlavorArt({ scoop, topping, variant = "cone", className, title }: Props) {
  const s = fill[scoop];
  const t = topping ? fill[topping] : undefined;
  // Si la bola es ink, el trazo interno pasa a cream para que se lea la forma
  const detail = scoop === "ink" ? "var(--bone)" : "var(--obsidian)";
  return (
    <svg
      viewBox="0 0 120 160"
      className={[styles.art, className].filter(Boolean).join(" ")}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g style={{ stroke: "var(--obsidian)" }} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round">
        {variant === "cup" ? (
          <path d="M22 92 H98 L88 150 H32 Z" style={{ fill: "var(--bone)" }} />
        ) : (
          <>
            <path d="M28 88 L60 156 L92 88 Z" style={{ fill: "var(--sand)" }} />
            <path d="M40 92 L66 140 M56 90 L76 120 M74 92 L84 108 M80 92 L54 140 M64 90 L44 124 M46 92 L36 108" fill="none" />
          </>
        )}
        {variant === "double" && <circle cx="60" cy="44" r="28" style={{ fill: t ?? s }} />}
        <path
          d={
            variant === "double"
              ? "M26 92 C18 60 102 60 94 92 C90 100 84 94 80 102 C76 110 70 96 64 104 C58 112 52 98 46 104 C40 110 36 96 26 92 Z"
              : "M24 90 C14 30 106 30 96 90 C92 100 86 92 82 102 C78 112 70 96 64 106 C58 114 52 98 46 106 C40 112 34 96 24 90 Z"
          }
          style={{ fill: s }}
        />
        {variant !== "double" && t && (
          <g style={{ fill: t }}>
            <rect x="44" y="46" width="10" height="5" rx="2" transform="rotate(-25 49 48)" />
            <rect x="66" y="40" width="10" height="5" rx="2" transform="rotate(30 71 42)" />
            <rect x="58" y="62" width="10" height="5" rx="2" transform="rotate(-10 63 64)" />
            <rect x="36" y="66" width="10" height="5" rx="2" transform="rotate(40 41 68)" />
            <rect x="76" y="64" width="10" height="5" rx="2" transform="rotate(-35 81 66)" />
          </g>
        )}
        <path d="M38 54 C40 46 46 42 52 40" fill="none" style={{ stroke: detail }} />
      </g>
    </svg>
  );
}
