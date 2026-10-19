"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SectionSubnav.module.css";

type Tab = { label: string; href: string };

type Props = {
  title: string;
  tabs: Tab[];
  /** Pestaña activa explícita; si no, se calcula por la ruta. */
  active?: string;
};

export function SectionSubnav({ title, tabs, active }: Props) {
  const pathname = usePathname() ?? "";
  return (
    <div className={styles.subnav}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.title}>{title}</p>
        <nav aria-label={`Secciones de ${title}`} className={styles.nav}>
          <ul className={styles.list}>
            {tabs.map((t) => {
              const isActive = active ? active === t.href : pathname === t.href;
              return (
                <li key={t.href}>
                  <Link href={t.href} className={styles.tab} aria-current={isActive ? "page" : undefined}>
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
