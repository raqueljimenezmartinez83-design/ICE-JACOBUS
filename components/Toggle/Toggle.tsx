"use client";

import { useId } from "react";
import styles from "./Toggle.module.css";

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

/** Interruptor accesible (role="switch"). */
export function Toggle({ label, checked, onChange }: Props) {
  const id = useId();
  return (
    <div className={styles.wrap}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        className={styles.switch}
        onClick={() => onChange(!checked)}
      >
        <span className={styles.knob} aria-hidden="true" />
      </button>
      <label htmlFor={id} className="label">
        {label}
      </label>
    </div>
  );
}
