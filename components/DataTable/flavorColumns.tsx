import Link from "next/link";
import { getFamily } from "@/data/families";
import { formatPrice, type Flavor } from "@/data/flavors";
import { Sticker } from "../Sticker/Sticker";
import type { Column } from "./DataTable";

const num1 = (n: number) => n.toFixed(1).replace(".", ",");

export function statusSticker(f: Flavor) {
  if (f.status === "agotado") return <Sticker>AGOTADO</Sticker>;
  if (f.status === "queda-poco") return <Sticker>QUEDA POCO</Sticker>;
  return <Sticker variant="plain">HAY</Sticker>;
}

/** Todas las columnas posibles de la tabla de sabores, por clave. */
export const flavorColumnMap: Record<string, Column<Flavor>> = {
  name: {
    key: "name",
    label: "Sabor",
    value: (f) => f.name,
    render: (f) => <Link href={`/sabores/${f.slug}`}>{f.name}</Link>,
  },
  family: { key: "family", label: "Familia", value: (f) => getFamily(f.family)?.name ?? "" },
  scoop: { key: "scoop", label: "Bola", title: "Precio de una bola", numeric: true, value: (f) => f.priceScoop, render: (f) => formatPrice(f.priceScoop) },
  double: { key: "double", label: "Doble", title: "Precio de dos bolas", numeric: true, value: (f) => f.priceDouble, render: (f) => formatPrice(f.priceDouble) },
  tub: { key: "tub", label: "500 ml", title: "Tarrina de 500 ml", numeric: true, value: (f) => f.priceTub, render: (f) => formatPrice(f.priceTub) },
  liter: { key: "liter", label: "Litro", title: "Tarrina de 1 litro", numeric: true, value: (f) => f.priceLiter, render: (f) => formatPrice(f.priceLiter) },
  intensity: { key: "intensity", label: "Int.", title: "Intensidad de sabor, de 1 a 5", numeric: true, value: (f) => f.intensity },
  kcal: { key: "kcal", label: "Kcal", title: "Kilocalorías por 100 g", numeric: true, value: (f) => f.kcal },
  sugar: { key: "sugar", label: "Azúc.", title: "Azúcar en gramos por 100 g", numeric: true, value: (f) => f.sugar, render: (f) => num1(f.sugar) },
  fat: { key: "fat", label: "Grasa", title: "Grasa en gramos por 100 g", numeric: true, value: (f) => f.fat, render: (f) => num1(f.fat) },
  allergens: { key: "allergens", label: "Alérg.", title: "Número de alérgenos", numeric: true, value: (f) => f.allergens.length },
  vegan: { key: "vegan", label: "Veg.", title: "Apto para veganos", value: (f) => (f.tags.includes("VEGANO") ? "Sí" : "No") },
  since: { key: "since", label: "Desde", title: "Año en que nació el sabor", numeric: true, value: (f) => f.since },
  status: { key: "status", label: "Estado", value: (f) => f.status, render: statusSticker },
};

export function flavorColumns(keys: string[]): Column<Flavor>[] {
  return keys.map((k) => flavorColumnMap[k]);
}

/** Glosario de las cabeceras abreviadas. */
export const glossary = Object.values(flavorColumnMap)
  .filter((c) => c.title)
  .map((c) => ({ term: c.label, def: c.title! }));
