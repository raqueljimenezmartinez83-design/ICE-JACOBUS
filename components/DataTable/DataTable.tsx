"use client";

import { useMemo, useState, type ReactNode } from "react";
import styles from "./DataTable.module.css";

export type Column<T> = {
  key: string;
  label: string;
  /** Título largo para lectores de pantalla y el glosario. */
  title?: string;
  numeric?: boolean;
  sortable?: boolean;
  value: (row: T) => string | number;
  render?: (row: T) => ReactNode;
};

type Props<T> = {
  caption: string;
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  /** La primera columna es la cabecera de fila y se queda fija al desplazar. */
  initialSort?: { key: string; dir: "asc" | "desc" };
  pageSize?: number;
  empty?: string;
};

export function DataTable<T>({ caption, columns, rows, rowKey, initialSort, pageSize, empty = "Nada por aquí. Prueba con otros filtros." }: Props<T>) {
  const [sort, setSort] = useState(initialSort ?? { key: columns[0].key, dir: "asc" as const });
  const [page, setPage] = useState(0);

  const sorted = useMemo(() => {
    const col = columns.find((c) => c.key === sort.key);
    if (!col) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const va = col.value(a);
      const vb = col.value(b);
      const cmp = typeof va === "number" && typeof vb === "number" ? va - vb : String(va).localeCompare(String(vb), "es");
      return sort.dir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [rows, columns, sort]);

  const pages = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const current = Math.min(page, pages - 1);
  const visible = pageSize ? sorted.slice(current * pageSize, current * pageSize + pageSize) : sorted;

  const toggle = (key: string) => {
    setPage(0);
    setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" }));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.scroller} tabIndex={0} role="region" aria-label={`${caption} (desplazable)`}>
        <table className={styles.table}>
          <caption className="visually-hidden">
            {caption}. Ordenada por {columns.find((c) => c.key === sort.key)?.label}, {sort.dir === "asc" ? "ascendente" : "descendente"}.
          </caption>
          <thead>
            <tr>
              {columns.map((c, i) => {
                const active = sort.key === c.key;
                return (
                  <th
                    key={c.key}
                    scope="col"
                    className={[styles.th, c.numeric && styles.num, i === 0 && styles.sticky, active && styles.sorted].filter(Boolean).join(" ")}
                    aria-sort={active ? (sort.dir === "asc" ? "ascending" : "descending") : undefined}
                    title={c.title}
                  >
                    {c.sortable === false ? (
                      c.label
                    ) : (
                      <button type="button" className={styles.sortBtn} onClick={() => toggle(c.key)}>
                        {c.label}
                        <span aria-hidden="true" className={styles.arrow}>
                          {active ? (sort.dir === "asc" ? "▲" : "▼") : "↕"}
                        </span>
                      </button>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 && (
              <tr>
                <td colSpan={columns.length} className={styles.empty}>
                  {empty}
                </td>
              </tr>
            )}
            {visible.map((row) => (
              <tr key={rowKey(row)}>
                {columns.map((c, i) => {
                  const cls = [c.numeric && styles.num, i === 0 && styles.sticky, sort.key === c.key && styles.sorted].filter(Boolean).join(" ");
                  const content = c.render ? c.render(row) : c.value(row);
                  return i === 0 ? (
                    <th key={c.key} scope="row" className={`${styles.rowHead} ${cls}`}>
                      {content}
                    </th>
                  ) : (
                    <td key={c.key} className={cls}>
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pageSize && pages > 1 && (
        <nav className={styles.pager} aria-label="Paginación de la tabla">
          <button type="button" className={styles.pageBtn} onClick={() => setPage(current - 1)} disabled={current === 0}>
            ← Antes
          </button>
          <ol className={styles.pageList}>
            {Array.from({ length: pages }, (_, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={styles.pageNum}
                  aria-current={i === current ? "page" : undefined}
                  onClick={() => setPage(i)}
                >
                  <span className="visually-hidden">Página </span>
                  {i + 1}
                </button>
              </li>
            ))}
          </ol>
          <button type="button" className={styles.pageBtn} onClick={() => setPage(current + 1)} disabled={current === pages - 1}>
            Después →
          </button>
          <span className="caption muted">
            {sorted.length} sabores · página {current + 1} de {pages}
          </span>
        </nav>
      )}
    </div>
  );
}
