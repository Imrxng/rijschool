import CardsTheorieInfo from "@/components/CardsTheorieInfo";
import Footer from "@/components/Footer";
import Geslaagden from "@/components/Geslaagden";
import Header from "@/components/header";
import InfoTheorie from "@/components/InfoTheorie";
import PakketTheorie from "@/components/PakketTheorie";
import React from "react";
import Head from "next/head";

const Theorie = () => {
  return (
    <>
      <Head>
        <title>Theorie - Rijschool Alpha</title>
        <meta name="description" content="Leer de theorie voor je rijbewijs bij Rijschool Alpha. Bekijk onze pakketten en slaag voor je theorie-examen. Wij bieden uitgebreide theoriecursussen en oefenexamens aan." />
        <meta name="keywords" content="rijschool, theorie, rijbewijs, theorie-examen, rijlessen, theoriecursus, oefenexamens" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Theorie - Rijschool Alpha" />
        <meta property="og:description" content="Leer de theorie voor je rijbewijs bij Rijschool Alpha. Bekijk onze pakketten en slaag voor je theorie-examen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be/theorie" />
      </Head>
      <div>
        <Header />
        <PakketTheorie />
        <CardsTheorieInfo />
        <InfoTheorie />
        <Geslaagden />
        <Footer />
      </div>
    </>
  );
};

export default Theorie;
