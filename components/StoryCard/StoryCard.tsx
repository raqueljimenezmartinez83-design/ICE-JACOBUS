import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ScoopColor } from "@/data/flavors";
import { getPhoto, type PhotoKey } from "@/data/photos";
import { pastelVar, type Pastel } from "../Checkerboard/Checkerboard";
import { FlavorArt } from "../FlavorArt/FlavorArt";
import { Sticker } from "../Sticker/Sticker";
import styles from "./StoryCard.module.css";

export type Story = {
  slug: string;
  title: string;
  kicker: string;
  pastel: Pastel;
  scoop: ScoopColor;
  topping?: ScoopColor;
  /** Foto real; si falta, se dibuja la ilustración. */
  photo?: PhotoKey;
  isNew?: boolean;
  href: string;
};

/** Tarjeta vertical 9:16 de "Desde el obrador". */
export function StoryCard({ story }: { story: Story }) {
  const style = { "--story-bg": pastelVar[story.pastel] } as CSSProperties;
  return (
    <article className={styles.card} style={style}>
      {story.isNew && (
        <span className={styles.sticker}>
          <Sticker>NUEVO</Sticker>
        </span>
      )}
      <div className={styles.art} data-photo={story.photo ? true : undefined}>
        {story.photo ? (
          <Image src={getPhoto(story.photo).src} alt="" fill sizes="180px" className={styles.img} />
        ) : (
          <FlavorArt scoop={story.scoop} topping={story.topping} variant="double" />
        )}
      </div>
      <div className={styles.caption}>
        <p className="label">{story.kicker}</p>
        <h3 className={styles.title}>
          <Link href={story.href} className={styles.link}>
            {story.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
