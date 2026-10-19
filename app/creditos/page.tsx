import Image from "next/image";
import type { Metadata } from "next";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { photos } from "@/data/photos";
import styles from "./creditos.module.css";

export const metadata: Metadata = { title: "Créditos de fotos" };

export default function CreditosPage() {
  return (
    <div className="container">
      <header className={styles.intro}>
        <p className="label">Gracias</p>
        <h1 className="display-xl">Créditos</h1>
        <p className={styles.lead}>
          Las fotos de helado son de Unsplash, con su licencia de uso libre. Mientras hacemos las nuestras en el obrador, aquí van los nombres de quien las hizo.
        </p>
      </header>
      <SectionBlock title="Fotos">
        <ul className={styles.grid}>
          {Object.entries(photos).map(([key, ph]) => (
            <li key={key} className={styles.item}>
              <div className={styles.thumb}>
                <Image src={ph.src} alt={ph.alt} fill sizes="(max-width: 767px) 50vw, 200px" />
              </div>
              <p className="caption">
                <a href={ph.url} rel="noopener noreferrer" target="_blank">
                  {ph.author}
                </a>{" "}
                en Unsplash
              </p>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </div>
  );
}
