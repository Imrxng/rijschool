import Footer from "@/components/Footer";
import Header from "@/components/header";
import Voorwaarden from "@/components/Voorwaarden";
import React from "react";
import Head from "next/head";

const AlgemeneVoorwaarden = () => {
  return (
    <>
      <Head>
        <title>Algemene Voorwaarden - Rijschool Alpha</title>
        <meta name="description" content="Lees de algemene voorwaarden van Rijschool Alpha. Wij informeren je graag over onze voorwaarden en regels. Bekijk onze voorwaarden voor rijlessen en pakketten." />
        <meta name="keywords" content="algemene voorwaarden, rijschool, regels, voorwaarden, rijlessen, pakketten" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Algemene Voorwaarden - Rijschool Alpha" />
        <meta property="og:description" content="Lees de algemene voorwaarden van Rijschool Alpha. Wij informeren je graag over onze voorwaarden en regels." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be/algemene-voorwaarden" />
        <meta property="og:image" content="https://www.alpharijschool.be/images/algemene-voorwaarden.jpg" />
      </Head>
      <div>
        <Header />
        <Voorwaarden />
        <Footer />
      </div>
    </>
  );
};

export default AlgemeneVoorwaarden;
