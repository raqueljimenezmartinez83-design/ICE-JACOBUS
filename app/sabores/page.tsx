import type { Metadata } from "next";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { families } from "@/data/families";
import { flavors, flavorsByFamily } from "@/data/flavors";
import { saboresTabs } from "@/data/sections";

export const metadata: Metadata = { title: "Sabores" };

export default function SaboresPage() {
  return (
    <>
      <SectionSubnav title="Sabores" tabs={saboresTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">{flavors.length} sabores · 4 familias</p>
          <h1 className="display-xl">Todos los bloques</h1>
          <p className="lead">Todo lo que sale de la mina. Unos están siempre, otros aparecen y desaparecen con la fruta. Toca uno para ver su ficha.</p>
        </header>

        {families.map((fam) => (
          <SectionBlock
            key={fam.slug}
            id={fam.slug}
            title={fam.name}
            eyebrow={fam.tagline}
            action={{ label: `Ver ${fam.name}`, href: `/familias/${fam.slug}` }}
          >
            <ul className="card-grid">
              {flavorsByFamily(fam.slug).map((f) => (
                <li key={f.slug}>
                  <FlavorCard flavor={f} fluid />
                </li>
              ))}
            </ul>
          </SectionBlock>
        ))}
      </div>
    </>
  );
}
