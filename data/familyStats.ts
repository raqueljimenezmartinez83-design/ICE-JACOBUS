import { getFamily, type Family, type FamilySlug } from "./families";
import { flavorsByFamily } from "./flavors";

export type FamilyStats = {
  family: Family;
  count: number;
  avgScoop: number;
  vegan: number;
  glutenFree: number;
  avgIntensity: number;
  out: number;
  low: number;
};

export function familyStats(slug: FamilySlug): FamilyStats {
  const list = flavorsByFamily(slug);
  const avg = (fn: (n: (typeof list)[number]) => number) => list.reduce((s, f) => s + fn(f), 0) / (list.length || 1);
  return {
    family: getFamily(slug)!,
    count: list.length,
    avgScoop: Math.round(avg((f) => f.priceScoop) * 100) / 100,
    vegan: list.filter((f) => f.tags.includes("VEGANO")).length,
    glutenFree: list.filter((f) => f.tags.includes("SIN GLUTEN")).length,
    avgIntensity: avg((f) => f.intensity),
    out: list.filter((f) => f.status === "agotado").length,
    low: list.filter((f) => f.status === "queda-poco").length,
  };
}
