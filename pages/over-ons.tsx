import Footer from '@/components/Footer';
import Header from '@/components/header';
import OverOnsCards from '@/components/OverOnsCards';
import OverOnsIntro from '@/components/OverOnsIntro';
import OverOnsKiesOns from '@/components/OverOnsKiesOns';
import OverOnsMeerInfo from '@/components/OverOnsMeerInfo';
import React from 'react'
import Head from "next/head";

const OverOns = () => {
  return (
    <>
      <Head>
        <title>Over Ons - Rijschool Alpha</title>
        <meta name="description" content="Leer meer over Rijschool Alpha. Ontdek waarom wij de beste keuze zijn voor jouw rijopleiding. Wij bieden professionele rijlessen en persoonlijke begeleiding." />
        <meta name="keywords" content="rijschool, over ons, rijopleiding, beste keuze, professionele rijlessen, persoonlijke begeleiding" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Over Ons - Rijschool Alpha" />
        <meta property="og:description" content="Leer meer over Rijschool Alpha. Ontdek waarom wij de beste keuze zijn voor jouw rijopleiding." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be/over-ons" />
        <meta property="og:image" content="https://www.alpharijschool.be/images/over-ons.jpg" />
      </Head>
      <div>
        <Header/>
        <OverOnsIntro/>
        <OverOnsCards/>
        <OverOnsKiesOns/>
        <OverOnsMeerInfo/>
        <Footer/>
      </div>
    </>
  )
}

export default OverOns;