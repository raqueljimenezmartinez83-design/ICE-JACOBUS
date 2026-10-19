import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Checkerboard } from "@/components/Checkerboard/Checkerboard";
import { FlavorArt } from "@/components/FlavorArt/FlavorArt";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { tiendaTabs } from "@/data/sections";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Encargos", description: "Tartas heladas, tarrinas grandes y carrito para eventos." };

const offers = [
  { tone: "peach", kicker: "Desde 24 €", title: "Tartas heladas", text: "Dos o tres sabores, base de galleta y la decoración que nos pidas (dentro de lo razonable). Para 6, 10 o 16 personas.", scoop: "peach", topping: "pink" },
  { tone: "mint", kicker: "Desde 17,90 €", title: "Tarrinas de litro", text: "Cualquier sabor de la carta, recién mantecado. Encárgalo el día antes y lo tienes a la hora que digas.", scoop: "mint", topping: "ink" },
  { tone: "lavender", kicker: "Desde 180 €", title: "Carrito para eventos", text: "Bodas, cumpleaños, fiestas de empresa. Llevamos carrito, seis sabores y a alguien que sabe hacer bolas perfectas.", scoop: "lavender", topping: "ink" },
] as const;

const steps = [
  { title: "Cuéntanos", text: "Qué, cuánto y para cuándo. En la barra o por correo." },
  { title: "Te confirmamos", text: "Precio cerrado y día de recogida en menos de 24 horas." },
  { title: "Lo recoges", text: "En la tienda, en caja térmica. O te lo llevamos si es en Elda." },
];

export default function EncargosPage() {
  return (
    <>
      <SectionSubnav title="Encargos" tabs={tiendaTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">Para llevar, para compartir, para presumir</p>
          <h1 className="display-xl">Craftea tu encargo</h1>
          <p className="lead">Tartas, tarrinas grandes y un carrito que convierte cualquier fiesta en un servidor lleno. Pon los ingredientes en nuestra mesa de trabajo y nosotros lo construimos.</p>
        </header>

        <SectionBlock title="Recetas de la mesa de trabajo">
          <ul className={styles.grid3}>
            {offers.map((o) => (
              <li key={o.title}>
                <InfoCard
                  tone={o.tone}
                  kicker={o.kicker}
                  title={o.title}
                  media={
                    <>
                      <Checkerboard color={o.tone} variant="block" />
                      <div className={styles.mediaArt}>
                        <FlavorArt scoop={o.scoop} topping={o.topping} variant="double" />
                      </div>
                    </>
                  }
                >
                  <p>{o.text}</p>
                </InfoCard>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock title="Cómo funciona">
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="heading">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </SectionBlock>

        <section className={styles.cta} aria-labelledby="cta-encargos">
          <h2 id="cta-encargos" className="display-l">
            ¿Lo hablamos?
          </h2>
          <p>Pásate por la barra (C/ Nueva 23, Elda) o escríbenos a encargos@jacous.example. Respondemos rápido, palabra de heladero.</p>
          <div className={styles.ctaActions}>
            <Button href="/hoy">Ver qué hay hoy</Button>
            <Button href="/carta" variant="outline">
              Elegir sabores
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
