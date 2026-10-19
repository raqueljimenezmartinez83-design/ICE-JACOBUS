import type { CSSProperties, ReactNode } from "react";
import styles from "./ProfileHeader.module.css";

export type Stat = { label: string; value: ReactNode };

type Props = {
  /** Variable CSS del color de fondo (pastel de la familia). */
  color: string;
  eyebrow?: ReactNode;
  title: string;
  subtitle?: string;
  art?: ReactNode;
  stats: Stat[];
  actions?: ReactNode;
  headingLevel?: "h1" | "h2";
};

/** Cabecera a color con fila de estadísticas, al estilo de una ficha de jugador. */
export function ProfileHeader({ color, eyebrow, title, subtitle, art, stats, actions, headingLevel: H = "h1" }: Props) {
  const style = { "--profile-bg": color } as CSSProperties;
  return (
    <header className={styles.profile} style={style}>
      <div className={`container ${styles.inner}`}>
        {art && <div className={styles.art}>{art}</div>}
        <div className={styles.copy}>
          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
          <H className="display-xl">{title}</H>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </div>
      <div className={styles.statsBar}>
        <dl className={`container ${styles.stats}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className="label">{s.label}</dt>
              <dd className={styles.value}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
