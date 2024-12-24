import React from 'react'
import { LiaCarSideSolid } from "react-icons/lia";
import { FiTarget } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import OverOnsKiesOnsItem from './OverOnsKiesOnsItem';

const OverOnsKiesOns = () => {
  return (
    <div id='kiesOns'>   
        <h2>Waarom kiezen voor Alpha Rijschool?</h2>
        <OverOnsKiesOnsItem title='Moderne Lesvoertuigen' content="Je leert rijden in goed onderhouden, moderne auto's voorzien van alle veiligheidsvoorzieningen." Icon={LiaCarSideSolid} color='red'/>
        <OverOnsKiesOnsItem title='Doelgerichte Aanpak' content="We werken systematisch aan je rijvaardigheid met een duidelijk stappenplan." Icon={FiTarget} color='red'/>
        <OverOnsKiesOnsItem title='Uitgebreid Lesmateriaal' content="We bieden moderne leermiddelen en duidelijke theoriematerialen voor optimale voorbereiding." Icon={GoBook} color='blue'/>
        <OverOnsKiesOnsItem title='Klanttevredenheid' content="Onze leerlingen waarderen onze persoonlijke benadering en professionele begeleiding." Icon={BiLike} color='blue'/>
    </div>
  )
}

export default OverOnsKiesOns