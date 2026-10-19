"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/Button/Button";
import { DayPicker } from "@/components/DayPicker/DayPicker";
import { Sticker } from "@/components/Sticker/Sticker";
import { Toggle } from "@/components/Toggle/Toggle";
import { formatPrice, type Flavor } from "@/data/flavors";
import { getPhoto } from "@/data/photos";
import { flavorsForDay, promos, videoForFlavor, week } from "@/data/week";
import styles from "./hoy.module.css";

function status(f: Flavor) {
  if (f.status === "agotado") return <Sticker>AGOTADO</Sticker>;
  if (f.status === "queda-poco") return <Sticker>QUEDA POCO</Sticker>;
  if (f.tags.includes("NUEVO")) return <Sticker>NUEVO</Sticker>;
  if (f.tags.includes("TEMPORADA")) return <Sticker>TEMPORADA</Sticker>;
  return null;
}

export function HoyBoard() {
  const [day, setDay] = useState("0");
  const [hideOut, setHideOut] = useState(false);
  const index = Number(day);
  const current = week[index];
  const all = useMemo(() => flavorsForDay(index), [index]);
  const list = hideOut ? all.filter((f) => f.status !== "agotado") : all;
  const outCount = all.filter((f) => f.status === "agotado").length;
  const promo = promos[index]; // la semana empieza en lunes, igual que promos

  return (
    <div className={styles.board}>
      <div className={styles.controls}>
        <DayPicker days={week} value={day} onChange={setDay} label="Elige día" />
        <div className={styles.toolbar}>
          <p className="caption" aria-live="polite">
            {current.isToday ? "Hoy" : `Previsión para el ${current.long}`}: {list.length} sabores en vitrina
            {outCount > 0 && !hideOut ? ` · ${outCount} agotado${outCount > 1 ? "s" : ""}` : ""}
          </p>
          <Toggle label="Ocultar agotados" checked={hideOut} onChange={setHideOut} />
        </div>
      </div>

      <div className="with-aside">
        <section aria-labelledby="pizarra-dia">
          <h2 id="pizarra-dia" className="visually-hidden">
            Sabores del {current.long}
          </h2>
          <div className={styles.headRow} aria-hidden="true">
            <span className="label">Sabor</span>
            <span className="label">Lo que lleva</span>
            <span className="label">Vídeo</span>
          </div>
          <ul className={styles.rows}>
            {list.map((f, i) => {
              const photo = getPhoto(f.photo);
              const video = videoForFlavor(f, i);
              const out = f.status === "agotado";
              return (
                <li key={f.slug} className={styles.row} data-out={out}>
                  <div className={styles.flavor}>
                    <div className={styles.thumb}>
                      <Image src={photo.src} alt="" fill sizes="96px" />
                    </div>
                    <div className={styles.flavorInfo}>
                      <div className={styles.stickers}>{status(f)}</div>
                      <h3 className={styles.name}>
                        {out && <span className="visually-hidden">Agotado: </span>}
                        {f.name}
                      </h3>
                      <p className="price">{formatPrice(f.priceScoop)}</p>
                      <div className={styles.actions}>
                        <Button href={`/sabores/${f.slug}`} variant="outline" size="sm">
                          Ficha
                        </Button>
                        {!out && (
                          <Button href="/encargos" size="sm">
                            Encargar
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.lleva}>
                    <p className={`label ${styles.mobileLabel}`}>Lo que lleva</p>
                    <p>{f.ingredients.join(" · ")}</p>
                    <p className="caption muted">
                      {f.allergens.length ? `Alérgenos: ${f.allergens.join(", ")}` : "Sin alérgenos de declaración obligatoria"}
                    </p>
                  </div>
                  <Link href={`/ver#${video.slug}`} className={styles.video}>
                    <span className={styles.videoThumb}>
                      {video.photo && <Image src={getPhoto(video.photo).src} alt="" fill sizes="160px" />}
                      <span className={styles.play} aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M8 5 L19 12 L8 19 Z" />
                        </svg>
                      </span>
                    </span>
                    <span className="caption">
                      <span className="visually-hidden">Ver vídeo: </span>
                      {video.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {list.length === 0 && <p className={styles.empty}>Hoy lo hemos vendido todo. Vuelve mañana.</p>}
        </section>

        <aside className={styles.aside} aria-labelledby="promo-titulo">
          <div className={styles.promo}>
            <p className="label">Solo el {current.long}</p>
            <h2 id="promo-titulo" className="display-l">
              {promo.title}
            </h2>
            <p>{promo.text}</p>
            <Button href="/club" variant="outline">
              Únete al Club
            </Button>
          </div>
          <div className={styles.info}>
            <p className="label">Horario</p>
            <p>Todos los días, 12:00–00:00</p>
            <p className="label">Dónde</p>
            <p>C/ Nueva 23, Elda (Alicante)</p>
            <Link href="/encargos" className="link">
              Encarga una tarrina para recoger
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
