import Link from "next/link";
import type { CSSProperties } from "react";
import type { Family, FamilySlug } from "@/data/families";
import type { ScoopColor } from "@/data/flavors";
import { FlavorArt } from "../FlavorArt/FlavorArt";
import styles from "./FamilyCard.module.css";

/** Ilustración de cada familia (las familias van sin foto). */
export const familyArt: Record<FamilySlug, { scoop: ScoopColor; topping: ScoopColor }> = {
  cremas: { scoop: "peach", topping: "cream" },
  sorbetes: { scoop: "mint", topping: "ink" },
  veganos: { scoop: "ink", topping: "lavender" },
  "punk-specials": { scoop: "lavender", topping: "ink" },
};

type Props = { family: Family; count: number; headingLevel?: "h2" | "h3" };

export function FamilyCard({ family, count, headingLevel: H = "h3" }: Props) {
  return (
    <article className={styles.card} style={{ "--fam-bg": family.color } as CSSProperties}>
      <div className={styles.art}>
        <FlavorArt {...familyArt[family.slug]} />
      </div>
      <div className={styles.body}>
        <H className="heading">
          <Link href={`/familias/${family.slug}`} className={styles.link}>
            {family.name}
          </Link>
        </H>
        <p className="caption">{family.tagline}</p>
        <p className="label">{count} sabores</p>
      </div>
    </article>
  );
}
