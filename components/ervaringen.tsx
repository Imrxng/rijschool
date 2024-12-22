import React from 'react'
import "@/styles/Ervaringen.component.css";
import { FaStar } from "react-icons/fa";

const Ervaringen = () => {
  return (
    <div className='reviews-container'>
        <h2 className='reviews-title'>ERVARINGEN</h2>
        <div className='reviews-list'>
            <div className='review-item'>
                <div className='stars'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h3>John Doe</h3>
                <p>Geweldige rijschool! De instructeurs zijn zeer professioneel en geduldig. Ik voelde me altijd op mijn gemak tijdens de lessen.</p>
            </div>
            <div className='review-item'>
                <div className='stars'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h3>Jane Smith</h3>
                <p>Ik heb veel geleerd en mijn rijvaardigheden zijn enorm verbeterd. De flexibele planningen waren perfect voor mijn drukke schema.</p>
            </div>
            <div className='review-item'>
                <div className='stars'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h3>Michael Brown</h3>
                <p>De lessen waren altijd leuk en leerzaam. Ik heb mijn rijbewijs in één keer gehaald dankzij deze rijschool.</p>
            </div>
            <div className='review-item'>
                <div className='stars'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h3>Emily Davis</h3>
                <p>Uitstekende rijschool met geweldige instructeurs. Ze hebben me echt geholpen om zelfverzekerd te worden achter het stuur.</p>
            </div>
        </div>
    </div>
  )
}

export default Ervaringen;