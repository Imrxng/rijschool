import React from 'react';
import CardHome from './CardHome';
import { FiPhone } from "react-icons/fi";
import { LiaCarSideSolid } from "react-icons/lia";
import { PiMedal } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa";


const InfoCardsHome = () => {
  return (
    <div id='infoCardsHome'>
        <CardHome title='Moderne Lesvoertuigen' content="Leren rijden in veilige, comfortabele lesauto's van de nieuwste generatie." Icon={LiaCarSideSolid} color='red'/>
        <CardHome title='Gecertificeerde Instructeurs' content="Professionele begeleiding van ervaren en gediplomeerde rijinstructeurs." Icon={PiMedal} color='blue'/>
        <CardHome title='Flexibele Planningen' content="Rijlessen volledig afgestemd op jouw agenda." Icon={FaRegCalendar} color='red'/>
        <CardHome title='Altijd Bereikbaar' content="Ondersteuning wanneer jij het nodig hebt, zeven dagen per week." Icon={FiPhone} color='blue'/>
    </div>
  )
}

export default InfoCardsHome