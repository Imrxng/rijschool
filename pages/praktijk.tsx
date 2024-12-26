import Footer from '@/components/Footer'
import Geslaagden from '@/components/Geslaagden'
import Header from '@/components/header'
import PraktijkCardsBox from '@/components/PraktijkCardsBox'
import React from 'react'
import Head from "next/head";

const Praktijk = () => {
  return (
    <>
      <Head>
        <title>Praktijk - Rijschool Alpha</title>
        <meta name="description" content="Volg praktijklessen bij Rijschool Alpha en slaag voor je rijexamen. Bekijk onze geslaagden en praktijkpakketten. Onze ervaren instructeurs helpen je veilig en zelfverzekerd de weg op." />
        <meta name="keywords" content="rijschool, praktijklessen, rijexamen, rijbewijs, geslaagden, rijinstructeurs, praktijkpakketten" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Praktijk - Rijschool Alpha" />
        <meta property="og:description" content="Volg praktijklessen bij Rijschool Alpha en slaag voor je rijexamen. Bekijk onze geslaagden en praktijkpakketten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be/praktijk" />
      </Head>
      <div>
        <Header />
        <PraktijkCardsBox />
        <Geslaagden />
        <Footer />
      </div>
    </>
  )
}

export default Praktijk