"use client";

import { useRef, type KeyboardEvent } from "react";
import styles from "./DayPicker.module.css";

export type Day = { id: string; weekday: string; day: number; month: string; isToday?: boolean };

type Props = {
  days: Day[];
  value: string;
  onChange: (id: string) => void;
  label?: string;
};

/** Selector de días tipo calendario (grupo de radios accesible). */
export function DayPicker({ days, value, onChange, label = "Elige día" }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % days.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + days.length) % days.length;
    if (next < 0) return;
    e.preventDefault();
    onChange(days[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div role="radiogroup" aria-label={label} className={styles.picker}>
      {days.map((d, i) => {
        const checked = d.id === value;
        return (
          <button
            key={d.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            className={styles.day}
            onClick={() => onChange(d.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="label">{d.isToday ? "Hoy" : d.weekday}</span>
            <span className={styles.num}>{d.day}</span>
            <span className="caption">{d.month}</span>
          </button>
        );
      })}
    </div>
  );
}
