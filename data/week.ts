import type { Day } from "@/components/DayPicker/DayPicker";
import type { Video } from "@/components/VideoCard/VideoCard";
import { flavors, type Flavor } from "./flavors";
import { topOrdered, videos } from "./media";

/** Hoy en la maqueta: lunes 19 de octubre de 2026. */
const START = new Date(2026, 9, 19);
const WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const WEEKDAYS_LONG = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

export const week: (Day & { long: string })[] = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(START);
  d.setDate(START.getDate() + i);
  return {
    id: String(i),
    weekday: WEEKDAYS[d.getDay()],
    day: d.getDate(),
    month: MONTHS[d.getMonth()],
    isToday: i === 0,
    long: `${WEEKDAYS_LONG[d.getDay()]} ${d.getDate()} de ${MONTHS[d.getMonth()]}`,
  };
});

/**
 * Sabores en vitrina cada día. Hoy, con su estado real; los días siguientes son
 * previsión: rotan algunos sabores y la sandía (fuera de temporada) no vuelve.
 */
export function flavorsForDay(dayIndex: number): Flavor[] {
  if (dayIndex === 0) return flavors;
  return flavors
    .filter((f, idx) => f.slug !== "sandia-menta" && (idx + dayIndex) % 6 !== 0)
    .map((f) => ({ ...f, status: "ok" as const }));
}

const pool = [...videos, ...topOrdered];

/** Vídeo que acompaña a cada sabor en la pizarra. */
export function videoForFlavor(f: Flavor, i: number): Video {
  return pool.find((v) => v.photo === f.photo) ?? videos[i % videos.length];
}

/** Promoción del día (columna lateral rosa). */
export const promos = [
  { title: "Lunes de dulce de leche", text: "Recién salido del cazo. Bola doble al precio de una hasta las 18:00." },
  { title: "Martes de doble", text: "Pide doble y la segunda bola va a mitad de precio." },
  { title: "Miércoles de bioma verde", text: "Todos los veganos con un 20% menos. Sin vaca, sin drama." },
  { title: "Jueves de cata", text: "A las 21:00, cata secreta del Club Jacous. Plazas limitadas." },
  { title: "Viernes de cofre", text: "Tarrina de litro con un sabor extra de regalo." },
  { title: "Sábado de torneo", text: "Torneo de bloques en la plaza Castelar desde las 19:00. Bola a 2,50 €." },
  { title: "Domingo de familia", text: "Cuatro bolas, cuatro cucharas, un precio: 10 €." },
];
