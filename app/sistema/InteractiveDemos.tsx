"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button/Button";
import { DataTable } from "@/components/DataTable/DataTable";
import { flavorColumns } from "@/components/DataTable/flavorColumns";
import { DayPicker, type Day } from "@/components/DayPicker/DayPicker";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { Tabs } from "@/components/Tabs/Tabs";
import { Toggle } from "@/components/Toggle/Toggle";
import { families } from "@/data/families";
import { flavors } from "@/data/flavors";
import styles from "./sistema.module.css";

const days: Day[] = [
  { id: "19", weekday: "Lun", day: 19, month: "oct", isToday: true },
  { id: "20", weekday: "Mar", day: 20, month: "oct" },
  { id: "21", weekday: "Mié", day: 21, month: "oct" },
  { id: "22", weekday: "Jue", day: 22, month: "oct" },
  { id: "23", weekday: "Vie", day: 23, month: "oct" },
  { id: "24", weekday: "Sáb", day: 24, month: "oct" },
  { id: "25", weekday: "Dom", day: 25, month: "oct" },
];

const columns = flavorColumns(["name", "family", "scoop", "double", "tub", "intensity", "kcal", "sugar", "allergens", "since", "status"]);

export function InteractiveDemos({ table = false }: { table?: boolean }) {
  const [hideOut, setHideOut] = useState(false);
  const [day, setDay] = useState("19");
  const [family, setFamily] = useState("all");

  const rows = useMemo(
    () => flavors.filter((f) => (family === "all" || f.family === family) && (!hideOut || f.status !== "agotado")),
    [family, hideOut],
  );

  if (table) {
    return (
      <div className={styles.stack}>
        <FilterBar
          filters={[
            {
              id: "demo-familia",
              label: "Familia",
              value: family,
              onChange: setFamily,
              options: [{ value: "all", label: "Todas" }, ...families.map((f) => ({ value: f.slug, label: f.name }))],
            },
          ]}
          actions={<Toggle label="Ocultar agotados" checked={hideOut} onChange={setHideOut} />}
        />
        <DataTable caption="Ejemplo de carta" columns={columns} rows={rows} rowKey={(f) => f.slug} initialSort={{ key: "kcal", dir: "desc" }} pageSize={8} />
      </div>
    );
  }

  return (
    <div className={styles.stack}>
      <div className={styles.row}>
        <Toggle label="Ocultar agotados" checked={hideOut} onChange={setHideOut} />
        <span className="caption muted">Estado: {hideOut ? "activado" : "desactivado"}</span>
      </div>
      <DayPicker days={days} value={day} onChange={setDay} label="Día de la pizarra" />
      <FilterBar
        filters={[
          {
            id: "demo-familia-2",
            label: "Familia",
            value: family,
            onChange: setFamily,
            options: [{ value: "all", label: "Todas" }, ...families.map((f) => ({ value: f.slug, label: f.name }))],
          },
          {
            id: "demo-formato",
            label: "Formato",
            value: "bola",
            onChange: () => {},
            options: [
              { value: "bola", label: "Bola" },
              { value: "tarrina", label: "Tarrina" },
            ],
          },
        ]}
        actions={<Button variant="outline" size="sm">Glosario</Button>}
      />
      <Tabs
        label="Ejemplo de pestañas"
        tabs={[
          { id: "ficha", label: "Ficha", content: <p>Leche fresca, pistacho tostado y cero colorantes.</p> },
          { id: "alergenos", label: "Alérgenos", content: <p>Contiene leche y frutos secos.</p> },
          { id: "historia", label: "Historia", content: <p>Llegó en 2016 en una maleta desde Sicilia.</p> },
          { id: "videos", label: "Vídeos", content: <p>Dos vídeos del obrador.</p> },
        ]}
      />
    </div>
  );
}
