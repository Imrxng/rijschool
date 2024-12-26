import React from "react";
import PraktijkCard from "@/components/PraktijkCard";
import { CiCircleInfo } from "react-icons/ci";

interface Pricing {
  automaat: number;
  schakel: number;
}

interface PraktijkData {
  title: string;
  subtitle: string;
  description: string;
  pricing: Pricing;
}

const praktijkData: PraktijkData[] = [
  {
    title: "20-Uur Pakket",
    subtitle: "Perfect voor beginnende bestuurders",
    description:
      "In 20 uren leer je alle basisvaardigheden van het autorijden, inclusief verkeersregels, voertuigcontrole en veilige rijtechnieken. Na voltooiing kom je in aanmerking voor een voorlopig rijbewijs (M18).",
    pricing: {
      automaat: 1350,
      schakel: 1250,
    },
  },
  {
    title: "6 uur 2x mislukt examen",
    subtitle: "Gericht op het verbeteren van je zwakke punten",
    description:
      "6 uren praktijkles voor wie 2 keer gezakt is. Gericht op het verbeteren van je zwakke punten voor een beter resultaat.",
    pricing: {
      automaat: 425,
      schakel: 400,
    },
  },
  {
    title: "M12 Voorlopig Rijbewijs Pakket",
    subtitle: "Behaal je M12 voorlopig rijbewijs",
    description:
      "Met 6 uren rijles kun je het M12 voorlopig rijbewijs behalen. Dit rijbewijs geeft je de mogelijkheid om verder te oefenen, zodat je je verder kunt voorbereiden op het uiteindelijke rijexamen.",
    pricing: {
      automaat: 425,
      schakel: 400,
    },
  },
  {
    title: "Losse Rijles (2 uur)",
    subtitle: "Extra oefening voor specifieke vaardigheden",
    description:
      "Wil je extra oefenen? Boek een losse rijles om specifieke vaardigheden te verbeteren of om meer ervaring op te doen op de weg.",
    pricing: {
      automaat: 140,
      schakel: 135,
    },
  },
];

const PraktijkCardsBox = () => {
  return (
    <>
      <div className="title-container">
        <h1 style={{ textAlign: "center" }}>Praktijk</h1>
      </div>
      <div className="flex-container">
        {praktijkData.map((item, index) => (
          <PraktijkCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            pricing={item.pricing}
          />
        ))}
        <div className="praktijk-info-box">
        <CiCircleInfo />
        <p>
          Bij elk pakket wordt er €25 inschrijvingskosten in rekening gebracht.
          Deze kosten dekken de administratieve verwerking van je inschrijving.
          Neem contact met ons op voor meer informatie of om je in te schrijven
          voor een pakket.
        </p>
      </div>
      </div>
    </>
  );
};

export default PraktijkCardsBox;
