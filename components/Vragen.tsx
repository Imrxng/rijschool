import React, { useState } from "react";

const Vragen = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      "question": "Kies ik best een M12 of een stageattest na het vervallen van mijn M18 of M36?",
      "answer": "Dat hangt van je persoonlijke situatie af. Heb je de luxe van een begeleider te hebben waarmee je nog kan oefenen, dan kies je best voor de M12. Heb je die luxe niet, dan is er een oplossing via een stageattest. Daarmee mag je enkel via de erkende rijschool rijden en examen(s) afleggen, ook al heb je geen echt voorlopig rijbewijs meer."
    },
    {
      "question": "Wat is een M12?",
      "answer": "De M12 kan beschouwd worden als een soort éénmalige verlenging van je voorlopig rijbewijs, met een periode van 12 maanden. De regels zijn hetzelfde als bij de M36: je mag enkel met begeleider oefenen. Of uiteraard met een coach van de rijschool. Maar niet alleen. De M12 kan verkregen worden nadat je 6 uur rijles hebt genomen na het vervallen van de geldigheid van je M36 of M18. Met de M12 mag je dus terug op rijexamen gaan, en je hoeft geen 5 maanden meer te wachten."
    },
    {
      "question": "In welke gevallen ben ik verplicht om 6 uur rijles te nemen?",
      "answer": "Wanneer je 2 keer opeenvolgend niet geslaagd bent voor je praktijkexamen. Dit wil zeggen dat je 6 uur moet hebben gevolgd alvorens je de 3e, 5e, 7e, 9e, 11e,... keer naar je praktijkexamen gaat. Ook na het vervallen van je voorlopig rijbewijs M36 of M18 moet je 6 uur rijles volgen om een M12 of stageattest aan te vragen."
    },
    {
      "question": "Tellen de 2 uur rijles vlak voor mijn rijexamen (pakket 2u + examen) mee voor het attest van 6 uur?",
      "answer": "Ja. Alle rijlessen tellen gedurende 3 jaar mee voor attesten."
    },
    {
      "question": "Geven jullie het terugkommoment?",
      "answer": "Neen."
    },
    {
      "question": "Geven jullie het vormingsmoment voor begeleiders?",
      "answer": "Neen."
    },
    {
      "question": "Hoeveel kost een rijles en een examenbegeleiding? Zijn er kortingen voor studenten of andere kortingen?",
      "answer": "Onze prijzen zijn te vinden op www.alpha-rijschool.be/contact. We werken niet met kortingen."
    },
    {
      "question": "Geven jullie momenteel theorielessen?",
      "answer": "Om te zien of we momenteel theorielessen geven, gaat u via www.alpha-rijschool.be/theorie. Als daar geen theorielessen zichtbaar zijn, dan geven we momenteel geen theorielessen."
    },
    {
      "question": "Wat is een stageattest?",
      "answer": "Een stageattest wordt soms ook 'bijlage 4' of 'certificaat van opleiding' genoemd. Het wordt gebruikt door kandidaten wiens voorlopig rijbewijs niet meer geldig is, en die geen begeleider vinden om een nieuw voorlopig rijbewijs aan te vragen (M12)."
    },
    {
      "question": "Hoe lang is mijn bekwaamheidsattest van 20u voor het behalen van M18 geldig?",
      "answer": "Alle rijschoollessen tellen mee voor rijschoolattesten, op voorwaarde dat deze maximum 3 jaar oud zijn."
    },
    {
      "question": "Mijn M18 is vervallen, kan ik een nieuwe M18 krijgen als ik terug 20 uur rijles volg?",
      "answer": "Ja, op voorwaarde dat er minimaal 3 jaar ligt tussen het einde van je vervallen M18 en het begin van je nieuwe M18."
    },
    {
      "question": "Mag ik direct na mijn 20u rijles al praktijkexamen afleggen?",
      "answer": "Indien u kan bewijzen dat u een voorlopig rijbewijs heeft én de verplichte minimum oefenperiode van 5 maanden achter de rug heeft, dan kan u deelnemen aan het praktijkexamen, na 20u rijles."
    },
    {
      "question": "Kies ik best altijd dezelfde instructeur voor mijn 20u rijles?",
      "answer": "Doorgaans is het een goed idee om toch zeker de eerste lessen bij dezelfde coach te volgen. Niet alleen voor u, maar ook voor de coach, die 'zijn' project graag tot het einde afwerkt. We adviseren om 70 - 80% van je lessen bij je 'basiscoach' te nemen."
    },
    {
      "question": "Is het examengeld inbegrepen bij de examenpakketten?",
      "answer": "Ja."
    },
    {
      "question": "Mag ik al rijles nemen als ik nog niet geslaagd ben voor de theorie?",
      "answer": "Ja. We raden wel aan om de theorie door te nemen alvorens je naar de rijles komt."
    },
    {
      "question": "Hoeveel lessen moet ik nemen?",
      "answer": "Dat hangt er van af in welke situatie u zich bevindt. U bent verplicht om 20u rijles te nemen indien u een voorlopig rijbewijs wenst te bekomen waarmee u alleen mag oefenen (M18)."
    },
    {
      "question": "Kan ik examen afleggen en les nemen in mijn eigen wagen?",
      "answer": "Nee, alle lessen en examens die u via onze rijschool neemt, worden afgelegd in de leswagen."
    }
  ]
  

  return (
    <>
      <div className="title-container">
        <h1>Veelgestelde vragen</h1>
      </div>
    <div className="faq-container">
      
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <li className="faq-item">
              <h2 onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className="icon">{activeIndex === index ? "-" : "+"}</span>
              </h2>
              {activeIndex === index && <p>{faq.answer}</p>}
            </li>
            {index < faqs.length - 1 && <hr className="faq-divider" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Vragen;
