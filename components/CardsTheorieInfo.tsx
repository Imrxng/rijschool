import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CardsTheorieInfo = () => {
  return (
    <div className="privacy-container centerContainer">
      <div className="pakket-theorie-card bg-theorie-second-white">
        <div className="pakket-theorie-header">
          <h1 style={{ fontSize: "1.5rem" }} className="pakket-theorie-heading">
            Waarom Theorie bij Rijschool Alpha?
          </h1>
        </div>
        <div className="pakket-theorie-body">
          <div className="TheorieInfoText">
            <IoMdCheckmarkCircleOutline />
            <p>
              Examencentrum getrouw toetsingssysteem voor optimale voorbereiding
            </p>
          </div>
          <div className="TheorieInfoText">
            <IoMdCheckmarkCircleOutline />
            <p>Persoonlijke aanpak en lessen op maat</p>
          </div>
          <div className="TheorieInfoText">
            <IoMdCheckmarkCircleOutline />
            <p>Leuke en gemakkelijk te begrijpen leermethode</p>
          </div>
          <div className="TheorieInfoText">
            <IoMdCheckmarkCircleOutline />
            <p>Handige adviezen en tips van ervaren instructeurs</p>
          </div>
          <div className="TheorieInfoText">
            <IoMdCheckmarkCircleOutline />
            <p>Hoogste slaagkans voor je theorie-examen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTheorieInfo;
