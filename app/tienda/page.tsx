import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Checkerboard, type Pastel } from "@/components/Checkerboard/Checkerboard";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { Sticker } from "@/components/Sticker/Sticker";
import { flavors, formatPrice } from "@/data/flavors";
import { getPhoto } from "@/data/photos";
import { tiendaTabs } from "@/data/sections";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Tienda", description: "Tarrinas para llevar, camisetas, chapas y tarjetas regalo." };

const tubs = flavors.filter((f) => f.status !== "agotado").slice(0, 8);

const merch: { title: string; kicker: string; price: number; text: string; pastel: Pastel; tag?: string }[] = [
  { title: "Camiseta “Sigue minando”", kicker: "Algodón orgánico", price: 18, text: "Negra, letras rosas, talla de la S a la XXL. Lavar del revés.", pastel: "lavender", tag: "NUEVO" },
  { title: "Pack de chapas", kicker: "5 unidades", price: 3, text: "Cucurucho pixelado, bloque de hierba, pico y dos sorpresas.", pastel: "mint" },
  { title: "Tote bag del obrador", kicker: "Lona gruesa", price: 12, text: "Cabe una tarrina de litro y media vida. Serigrafiada en Elda.", pastel: "peach" },
  { title: "Tarjeta regalo", kicker: "De 10 a 50 €", price: 10, text: "El regalo que nunca falla. Se canjea en barra y en encargos.", pastel: "lavender" },
];

export default function TiendaPage() {
  return (
    <>
      <SectionSubnav title="Tienda" tabs={tiendaTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">Recogida en tienda · envíos en Elda</p>
          <h1 className="display-xl">Abre el cofre</h1>
          <p className="lead">Tarrinas para el congelador y merch para que todo el mundo sepa dónde comes helado.</p>
        </header>

        <SectionBlock title="Tarrinas de 500 ml" eyebrow="Recién mantecadas" action={{ label: "Ver la carta", href: "/carta" }}>
          <ul className={styles.grid4}>
            {tubs.map((f) => (
              <li key={f.slug}>
                <InfoCard
                  tone="cream"
                  kicker={f.tags.includes("VEGANO") ? "Vegano" : "Tarrina"}
                  title={f.name}
                  media={<Image src={getPhoto(f.photo).src} alt="" fill sizes="(max-width: 767px) 100vw, 25vw" />}
                  footer={
                    <>
                      <span className="price">{formatPrice(f.priceTub)}</span>
                      <Button href="/encargos" size="sm">
                        Encargar
                      </Button>
                    </>
                  }
                >
                  <p className="caption">{f.short}</p>
                </InfoCard>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock title="Merch" eyebrow="Para fans">
          <ul className={styles.grid4}>
            {merch.map((m) => (
              <li key={m.title}>
                <InfoCard
                  tone={m.pastel}
                  kicker={m.kicker}
                  title={m.title}
                  media={
                    <>
                      {/* Placeholder de marca hasta tener fotos del producto */}
                      <Checkerboard color={m.pastel} variant="block" />
                      {m.tag && (
                        <span className={styles.mediaSticker}>
                          <Sticker>{m.tag}</Sticker>
                        </span>
                      )}
                    </>
                  }
                  footer={
                    <>
                      <span className="price">{formatPrice(m.price)}</span>
                      <Button href="/encargos" variant="outline" size="sm">
                        Lo quiero
                      </Button>
                    </>
                  }
                >
                  <p className="caption">{m.text}</p>
                </InfoCard>
              </li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </>
  );
}
