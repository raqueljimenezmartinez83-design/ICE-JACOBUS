import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Button } from "@/components/Button/Button";
import { Carousel } from "@/components/Carousel/Carousel";
import { Checkerboard } from "@/components/Checkerboard/Checkerboard";
import { FamilyCard } from "@/components/FamilyCard/FamilyCard";
import { FlavorArt } from "@/components/FlavorArt/FlavorArt";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { HeadlineList } from "@/components/HeadlineList/HeadlineList";
import { HeroRotator } from "@/components/HeroRotator/HeroRotator";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { StoryCard } from "@/components/StoryCard/StoryCard";
import { TodayBoard } from "@/components/TodayBoard/TodayBoard";
import { VideoCard } from "@/components/VideoCard/VideoCard";
import { articles } from "@/data/articles";
import { families } from "@/data/families";
import { flavors, flavorsByFamily } from "@/data/flavors";
import { headlines, heroSlides, stories, topOrdered, videos } from "@/data/media";
import styles from "./home.module.css";

// Lo nuevo y lo que se acaba, primero
const featured = [...flavors].sort((a, b) => score(b) - score(a)).slice(0, 10);
function score(f: (typeof flavors)[number]) {
  return (f.tags.includes("NUEVO") ? 3 : 0) + (f.status === "queda-poco" ? 2 : 0) + (f.status === "agotado" ? -5 : 0);
}

export default function Home() {
  const [lead, ...rest] = articles;

  return (
    <>
      <h1 className="visually-hidden">Jacous Ice Cream, heladería artesana en Elda construida bloque a bloque</h1>

      <TodayBoard flavors={flavors} date="Lunes 19 oct" />

      <HeroRotator slides={heroSlides} headingLevel="h2" />

      <div className="container">
        <div className={styles.split}>
          <SectionBlock title="Desde la mina" eyebrow="Historias de 15 segundos" action={{ label: "Ver todo", href: "/ver" }}>
            <Carousel label="Desde la mina">
              {stories.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </Carousel>
          </SectionBlock>
          <aside className={styles.aside}>
            <HeadlineList items={headlines} more={{ label: "Ver todo", href: "/fanzine" }} />
          </aside>
        </div>

        <SectionBlock title="Recién minados" eyebrow="Hoy en vitrina" action={{ label: "Ver la carta", href: "/carta" }}>
          <Carousel label="Sabores destacados">
            {featured.map((f) => (
              <FlavorCard key={f.slug} flavor={f} />
            ))}
          </Carousel>
        </SectionBlock>

        <SectionBlock title="Lo más pedido" eyebrow="Top de la semana" action={{ label: "Ver más", href: "/ver" }}>
          <Carousel label="Lo más pedido">
            {topOrdered.map((v) => (
              <VideoCard key={v.slug} video={v} />
            ))}
          </Carousel>
        </SectionBlock>

        <SectionBlock title="Elige tu bioma" eyebrow="Familias" action={{ label: "Todos los biomas", href: "/familias" }}>
          <ul className={styles.families}>
            {families.map((fam) => (
              <li key={fam.slug}>
                <FamilyCard family={fam} count={flavorsByFamily(fam.slug).length} />
              </li>
            ))}
          </ul>
        </SectionBlock>
      </div>

      <section className={styles.club} aria-labelledby="club-titulo">
        <div className={`container ${styles.clubInner}`}>
          <div className={styles.clubCopy}>
            <p className="label">Gratis. Para siempre.</p>
            <h2 id="club-titulo" className="display-l">
              Únete al Club Jacous
            </h2>
            <ul className={styles.perks}>
              <li>Logro desbloqueado: bola gratis en tu cumple.</li>
              <li>Catas secretas de sabores que aún no existen.</li>
              <li>Aviso cuando reaparece tu favorito.</li>
            </ul>
            <div className={styles.clubCtas}>
              <Button href="/club" variant="outline">
                Quiero entrar
              </Button>
            </div>
          </div>
          <div className={styles.clubArt}>
            <Checkerboard color="mint" variant="fill" />
            <div className={styles.clubScoop}>
              <FlavorArt scoop="mint" topping="ink" variant="double" />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <SectionBlock title="Recetas en vídeo" eyebrow="Craftéalo en casa (o ven, que es más fácil)" action={{ label: "Ver todo", href: "/ver" }}>
          <Carousel label="Recetas en vídeo">
            {videos.map((v) => (
              <VideoCard key={v.slug} video={v} />
            ))}
          </Carousel>
        </SectionBlock>

        <SectionBlock title="Fanzine" eyebrow="Lo que contamos" action={{ label: "Leer el fanzine", href: "/fanzine" }}>
          <div className={styles.zine}>
            <ArticleCard article={lead} variant="lead" />
            <div className={styles.zineSide}>
              {rest.slice(0, 3).map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </SectionBlock>

        <section className={styles.brand} aria-labelledby="marca-titulo">
          <h2 id="marca-titulo" className="display-xl">
            Jacous Ice Cream
          </h2>
          <div className={styles.brandInfo}>
            <p>Helado artesano construido bloque a bloque. Lo minamos cada mañana en el obrador de la calle Nueva, en Elda, desde 2016.</p>
            <dl className={styles.hours}>
              <div>
                <dt className="label">Dónde</dt>
                <dd>C/ Nueva 23, Elda (Alicante)</dd>
              </div>
              <div>
                <dt className="label">Cuándo</dt>
                <dd>Todos los días, 12:00–00:00</dd>
              </div>
              <div>
                <dt className="label">Lunes</dt>
                <dd>Día de dulce de leche: el obrador huele a gloria</dd>
              </div>
            </dl>
            <div className={styles.clubCtas}>
              <Button href="/hoy">Qué hay hoy</Button>
              <Button href="/encargos" variant="outline">
                Haz un encargo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
