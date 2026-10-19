import Link from "next/link";
import styles from "./HeadlineList.module.css";

export type Headline = { title: string; href: string; date?: string };

type Props = {
  title?: string;
  items: Headline[];
  more?: { label: string; href: string };
};

/** Columna "Novedades": lista de titulares con separadores ink de 1px. */
export function HeadlineList({ title = "Novedades", items, more }: Props) {
  return (
    <section className={styles.wrap} aria-labelledby="novedades-titulo">
      <h2 id="novedades-titulo" className={styles.title}>
        {title}
      </h2>
      <ul className={styles.list}>
        {items.map((h) => (
          <li key={h.href + h.title} className={styles.item}>
            <Link href={h.href} className={styles.link}>
              {h.title}
            </Link>
            {h.date && <span className="caption muted">{h.date}</span>}
          </li>
        ))}
      </ul>
      {more && (
        <Link href={more.href} className={styles.more}>
          {more.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </section>
  );
}
