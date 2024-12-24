import Footer from '@/components/Footer';
import Header from '@/components/header';
import OverOnsCards from '@/components/OverOnsCards';
import OverOnsIntro from '@/components/OverOnsIntro';
import React from 'react'

const OverOns = () => {
  return (
    <div>
        <Header/>
        <OverOnsIntro/>
        <OverOnsCards/>
        <Footer/>
    </div>
  )
}

export default OverOns;