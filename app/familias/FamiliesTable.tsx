"use client";

import Link from "next/link";
import { DataTable, type Column } from "@/components/DataTable/DataTable";
import { familyStats, type FamilyStats } from "@/data/familyStats";
import { families } from "@/data/families";
import { formatPrice } from "@/data/flavors";

const rows = families.map((f) => familyStats(f.slug));

const columns: Column<FamilyStats>[] = [
  { key: "name", label: "Familia", value: (r) => r.family.name, render: (r) => <Link href={`/familias/${r.family.slug}`}>{r.family.name}</Link> },
  { key: "count", label: "Sabores", numeric: true, value: (r) => r.count },
  { key: "avg", label: "Bola media", title: "Precio medio de una bola", numeric: true, value: (r) => r.avgScoop, render: (r) => formatPrice(r.avgScoop) },
  { key: "vegan", label: "Veganos", numeric: true, value: (r) => r.vegan },
  { key: "gf", label: "Sin gluten", numeric: true, value: (r) => r.glutenFree },
  { key: "int", label: "Int. media", title: "Intensidad media de 1 a 5", numeric: true, value: (r) => r.avgIntensity, render: (r) => r.avgIntensity.toFixed(1).replace(".", ",") },
  { key: "low", label: "Queda poco", numeric: true, value: (r) => r.low },
  { key: "out", label: "Agotados", numeric: true, value: (r) => r.out },
  { key: "since", label: "Desde", numeric: true, value: (r) => r.family.since },
];

export function FamiliesTable() {
  return <DataTable caption="Comparativa de familias" columns={columns} rows={rows} rowKey={(r) => r.family.slug} initialSort={{ key: "count", dir: "desc" }} />;
}
