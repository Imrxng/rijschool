import React from "react";

const HomePhotoWithInfo = () => {
  return (
    <div id="homePhotoWithInfo">
      <img src="./sfeerbeeldHome.webp" alt="Alpha rijschool" />
      <div>
        <RijschoolIntro />
        <Voordelen />
      </div>
    </div>
  );
};

const RijschoolIntro = () => {
  return (
    <section className="rijschool-intro">
      <h1>De snelste weg naar je rijbewijs in Antwerpen</h1>
      <p>
        Ben je op zoek naar een betrouwbare en kwalitatieve rijschool in
        Antwerpen? Wij helpen je om op een effectieve, betaalbare en plezierige
        manier je rijbewijs te behalen!
      </p>
    </section>
  );
};

const Voordelen = () => {
  return (
    <section className="voordelen">
      <h2>Waarom kiezen voor ons?</h2>
      <ul>
        <li>
          <strong>Betaalbare en flexibele rijlessen</strong> in Antwerpen en
          omliggende regio's
        </li>
        <li>
          <strong>Hoog slagingspercentage</strong>, dankzij onze gestructureerde
          aanpak
        </li>
        <li>
          <strong>Rijopleiding op maat</strong>, afgestemd op jouw tempo en
          behoeften
        </li>
        <li>
          Mogelijkheid voor <strong>automaatlessen</strong>,{" "}
          <strong>spoedcursussen</strong> en extra oefensessies
        </li>
        <li>
          <strong>Professionele en geduldige rijinstructeurs</strong>, inclusief
          keuze voor een vaste of vrouwelijke instructeur
        </li>
        <li>
          Leren rijden in een{" "}
          <strong>moderne, milieuvriendelijke lesauto</strong>
        </li>
        <li>
          Rijlessen op <strong>flexibele tijden</strong>, ook in de avonduren en
          het weekend
        </li>
        <li>
          <strong>Gespreid betalen</strong> zonder extra kosten
        </li>
        <li>
          Complete ondersteuning voor zowel praktijk als{" "}
          <strong>theorie-examen</strong>
        </li>
      </ul>
    </section>
  );
};

export default HomePhotoWithInfo;
