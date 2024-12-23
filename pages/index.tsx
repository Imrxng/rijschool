import Head from "next/head";
import Header from "@/components/header";
import IntroHome from "@/components/IntroHome";
import InfoCardsHome from "@/components/InfoCardsHome";
import HomePhotoWithInfo from "@/components/HomePhotoWithInfo";
import Ervaringen from "@/components/ervaringen";
import Footer from "@/components/Footer";


export default function Home() {
  return (  
    <>
      <Head>
        <title>Rijschool Alpha</title>
        <Head>
        <title>Rijschool Alpha - De snelste weg naar je rijbewijs in Antwerpen</title>
        <meta name="description" content="Alpha Rijschool biedt betaalbare en flexibele rijlessen in Antwerpen. Hoog slagingspercentage, professionele instructeurs en moderne lesauto's." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="rijschool, rijlessen, rijbewijs, Antwerpen, rijinstructeur, autorijschool, praktijklessen, theorie-examen, automaatlessen, spoedcursus" />
        <meta name="author" content="Alpha Rijschool" />
        <meta property="og:title" content="Rijschool Alpha - De snelste weg naar je rijbewijs in Antwerpen" />
        <meta property="og:description" content="Alpha Rijschool biedt betaalbare en flexibele rijlessen in Antwerpen. Hoog slagingspercentage, professionele instructeurs en moderne lesauto's." />
        <meta property="og:image" content="/alpha-logo.png" />
        <meta property="og:url" content="https://www.alpharijschool.be" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rijschool Alpha - De snelste weg naar je rijbewijs in Antwerpen" />
        <meta name="twitter:description" content="Alpha Rijschool biedt betaalbare en flexibele rijlessen in Antwerpen. Hoog slagingspercentage, professionele instructeurs en moderne lesauto's." />
        <meta name="twitter:image" content="/alpha-logo.png" />
        <link rel="icon" href="./alpha-logo.png" />
        <link rel="canonical" href="https://www.alpharijschool.be" />
      </Head>
      </Head>
      <div>
        <Header/>
        <IntroHome/>
        <InfoCardsHome/>
        <HomePhotoWithInfo/>
        <Ervaringen/>
        <Footer/>
      </div>
    </>
  );
}
