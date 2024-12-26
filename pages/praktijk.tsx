import Footer from '@/components/Footer'
import Geslaagden from '@/components/Geslaagden'
import Header from '@/components/header'
import React from 'react'

const Praktijk = () => {
  return (
    <div>
        <Header />
        <div className="title-container">
          <h1 style={{textAlign: "center"}}>Praktijk</h1>
        </div>
        <Geslaagden />
        <Footer />
    </div>
  )
}

export default Praktijk