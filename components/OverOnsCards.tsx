import React from 'react'
import CardHome from './CardHome'
import { FaRegClock  } from "react-icons/fa";
import { LuShield } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { PiMedal } from "react-icons/pi";

const OverOnsCards = () => {
  return (
    <div id='infoCardsHome' style={{backgroundColor: 'white'}}>
        <CardHome title='Gecertificeerde Expertise' Icon={LuShield} content='Onze instructeurs zijn volledig gecertificeerd en hebben jarenlange ervaring in het verkeer en het lesgeven.' color='red'/>
        <CardHome title='Flexibele Planning' Icon={FaRegClock } content='Lessen worden ingepland op momenten die jou het beste uitkomen, ook in de avonduren en weekenden.' color=''/>
        <CardHome title='Persoonlijke Aanpak' Icon={GoPeople} content='Iedere leerling is anders. Wij passen onze lesmethode aan op jouw tempo en leerstijl.' color='red'/>
        <CardHome title='Hoog Slagingspercentage' Icon={PiMedal} content='Dankzij onze gedegen voorbereiding hebben onze leerlingen een bovengemiddeld slagingspercentage.' color=''/>
    </div>
  )
}

export default OverOnsCards