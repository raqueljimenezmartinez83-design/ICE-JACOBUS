import { families } from "./families";

/** Pestañas de la subnavegación de cada sección. */
export const saboresTabs = [
  { label: "Todos", href: "/sabores" },
  { label: "Hoy", href: "/hoy" },
  { label: "Carta", href: "/carta" },
  ...families.map((f) => ({ label: f.name, href: `/familias/${f.slug}` })),
];

export const familiasTabs = [
  { label: "Todas", href: "/familias" },
  ...families.map((f) => ({ label: f.name, href: `/familias/${f.slug}` })),
];

export const fanzineTabs = [
  { label: "Portada", href: "/fanzine" },
  { label: "Todo el fanzine", href: "/fanzine#todo" },
  { label: "Historias", href: "/fanzine#historias" },
];

export const verTabs = [
  { label: "Portada", href: "/ver" },
  { label: "En directo", href: "/ver#directo" },
  { label: "Canales", href: "/ver#canales" },
  { label: "Recetas", href: "/ver#recetas" },
  { label: "Imprescindibles", href: "/ver#imprescindibles" },
];

export const tiendaTabs = [
  { label: "Tienda", href: "/tienda" },
  { label: "Encargos", href: "/encargos" },
  { label: "Club Jacous", href: "/club" },
];
