import React from 'react';
import CardHome from './CardHome';
import "@/styles/infoCardHome.component.css";
import { FaCarSide, FaRegCalendar } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { IoCall } from "react-icons/io5";


const InfoCardsHome = () => {
  return (
    <div id='infoCardsHome'>
        <CardHome title='Moderne Voertuigen' content="Leren rijden in veilige, comfortabele lesauto's van de nieuwste generatie." Icon={FaCarSide} color='red'/>
        <CardHome title='Gecertificeerde Instructeurs' content="Professionele begeleiding van ervaren en gediplomeerde rijinstructeurs." Icon={GiDiploma} color='blue'/>
        <CardHome title='Flexibele Planningen' content="Rijlessen volledig afgestemd op jouw agenda." Icon={FaRegCalendar} color='red'/>
        <CardHome title='Altijd Bereikbaar' content="Ondersteuning wanneer jij het nodig hebt, zeven dagen per week." Icon={IoCall} color='blue'/>
    </div>
  )
}

export default InfoCardsHome