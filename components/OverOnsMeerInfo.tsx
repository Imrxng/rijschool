import Link from 'next/link'
import React from 'react'

const OverOnsMeerInfo = () => {
  return (
    <div id='OverOnsMeerInfo'>
        <h1>Klaar om te beginnen?</h1>
        <p>Neem vandaag nog contact met ons op en start je reis naar het behalen van je rijbewijs.</p>
        <div id='OverOnsMeerInfo-buttons'>
            <Link href={"/contact"}> <button id='left-button'>Contact opnemen</button></Link>
            <Link href={"/praktijk"}> <button id='right-button'>Meer informatie</button></Link>
        </div>
    </div>
  )
}

export default OverOnsMeerInfo