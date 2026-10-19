"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Carousel.module.css";

type Props = {
  label: string;
  children: ReactNode;
  className?: string;
};

/** Scroll horizontal con flechas en escritorio y deslizamiento en móvil. */
export function Carousel({ label, children, className }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={[styles.carousel, className].filter(Boolean).join(" ")} role="region" aria-label={label}>
      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={() => scroll(-1)}
        disabled={!canPrev}
        aria-label={`Anterior: ${label}`}
      >
        <span aria-hidden="true">←</span>
      </button>
      <ul ref={track} className={styles.track} onScroll={update}>
        {Children.map(children, (child) => (
          <li className={styles.item}>{child}</li>
        ))}
      </ul>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={() => scroll(1)}
        disabled={!canNext}
        aria-label={`Siguiente: ${label}`}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
