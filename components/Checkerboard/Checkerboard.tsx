import { useId, type ReactNode } from "react";
import styles from "./Checkerboard.module.css";

export type Pastel = "mint" | "lavender" | "peach";

/** Variable CSS de cada tono claro (los nombres internos se conservan por compatibilidad). */
export const pastelVar: Record<Pastel, string> = {
  mint: "var(--leaf)",
  lavender: "var(--amethyst)",
  peach: "var(--sand)",
};

/** Tonos de cada textura: base, sombra y brillo. */
const TONES: Record<Pastel, [string, string, string]> = {
  mint: ["var(--leaf)", "var(--leaf-dark)", "var(--bone)"],
  lavender: ["var(--amethyst)", "var(--amethyst-dark)", "var(--bone)"],
  peach: ["var(--sand)", "var(--sand-dark)", "var(--bone)"],
};
const GRASS: [string, string] = ["var(--grass)", "var(--grass-dark)"];
const DIRT: [string, string, string] = ["var(--dirt)", "var(--dirt-dark)", "var(--sand-dark)"];

/* Geometría del patrón: celdas de 4 unidades (= --pixel) en una losa de 8×8.
   Son coordenadas del SVG, no tokens de layout. */
const CELL = 4;
const N = 8;

/** Ruido determinista: siempre la misma textura, sin aleatoriedad entre renders. */
function noise(x: number, y: number) {
  return (x * 7 + y * 13 + x * y * 5 + ((x ^ y) & 3)) % 10;
}

function tone(x: number, y: number, tones: string[]) {
  const n = noise(x, y);
  return n < 6 ? tones[0] : n < 9 ? tones[1] : tones[2] ?? tones[1];
}

/** Losa de textura clara (fondos, placeholders). */
function TextureCells({ tones }: { tones: string[] }) {
  const cells = [];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) cells.push(<rect key={`${x}-${y}`} x={x * CELL} y={y * CELL} width={CELL} height={CELL} style={{ fill: tone(x, y, tones) }} />);
  return <>{cells}</>;
}

/** Losa de bloque de hierba: tres filas verdes, una fila de gotas y tierra debajo. */
function GrassCells() {
  const cells = [];
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      const isGrass = y < 3 || (y === 3 && noise(x, y) % 2 === 0) || (y === 4 && noise(x, y) > 7);
      const fill = isGrass ? tone(x, y, GRASS) : tone(x, y, DIRT);
      cells.push(<rect key={`${x}-${y}`} x={x * CELL} y={y * CELL} width={CELL} height={CELL} style={{ fill }} />);
    }
  return <>{cells}</>;
}

type Props = {
  color?: Pastel;
  /** strip: franja de bloque de hierba · fill: rellena su contenedor · block: placeholder de imagen */
  variant?: "strip" | "fill" | "block";
  className?: string;
  children?: ReactNode;
};

/** Patrón de marca: textura de bloque pixelada (antes, damero). */
export function Checkerboard({ color = "mint", variant = "strip", className, children }: Props) {
  const id = useId().replace(/:/g, "");
  const size = CELL * N;
  return (
    <div aria-hidden={children ? undefined : true} className={[styles.checker, styles[variant], className].filter(Boolean).join(" ")}>
      <svg className={styles.svg} width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id={`tx-${id}`} width={size} height={size} patternUnits="userSpaceOnUse">
            {variant === "strip" ? <GrassCells /> : <TextureCells tones={TONES[color]} />}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#tx-${id})`} />
      </svg>
      {children}
    </div>
  );
}
