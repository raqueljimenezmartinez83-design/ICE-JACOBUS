import type { CSSProperties, ReactNode } from "react";
import { pastelVar } from "../Checkerboard/Checkerboard";
import styles from "./InfoCard.module.css";

type Props = {
  tone?: "mint" | "lavender" | "peach" | "cream";
  kicker?: string;
  title: string;
  /** Imagen o placeholder arriba (foto, damero, ilustración). */
  media?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  headingLevel?: "h2" | "h3";
};

/** Tarjeta de información genérica: encargos, productos, ventajas del club. */
export function InfoCard({ tone = "cream", kicker, title, media, children, footer, headingLevel: H = "h3" }: Props) {
  const bg = tone === "cream" ? "var(--bone)" : pastelVar[tone];
  return (
    <article className={styles.card} style={{ "--info-bg": bg } as CSSProperties}>
      {media && <div className={styles.media}>{media}</div>}
      <div className={styles.body}>
        {kicker && <p className="label">{kicker}</p>}
        <H className="heading">{title}</H>
        {children && <div className={styles.text}>{children}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </article>
  );
}
