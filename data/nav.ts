export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Sabores", href: "/sabores" },
  { label: "Hoy", href: "/hoy" },
  { label: "Carta", href: "/carta" },
  { label: "Familias", href: "/familias" },
  { label: "Fanzine", href: "/fanzine" },
  { label: "Ver", href: "/ver" },
  { label: "Encargos", href: "/encargos" },
  { label: "Tienda", href: "/tienda" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "La heladería",
    links: [
      { label: "Quiénes somos", href: "/fanzine/diez-anos-de-ruido" },
      { label: "El obrador", href: "/ver" },
      { label: "Sistema de diseño", href: "/sistema" },
      { label: "Trabaja con nosotros", href: "/encargos" },
    ],
  },
  {
    title: "Barrio (Elda)",
    links: [
      { label: "C/ Nueva 23, Elda", href: "/hoy" },
      { label: "Horario: 12:00–00:00", href: "/hoy" },
      { label: "Cómo llegar", href: "/hoy" },
      { label: "Fiestas Mayores", href: "/fanzine" },
    ],
  },
  {
    title: "Encargos",
    links: [
      { label: "Tartas heladas", href: "/encargos" },
      { label: "Bodas y fiestas", href: "/encargos" },
      { label: "Carrito para eventos", href: "/encargos" },
      { label: "Empresas", href: "/encargos" },
    ],
  },
  {
    title: "Tienda",
    links: [
      { label: "Tarrinas para llevar", href: "/tienda" },
      { label: "Camisetas y chapas", href: "/tienda" },
      { label: "Tarjeta regalo", href: "/tienda" },
      { label: "Envíos en Elda", href: "/tienda" },
    ],
  },
  {
    title: "Club Jacous",
    links: [
      { label: "Únete gratis", href: "/club" },
      { label: "Bola gratis en tu cumple", href: "/club" },
      { label: "Catas secretas", href: "/club" },
      { label: "Preguntas frecuentes", href: "/club" },
    ],
  },
];
