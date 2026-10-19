/**
 * Fotos de helado con licencia de Unsplash (uso libre, sin atribución obligatoria).
 * Aun así guardamos autor y enlace para mostrar créditos.
 * Para cambiar una foto por una propia: sustituye el archivo en /public/fotos
 * con el mismo nombre, o añade una entrada nueva y apunta el sabor a ella.
 */
export type Photo = {
  src: string;
  alt: string;
  author: string;
  url: string;
};

const p = (file: string, alt: string, author: string, slug: string): Photo => ({
  src: `/fotos/${file}.jpg`,
  alt,
  author,
  url: `https://unsplash.com/photos/${slug}`,
});

export const photos = {
  "cucurucho-rosa-fondo-amarillo": p("cucurucho-rosa-fondo-amarillo", "Cucurucho de helado rosa sobre fondo amarillo", "ian dooley", "TLD6iCOlyb0"),
  "bola-chocolate": p("bola-chocolate", "Bola de helado de chocolate", "Irene Kredenets", "tVs-nga-tpo"),
  "cucurucho-verde-claro": p("cucurucho-verde-claro", "Dos bolas de helado verde claro en cucurucho de barquillo", "Crystal Stone", "n7nXEm8Enk0"),
  "cucurucho-amarillo": p("cucurucho-amarillo", "Mano sujetando un cucurucho de helado amarillo", "Phil Hearing", "nfqQPeVfL5w"),
  "cucurucho-virutas-fondo-amarillo": p("cucurucho-virutas-fondo-amarillo", "Cucurucho con virutas de colores sobre fondo amarillo", "Zach Camp", "3D0HUHFcRrk"),
  "cucuruchos-chocolate-fondo-negro": p("cucuruchos-chocolate-fondo-negro", "Cucuruchos de helado de chocolate sobre fondo negro", "Mae Mu", "X5u6snvBCf0"),
  "helado-suave-blanco": p("helado-suave-blanco", "Helado suave blanco en cucurucho", "tommao wang", "FM9i9GkzKZY"),
  "cucuruchos-fresa": p("cucuruchos-fresa", "Cucuruchos de helado de fresa con fresas frescas", "Svitlana", "kg7gcQtp4N8"),
  "tres-bolas-virutas": p("tres-bolas-virutas", "Tres bolas de helado en cucurucho rodeadas de virutas", "Courtney Cook", "xtVjWVCiE-U"),
  "cucurucho-verde-intenso": p("cucurucho-verde-intenso", "Helado verde sobre bola de chocolate en cucurucho", "Rosa Rafael", "Nag3E3yzygU"),
  "cucurucho-doble-crema": p("cucurucho-doble-crema", "Cucurucho de dos bolas de crema sobre fondo rosa", "Rachael Gorjestani", "HLt6jQLf_J0"),
  "torre-de-bolas": p("torre-de-bolas", "Mano sujetando una torre de bolas de helado", "Josephina Kolpachnikof", "piA65cp-1EI"),
  "fila-de-cucuruchos": p("fila-de-cucuruchos", "Fila de cucuruchos de helado de colores", "Candy Zimmermann", "nxMsxgKxFxA"),
  "amigos-con-cucuruchos": p("amigos-con-cucuruchos", "Tres personas brindando con cucuruchos de helado", "Mark Cruz", "Ov0u44CyGdM"),
  "vainilla-con-virutas": p("vainilla-con-virutas", "Helado de vainilla con virutas de colores", "sheri silver", "5A0O12BIsjY"),
  "vitrina-gelato": p("vitrina-gelato", "Vitrina de heladería con bandejas de helado artesano", "Lama Roscu", "Wpg3Qm0zaGk"),
  "bolas-naranja": p("bolas-naranja", "Bolas de helado naranja en un cuenco", "Dovile Ramoskaite", "iT4qcNMhYTQ"),
  "chocolate-con-trozos": p("chocolate-con-trozos", "Helado de chocolate con trozos en cesta de barquillo", "Elza Kurbanova", "NEab1U1FfKM"),
  "cinco-cuencos": p("cinco-cuencos", "Cinco cuencos con bolas de helado de colores en fila", "Courtney Cook", "66IZaW9LIpI"),
  "sacando-vainilla": p("sacando-vainilla", "Cuchara sacando helado de vainilla de una cubeta", "Leighann Blackwood", "-cQ2kQqpEB8"),
  "cucuruchos-arandanos": p("cucuruchos-arandanos", "Cucuruchos de helado con arándanos y flores", "Brooke Lark", "8beTH4VkhLI"),
  "galleta-y-nata": p("galleta-y-nata", "Helado de galleta y nata en cucurucho", "Icee Dc", "mwg8FwR_xvY"),
  "helado-azul-cono-negro": p("helado-azul-cono-negro", "Helado suave azul con virutas en cucurucho negro", "Anna Sullivan", "MIAsXONq_H4"),
  "helado-lavanda": p("helado-lavanda", "Helado suave de color lavanda en cucurucho", "Sophia Novita Angkadjaja", "CtqE2mUmEks"),
  "chocolate-sobre-vainilla": p("chocolate-sobre-vainilla", "Cucurucho con bola de chocolate sobre bola de vainilla", "Kyle Hinkson", "H75RvPCvkik"),
  "chocolate-sobre-gris": p("chocolate-sobre-gris", "Cucurucho con bola de chocolate sobre bola gris de sésamo", "Alexandra Tran", "_Ra3OMQgsoY"),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export function getPhoto(key: PhotoKey): Photo {
  return photos[key];
}
