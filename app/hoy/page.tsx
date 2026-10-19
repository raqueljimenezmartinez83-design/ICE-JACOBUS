import type { Metadata } from "next";
import { SectionSubnav } from "@/components/SectionSubnav/SectionSubnav";
import { saboresTabs } from "@/data/sections";
import { HoyBoard } from "./HoyBoard";

export const metadata: Metadata = { title: "Hoy", description: "Los sabores que hay hoy en la vitrina de Jacous." };

export default function HoyPage() {
  return (
    <>
      <SectionSubnav title="Hoy" tabs={saboresTabs} />
      <div className="container">
        <header className="page-intro">
          <p className="label">Pizarra en directo · C/ Nueva 23, Elda</p>
          <h1 className="display-xl">Lo que hay en el cofre</h1>
          <p className="lead">Lo que hay en la vitrina, lo que se agota y lo que reaparece. Elige día y mira qué te espera.</p>
        </header>
        <HoyBoard />
      </div>
    </>
  );
}
