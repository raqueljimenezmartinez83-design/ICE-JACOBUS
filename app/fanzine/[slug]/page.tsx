import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Checkerboard, pastelVar } from "@/components/Checkerboard/Checkerboard";
import { FlavorArt } from "@/components/FlavorArt/FlavorArt";
import { HeadlineList } from "@/components/HeadlineList/HeadlineList";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { articles, getArticle } from "@/data/articles";
import { headlines } from "@/data/media";
import { fanzineTabs } from "@/data/sections";
import styles from "./articulo.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a ? { title: a.title, description: a.dek } : {};
}

export default async function ArticlePage({ params }: Params) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = article.related.map(getArticle).filter((a) => a !== undefined);

  return (
    <>
      <SectionSubnav title="Fanzine" tabs={fanzineTabs} active="/fanzine" />
      <div className="container">
        <div className={`with-aside ${styles.layout}`}>
          <article className={styles.article}>
            <header className={styles.header}>
              <Link href="/fanzine" className={`label ${styles.back}`}>
                ← Fanzine
              </Link>
              <p className="label">{article.kicker}</p>
              <h1 className="display-l">{article.title}</h1>
              <p className="lead">{article.dek}</p>
              <div className={styles.byline}>
                <span className={styles.avatar} style={{ "--avatar-bg": pastelVar[article.pastel] } as CSSProperties} aria-hidden="true">
                  {article.author.initials}
                </span>
                <div>
                  <p className={styles.author}>{article.author.name}</p>
                  <p className="caption muted">
                    {article.author.role} · <time>{article.date}</time> · {article.readMinutes} min de lectura
                  </p>
                </div>
              </div>
            </header>

            <figure className={styles.figure}>
              <div className={styles.cover}>
                <Checkerboard color={article.pastel} variant="block" />
                <div className={styles.coverArt}>
                  <FlavorArt {...article.art} />
                </div>
              </div>
            </figure>

            <div className={`prose ${styles.body}`}>
              {article.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>

          <aside className={styles.aside} aria-labelledby="relacionados">
            <section className={styles.related}>
              <h2 id="relacionados" className={styles.asideTitle}>
                Relacionados
              </h2>
              <ul className={styles.relatedList}>
                {related.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard article={a} />
                  </li>
                ))}
              </ul>
            </section>
            <HeadlineList items={headlines.slice(0, 4)} more={{ label: "Ver todo", href: "/fanzine#todo" }} />
          </aside>
        </div>
      </div>
    </>
  );
}
