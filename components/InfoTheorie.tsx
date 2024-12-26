import Link from "next/link";
import React from "react";

const InfoTheorie = () => {
  return (
    <div className="privacy-container centerContainer bg-theorie-second-white">
      <div className="pakket-theorie-card">
        <div className="pakket-theorie-header">
          <h3 className="pakket-theorie-heading">Theorie Attest</h3>
        </div>
        <div className="pakket-theorie-body info-theorie-body">
          <p>
            Ben je 2 keer niet geslaagd voor het theorie-examen? Dan moet je de
            verplichte 12 uur theorielessen volgen. Bij Rijschool Alpha ben je
            op het juiste adres om te slagen voor je theorie-examen.
          </p>
          <p>
            Tijdens onze 12 uur theorieles (verdeeld over 2 dagen) leer je op
            een leuke, gemakkelijk te begrijpen manier alle theoriestof die
            nodig is om te kunnen slagen.
          </p>
          <br />
          <Link href="/contact">
            <button className="pakket-theorie-button">Schrijf je nu in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoTheorie;
