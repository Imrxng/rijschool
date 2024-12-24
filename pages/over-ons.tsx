import Footer from '@/components/Footer';
import Header from '@/components/header';
import OverOnsCards from '@/components/OverOnsCards';
import OverOnsIntro from '@/components/OverOnsIntro';
import OverOnsKiesOns from '@/components/OverOnsKiesOns';
import OverOnsMeerInfo from '@/components/OverOnsMeerInfo';
import React from 'react'

const OverOns = () => {
  return (
    <div>
        <Header/>
        <OverOnsIntro/>
        <OverOnsCards/>
        <OverOnsKiesOns/>
        <OverOnsMeerInfo/>
        <Footer/>
    </div>
  )
}

export default OverOns;