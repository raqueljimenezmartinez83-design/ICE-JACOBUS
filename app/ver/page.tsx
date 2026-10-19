import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Carousel } from "@/components/Carousel/Carousel";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { Sticker } from "@/components/Sticker/Sticker";
import { VideoCard, type Video } from "@/components/VideoCard/VideoCard";
import { channels, essentials, liveNow, topOrdered, videos } from "@/data/media";
import { verTabs } from "@/data/sections";
import styles from "./ver.module.css";

export const metadata: Metadata = { title: "Ver", description: "Directos, canales y recetas en vídeo desde el obrador de Jacous." };

const featured = liveNow[0];
const rows: { id: string; title: string; eyebrow: string; items: Video[] }[] = [
  { id: "directo", title: "En directo y próximos", eyebrow: "Pon una alarma", items: liveNow.slice(1) },
  { id: "canales", title: "Canales", eyebrow: "Siempre encendidos", items: channels },
  { id: "recetas", title: "Recetas en vídeo", eyebrow: "Hazlo en casa", items: videos },
  { id: "pedido", title: "Lo más pedido", eyebrow: "Top de la semana", items: topOrdered },
  { id: "imprescindibles", title: "Imprescindibles", eyebrow: "Para empezar", items: essentials },
];

export default function VerPage() {
  return (
    <>
      <SectionSubnav title="Ver" tabs={verTabs} active="/ver" />
      <div className="container">
        <header className="page-intro">
          <p className="label">Jacous TV</p>
          <h1 className="display-xl">Dale al play</h1>
          <p className="lead">La mina en directo, recetas para craftear en casa y lo que pasa detrás de la barra. Sin anuncios, con mucho azúcar.</p>
        </header>

        <section className={styles.featured} aria-labelledby="destacado">
          <VideoCard video={featured} wide headingLevel="h3" />
          <div className={styles.panel}>
            <Sticker variant="live">● EN DIRECTO</Sticker>
            <h2 id="destacado" className="display-l">
              Obrador abierto
            </h2>
            <p>Hoy toca turrón. Marta funde, Jacous prueba y tú lo ves todo sin mancharte. Pregunta lo que quieras en el chat.</p>
            <p className="caption">{featured.meta}</p>
            <Button href={`#${featured.slug}`}>Ver ahora</Button>
          </div>
        </section>

        {rows.map((r) => (
          <SectionBlock key={r.id} id={r.id} title={r.title} eyebrow={r.eyebrow}>
            <Carousel label={r.title}>
              {r.items.map((v) => (
                <VideoCard key={v.slug} video={v} />
              ))}
            </Carousel>
          </SectionBlock>
        ))}
      </div>
    </>
  );
}
