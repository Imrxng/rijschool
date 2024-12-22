import React from 'react'
import { IconType } from 'react-icons';

interface CardHomeProps { 
    title: string;
    Icon: IconType;
    content: string;
    color: string;
}

const CardHome = ({title, Icon, content, color} : CardHomeProps) => {
  return (
    <div className='cardHome' >
        <div>
            <Icon id='iconCardHome' style={{color: color === "red" ? "#ED1C24" : "#111827"}}/>
            <h3>{title}</h3>
        </div>
        <p>{content}</p>
    </div>
  );
}

export default CardHome;