"use client";

import type { Flavor } from "@/data/flavors";
import { DataTable } from "./DataTable";
import { flavorColumns } from "./flavorColumns";

type Props = {
  caption: string;
  flavors: Flavor[];
  /** Claves de flavorColumnMap, en orden. */
  columns: string[];
  initialSort?: { key: string; dir: "asc" | "desc" };
  pageSize?: number;
};

/** Tabla de sabores usable desde páginas de servidor: las columnas se eligen por clave. */
export function FlavorTable({ caption, flavors, columns, initialSort, pageSize }: Props) {
  return (
    <DataTable
      caption={caption}
      columns={flavorColumns(columns)}
      rows={flavors}
      rowKey={(f) => f.slug}
      initialSort={initialSort}
      pageSize={pageSize}
    />
  );
}
