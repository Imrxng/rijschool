import React from 'react'
import "@/styles/Ervaringen.component.css";
import { FaStar } from "react-icons/fa";

const Ervaringen = () => {
  return (
    <div>
        <h2>Ervaringen</h2>
        <div className='ervaringBox'>
            <div className='ervaring'>
                <div className='stars'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h3>John Doe</h3>
                <p>Geweldige rijschool! De instructeurs zijn zeer professioneel en geduldig. Ik voelde me altijd op mijn gemak tijdens de lessen.</p>
            </div>
            <div className='ervaring'>
                <div className='stars'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h3>Jane Smith</h3>
                <p>Ik heb veel geleerd en mijn rijvaardigheden zijn enorm verbeterd. De flexibele planningen waren perfect voor mijn drukke schema.</p>
            </div>
        </div>
    </div>
  )
}

export default Ervaringen;