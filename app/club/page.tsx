import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Checkerboard } from "@/components/Checkerboard/Checkerboard";
import { FlavorArt } from "@/components/FlavorArt/FlavorArt";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { tiendaTabs } from "@/data/sections";
import styles from "../pages.module.css";

export const metadata: Metadata = { title: "Club Jacous", description: "Bola gratis en tu cumple, catas secretas y sabores antes que nadie." };

const perks = [
  { tone: "mint", title: "Bola gratis en tu cumple", text: "Ese día, la bola la pagamos nosotros. Y si vienes con la familia, la segunda va a mitad.", scoop: "pink", topping: "mint" },
  { tone: "lavender", title: "Catas secretas", text: "Un jueves al mes probamos sabores que todavía no existen. Tú votas cuál sale a la vitrina.", scoop: "lavender", topping: "ink" },
  { tone: "peach", title: "Aviso de regreso", text: "Dinos tu favorito y te avisamos cuando vuelva. La mandarina, por ejemplo, ya ha vuelto.", scoop: "peach", topping: "ink" },
] as const;

const faqs = [
  { q: "¿Cuánto cuesta?", a: "Nada. Cero euros. Ni ahora ni nunca." },
  { q: "¿Cómo me apunto?", a: "Pide la tarjeta en la barra. Te la damos sellada con tu primera bola." },
  { q: "¿Necesito app?", a: "No. Con la tarjeta de cartón basta. La pierdes, te hacemos otra." },
  { q: "¿Puedo regalarla?", a: "Sí, pero la bola del cumple es para quien cumple años. Ese logro no se puede transferir." },
];

export default function ClubPage() {
  return (
    <>
      <SectionSubnav title="Club Jacous" tabs={tiendaTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">Gratis. Para siempre.</p>
          <h1 className="display-xl">Club Jacous</h1>
          <p className="lead">El gremio de la heladería con más bloques de Elda. Sin cuotas, sin app y sin letra pequeña. Solo logros.</p>
        </header>

        <SectionBlock title="Lo que te llevas">
          <ul className={styles.grid3}>
            {perks.map((p) => (
              <li key={p.title}>
                <InfoCard
                  tone={p.tone}
                  title={p.title}
                  media={
                    <>
                      <Checkerboard color={p.tone} variant="block" />
                      <div className={styles.mediaArt}>
                        <FlavorArt scoop={p.scoop} topping={p.topping} />
                      </div>
                    </>
                  }
                >
                  <p>{p.text}</p>
                </InfoCard>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock title="Preguntas">
          <div className={styles.faq}>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </SectionBlock>

        <section className={styles.cta} aria-labelledby="cta-club">
          <h2 id="cta-club" className="display-l">
            Entra en el club
          </h2>
          <p>Ven a la barra, pide tu tarjeta y elige tu primera bola. Así de fácil.</p>
          <div className={styles.ctaActions}>
            <Button href="/hoy">Qué hay hoy</Button>
            <Button href="/encargos" variant="outline">
              Haz un encargo
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
