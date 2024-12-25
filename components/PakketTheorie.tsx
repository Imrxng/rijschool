import React from 'react';
import { GoBook } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";

const PakketTheorie = () => {
  return (
    <div className="privacy-container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div className="title-container">
        <h1>Theorie</h1>
      </div>
      <div className="pakket-theorie-card">
        <div className="pakket-theorie-header">
          <h3 className="pakket-theorie-heading">
            <GoBook className="pakket-theorie-icon" />
            Theorieles Pakket (12 uur)
          </h3>
          <p className="pakket-theorie-subheading">Uitgebreide voorbereiding op je theorie-examen</p>
        </div>
        <div className="pakket-theorie-body">
          <p className="pakket-theorie-description">Dit pakket van 12 uur biedt uitgebreide theorielessen om je voor te bereiden op het theorie-examen.</p>
          <div className="pakket-theorie-details">
            <div className="pakket-theorie-item">
              <span className="pakket-theorie-label">Theorie lessen (in het Nederlands):</span>
              <span className="pakket-theorie-price">€130</span>
            </div>
            <div className="pakket-theorie-item">
              <span className="pakket-theorie-label">Inschrijvingskosten:</span>
              <span className="pakket-theorie-price">€25</span>
            </div>
            <div className="pakket-theorie-total">
              <span className="pakket-theorie-total-label">Totaal:</span>
              <span className="pakket-theorie-total-price">€155</span>
            </div>
          </div>
          <div className="pakket-theorie-info">
            <CiCircleInfo className='pakket-theorie-info-icon'/>
            <p>De inschrijvingskosten van €25 zijn verplicht bij elk pakket en dekken de administratieve kosten.</p>

          </div>
          <button className="pakket-theorie-button">
            Schrijf je nu in
          </button>
        </div>
      </div>
    </div>
  );
};

export default PakketTheorie;