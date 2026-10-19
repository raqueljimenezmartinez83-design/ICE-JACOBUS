import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Carousel } from "@/components/Carousel/Carousel";
import { Checkerboard } from "@/components/Checkerboard/Checkerboard";
import { FlavorArt } from "@/components/FlavorArt/FlavorArt";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { HeadlineList } from "@/components/HeadlineList/HeadlineList";
import { HeroRotator } from "@/components/HeroRotator/HeroRotator";
import { ProfileHeader } from "@/components/ProfileHeader/ProfileHeader";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { Sticker } from "@/components/Sticker/Sticker";
import { StoryCard } from "@/components/StoryCard/StoryCard";
import { TodayBoard } from "@/components/TodayBoard/TodayBoard";
import { VideoCard } from "@/components/VideoCard/VideoCard";
import { families } from "@/data/families";
import { flavors, formatPrice } from "@/data/flavors";
import { headlines, heroSlides, stories, videos } from "@/data/media";
import { InteractiveDemos } from "./InteractiveDemos";
import styles from "./sistema.module.css";

export const metadata: Metadata = { title: "Sistema de diseño" };

const colors = [
  { token: "--bone", hex: "#f4efe2", use: "Fondo de página (abedul claro)" },
  { token: "--obsidian", hex: "#1c1625", use: "Texto, bloques oscuros, bordes" },
  { token: "--stone-dark", hex: "#57525c", use: "Texto secundario sobre bone" },
  { token: "--grass", hex: "#6abe30", use: "Marca y CTA. Nunca como texto" },
  { token: "--gold", hex: "#fcd240", use: "NUEVO, destacados. Solo fondo" },
  { token: "--diamond", hex: "#4fe3e6", use: "Activo, foco, temporada. Solo fondo o anillo" },
  { token: "--redstone", hex: "#b8322a", use: "EN DIRECTO. Texto bone encima" },
  { token: "--leaf", hex: "#cfe9b8", use: "Tarjetas, secciones, bioma frutal" },
  { token: "--amethyst", hex: "#ddd1f6", use: "Tarjetas alternas, información" },
  { token: "--sand", hex: "#f3dcae", use: "Avisos suaves, bloques de crema" },
  { token: "--dirt", hex: "#8b5a3c", use: "Solo textura (franja de hierba)" },
];

const type = [
  { cls: "display-xl", name: "display-xl", spec: "Pixelify Sans · 72/0.95 · 700 (48 en móvil)", sample: "Recién minados" },
  { cls: "display-l", name: "display-l", spec: "Pixelify Sans · 40/44 · 700 (32 en móvil)", sample: "Elige tu bioma" },
  { cls: "display-s", name: "display-s", spec: "Pixelify Sans · 28/32 · subnavegación", sample: "Carta" },
  { cls: "heading", name: "heading", spec: "Nunito · 22/28 · 700 · −0.01em", sample: "Bloque de pistacho" },
  { cls: "body", name: "body", spec: "Nunito · 16/24 · 400", sample: "Pistacho siciliano tostado. Verde como la hierba, sin colorante." },
  { cls: "caption", name: "caption", spec: "Nunito · 13/18 · 500", sample: "Contiene: leche, frutos secos · 16 oct 2026" },
  { cls: "label", name: "label", spec: "Space Mono · 12/16 · 700 · 0.08em · MAYÚSCULAS", sample: "Pizarra de hoy" },
  { cls: "price", name: "price", spec: "Space Mono · 18/24 · 700", sample: formatPrice(3.2) },
];

const spaces = ["--space-1", "--space-2", "--space-4", "--space-8"];
const radii = [
  { token: "--radius-none", use: "Todo es cuadrado" },
  { token: "--radius-md", use: "0: tarjetas de sabor también en bloque" },
  { token: "--radius-pill", use: "0: botones y stickers en bloque" },
];

const toc = [
  ["color", "Color"],
  ["tipografia", "Tipografía"],
  ["espacio", "Espacio y forma"],
  ["patron", "Textura"],
  ["basicos", "Básicos"],
  ["tarjetas", "Tarjetas"],
  ["navegacion", "Navegación"],
  ["datos", "Datos"],
  ["cabeceras", "Cabeceras"],
] as const;

export default function SistemaPage() {
  return (
    <>
      <SectionSubnav
        title="Sistema"
        tabs={toc.map(([id, label]) => ({ href: `/sistema#${id}`, label }))}
        active="/sistema#color"
      />

      <div className="container">
        <header className={styles.intro}>
          <p className="label">Jacous Ice Cream · v2 · Tema Bloques</p>
          <h1 className="display-xl">Sistema de diseño</h1>
          <p className={styles.lead}>
            Todo lo que ves en la web sale de aquí. Si un color, un tamaño o una sombra no está en <code>app/tokens.css</code>, no existe.
          </p>
        </header>

        <SectionBlock id="color" title="Color" eyebrow="Tema Bloques">
          <ul className={styles.swatches}>
            {colors.map((c) => (
              <li key={c.token} className={styles.swatch}>
                <div className={styles.chip} style={{ background: `var(${c.token})` } as CSSProperties} />
                <div className={styles.swatchInfo}>
                  <p className="label">{c.token}</p>
                  <p className="caption">{c.hex}</p>
                  <p className="caption muted">{c.use}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.rules}>
            <div className={styles.ruleOk}>
              <Sticker variant="new">SÍ</Sticker>
              <p>Un acento (hierba, oro o diamante) y un tono claro por composición, sobre bone y con texto obsidiana.</p>
            </div>
            <div className={styles.ruleOk}>
              <Sticker variant="new">SÍ</Sticker>
              <p>Sobre obsidiana y redstone, el texto es bone.</p>
            </div>
            <div className={styles.ruleNo}>
              <Sticker variant="ink">NO</Sticker>
              <p>Hierba, oro o diamante como color de texto. Texto claro sobre un acento. Dos acentos tocándose sin un borde de obsidiana.</p>
            </div>
          </div>
          <div className={styles.contrast}>
            <p className="label">Contraste (WCAG)</p>
            <ul className={styles.contrastList}>
              <li><span className={styles.pairInk}>obsidiana / bone</span> 15,4:1</li>
              <li><span className={styles.pairMuted}>stone-dark / bone</span> 6,6:1</li>
              <li><span className={styles.pairPink}>obsidiana / hierba</span> 7,6:1</li>
              <li><span className={styles.pairCream}>bone / stone-dark</span> 6,6:1 (sticker AGOTADO)</li>
              <li><span className={styles.pairRed}>bone / redstone</span> 5,2:1 (EN DIRECTO)</li>
              <li><span className={styles.grassText}>hierba / bone</span> 2,0:1 → nunca como texto</li>
            </ul>
          </div>
        </SectionBlock>

        <SectionBlock id="tipografia" title="Tipografía">
          <ul className={styles.typeList}>
            {type.map((t) => (
              <li key={t.name} className={styles.typeRow}>
                <div className={styles.typeMeta}>
                  <p className="label">{t.name}</p>
                  <p className="caption muted">{t.spec}</p>
                </div>
                <p className={t.cls}>{t.sample}</p>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="espacio" title="Espacio y forma">
          <div className={styles.grid3}>
            <div className={styles.panel}>
              <p className="label">Espaciado</p>
              <ul className={styles.spaceList}>
                {spaces.map((s) => (
                  <li key={s} className={styles.spaceRow}>
                    <span className={styles.spaceBar} style={{ width: `var(${s})` } as CSSProperties} />
                    <span className="caption">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.panel}>
              <p className="label">Radios</p>
              <ul className={styles.radiusList}>
                {radii.map((r) => (
                  <li key={r.token} className={styles.radiusRow}>
                    <span className={styles.radiusBox} style={{ borderRadius: `var(${r.token})` } as CSSProperties} />
                    <span>
                      <span className="caption">{r.token}</span>
                      <br />
                      <span className="caption muted">{r.use}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.panel}>
              <p className="label">Borde y sombra</p>
              <div className={styles.shadowBox}>
                <p className="caption">--border: 3px obsidiana</p>
                <p className="caption">--shadow-hard: 4px 4px 0 obsidiana</p>
                <p className="caption">--bevel: luz arriba-izquierda, sombra abajo-derecha</p>
              </div>
              <p className="caption muted">Nada de sombras difuminadas ni degradados.</p>
              <p className="label">Foco</p>
              <button type="button" className={styles.focusDemo}>
                Anillo diamante 3px + 2px
              </button>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="patron" title="Textura de bloque">
          <div className={styles.grid3}>
            {(["mint", "lavender", "peach"] as const).map((c) => (
              <figure key={c} className={styles.checkerFig}>
                <div className={styles.checkerSample}>
                  <Checkerboard color={c} variant="block" />
                </div>
                <figcaption className="caption">Textura {c === "mint" ? "leaf" : c === "lavender" ? "amethyst" : "sand"} · píxeles de 4px</figcaption>
              </figure>
            ))}
          </div>
          <figure className={styles.checkerFig}>
            <Checkerboard variant="strip" />
            <figcaption className="caption">Franja de bloque de hierba: bajo el hero y encima del footer</figcaption>
          </figure>
          <p className="caption muted">Las texturas claras van en el fondo del hero y como placeholder de imagen.</p>
        </SectionBlock>

        <SectionBlock id="basicos" title="Básicos" eyebrow="Button · Sticker · Toggle · DayPicker · FilterBar · Tabs">
          <div className={styles.row}>
            <Button>Club Jacous</Button>
            <Button variant="outline">Ver la carta</Button>
            <Button size="sm">Pequeño</Button>
            <Button disabled>Desactivado</Button>
            <div className={styles.inkBox}>
              <Button variant="ghost">Ghost sobre ink</Button>
            </div>
          </div>
          <div className={styles.row}>
            <Sticker>NUEVO</Sticker>
            <Sticker>QUEDA POCO</Sticker>
            <Sticker>AGOTADO</Sticker>
            <Sticker>TEMPORADA</Sticker>
            <Sticker>VEGANO</Sticker>
            <Sticker>SIN GLUTEN</Sticker>
            <Sticker>● EN DIRECTO</Sticker>
            <Sticker variant="ink">3:12</Sticker>
          </div>
          <InteractiveDemos />
        </SectionBlock>

        <SectionBlock id="tarjetas" title="Tarjetas" eyebrow="FlavorCard · VideoCard · StoryCard · HeadlineList">
          <p className="label">FlavorCard, una por familia (dentro de Carousel)</p>
          <Carousel label="Ejemplos de tarjetas de sabor">
            {families.map((fam) => {
              const f = flavors.find((x) => x.family === fam.slug && x.status !== "ok") ?? flavors.find((x) => x.family === fam.slug)!;
              return <FlavorCard key={f.slug} flavor={f} />;
            })}
            {flavors
              .filter((f) => f.tags.includes("NUEVO"))
              .map((f) => (
                <FlavorCard key={f.slug} flavor={f} />
              ))}
          </Carousel>
          <div className={styles.cardsRow}>
            <VideoCard video={videos[0]} />
            <StoryCard story={stories[0]} />
            <div className={styles.headlines}>
              <HeadlineList items={headlines.slice(0, 4)} more={{ label: "Ver todo", href: "/fanzine" }} />
            </div>
          </div>
          <p className="label">Ilustraciones</p>
          <div className={styles.artRow}>
            <FlavorArt scoop="mint" topping="ink" title="Cucurucho de pistacho" />
            <FlavorArt scoop="lavender" topping="ink" variant="double" title="Doble bola" />
            <FlavorArt scoop="peach" variant="cup" title="Tarrina" />
            <FlavorArt scoop="ink" topping="cream" title="Cucurucho de chocolate" />
          </div>
        </SectionBlock>
      </div>

      <section id="navegacion" className={styles.fullBleed} aria-label="Navegación">
        <div className="container">
          <SectionBlock title="Navegación" eyebrow="Header (arriba) · SectionSubnav · TodayBoard · HeroRotator">
            <p className="caption muted">El Header es el de esta misma página. Debajo, la pizarra y el hero a ancho completo.</p>
          </SectionBlock>
        </div>
        <TodayBoard flavors={flavors.slice(0, 10)} date="Lunes 19 oct" />
        <HeroRotator slides={heroSlides} headingLevel="h2" />
      </section>

      <div className="container">
        <SectionBlock id="datos" title="Datos" eyebrow="DataTable · columna ordenada en lavanda · primera columna fija">
          <InteractiveDemos table />
        </SectionBlock>
      </div>

      <section id="cabeceras" aria-label="Cabeceras de ficha">
        <div className="container">
          <SectionBlock title="Cabeceras" eyebrow="ProfileHeader · el pastel de la familia tiñe la cabecera">
            <span />
          </SectionBlock>
        </div>
        <div className={styles.profileDemo}>
          <ProfileHeader
            headingLevel="h2"
            color={families[0].color}
            eyebrow={
              <>
                <Sticker variant="plain">CREMAS</Sticker>
                <Sticker>QUEDA POCO</Sticker>
              </>
            }
            title="Pistacho de Bronte"
            subtitle="Pistacho siciliano tostado. Sin colorante: es verde porque sí."
            art={<FlavorArt scoop="mint" topping="ink" />}
            stats={[
              { label: "Bola", value: formatPrice(3.2) },
              { label: "Tarrina", value: formatPrice(9.5) },
              { label: "Intensidad", value: "5/5" },
              { label: "Alérgenos", value: "2" },
              { label: "Familia", value: "Cremas" },
              { label: "Desde", value: "2016" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
