import Link from "next/link";
import { useId, type ReactNode } from "react";
import styles from "./SectionBlock.module.css";

type Props = {
  title: string;
  eyebrow?: string;
  action?: { label: string; href: string };
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Contenedor de sección: título en display-l, línea ink y enlace opcional. */
export function SectionBlock({ title, eyebrow, action, children, className, id }: Props) {
  const hid = useId();
  return (
    <section id={id} className={[styles.block, className].filter(Boolean).join(" ")} aria-labelledby={hid}>
      <div className={styles.head}>
        <div>
          {eyebrow && <p className="label">{eyebrow}</p>}
          <h2 id={hid} className="display-l">
            {title}
          </h2>
        </div>
        {action && (
          <Link href={action.href} className={styles.action}>
            {action.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
