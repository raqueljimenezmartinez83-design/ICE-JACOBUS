import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Carousel } from "@/components/Carousel/Carousel";
import { HeadlineList } from "@/components/HeadlineList/HeadlineList";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { StoryCard } from "@/components/StoryCard/StoryCard";
import { articles } from "@/data/articles";
import { headlines, stories } from "@/data/media";
import { fanzineTabs } from "@/data/sections";
import styles from "./fanzine.module.css";

export const metadata: Metadata = { title: "Fanzine", description: "Historias, avisos y novedades desde la mina de Jacous." };

export default function FanzinePage() {
  const [lead, ...rest] = articles;
  const side = rest.slice(0, 3);

  return (
    <>
      <SectionSubnav title="Fanzine" tabs={fanzineTabs} active="/fanzine" />
      <div className="container">
        <header className="page-intro">
          <p className="label">Número 10 · Otoño 2026</p>
          <h1 className="display-xl">El fanzine</h1>
          <p className="lead">Lo que pasa en la mina, en la barra y en la aldea. Fotocopiado con cariño, ahora también en pantalla.</p>
        </header>

        <section className={styles.front} aria-label="Portada">
          <ArticleCard article={lead} variant="lead" headingLevel="h2" />
          <div className={styles.side}>
            {side.map((a) => (
              <ArticleCard key={a.slug} article={a} headingLevel="h2" />
            ))}
          </div>
        </section>

        <div className="with-aside">
          <SectionBlock id="todo" title="Todo el fanzine" eyebrow={`${articles.length} artículos`}>
            <ul className={styles.list}>
              {articles.map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} />
                </li>
              ))}
            </ul>
          </SectionBlock>
          <aside className={styles.aside}>
            <HeadlineList items={headlines} />
          </aside>
        </div>

        <SectionBlock id="historias" title="Historias" eyebrow="Desde la mina" action={{ label: "Ver vídeos", href: "/ver" }}>
          <Carousel label="Historias desde el obrador">
            {stories.map((s) => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </Carousel>
        </SectionBlock>
      </div>
    </>
  );
}
