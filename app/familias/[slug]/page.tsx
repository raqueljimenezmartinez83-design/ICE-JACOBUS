import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { FlavorTable } from "@/components/DataTable/FlavorTable";
import { familyArt } from "@/components/FamilyCard/FamilyCard";
import { FlavorArt } from "@/components/FlavorArt/FlavorArt";
import { FlavorCard } from "@/components/FlavorCard/FlavorCard";
import { ProfileHeader } from "@/components/ProfileHeader/ProfileHeader";
import { SectionBlock } from "@/components/SectionBlock/SectionBlock";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { Sticker } from "@/components/Sticker/Sticker";
import { familyStats } from "@/data/familyStats";
import { families, getFamily } from "@/data/families";
import { flavorsByFamily, formatPrice } from "@/data/flavors";
import { familiasTabs } from "@/data/sections";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return families.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const family = getFamily((await params).slug);
  return family ? { title: family.name, description: family.tagline } : {};
}

export default async function FamiliaPage({ params }: Params) {
  const family = getFamily((await params).slug);
  if (!family) notFound();
  const stats = familyStats(family.slug);
  const list = flavorsByFamily(family.slug);

  return (
    <>
      <SectionSubnav title="Familias" tabs={familiasTabs} />

      <ProfileHeader
        color={family.color}
        eyebrow={<Sticker variant="plain">FAMILIA</Sticker>}
        title={family.name}
        subtitle={family.description}
        art={<FlavorArt {...familyArt[family.slug]} variant="double" />}
        actions={
          <>
            <Button href="/hoy">Qué hay hoy</Button>
            <Button href="/carta" variant="outline">
              Ver la carta
            </Button>
          </>
        }
        stats={[
          { label: "Sabores", value: stats.count },
          { label: "Veganos", value: stats.vegan },
          { label: "Sin gluten", value: stats.glutenFree },
          { label: "Bola media", value: formatPrice(stats.avgScoop) },
          { label: "Queda poco", value: stats.low },
          { label: "Desde", value: family.since },
        ]}
      />

      <div className="container">
        <SectionBlock title="La plantilla" eyebrow={`Familia ${family.name}`}>
          <FlavorTable
            caption={`Sabores de la familia ${family.name}`}
            flavors={list}
            columns={["name", "scoop", "double", "tub", "intensity", "kcal", "allergens", "vegan", "since", "status"]}
            initialSort={{ key: "since", dir: "desc" }}
          />
        </SectionBlock>

        <SectionBlock title="En vitrina" eyebrow={family.tagline} action={{ label: "Todos los sabores", href: "/sabores" }}>
          <ul className="card-grid">
            {list.map((f) => (
              <li key={f.slug}>
                <FlavorCard flavor={f} fluid />
              </li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </>
  );
}
