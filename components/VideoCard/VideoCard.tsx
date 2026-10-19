import Image from "next/image";
import Link from "next/link";
import type { ScoopColor } from "@/data/flavors";
import { getPhoto, type PhotoKey } from "@/data/photos";
import { Checkerboard, type Pastel } from "../Checkerboard/Checkerboard";
import { FlavorArt } from "../FlavorArt/FlavorArt";
import { Sticker } from "../Sticker/Sticker";
import styles from "./VideoCard.module.css";

export type Video = {
  slug: string;
  title: string;
  duration: string;
  meta: string;
  pastel: Pastel;
  scoop: ScoopColor;
  topping?: ScoopColor;
  /** Foto real para la miniatura; si falta, damero + ilustración. */
  photo?: PhotoKey;
  live?: boolean;
};

type Props = { video: Video; headingLevel?: "h3" | "h4"; wide?: boolean };

export function VideoCard({ video, headingLevel: H = "h3", wide }: Props) {
  return (
    <article id={video.slug} className={styles.card} data-wide={wide}>
      <div className={styles.thumb}>
        {video.photo ? (
          <Image src={getPhoto(video.photo).src} alt="" fill sizes="(max-width: 767px) 264px, 300px" className={styles.img} />
        ) : (
          <>
            <Checkerboard color={video.pastel} variant="block" />
            <div className={styles.art}>
              <FlavorArt scoop={video.scoop} topping={video.topping} variant="cup" />
            </div>
          </>
        )}
        <span className={styles.play} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5 L19 12 L8 19 Z" />
          </svg>
        </span>
        <span className={styles.duration}>
          {video.live ? <Sticker variant="live">● EN DIRECTO</Sticker> : <Sticker variant="ink">{video.duration}</Sticker>}
        </span>
      </div>
      <div className={styles.body}>
        <H className={`heading ${styles.title}`}>
          <Link href={`/ver#${video.slug}`} className={styles.link}>
            <span className="visually-hidden">Ver vídeo: </span>
            {video.title}
          </Link>
        </H>
        <p className="caption muted">{video.meta}</p>
      </div>
    </article>
  );
}
