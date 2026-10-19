import type { HeroSlide } from "@/components/HeroRotator/HeroRotator";
import type { Story } from "@/components/StoryCard/StoryCard";
import type { Video } from "@/components/VideoCard/VideoCard";
import type { Headline } from "@/components/HeadlineList/HeadlineList";

export const heroSlides: HeroSlide[] = [
  {
    id: "sabor-semana",
    eyebrow: "Sabor de la semana",
    title: "Mango de lava. Quema y punto.",
    text: "Mango maduro, lima y chile. La primera cucharada quema como la lava. La segunda te convence.",
    pastel: "peach",
    art: { scoop: "peach", topping: "ink", variant: "cone" },
    primary: { label: "Pruébalo hoy", href: "/sabores/mango-picante" },
    secondary: { label: "Ver la carta", href: "/carta" },
  },
  {
    id: "concierto",
    eyebrow: "Evento · 24 oct",
    title: "Torneo de bloques en la plaza",
    text: "Construye la torre más alta con bloques de cartón. Premio: un cofre lleno de helado. Sábado 24 a las 19:00 en la plaza Castelar.",
    pastel: "lavender",
    art: { scoop: "lavender", topping: "ink", variant: "double" },
    primary: { label: "Apúntate", href: "/club" },
    secondary: { label: "Ver las reglas", href: "/fanzine/pogo-en-la-plaza" },
  },
  {
    id: "horario",
    eyebrow: "Horario de otoño",
    title: "Abierto de día y de noche",
    text: "Como en la mina: no paramos. Todos los días, de 12:00 a 00:00. Y los lunes, con olor a dulce de leche.",
    pastel: "mint",
    art: { scoop: "mint", topping: "ink", variant: "cup" },
    primary: { label: "Qué hay hoy", href: "/hoy" },
    secondary: { label: "Cómo llegar", href: "/hoy" },
  },
  {
    id: "nuevo",
    eyebrow: "Recién salido",
    title: "Obsidiana de sésamo. Negra y gloriosa.",
    text: "Tahini negro y miel de azahar. Rara, salada, dulce. Botín raro solo para valientes.",
    pastel: "lavender",
    art: { scoop: "ink", topping: "lavender", variant: "cone" },
    primary: { label: "Descúbrelo", href: "/sabores/sesamo-negro-miel" },
    secondary: { label: "Botín raro", href: "/familias/punk-specials" },
  },
  {
    id: "club",
    eyebrow: "Club Jacous",
    title: "Desbloquea tu bola gratis",
    text: "Únete gratis al Club Jacous y desbloquea logros: bola gratis en tu cumple, catas secretas y sabores antes que nadie.",
    pastel: "mint",
    art: { scoop: "pink", topping: "mint", variant: "double" },
    primary: { label: "Únete al club", href: "/club" },
    secondary: { label: "Cómo funciona", href: "/club" },
  },
];

export const stories: Story[] = [
  { slug: "turron-cazo", photo: "vitrina-gelato", title: "Así se forja el lingote de turrón", kicker: "Obrador · 6:30", pastel: "peach", scoop: "peach", topping: "cream", isNew: true, href: "/sabores/turron-de-jijona" },
  { slug: "mango-chile", photo: "cucurucho-amarillo", title: "¿Cuánta lava es demasiada?", kicker: "Prueba y error", pastel: "peach", scoop: "peach", topping: "ink", isNew: true, href: "/sabores/mango-picante" },
  { slug: "mandarina-vuelve", photo: "bolas-naranja", title: "Reaparece la mandarina", kicker: "Temporada", pastel: "mint", scoop: "peach", topping: "cyan", href: "/sabores/mandarina-temporada" },
  { slug: "sesamo", photo: "chocolate-sobre-gris", title: "La obsidiana que todos piden", kicker: "Botín raro", pastel: "lavender", scoop: "ink", topping: "lime", isNew: true, href: "/sabores/sesamo-negro-miel" },
  { slug: "coco-sarten", photo: "helado-suave-blanco", title: "Coco tostado en el horno de piedra", kicker: "Obrador · 9:00", pastel: "lavender", scoop: "cream", topping: "peach", href: "/sabores/coco-tostado" },
  { slug: "pistacho", photo: "cucurucho-verde-claro", title: "Quedan pocos bloques de pistacho", kicker: "Aviso", pastel: "mint", scoop: "mint", topping: "lime", href: "/sabores/pistacho-de-bronte" },
  { slug: "pipas", photo: "galleta-y-nata", title: "El tesoro de la aldea: pipas", kicker: "Detrás del sabor", pastel: "peach", scoop: "peach", topping: "ink", href: "/sabores/pipas-caramelo" },
];

export const videos: Video[] = [
  { slug: "dulce-de-leche-12h", photo: "sacando-vainilla", title: "Dulce de leche: 12 horas en 3 minutos", duration: "3:12", meta: "Recetas · 41 mil vistas", pastel: "peach", scoop: "peach" },
  { slug: "sorbete-limon", photo: "cucurucho-verde-intenso", title: "Sorbete de limón y albahaca en casa", duration: "5:48", meta: "Recetas · 18 mil vistas", pastel: "mint", scoop: "mint", topping: "cream" },
  { slug: "cucurucho-casero", photo: "fila-de-cucuruchos", title: "Craftea tu cucurucho sin plancha", duration: "7:05", meta: "Recetas · 22 mil vistas", pastel: "peach", scoop: "cream", topping: "pink" },
  { slug: "vegano-cremoso", photo: "cucuruchos-chocolate-fondo-negro", title: "El truco del vegano cremoso", duration: "4:20", meta: "Recetas · 9 mil vistas", pastel: "lavender", scoop: "ink", topping: "lavender" },
  { slug: "pistacho-pasta", photo: "cucurucho-verde-claro", title: "Mina tu propia pasta de pistacho", duration: "6:33", meta: "Recetas · 15 mil vistas", pastel: "mint", scoop: "mint" },
  { slug: "toppings-punk", photo: "helado-azul-cono-negro", title: "Toppings de cofre: pipas, sal y chile", duration: "2:47", meta: "Recetas · 31 mil vistas", pastel: "lavender", scoop: "peach", topping: "ink" },
];

export const topOrdered: Video[] = [
  { slug: "top-pistacho", photo: "cucurucho-verde-claro", title: "Bloque de pistacho, servido", duration: "0:45", meta: "Lo más pedido · nº 1", pastel: "mint", scoop: "mint", topping: "ink" },
  { slug: "top-turron", photo: "cucurucho-doble-crema", title: "Lingote de turrón en tarrina", duration: "0:38", meta: "Lo más pedido · nº 2", pastel: "peach", scoop: "peach", topping: "cream" },
  { slug: "top-chocolate", photo: "bola-chocolate", title: "Pico de chocolate 70%, sin vaca", duration: "0:52", meta: "Lo más pedido · nº 3", pastel: "lavender", scoop: "ink", topping: "lavender" },
  { slug: "top-mango", photo: "cucurucho-amarillo", title: "Mango de lava, el reto", duration: "1:04", meta: "Lo más pedido · nº 4", pastel: "peach", scoop: "peach", topping: "pink" },
  { slug: "top-yogur", photo: "cucuruchos-arandanos", title: "Yogur de bayas", duration: "0:41", meta: "Lo más pedido · nº 5", pastel: "lavender", scoop: "cream", topping: "pink" },
  { slug: "top-pipas", photo: "galleta-y-nata", title: "Pipas de la aldea: el crujido", duration: "0:33", meta: "Lo más pedido · nº 6", pastel: "mint", scoop: "peach", topping: "ink" },
];

export const liveNow: Video[] = [
  { slug: "directo-obrador", photo: "vitrina-gelato", title: "Obrador abierto: hoy turrón", duration: "", meta: "Ahora · 312 mirando", pastel: "peach", scoop: "peach", topping: "cream", live: true },
  { slug: "proximo-pogo", photo: "amigos-con-cucuruchos", title: "Torneo de bloques (sáb 19:00)", duration: "Sáb 19:00", meta: "Próximo · recuérdamelo", pastel: "lavender", scoop: "lavender", topping: "ink" },
  { slug: "proximo-cata", photo: "cinco-cuencos", title: "Cata secreta del Club", duration: "Jue 21:00", meta: "Próximo · solo socios", pastel: "mint", scoop: "mint", topping: "cream" },
  { slug: "proximo-qa", photo: "torre-de-bolas", title: "Pregunta a Jacous lo que quieras", duration: "Dom 18:00", meta: "Próximo · en directo", pastel: "peach", scoop: "pink", topping: "mint" },
];

export const channels: Video[] = [
  { slug: "canal-obrador", photo: "sacando-vainilla", title: "Canal Obrador", duration: "", meta: "24 h de cámara fija en la mantecadora", pastel: "mint", scoop: "cream", topping: "mint", live: true },
  { slug: "canal-barra", photo: "cucurucho-rosa-fondo-amarillo", title: "Canal Barra", duration: "", meta: "Lo que pasa en la tienda, sin cortes", pastel: "peach", scoop: "pink", topping: "peach", live: true },
  { slug: "canal-radio", photo: "helado-azul-cono-negro", title: "Radio Jacous", duration: "", meta: "La playlist del obrador, en bucle", pastel: "lavender", scoop: "ink", topping: "lavender", live: true },
];

export const essentials: Video[] = [
  { slug: "historia-jacous", photo: "cucurucho-doble-crema", title: "Diez años minando helado", duration: "12:40", meta: "Documental · 2026", pastel: "lavender", scoop: "pink", topping: "ink" },
  { slug: "proveedores", photo: "cinco-cuencos", title: "De dónde sale cada ingrediente", duration: "9:15", meta: "Reportaje", pastel: "mint", scoop: "mint", topping: "peach" },
  { slug: "fiestas-2025", photo: "amigos-con-cucuruchos", title: "Fiestas Mayores 2025 en 2 minutos", duration: "2:05", meta: "Resumen", pastel: "peach", scoop: "peach", topping: "pink" },
  { slug: "bola-perfecta", photo: "cucurucho-virutas-fondo-amarillo", title: "Cómo se construye una bola perfecta", duration: "1:58", meta: "Tutorial", pastel: "lavender", scoop: "cream", topping: "lavender" },
];

export const headlines: Headline[] = [
  { title: "Vuelve la mandarina de Callosa: ya está en vitrina", href: "/sabores/mandarina-temporada", date: "16 oct 2026" },
  { title: "Obsidiana de sésamo, el botín raro de otoño", href: "/sabores/sesamo-negro-miel", date: "14 oct 2026" },
  { title: "Torneo de bloques en la plaza: las reglas", href: "/fanzine/pogo-en-la-plaza", date: "12 oct 2026" },
  { title: "Abierto de día y de noche: nuevo horario", href: "/hoy", date: "10 oct 2026" },
  { title: "Los bloques de pistacho se acaban antes de las 20:00", href: "/sabores/pistacho-de-bronte", date: "8 oct 2026" },
  { title: "Diez años minando helado: lo contamos en el fanzine", href: "/fanzine/diez-anos-de-ruido", date: "1 oct 2026" },
];
