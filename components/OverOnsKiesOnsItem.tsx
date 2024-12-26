import React from "react";
import { IconType } from "react-icons";

interface OverOnsKiesOnsItemProps {
  title: string;
  Icon: IconType;
  content: string;
  color: string;
}

const OverOnsKiesOnsItem = ({title, Icon, content, color} : OverOnsKiesOnsItemProps) => {
  return (
    <div className="kies-ons-item">
        <Icon id='iconCardHome' style={{color: color === "red" ? "#ED1C24" : "#111827"}}/>
        <div>
        <h3>{title}</h3>
        <p>
          {content}
        </p>
      </div>
    </div>
  );
};

export default OverOnsKiesOnsItem;
