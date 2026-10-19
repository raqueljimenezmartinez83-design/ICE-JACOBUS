import type { SpriteName } from "@/components/PixelSprite/PixelSprite";
import type { Pastel } from "@/components/Checkerboard/Checkerboard";
import type { Allergen } from "./flavors";

export type KidFlavor = {
  slug: string;
  name: string;
  text: string;
  sprite: SpriteName;
  tone: Pastel;
  price: number; // tamaño peque: bola y media
  allergens: Allergen[];
  tags: ("NUEVO" | "FAVORITO" | "VEGANO")[];
  /** Mini reto para jugar mientras te lo comes. */
  challenge: string;
};

export const kidFlavors: KidFlavor[] = [
  {
    slug: "cofre-del-tesoro",
    name: "Cofre del tesoro",
    text: "Vainilla con chuches escondidas en el fondo. Cava con la cuchara hasta encontrarlas.",
    sprite: "cofre",
    tone: "peach",
    price: 3.5,
    allergens: ["leche"],
    tags: ["FAVORITO"],
    challenge: "Encuentra las 3 chuches del fondo",
  },
  {
    slug: "bloque-de-hierba",
    name: "Bloque de hierba",
    text: "Menta suave arriba y galleta de chocolate abajo. Igualito que un bloque de hierba.",
    sprite: "bloque",
    tone: "mint",
    price: 3.2,
    allergens: ["leche", "gluten", "soja"],
    tags: [],
    challenge: "Cómetelo de arriba abajo, capa a capa",
  },
  {
    slug: "bolita",
    name: "Bolita sonriente",
    text: "Nube de azúcar con ojos y sonrisa de chocolate. Te mira mientras te la comes.",
    sprite: "bolita",
    tone: "mint",
    price: 2.9,
    allergens: ["leche", "soja"],
    tags: ["FAVORITO"],
    challenge: "Dale un nombre antes del primer bocado",
  },
  {
    slug: "diamante-azul",
    name: "Diamante azul",
    text: "Chicle azul con cristalitos de azúcar que crujen. Brilla como un diamante recién minado.",
    sprite: "diamante",
    tone: "lavender",
    price: 3.2,
    allergens: ["leche"],
    tags: ["NUEVO"],
    challenge: "Cuenta los cristales que crujen",
  },
  {
    slug: "cucurucho-de-lava",
    name: "Cucurucho de lava",
    text: "Fresa con sirope rojo que baja como la lava. Sin nada de picante, palabra de heladero.",
    sprite: "cucurucho",
    tone: "peach",
    price: 2.9,
    allergens: ["leche", "gluten"],
    tags: [],
    challenge: "Que no caiga ni una gota de lava",
  },
  {
    slug: "polo-de-sandia",
    name: "Polo de sandía en bloque",
    text: "Polo cuadrado de sandía de verdad con pepitas de chocolate negro. Sin leche.",
    sprite: "polo",
    tone: "mint",
    price: 2.5,
    allergens: ["soja"],
    tags: ["VEGANO"],
    challenge: "Encuentra todas las pepitas",
  },
  {
    slug: "gatito-de-amatista",
    name: "Gatito de amatista",
    text: "Arándano y yogur, morado como una amatista, con orejas de galleta.",
    sprite: "gatito",
    tone: "lavender",
    price: 3.2,
    allergens: ["leche", "gluten"],
    tags: ["NUEVO"],
    challenge: "Empieza por las orejas",
  },
  {
    slug: "estrella-dorada",
    name: "Estrella dorada",
    text: "Plátano y caramelo con estrellas de azúcar. Para celebrar cualquier logro.",
    sprite: "estrella",
    tone: "peach",
    price: 2.9,
    allergens: ["leche"],
    tags: [],
    challenge: "Pide un deseo con la última estrella",
  },
];

export const achievements: { title: string; text: string; reward: string; sprite: SpriteName; tone: Pastel }[] = [
  { title: "Primer bloque", text: "Pide tu primer helado peque.", reward: "Pegatina pixelada", sprite: "bloque", tone: "mint" },
  { title: "Explorador", text: "Prueba 4 sabores peques distintos.", reward: "Bola gratis", sprite: "diamante", tone: "lavender" },
  { title: "Coleccionista", text: "Llena la tarjeta de 8 sellos.", reward: "Cofre del tesoro gratis", sprite: "cofre", tone: "peach" },
  { title: "Cumpleañero", text: "Ven el día de tu cumple con un adulto.", reward: "Helado peque gratis", sprite: "estrella", tone: "peach" },
];

/** Opciones de la mesa de crafteo. */
export const containers = [
  { id: "cucurucho", label: "Cucurucho", extra: 0 },
  { id: "tarrina", label: "Tarrina", extra: 0 },
  { id: "cubo", label: "Cubo de bloque", extra: 0.5 },
];

export const toppings = [
  { id: "nada", label: "Sin topping", extra: 0 },
  { id: "chuches", label: "Chuches", extra: 0.4 },
  { id: "virutas", label: "Virutas de colores", extra: 0.3 },
  { id: "lava", label: "Sirope de lava", extra: 0.3 },
  { id: "galleta", label: "Galleta pico", extra: 0.5 },
];
