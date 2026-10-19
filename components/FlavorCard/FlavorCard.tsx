import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getFamily } from "@/data/families";
import { formatPrice, type Flavor } from "@/data/flavors";
import { getPhoto } from "@/data/photos";
import { Sticker } from "../Sticker/Sticker";
import styles from "./FlavorCard.module.css";

type Props = { flavor: Flavor; headingLevel?: "h2" | "h3" | "h4"; /** Ocupa el ancho de su celda (rejillas) en vez del ancho fijo de carrusel. */ fluid?: boolean };

/** Tarjeta de sabor teñida con el pastel de su familia. */
export function FlavorCard({ flavor, headingLevel: H = "h3", fluid }: Props) {
  const family = getFamily(flavor.family);
  const style = { "--card-bg": family?.color } as CSSProperties;
  const out = flavor.status === "agotado";
  return (
    <article className={styles.card} style={style} data-out={out} data-fluid={fluid}>
      <div className={styles.photo}>
        {/* alt vacío: el nombre del sabor ya está en el título */}
        <Image src={getPhoto(flavor.photo).src} alt="" fill sizes="(max-width: 767px) 232px, 260px" />
      </div>
      <div className={styles.body}>
        <ul className={styles.tags} aria-label="Etiquetas">
          {out && (
            <li>
              <Sticker>AGOTADO</Sticker>
            </li>
          )}
          {flavor.status === "queda-poco" && (
            <li>
              <Sticker>QUEDA POCO</Sticker>
            </li>
          )}
          {flavor.tags.map((t) => (
            <li key={t}>
              <Sticker>{t}</Sticker>
            </li>
          ))}
        </ul>
        <H className={`heading ${styles.name}`}>
          <Link href={`/sabores/${flavor.slug}`} className={styles.link}>
            {flavor.name}
          </Link>
        </H>
        <p className={styles.short}>{flavor.short}</p>
        <div className={styles.foot}>
          <span className="label">{family?.name}</span>
          <span className="price">{formatPrice(flavor.priceScoop)}</span>
        </div>
      </div>
    </article>
  );
}
