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
