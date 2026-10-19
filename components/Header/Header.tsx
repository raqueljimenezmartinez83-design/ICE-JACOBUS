"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/data/nav";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/sabores") return pathname.startsWith("/sabores");
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Jacous Ice Cream, inicio">
          Jacous Ice Cream
        </Link>

        <nav aria-label="Principal" className={styles.nav}>
          <ul className={styles.list}>
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="/club" size="sm">
            Club Jacous
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span className={styles.burgerLines} data-open={open} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="menu-movil" ref={panelRef} className={styles.drawer} data-open={open} hidden={!open}>
        <nav aria-label="Menú móvil">
          <ul className={styles.drawerList}>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.drawerLink}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.drawerFoot}>
          <Button href="/club">Únete al Club Jacous</Button>
          <p className="caption">C/ Nueva 23, Elda · Abierto hoy de 12:00 a 00:00</p>
        </div>
      </div>
    </header>
  );
}
