"use client";

import Link from "next/link";
import { useState } from "react";
import { footerColumns } from "@/data/nav";
import { Checkerboard } from "../Checkerboard/Checkerboard";
import styles from "./Footer.module.css";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Spotify", href: "https://spotify.com" },
];

const legal = [
  { label: "Aviso legal", href: "/sistema" },
  { label: "Privacidad", href: "/sistema" },
  { label: "Cookies", href: "/sistema" },
  { label: "Alérgenos", href: "/carta" },
  { label: "Créditos de fotos", href: "/creditos" },
];

export function Footer() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <footer className={styles.footer}>
      <Checkerboard color="lavender" />
      <div className={`container ${styles.inner}`}>
        <p className={styles.shout}>Sigue minando.</p>

        <div className={styles.columns}>
          {footerColumns.map((col, i) => {
            const isOpen = open === i;
            const id = `footer-col-${i}`;
            return (
              <section key={col.title} className={styles.column} aria-labelledby={`${id}-h`}>
                <h2 id={`${id}-h`} className={styles.colTitle}>
                  <button
                    type="button"
                    className={styles.colToggle}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {col.title}
                    <span aria-hidden="true" className={styles.chevron} data-open={isOpen}>
                      +
                    </span>
                  </button>
                  <span className={styles.colLabel}>{col.title}</span>
                </h2>
                <ul id={id} className={styles.links} data-open={isOpen}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={styles.link}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className={styles.bottom}>
          <ul className={styles.socials} aria-label="Redes sociales">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={styles.social} rel="noopener noreferrer" target="_blank">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.legal}>
            {legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="caption">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="caption">© 2026 Jacous Ice Cream · Elda, Alicante</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
