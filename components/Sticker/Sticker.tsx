import styles from "./Sticker.module.css";

export type StickerVariant = "new" | "vegan" | "gluten" | "low" | "out" | "season" | "live" | "plain" | "ink";

const byTag: Record<string, StickerVariant> = {
  NUEVO: "new",
  VEGANO: "vegan",
  "SIN GLUTEN": "gluten",
  "QUEDA POCO": "low",
  AGOTADO: "out",
  TEMPORADA: "season",
  "● EN DIRECTO": "live",
};

type Props = {
  children: string;
  variant?: StickerVariant;
  className?: string;
};

/** Etiqueta pill en mayúsculas. Si no se indica variante, se deduce del texto. */
export function Sticker({ children, variant, className }: Props) {
  const v = variant ?? byTag[children] ?? "plain";
  return <span className={[styles.sticker, styles[v], className].filter(Boolean).join(" ")}>{children}</span>;
}
