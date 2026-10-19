import styles from "./PixelSprite.module.css";

/**
 * Figuritas pixeladas originales de Jacous. Cada sprite es una cuadrícula de
 * caracteres: cada letra es un color del sistema y "." es transparente.
 * Las coordenadas son del SVG (1 unidad = 1 píxel de sprite), no tokens de layout.
 */
const PALETTE: Record<string, string> = {
  o: "var(--obsidian)",
  b: "var(--bone)",
  g: "var(--grass)",
  G: "var(--grass-dark)",
  l: "var(--leaf)",
  s: "var(--sand)",
  S: "var(--sand-dark)",
  d: "var(--dirt)",
  D: "var(--dirt-dark)",
  y: "var(--gold)",
  c: "var(--diamond)",
  r: "var(--redstone)",
  a: "var(--amethyst)",
  A: "var(--amethyst-dark)",
};

export const SPRITES = {
  cucurucho: [
    "....rrrr....",
    "..rrrrrrrr..",
    ".rrbrrrrrrr.",
    ".rrrrrrbrrr.",
    "rrrrrrrrrrrr",
    "rbrrrrrrrrbr",
    ".oooooooooo.",
    ".osSssSsso..",
    "..osSssSso..",
    "..oSssSsSo..",
    "...osSsSo...",
    "...oSssSo...",
    "....osSo....",
    "....oSso....",
    ".....oo.....",
  ],
  bolita: [
    "...oooooo...",
    "..olbllllo..",
    ".olbllllllo.",
    "ollllllllllo",
    "ollollllollo",
    "ollollllollo",
    "ollllllllllo",
    "olllloollllo",
    ".ollllllllo.",
    "..oooooooo..",
    "..oSsSsSso..",
    "...osSsSo...",
    "....oSso....",
    ".....oo.....",
  ],
  bloque: [
    "oooooooooo",
    "oggGggGggo",
    "oGgggGgggo",
    "ogGdgGgdGo",
    "odGddgdDdo",
    "odDddDddDo",
    "oddDdDdddo",
    "oDddDddDdo",
    "oddDddddDo",
    "oooooooooo",
  ],
  diamante: [
    "..oooooo..",
    ".occbccco.",
    "occbccccco",
    "oooooooooo",
    ".occcccco.",
    "..occcco..",
    "...occo...",
    "....oo....",
  ],
  cofre: [
    "oooooooooooo",
    "odDdddddDddo",
    "oddddddddddo",
    "oooooyyooooo",
    "odddoyyodddo",
    "oddddooddddo",
    "odDdddddDddo",
    "oddddddddddo",
    "oDddddddddDo",
    "oooooooooooo",
  ],
  corazon: [
    ".oo...oo.",
    "orro.orro",
    "orbrrrrro",
    "orrrrrrro",
    ".orrrrro.",
    "..orrro..",
    "...oro...",
    "....o....",
  ],
  estrella: [
    "....o....",
    "...oyo...",
    "...oyo...",
    "oooyyyooo",
    "oyyyyyyyo",
    ".oyyyyyo.",
    "..oyyyo..",
    ".oyo.oyo.",
    ".oo...oo.",
  ],
  gatito: [
    "oo........oo",
    "oao......oao",
    "oaaaooooaaao",
    "oaaaaaaaaaao",
    "oaaoaaaaoaao",
    "oaaaaaaaaaao",
    "oaaaaooaaaao",
    "oAaaaaaaaaAo",
    ".oaaaaaaaao.",
    "..oooooooo..",
  ],
  nube: [
    "....oooo....",
    "..oobbbboo..",
    ".obbbbbbbbo.",
    "obbbbbbbbbbo",
    "obbbbbbbbbbo",
    ".oooooooooo.",
  ],
  polo: [
    "oooooooo",
    "orrbrrro",
    "orrrrrro",
    "orrorrro",
    "orrrrrro",
    "orrrroro",
    "orrrrrro",
    "oggggggo",
    "oooooooo",
    "...oso..",
    "...oso..",
    "...ooo..",
  ],
} as const;

export type SpriteName = keyof typeof SPRITES;

type Props = {
  name: SpriteName;
  /** Si se da, el sprite se anuncia como imagen; si no, es decorativo. */
  title?: string;
  className?: string;
};

export function PixelSprite({ name, title, className }: Props) {
  const rows = SPRITES[name];
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  const cells = [];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < rows[y].length; x++) {
      const ch = rows[y][x];
      if (ch === ".") continue;
      cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} style={{ fill: PALETTE[ch] }} />);
    }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={[styles.sprite, className].filter(Boolean).join(" ")}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {cells}
    </svg>
  );
}
