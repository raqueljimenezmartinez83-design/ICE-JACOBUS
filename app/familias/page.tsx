import type { Metadata } from "next";
import { FamilyCard } from "@/components/FamilyCard/FamilyCard";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { families } from "@/data/families";
import { flavorsByFamily } from "@/data/flavors";
import { familiasTabs } from "@/data/sections";
import { FamiliesTable } from "./FamiliesTable";
import styles from "./familias.module.css";

export const metadata: Metadata = { title: "Familias" };

export default function FamiliasPage() {
  return (
    <>
      <SectionSubnav title="Familias" tabs={familiasTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">4 biomas · 1 vitrina</p>
          <h1 className="display-xl">Elige tu bioma</h1>
          <p className="lead">Bloques de crema, bioma frutal, bioma verde y el botín raro. Cada familia tiene su color, su gente y sus manías.</p>
        </header>

        <ul className={styles.grid}>
          {families.map((f) => (
            <li key={f.slug}>
              <FamilyCard family={f} count={flavorsByFamily(f.slug).length} headingLevel="h2" />
            </li>
          ))}
        </ul>

        <SectionBlock title="Cara a cara" eyebrow="Las cuatro familias en números">
          <FamiliesTable />
        </SectionBlock>
      </div>
    </>
  );
}
