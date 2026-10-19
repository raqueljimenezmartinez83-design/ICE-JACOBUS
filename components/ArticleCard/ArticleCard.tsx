import Link from "next/link";
import type { Article } from "@/data/articles";
import { Checkerboard } from "../Checkerboard/Checkerboard";
import { FlavorArt } from "../FlavorArt/FlavorArt";
import styles from "./ArticleCard.module.css";

type Props = {
  article: Article;
  variant?: "lead" | "compact";
  headingLevel?: "h2" | "h3";
};

/** Tarjeta de artículo del Fanzine: destacada grande o compacta lateral. */
export function ArticleCard({ article, variant = "compact", headingLevel: H = "h3" }: Props) {
  return (
    <article className={styles.card} data-variant={variant}>
      <div className={styles.thumb}>
        <Checkerboard color={article.pastel} variant="block" />
        <div className={styles.art}>
          <FlavorArt {...article.art} />
        </div>
      </div>
      <div className={styles.body}>
        <p className="label">{article.kicker}</p>
        <H className={variant === "lead" ? `display-l ${styles.title}` : `heading ${styles.title}`}>
          <Link href={`/fanzine/${article.slug}`} className={styles.link}>
            {article.title}
          </Link>
        </H>
        {variant === "lead" && <p className={styles.dek}>{article.dek}</p>}
        <p className="caption muted">
          {article.author.name} · {article.date} · {article.readMinutes} min
        </p>
      </div>
    </article>
  );
}
