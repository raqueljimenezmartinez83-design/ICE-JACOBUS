import type { ReactNode } from "react";
import styles from "./FilterBar.module.css";

export type Filter = {
  id: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

type Props = {
  filters: Filter[];
  /** Botones extra a la derecha (Glosario, Limpiar...). */
  actions?: ReactNode;
  label?: string;
};

export function FilterBar({ filters, actions, label = "Filtros" }: Props) {
  return (
    <div className={styles.bar} role="group" aria-label={label}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <div key={f.id} className={styles.field}>
            <label htmlFor={f.id} className="label">
              {f.label}
            </label>
            <div className={styles.selectWrap}>
              <select id={f.id} className={styles.select} value={f.value} onChange={(e) => f.onChange(e.target.value)}>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <span className={styles.chevron} aria-hidden="true">
                ▼
              </span>
            </div>
          </div>
        ))}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
