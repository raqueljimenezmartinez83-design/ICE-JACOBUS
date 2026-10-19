"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { ScoopColor } from "@/data/flavors";
import { Button } from "../Button/Button";
import { Checkerboard, pastelVar, type Pastel } from "../Checkerboard/Checkerboard";
import { FlavorArt } from "../FlavorArt/FlavorArt";
import { Sticker } from "../Sticker/Sticker";
import styles from "./HeroRotator.module.css";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  pastel: Pastel;
  art: { scoop: ScoopColor; topping?: ScoopColor; variant?: "cone" | "cup" | "double" };
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

type Props = { slides: HeroSlide[]; headingLevel?: "h1" | "h2" };

const INTERVAL = 6000; // igual que --hero-interval

export function HeroRotator({ slides, headingLevel: H = "h1" }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const running = !paused && !reduced && !hovering;

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [running, index, slides.length]);

  const slide = slides[index];
  const style = { "--hero-pastel": pastelVar[slide.pastel] } as CSSProperties;

  return (
    <section
      className={styles.hero}
      style={style}
      aria-roledescription="carrusel"
      aria-label="Destacados"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      <Checkerboard color={slide.pastel} variant="fill" />
      <div className={`container ${styles.inner}`}>
        <div
          className={styles.panel}
          key={slide.id}
          role="group"
          aria-roledescription="diapositiva"
          aria-label={`${index + 1} de ${slides.length}: ${slide.title}`}
        >
          <div className={styles.copy}>
            <Sticker variant="ink">{slide.eyebrow}</Sticker>
            <H className={`display-xl ${styles.title}`}>{slide.title}</H>
            <p className={styles.text}>{slide.text}</p>
            <div className={styles.ctas}>
              <Button href={slide.primary.href}>{slide.primary.label}</Button>
              {slide.secondary && (
                <Button href={slide.secondary.href} variant="outline">
                  {slide.secondary.label}
                </Button>
              )}
            </div>
          </div>
          <div className={styles.art}>
            <FlavorArt {...slide.art} />
          </div>
        </div>

        <div className={styles.controls}>
          <ol className={styles.progress} aria-label="Elegir destacado">
            {slides.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={styles.segment}
                  data-state={i === index ? "active" : i < index ? "done" : "todo"}
                  data-running={running}
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Destacado ${i + 1}: ${s.title}`}
                  onClick={() => setIndex(i)}
                >
                  <span className={styles.fill} key={i === index ? `${index}-${running}` : undefined} />
                </button>
              </li>
            ))}
          </ol>
          {!reduced && (
            <button type="button" className={styles.pause} onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
              {paused ? "▶ Seguir" : "❚❚ Pausa"}
            </button>
          )}
        </div>
      </div>
      <Checkerboard variant="strip" className={styles.grassEdge} />
    </section>
  );
}
