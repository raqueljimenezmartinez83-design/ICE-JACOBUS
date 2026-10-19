export type FamilySlug = "cremas" | "sorbetes" | "veganos" | "punk-specials";

export type Family = {
  slug: FamilySlug;
  name: string;
  tagline: string;
  description: string;
  /** Variable CSS del color de la familia (definida en tokens.css). */
  color: string;
  since: number;
};

export const families: Family[] = [
  {
    slug: "cremas",
    name: "Bloques de crema",
    tagline: "Leche de verdad. Minada cada mañana.",
    description:
      "La base de todo. Leche fresca de la Vega Baja, nata y paciencia. Si buscas el clásico que te hace cerrar los ojos, empieza a minar aquí.",
    color: "var(--family-cremas)",
    since: 2016,
  },
  {
    slug: "sorbetes",
    name: "Bioma frutal",
    tagline: "Fruta recién recolectada. Sin trucos.",
    description:
      "Agua, fruta y azúcar justo. Nada más. Cambian con la temporada porque la fruta manda, no nosotros.",
    color: "var(--family-sorbetes)",
    since: 2016,
  },
  {
    slug: "veganos",
    name: "Bioma verde",
    tagline: "Sin vaca. Sin drama. Todo vegetal.",
    description:
      "Bebidas vegetales, frutos secos tostados aquí mismo y chocolate serio. Cremosos de verdad, para que nadie se quede fuera de la partida.",
    color: "var(--family-veganos)",
    since: 2019,
  },
  {
    slug: "punk-specials",
    name: "Botín raro",
    tagline: "Lo que aparece al fondo del cofre.",
    description:
      "El botín más raro del obrador. Picante, salado, extraño y muy nuestro. Aparece poco: si lo ves, cógelo.",
    color: "var(--family-punk)",
    since: 2021,
  },
];

export function getFamily(slug: string) {
  return families.find((f) => f.slug === slug);
}
