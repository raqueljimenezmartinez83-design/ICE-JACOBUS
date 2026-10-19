import type { CSSProperties } from "react";
import { PixelSprite, type SpriteName } from "../PixelSprite/PixelSprite";
import styles from "./PixelScatter.module.css";

type Item = {
  name: SpriteName;
  /** Posición en % del contenedor (datos de decoración, no tokens de layout). */
  x: number;
  y: number;
  size: "s" | "m" | "l";
  /** Desfase de la animación, en pasos de --duration-base. */
  delay: number;
  /** En móvil solo se muestran las marcadas, para no tapar el contenido. */
  mobile?: boolean;
};

/** Composiciones: las figuritas van por los bordes y dejan el centro libre para el contenido. */
const LAYOUTS: Record<"hero" | "band", Item[]> = {
  hero: [
    { name: "nube", x: 4, y: 8, size: "l", delay: 0, mobile: true },
    { name: "estrella", x: 18, y: 4, size: "s", delay: 3 },
    { name: "bolita", x: 6, y: 52, size: "l", delay: 1, mobile: true },
    { name: "corazon", x: 16, y: 80, size: "s", delay: 5 },
    { name: "bloque", x: 2, y: 84, size: "m", delay: 2 },
    { name: "diamante", x: 24, y: 30, size: "s", delay: 4 },
    { name: "nube", x: 74, y: 6, size: "m", delay: 2 },
    { name: "estrella", x: 92, y: 18, size: "m", delay: 0, mobile: true },
    { name: "gatito", x: 86, y: 48, size: "l", delay: 3, mobile: true },
    { name: "cofre", x: 90, y: 82, size: "m", delay: 1 },
    { name: "cucurucho", x: 76, y: 74, size: "m", delay: 4 },
    { name: "diamante", x: 70, y: 36, size: "s", delay: 6 },
  ],
  band: [
    { name: "bloque", x: 3, y: 10, size: "m", delay: 1, mobile: true },
    { name: "polo", x: 8, y: 60, size: "m", delay: 3 },
    { name: "corazon", x: 2, y: 86, size: "s", delay: 0 },
    { name: "estrella", x: 94, y: 8, size: "s", delay: 2, mobile: true },
    { name: "diamante", x: 90, y: 50, size: "m", delay: 4 },
    { name: "bolita", x: 94, y: 80, size: "m", delay: 1 },
  ],
};

type Props = { layout?: keyof typeof LAYOUTS };

/** Capa decorativa de figuritas pixeladas. Va detrás del contenido y no se anuncia. */
export function PixelScatter({ layout = "hero" }: Props) {
  return (
    <div className={styles.layer} aria-hidden="true">
      {LAYOUTS[layout].map((it, i) => (
        <span
          key={i}
          className={[styles.item, styles[it.size], it.mobile ? "" : styles.desktopOnly].join(" ")}
          style={{ "--x": `${it.x}%`, "--y": `${it.y}%`, "--delay": it.delay } as CSSProperties}
        >
          <PixelSprite name={it.name} />
        </span>
      ))}
    </div>
  );
}
