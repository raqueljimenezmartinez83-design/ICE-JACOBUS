import type { FamilySlug } from "./families";
import type { PhotoKey } from "./photos";

export type Allergen = "leche" | "frutos secos" | "gluten" | "huevo" | "soja" | "sulfitos" | "sésamo";
export type FlavorTag = "NUEVO" | "VEGANO" | "SIN GLUTEN" | "TEMPORADA";
export type FlavorStatus = "ok" | "queda-poco" | "agotado";
/** Colores de bola: siempre tokens del sistema. */
export type ScoopColor = "mint" | "lavender" | "peach" | "pink" | "lime" | "cyan" | "cream" | "ink";

export type Flavor = {
  slug: string;
  name: string;
  family: FamilySlug;
  photo: PhotoKey;
  short: string;
  ingredients: string[];
  story: string;
  priceScoop: number;
  priceDouble: number;
  priceTub: number; // tarrina 500 ml
  priceLiter: number;
  intensity: 1 | 2 | 3 | 4 | 5;
  kcal: number; // por 100 g
  sugar: number; // g por 100 g
  fat: number; // g por 100 g
  allergens: Allergen[];
  since: number;
  tags: FlavorTag[];
  status: FlavorStatus;
  scoop: ScoopColor;
  topping?: ScoopColor;
};

export const flavors: Flavor[] = [
  {
    slug: "pistacho-de-bronte",
    photo: "cucurucho-verde-claro",
    name: "Bloque de pistacho",
    family: "cremas",
    short: "Pistacho siciliano tostado. Verde como la hierba, sin colorante.",
    ingredients: ["Leche fresca", "Nata", "Pasta de pistacho de Bronte", "Azúcar de caña", "Pizca de sal"],
    story:
      "Llegó en 2016 en una maleta desde Sicilia y ya no se fue. Es el sabor que más discusiones ha ganado en la barra.",
    priceScoop: 3.2, priceDouble: 5.4, priceTub: 9.5, priceLiter: 17.9,
    intensity: 5, kcal: 248, sugar: 19.5, fat: 15.2,
    allergens: ["leche", "frutos secos"], since: 2016,
    tags: ["SIN GLUTEN"], status: "queda-poco", scoop: "mint", topping: "lime",
  },
  {
    slug: "turron-de-jijona",
    photo: "cucurucho-doble-crema",
    name: "Lingote de turrón",
    family: "cremas",
    short: "Turrón blando de Xixona, forjado aquí al lado. Navidad todo el año.",
    ingredients: ["Leche fresca", "Nata", "Turrón de Jijona IGP", "Miel de romero", "Almendra marcona"],
    story:
      "La receta de la abuela de Jacous, con el turrón que compramos a la misma familia de Xixona desde el primer día.",
    priceScoop: 3.0, priceDouble: 5.0, priceTub: 9.0, priceLiter: 16.9,
    intensity: 4, kcal: 236, sugar: 21.0, fat: 13.8,
    allergens: ["leche", "frutos secos", "huevo"], since: 2016,
    tags: ["SIN GLUTEN"], status: "ok", scoop: "peach", topping: "cream",
  },
  {
    slug: "yogur-frutos-rojos",
    photo: "cucuruchos-arandanos",
    name: "Yogur de bayas",
    family: "cremas",
    short: "Yogur griego ácido con bayas recolectadas: fresa, mora y frambuesa.",
    ingredients: ["Yogur griego", "Leche fresca", "Fresa", "Mora", "Frambuesa", "Azúcar"],
    story: "Nació un agosto de 40 grados. Fresco, ácido y sin pedir perdón.",
    priceScoop: 2.8, priceDouble: 4.8, priceTub: 8.5, priceLiter: 15.9,
    intensity: 3, kcal: 172, sugar: 18.2, fat: 6.1,
    allergens: ["leche"], since: 2018,
    tags: ["SIN GLUTEN"], status: "ok", scoop: "cream", topping: "pink",
  },
  {
    slug: "dulce-de-leche",
    photo: "sacando-vainilla",
    name: "Cubo de dulce de leche",
    family: "cremas",
    short: "Doce horas de cazo. Ni una menos.",
    ingredients: ["Leche fresca", "Nata", "Dulce de leche casero", "Sal en escamas"],
    story: "Lo cocemos los lunes a primera hora, antes de abrir. Por eso los lunes la calle huele tan bien.",
    priceScoop: 2.8, priceDouble: 4.8, priceTub: 8.5, priceLiter: 15.9,
    intensity: 4, kcal: 254, sugar: 26.4, fat: 12.9,
    allergens: ["leche"], since: 2016,
    tags: ["SIN GLUTEN"], status: "ok", scoop: "peach",
  },
  {
    slug: "vainilla-bourbon",
    photo: "vainilla-con-virutas",
    name: "Vainilla de aldea",
    family: "cremas",
    short: "Vainilla de Madagascar con puntitos negros. El clásico, bien hecho.",
    ingredients: ["Leche fresca", "Nata", "Yema de huevo", "Vaina de vainilla Bourbon", "Azúcar"],
    story: "El sabor más aburrido del mundo, hasta que lo pruebas aquí.",
    priceScoop: 2.6, priceDouble: 4.5, priceTub: 8.0, priceLiter: 14.9,
    intensity: 2, kcal: 221, sugar: 20.1, fat: 12.4,
    allergens: ["leche", "huevo"], since: 2016,
    tags: ["SIN GLUTEN"], status: "ok", scoop: "cream",
  },
  {
    slug: "stracciatella",
    photo: "chocolate-sobre-vainilla",
    name: "Stracciatella de obsidiana",
    family: "cremas",
    short: "Fior di latte con esquirlas de chocolate negro, duras como obsidiana.",
    ingredients: ["Leche fresca", "Nata", "Chocolate negro 70%", "Azúcar"],
    story: "El chocolate se echa fundido en el último minuto. Crac en cada cucharada.",
    priceScoop: 2.8, priceDouble: 4.8, priceTub: 8.5, priceLiter: 15.9,
    intensity: 3, kcal: 239, sugar: 21.7, fat: 14.0,
    allergens: ["leche", "soja"], since: 2017,
    tags: ["SIN GLUTEN"], status: "agotado", scoop: "cream", topping: "ink",
  },
  {
    slug: "limon-albahaca",
    photo: "cucurucho-verde-intenso",
    name: "Limón y albahaca de huerto",
    family: "sorbetes",
    short: "Limón de la huerta y albahaca fresca. Despierta hasta a un lunes.",
    ingredients: ["Agua", "Zumo de limón", "Albahaca fresca", "Azúcar", "Ralladura de limón"],
    story: "Un cliente nos trajo albahaca de su balcón. Le debemos un helado al mes de por vida.",
    priceScoop: 2.5, priceDouble: 4.2, priceTub: 7.5, priceLiter: 13.9,
    intensity: 3, kcal: 112, sugar: 26.0, fat: 0.1,
    allergens: [], since: 2017,
    tags: ["VEGANO", "SIN GLUTEN"], status: "ok", scoop: "lime", topping: "mint",
  },
  {
    slug: "mango-picante",
    photo: "cucurucho-amarillo",
    name: "Mango de lava",
    family: "sorbetes",
    short: "Mango maduro, lima y chile. Quema como la lava, pero se come.",
    ingredients: ["Agua", "Pulpa de mango Alphonso", "Zumo de lima", "Chile en polvo", "Sal", "Azúcar"],
    story: "Inspirado en los puestos de fruta con chamoy. La primera vez lo devolvieron. La segunda pidieron litro.",
    priceScoop: 2.8, priceDouble: 4.8, priceTub: 8.5, priceLiter: 15.9,
    intensity: 5, kcal: 124, sugar: 25.1, fat: 0.3,
    allergens: [], since: 2026,
    tags: ["NUEVO", "VEGANO", "SIN GLUTEN"], status: "ok", scoop: "peach", topping: "ink",
  },
  {
    slug: "frambuesa",
    photo: "cucuruchos-fresa",
    name: "Frambuesa de arbusto",
    family: "sorbetes",
    short: "Frambuesa entera, con pepitas. Rosa de verdad.",
    ingredients: ["Agua", "Frambuesa", "Azúcar", "Zumo de limón"],
    story: "Un kilo de fruta por litro. Por eso no es barato y por eso sabe así.",
    priceScoop: 2.6, priceDouble: 4.5, priceTub: 8.0, priceLiter: 14.9,
    intensity: 4, kcal: 118, sugar: 24.3, fat: 0.2,
    allergens: [], since: 2016,
    tags: ["VEGANO", "SIN GLUTEN"], status: "ok", scoop: "pink",
  },
  {
    slug: "mandarina-temporada",
    photo: "bolas-naranja",
    name: "Mandarina del bioma otoñal",
    family: "sorbetes",
    short: "Clemenules de Callosa recién exprimidas. Solo en otoño e invierno.",
    ingredients: ["Agua", "Zumo de mandarina", "Ralladura de mandarina", "Azúcar"],
    story: "Vuelve cada octubre. Cuando se acaba la mandarina, se acaba el sabor.",
    priceScoop: 2.6, priceDouble: 4.5, priceTub: 8.0, priceLiter: 14.9,
    intensity: 3, kcal: 109, sugar: 23.8, fat: 0.1,
    allergens: [], since: 2020,
    tags: ["TEMPORADA", "VEGANO", "SIN GLUTEN"], status: "ok", scoop: "peach", topping: "cyan",
  },
  {
    slug: "sandia-menta",
    photo: "tres-bolas-virutas",
    name: "Sandía en bloque",
    family: "sorbetes",
    short: "Un bloque de sandía hecho helado. Con menta y una pizca de sal.",
    ingredients: ["Sandía", "Menta fresca", "Azúcar", "Sal"],
    story: "Nuestro sabor de piscina. Este año se ha despedido pronto: vuelve en junio.",
    priceScoop: 2.5, priceDouble: 4.2, priceTub: 7.5, priceLiter: 13.9,
    intensity: 2, kcal: 96, sugar: 21.0, fat: 0.1,
    allergens: [], since: 2019,
    tags: ["VEGANO", "SIN GLUTEN"], status: "agotado", scoop: "pink", topping: "mint",
  },
  {
    slug: "chocolate-negro-70",
    photo: "bola-chocolate",
    name: "Pico de chocolate 70%",
    family: "veganos",
    short: "Cacao intenso con agua y nada más. Más oscuro que una cueva sin antorchas.",
    ingredients: ["Agua", "Chocolate 70% de Ecuador", "Cacao en polvo", "Azúcar de caña"],
    story: "El que convence a los que dicen que el vegano no es cremoso. Siempre gana.",
    priceScoop: 2.9, priceDouble: 4.9, priceTub: 8.9, priceLiter: 16.5,
    intensity: 5, kcal: 198, sugar: 22.4, fat: 9.8,
    allergens: ["soja"], since: 2019,
    tags: ["VEGANO", "SIN GLUTEN"], status: "ok", scoop: "ink", topping: "lavender",
  },
  {
    slug: "coco-tostado",
    photo: "helado-suave-blanco",
    name: "Coco de isla",
    family: "veganos",
    short: "Leche de coco y coco rallado tostado al momento.",
    ingredients: ["Leche de coco", "Coco rallado tostado", "Azúcar de caña", "Sal"],
    story: "Tostamos el coco en la sartén del obrador. Toda la calle se entera.",
    priceScoop: 2.8, priceDouble: 4.8, priceTub: 8.5, priceLiter: 15.9,
    intensity: 3, kcal: 226, sugar: 18.6, fat: 16.4,
    allergens: [], since: 2020,
    tags: ["VEGANO", "SIN GLUTEN"], status: "ok", scoop: "cream", topping: "peach",
  },
  {
    slug: "horchata",
    photo: "fila-de-cucuruchos",
    name: "Horchata de la mina",
    family: "veganos",
    short: "Chufa valenciana con canela y limón. Frío de verdad.",
    ingredients: ["Horchata de chufa DO Valencia", "Azúcar", "Canela", "Piel de limón"],
    story: "Lo servimos con fartón si lo pides con cara de pena.",
    priceScoop: 2.6, priceDouble: 4.5, priceTub: 8.0, priceLiter: 14.9,
    intensity: 2, kcal: 164, sugar: 19.9, fat: 7.2,
    allergens: [], since: 2019,
    tags: ["VEGANO", "SIN GLUTEN"], status: "queda-poco", scoop: "cream", topping: "lavender",
  },
  {
    slug: "avellana-cacao",
    photo: "cucuruchos-chocolate-fondo-negro",
    name: "Avellana y cacao de cueva",
    family: "veganos",
    short: "La crema de untar que te prometieron de pequeño, pero sin vaca.",
    ingredients: ["Bebida de avellana", "Avellana del Piamonte", "Cacao", "Azúcar de caña"],
    story: "Lo pidieron tanto en Instagram que lo hicimos para callarlos. No se callaron: piden más.",
    priceScoop: 3.0, priceDouble: 5.0, priceTub: 9.0, priceLiter: 16.9,
    intensity: 4, kcal: 241, sugar: 20.3, fat: 15.7,
    allergens: ["frutos secos"], since: 2022,
    tags: ["VEGANO", "SIN GLUTEN"], status: "ok", scoop: "peach", topping: "ink",
  },
  {
    slug: "pipas-caramelo",
    photo: "galleta-y-nata",
    name: "Pipas de la aldea",
    family: "punk-specials",
    short: "Pipas saladas y caramelo tostado. El tesoro de la plaza.",
    ingredients: ["Leche fresca", "Nata", "Pipas de girasol tostadas", "Caramelo", "Sal"],
    story: "Inspirado en las tardes de banco en la plaza Castelar. Dulce, salado y ruidoso.",
    priceScoop: 3.0, priceDouble: 5.0, priceTub: 9.0, priceLiter: 16.9,
    intensity: 4, kcal: 262, sugar: 22.8, fat: 16.1,
    allergens: ["leche", "frutos secos"], since: 2021,
    tags: ["SIN GLUTEN"], status: "ok", scoop: "peach", topping: "ink",
  },
  {
    slug: "fondillon-pasas",
    photo: "helado-lavanda",
    name: "Poción de fondillón",
    family: "punk-specials",
    short: "Vino rancio de Alicante y pasas maceradas. Poción solo para mayores de 18.",
    ingredients: ["Leche fresca", "Nata", "Fondillón de Alicante", "Pasas moscatel", "Azúcar"],
    story: "Un homenaje a la sobremesa eldense. Lleva alcohol: lo pedimos con DNI y sonrisa.",
    priceScoop: 3.4, priceDouble: 5.8, priceTub: 10.5, priceLiter: 19.5,
    intensity: 5, kcal: 231, sugar: 23.5, fat: 11.6,
    allergens: ["leche", "sulfitos"], since: 2023,
    tags: ["SIN GLUTEN"], status: "queda-poco", scoop: "lavender", topping: "ink",
  },
  {
    slug: "suela-de-chocolate",
    photo: "chocolate-con-trozos",
    name: "Bloque de tierra",
    family: "punk-specials",
    short: "Brownie, galleta y chocolate desmigados. Parece tierra, sabe a gloria.",
    ingredients: ["Leche fresca", "Nata", "Cacao", "Brownie casero", "Galleta de mantequilla"],
    story: "Para las Fiestas Mayores de 2022 quisimos un sabor con forma de zapato. Salió esto.",
    priceScoop: 3.2, priceDouble: 5.4, priceTub: 9.5, priceLiter: 17.9,
    intensity: 5, kcal: 289, sugar: 27.2, fat: 15.9,
    allergens: ["leche", "gluten", "huevo", "soja"], since: 2022,
    tags: [], status: "ok", scoop: "ink", topping: "pink",
  },
  {
    slug: "sesamo-negro-miel",
    photo: "chocolate-sobre-gris",
    name: "Obsidiana de sésamo",
    family: "punk-specials",
    short: "Negra, rara y adictiva. Tahini negro con miel de azahar.",
    ingredients: ["Leche fresca", "Nata", "Tahini de sésamo negro", "Miel de azahar"],
    story: "Lo sacamos en octubre de 2026. Ya tiene club de fans propio.",
    priceScoop: 3.2, priceDouble: 5.4, priceTub: 9.5, priceLiter: 17.9,
    intensity: 4, kcal: 244, sugar: 18.4, fat: 15.0,
    allergens: ["leche", "sésamo"], since: 2026,
    tags: ["NUEVO", "SIN GLUTEN"], status: "ok", scoop: "ink", topping: "lime",
  },
];

export function getFlavor(slug: string) {
  return flavors.find((f) => f.slug === slug);
}

export function flavorsByFamily(family: FamilySlug) {
  return flavors.filter((f) => f.family === family);
}

export function formatPrice(n: number) {
  return `${n.toFixed(2).replace(".", ",")} €`;
}
