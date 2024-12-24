import Link from 'next/link';
import React from 'react'
import { FaCar } from "react-icons/fa";

const IntroHome = () => {
  return (
    <div id='introHome'>
        <h1>Welkom bij Alpha Rijschool</h1>
        <h2>Kies voor kwaliteit, kies voor zekerheid. Begin vandaag nog aan je rijavontuur met Rijschool Alpha</h2>
        <div id='introHomeButtons'>
            <Link href={"/contact"}> <button id='buttonLesson'>Boek een les</button></Link>
            <Link href={"/praktijk"}> <button id='buttonMoreInfo'>Meer informatie</button></Link>
        </div>
    </div>
  )
}

export default IntroHome
