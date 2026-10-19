import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Carousel } from "@/components/Carousel/Carousel";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { ProfileHeader } from "@/components/ProfileHeader/ProfileHeader";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { Sticker } from "@/components/Sticker/Sticker";
import { Tabs } from "@/components/Tabs/Tabs";
import { VideoCard } from "@/components/VideoCard/VideoCard";
import { getFamily } from "@/data/families";
import { flavors, flavorsByFamily, formatPrice, getFlavor, type Allergen } from "@/data/flavors";
import { topOrdered, videos } from "@/data/media";
import { getPhoto } from "@/data/photos";
import { saboresTabs } from "@/data/sections";
import styles from "./ficha.module.css";

type Params = { params: Promise<{ slug: string }> };

const ALL_ALLERGENS: Allergen[] = ["leche", "frutos secos", "gluten", "huevo", "soja", "sulfitos", "sésamo"];

export function generateStaticParams() {
  return flavors.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const flavor = getFlavor((await params).slug);
  return flavor ? { title: flavor.name, description: flavor.short } : {};
}

function Intensity({ value }: { value: number }) {
  return (
    <span className={styles.meter} role="img" aria-label={`Intensidad ${value} de 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={styles.dot} data-on={i < value} />
      ))}
    </span>
  );
}

export default async function FichaSabor({ params }: Params) {
  const flavor = getFlavor((await params).slug);
  if (!flavor) notFound();
  const family = getFamily(flavor.family)!;
  const photo = getPhoto(flavor.photo);
  const siblings = flavorsByFamily(flavor.family).filter((f) => f.slug !== flavor.slug);
  const related = [...videos, ...topOrdered].filter((v) => v.photo === flavor.photo);
  const flavorVideos = related.length ? related : videos.slice(0, 2);
  const status = flavor.status === "agotado" ? "AGOTADO" : flavor.status === "queda-poco" ? "QUEDA POCO" : null;

  return (
    <>
      <SectionSubnav title="Sabores" tabs={saboresTabs} active="/sabores" />

      <ProfileHeader
        color={family.color}
        eyebrow={
          <>
            <Sticker variant="plain">{family.name.toUpperCase()}</Sticker>
            {status && <Sticker>{status}</Sticker>}
            {flavor.tags.map((t) => (
              <Sticker key={t}>{t}</Sticker>
            ))}
          </>
        }
        title={flavor.name}
        subtitle={flavor.short}
        art={
          <div className={styles.photo} data-out={flavor.status === "agotado"}>
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 767px) 160px, 220px" />
          </div>
        }
        actions={
          <>
            <Button href="/encargos">
              Encárgalo
            </Button>
            <Button href="/carta" variant="outline">
              Ver en la carta
            </Button>
          </>
        }
        stats={[
          { label: "Bola", value: formatPrice(flavor.priceScoop) },
          { label: "Tarrina 500 ml", value: formatPrice(flavor.priceTub) },
          { label: "Intensidad", value: <Intensity value={flavor.intensity} /> },
          { label: "Alérgenos", value: flavor.allergens.length || "Ninguno" },
          { label: "Familia", value: family.name },
          { label: "Desde", value: flavor.since },
        ]}
      />

      <div className="container">
        <Tabs
          label={`Información de ${flavor.name}`}
          tabs={[
            {
              id: "ficha",
              label: "Ficha",
              content: (
                <div className={styles.cols}>
                  <section aria-labelledby="lleva">
                    <h2 id="lleva" className="heading">
                      Lo que lleva
                    </h2>
                    <ul className={styles.ingredients}>
                      {flavor.ingredients.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </section>
                  <section aria-labelledby="formatos" className={styles.panel}>
                    <h2 id="formatos" className="heading">
                      Formatos
                    </h2>
                    <dl className={styles.dl}>
                      <div><dt>Bola</dt><dd className="price">{formatPrice(flavor.priceScoop)}</dd></div>
                      <div><dt>Doble</dt><dd className="price">{formatPrice(flavor.priceDouble)}</dd></div>
                      <div><dt>Tarrina 500 ml</dt><dd className="price">{formatPrice(flavor.priceTub)}</dd></div>
                      <div><dt>Litro</dt><dd className="price">{formatPrice(flavor.priceLiter)}</dd></div>
                    </dl>
                  </section>
                  <section aria-labelledby="nutri" className={styles.panel}>
                    <h2 id="nutri" className="heading">
                      Por 100 g
                    </h2>
                    <dl className={styles.dl}>
                      <div><dt>Energía</dt><dd className="price">{flavor.kcal} kcal</dd></div>
                      <div><dt>Azúcar</dt><dd className="price">{flavor.sugar.toFixed(1).replace(".", ",")} g</dd></div>
                      <div><dt>Grasa</dt><dd className="price">{flavor.fat.toFixed(1).replace(".", ",")} g</dd></div>
                    </dl>
                  </section>
                </div>
              ),
            },
            {
              id: "alergenos",
              label: "Alérgenos",
              content: (
                <div className={styles.allergens}>
                  <ul className={styles.allergenList}>
                    {ALL_ALLERGENS.map((a) => {
                      const has = flavor.allergens.includes(a);
                      return (
                        <li key={a} className={styles.allergen}>
                          <span>{a[0].toUpperCase() + a.slice(1)}</span>
                          {has ? <Sticker variant="ink">CONTIENE</Sticker> : <Sticker variant="plain">NO LLEVA</Sticker>}
                        </li>
                      );
                    })}
                  </ul>
                  <p className={`caption ${styles.notice}`}>
                    En el obrador manipulamos todos estos alérgenos. Si tienes alergia grave, pregúntanos en la barra antes de pedir: te lo contamos sin prisa.
                  </p>
                </div>
              ),
            },
            {
              id: "historia",
              label: "Historia",
              content: (
                <div className="prose">
                  <p className="lead">{flavor.story}</p>
                  <p>
                    En la pizarra desde {flavor.since}. Familia {family.name}: {family.tagline.toLowerCase()}
                  </p>
                </div>
              ),
            },
            {
              id: "videos",
              label: "Vídeos",
              content: (
                <ul className="card-grid">
                  {flavorVideos.map((v) => (
                    <li key={v.slug}>
                      <VideoCard video={v} wide />
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
        />

        {siblings.length > 0 && (
          <SectionBlock title={`Más de ${family.name}`} eyebrow="Misma familia" action={{ label: `Ver ${family.name}`, href: `/familias/${family.slug}` }}>
            <Carousel label={`Más ${family.name}`}>
              {siblings.map((f) => (
                <FlavorCard key={f.slug} flavor={f} />
              ))}
            </Carousel>
          </SectionBlock>
        )}
      </div>
    </>
  );
}
