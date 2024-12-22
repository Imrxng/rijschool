import Link from 'next/link';
import React from 'react'
import { FaCar } from "react-icons/fa";

const IntroHome = () => {
  return (
    <div id='introHome'>
        <h1>Alpha Rijschool</h1>
        <FaCar />
        <h2>De snelste weg naar je rijbewijs!</h2>
        <div id='introHomeButtons'>
            <Link href={"/contact"}> <button id='buttonLesson'>Boek een les</button></Link>
            <Link href={"/praktijk"}> <button id='buttonMoreInfo'>Meer info</button></Link>
        </div>
    </div>
  )
}

export default IntroHome
