import Footer from "@/components/Footer";
import Header from "@/components/header";
import Privacy from "@/components/Privacy";
import React from "react";
import Head from "next/head";

const Privacybeleid = () => {
  return (
    <>
      <Head>
        <title>Privacybeleid - Rijschool Alpha</title>
        <meta name="description" content="Lees het privacybeleid van Rijschool Alpha. Wij hechten veel waarde aan de bescherming van uw persoonsgegevens. Ontdek hoe wij uw gegevens veilig bewaren en gebruiken." />
        <meta name="keywords" content="privacybeleid, rijschool, persoonsgegevens, bescherming, gegevensbescherming" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Privacybeleid - Rijschool Alpha" />
        <meta property="og:description" content="Lees het privacybeleid van Rijschool Alpha. Wij hechten veel waarde aan de bescherming van uw persoonsgegevens." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be/privacybeleid" />
      </Head>
      <div>
        <Header />
        <Privacy />
        <Footer />
      </div>
    </>
  );
};

export default Privacybeleid;
