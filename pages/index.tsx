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
        <meta name="description" content="Welkom bij Rijschool Alpha. De beste rijschool voor theorie- en praktijklessen. Slaag voor je rijbewijs met onze ervaren instructeurs. Bekijk onze pakketten en tarieven." />
        <meta name="keywords" content="rijschool, rijlessen, rijbewijs, theorie, praktijk, instructeurs, pakketten, tarieven" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Rijschool Alpha" />
        <meta property="og:description" content="Welkom bij Rijschool Alpha. De beste rijschool voor theorie- en praktijklessen. Slaag voor je rijbewijs met onze ervaren instructeurs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be" />
        <meta property="og:image" content="https://www.alpharijschool.be/images/home.jpg" />
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
