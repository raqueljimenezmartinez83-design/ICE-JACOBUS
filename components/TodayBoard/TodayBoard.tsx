import Link from "next/link";
import { formatPrice, type Flavor } from "@/data/flavors";
import { Carousel } from "../Carousel/Carousel";
import { Sticker } from "../Sticker/Sticker";
import styles from "./TodayBoard.module.css";

type Props = {
  flavors: Flavor[];
  date?: string;
};

function statusSticker(f: Flavor) {
  if (f.status === "agotado") return "AGOTADO";
  if (f.status === "queda-poco") return "QUEDA POCO";
  if (f.tags.includes("NUEVO")) return "NUEVO";
  if (f.tags.includes("TEMPORADA")) return "TEMPORADA";
  return null;
}

/** "Pizarra de hoy": la barra de marcadores, con el estado de cada sabor. */
export function TodayBoard({ flavors, date = "Hoy" }: Props) {
  return (
    <section className={styles.board} aria-labelledby="pizarra-titulo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 id="pizarra-titulo" className="label">
            Pizarra de hoy
          </h2>
          <p className="caption">{date}</p>
          <Link href="/hoy" className={`label ${styles.all}`}>
            Ver todo
          </Link>
        </div>
        <Carousel label="Pizarra de hoy" className={styles.carousel}>
          {flavors.map((f) => {
            const st = statusSticker(f);
            const out = f.status === "agotado";
            return (
              <Link key={f.slug} href={`/sabores/${f.slug}`} className={styles.card} data-out={out}>
                <span className={styles.status}>{st ? <Sticker>{st}</Sticker> : <Sticker variant="plain">EN VITRINA</Sticker>}</span>
                <span className={styles.name}>
                  {out && <span className="visually-hidden">Agotado: </span>}
                  {f.name}
                </span>
                <span className={`price ${styles.price}`}>{formatPrice(f.priceScoop)}</span>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
