"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button/Button";
import { DataTable } from "@/components/DataTable/DataTable";
import { flavorColumns, glossary } from "@/components/DataTable/flavorColumns";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { Toggle } from "@/components/Toggle/Toggle";
import { families } from "@/data/families";
import { flavors, type Allergen } from "@/data/flavors";
import styles from "./carta.module.css";

const FORMATS = [
  { value: "all", label: "Todos" },
  { value: "scoop", label: "Bola" },
  { value: "double", label: "Doble" },
  { value: "tub", label: "Tarrina 500 ml" },
  { value: "liter", label: "Litro" },
];

const DIETS: { value: string; label: string; allergen?: Allergen }[] = [
  { value: "all", label: "Me da igual" },
  { value: "vegano", label: "Vegano" },
  { value: "leche", label: "Sin leche", allergen: "leche" },
  { value: "frutos secos", label: "Sin frutos secos", allergen: "frutos secos" },
  { value: "gluten", label: "Sin gluten", allergen: "gluten" },
  { value: "huevo", label: "Sin huevo", allergen: "huevo" },
  { value: "soja", label: "Sin soja", allergen: "soja" },
];

const PRICE_KEYS = ["scoop", "double", "tub", "liter"];
const REST = ["intensity", "kcal", "sugar", "fat", "allergens", "vegan", "since", "status"];

export function CartaBoard() {
  const [family, setFamily] = useState("all");
  const [format, setFormat] = useState("all");
  const [diet, setDiet] = useState("all");
  const [hideOut, setHideOut] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);

  const rows = useMemo(() => {
    const d = DIETS.find((x) => x.value === diet);
    return flavors.filter(
      (f) =>
        (family === "all" || f.family === family) &&
        (diet === "all" || (diet === "vegano" ? f.tags.includes("VEGANO") : !f.allergens.includes(d!.allergen!))) &&
        (!hideOut || f.status !== "agotado"),
    );
  }, [family, diet, hideOut]);

  const columns = flavorColumns(["name", "family", ...(format === "all" ? PRICE_KEYS : [format]), ...REST]);
  const reset = () => {
    setFamily("all");
    setFormat("all");
    setDiet("all");
    setHideOut(false);
  };

  return (
    <div className={styles.board}>
      <FilterBar
        label="Filtros de la carta"
        filters={[
          {
            id: "f-familia",
            label: "Familia",
            value: family,
            onChange: setFamily,
            options: [{ value: "all", label: "Todas" }, ...families.map((f) => ({ value: f.slug, label: f.name }))],
          },
          { id: "f-formato", label: "Formato", value: format, onChange: setFormat, options: FORMATS },
          { id: "f-alergenos", label: "Alérgenos", value: diet, onChange: setDiet, options: DIETS },
        ]}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={reset}>
              Limpiar
            </Button>
            <Button variant="outline" size="sm" aria-expanded={showGlossary} aria-controls="glosario" onClick={() => setShowGlossary((v) => !v)}>
              Glosario
            </Button>
          </>
        }
      />

      {showGlossary && (
        <section id="glosario" className={styles.glossary} aria-labelledby="glosario-titulo">
          <h2 id="glosario-titulo" className="label">
            Glosario
          </h2>
          <dl className={styles.terms}>
            {glossary.map((g) => (
              <div key={g.term}>
                <dt className="label">{g.term}</dt>
                <dd className="caption">{g.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className={styles.toolbar}>
        <p className="caption" aria-live="polite">
          {rows.length} de {flavors.length} sabores
        </p>
        <Toggle label="Ocultar agotados" checked={hideOut} onChange={setHideOut} />
      </div>

      <DataTable
        key={format}
        caption="Carta de sabores de Jacous"
        columns={columns}
        rows={rows}
        rowKey={(f) => f.slug}
        initialSort={{ key: format === "all" ? "name" : format, dir: "asc" }}
        pageSize={10}
        empty="Ningún sabor cumple todo eso a la vez. Afloja un filtro."
      />
    </div>
  );
}
