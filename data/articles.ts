import type { Pastel } from "@/components/Checkerboard/Checkerboard";
import type { ScoopColor } from "./flavors";

export type Author = { name: string; role: string; initials: string };

export type Article = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  author: Author;
  date: string;
  readMinutes: number;
  pastel: Pastel;
  art: { scoop: ScoopColor; topping?: ScoopColor; variant?: "cone" | "cup" | "double" };
  body: string[];
  related: string[];
};

const jacous: Author = { name: "Jacous", role: "Fundador y heladero jefe", initials: "JA" };
const marta: Author = { name: "Marta Poveda", role: "Obrador", initials: "MP" };
const dani: Author = { name: "Dani Amat", role: "Barra y fanzine", initials: "DA" };

export const articles: Article[] = [
  {
    slug: "diez-anos-de-ruido",
    kicker: "Aniversario",
    title: "Diez años minando helado",
    dek: "De una vitrina prestada en la calle Nueva a la heladería que hoy construimos bloque a bloque. Así empezó todo.",
    author: jacous,
    date: "1 oct 2026",
    readMinutes: 6,
    pastel: "lavender",
    art: { scoop: "pink", topping: "ink", variant: "double" },
    body: [
      "En 2016 teníamos una vitrina prestada, una mantecadora de segunda mano y una lista de sabores escrita en una servilleta. El primer día vendimos once bolas. Seis fueron a la familia.",
      "Lo que sí teníamos claro era el sonido. Queríamos una heladería que se construyera como un mundo de bloques: poco a poco, a mano y sin pedir permiso. Por eso la pizarra está escrita a mano y por eso los sabores tienen nombres de cofre y de mina.",
      "Diez años después seguimos en la misma calle. La vitrina ya es nuestra, la mantecadora es nueva y la servilleta está enmarcada detrás de la barra. Once bolas se nos van ahora en cinco minutos.",
      "Gracias por minar con nosotros. Seguimos.",
    ],
    related: ["pogo-en-la-plaza", "proveedores-de-cerca", "el-pistacho-se-acaba"],
  },
  {
    slug: "pogo-en-la-plaza",
    kicker: "Evento",
    title: "Torneo de bloques en la plaza: las reglas",
    dek: "Bloques de cartón, una barra de helado y la plaza Castelar. Sábado 24 de octubre a las 19:00. Entrada libre.",
    author: dani,
    date: "12 oct 2026",
    readMinutes: 3,
    pastel: "peach",
    art: { scoop: "lavender", topping: "ink", variant: "cone" },
    body: [
      "Equipos de hasta cuatro personas, dos horas y quinientos bloques de cartón. Gana la torre más alta que aguante en pie un minuto entero. Hay categoría infantil.",
      "Montamos barra con seis sabores, incluida la obsidiana de sésamo. Bola a 2,50 € toda la tarde y el equipo ganador se lleva un cofre lleno de tarrinas.",
      "Si llueve, nos refugiamos en el local de la calle Jardines. Si no llueve, tampoco te quedes en casa.",
    ],
    related: ["diez-anos-de-ruido", "sesamo-negro-el-raro", "proveedores-de-cerca"],
  },
  {
    slug: "sesamo-negro-el-raro",
    kicker: "Sabor nuevo",
    title: "Obsidiana de sésamo: el botín que todos piden",
    dek: "Parece obsidiana. Sabe a gloria. Cómo nació el botín más raro del otoño.",
    author: marta,
    date: "14 oct 2026",
    readMinutes: 4,
    pastel: "lavender",
    art: { scoop: "ink", topping: "lime", variant: "cone" },
    body: [
      "Todo empezó con un bote de tahini negro que nadie sabía para qué habíamos comprado. Probamos con chocolate y no. Con plátano y tampoco. Con miel de azahar, sí.",
      "El resultado es gris, salado y dulce a la vez. Los primeros días la gente lo miraba con desconfianza. Ahora tiene club de fans propio y un grupo de mensajes que nos escribe cada mañana para saber si queda.",
      "Lleva sésamo, claro. Y leche. Si tienes alergia a alguno, pásate al chocolate negro 70%, que también es oscuro y no lleva ninguno de los dos.",
    ],
    related: ["pogo-en-la-plaza", "el-pistacho-se-acaba", "diez-anos-de-ruido"],
  },
  {
    slug: "el-pistacho-se-acaba",
    kicker: "Aviso",
    title: "Los bloques de pistacho se acaban antes de las 20:00",
    dek: "No es marketing: el pistacho de Bronte llega en cantidades limitadas. Te contamos por qué.",
    author: jacous,
    date: "8 oct 2026",
    readMinutes: 3,
    pastel: "mint",
    art: { scoop: "mint", topping: "ink", variant: "cup" },
    body: [
      "El pistacho de Bronte se cosecha cada dos años y la producción es pequeña. Compramos lo que nos dejan y lo hacemos durar lo que podemos.",
      "Por eso a veces verás QUEDA POCO en la pizarra a media tarde. Si es tu sabor, ven pronto o encarga una tarrina con un día de antelación.",
    ],
    related: ["proveedores-de-cerca", "diez-anos-de-ruido", "sesamo-negro-el-raro"],
  },
  {
    slug: "proveedores-de-cerca",
    kicker: "Reportaje",
    title: "El mapa de nuestros ingredientes",
    dek: "Turrón de Xixona, mandarinas de Callosa, leche de la Vega Baja. El mapa de nuestros ingredientes.",
    author: marta,
    date: "28 sep 2026",
    readMinutes: 7,
    pastel: "peach",
    art: { scoop: "peach", topping: "cream", variant: "cone" },
    body: [
      "Nos gusta saber la cara de quien nos vende. La leche llega cada mañana de una granja de la Vega Baja. El turrón, de una familia de Xixona con la que trabajamos desde el primer día.",
      "Las mandarinas vienen de Callosa d'en Sarrià y sólo las usamos mientras hay. Cuando se acaban, el sabor desaparece de la pizarra hasta el año siguiente.",
      "Lo que no hay cerca, como el pistacho o el cacao, lo compramos a cooperativas pequeñas. Más caro, sí. Mejor, también.",
    ],
    related: ["el-pistacho-se-acaba", "diez-anos-de-ruido", "pogo-en-la-plaza"],
  },
  {
    slug: "vegano-cremoso",
    kicker: "Obrador",
    title: "El truco del vegano cremoso",
    dek: "Sin vaca no significa sin textura. Grasas vegetales, frutos secos y paciencia.",
    author: marta,
    date: "20 sep 2026",
    readMinutes: 5,
    pastel: "lavender",
    art: { scoop: "ink", topping: "lavender", variant: "cup" },
    body: [
      "El secreto está en la grasa. La leche de vaca la trae de serie; en los veganos hay que buscarla en la leche de coco, en las avellanas tostadas o en el propio cacao.",
      "Luego, tiempo. Dejamos madurar la mezcla doce horas en frío antes de mantecarla. Así el helado sale denso y no hace cristales.",
    ],
    related: ["proveedores-de-cerca", "sesamo-negro-el-raro", "diez-anos-de-ruido"],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
