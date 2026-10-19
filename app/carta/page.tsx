import type { Metadata } from "next";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { saboresTabs } from "@/data/sections";
import { CartaBoard } from "./CartaBoard";

export const metadata: Metadata = { title: "Carta", description: "Todos los sabores, precios, alérgenos y datos nutricionales." };

export default function CartaPage() {
  return (
    <>
      <SectionSubnav title="Carta" tabs={saboresTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">Precios, alérgenos y números</p>
          <h1 className="display-xl">El libro de recetas</h1>
          <p className="lead">Todo lo que sabemos de cada sabor, en una tabla. Filtra, ordena por lo que quieras y, si una sigla no te suena, abre el glosario.</p>
        </header>
        <CartaBoard />
      </div>
    </>
  );
}
