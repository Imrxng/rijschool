import Link from "next/link";
import React from "react";

interface Pricing {
  automaat: number;
  schakel: number;
}

interface PraktijkCardProps {
  title: string;
  subtitle: string;
  description: string;
  pricing: Pricing;
}

const PraktijkCard: React.FC<PraktijkCardProps> = ({
  title,
  subtitle,
  description,
  pricing,
}) => {
  return (
    <div className="praktijk-card">
      <div className="praktijk-header">
        <div className="header-content">
          <h3 className="header-title">{title}</h3>
        </div>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <div className="praktijk-content">
        <p className="praktijk-description">{description}</p>
      </div>
      <div className="praktijk-pricing">
        <div className="pricing-item">
          <div className="pricing-details">
            <span className="pricing-type">Automaat</span>
            <span className="pricing-amount">€{pricing.automaat}</span>
          </div>
          <div className="pricing-details">
            <span className="pricing-type">Manueel</span>
            <span className="pricing-amount">€{pricing.schakel}</span>
          </div>
          <div className="pricing-note">+ €25 inschrijvingskosten</div>
        </div>
      </div>
      <Link href="/contact">
          <button className="pakket-theorie-button">Schrijf je nu in</button>
      </Link>
    </div>
  );
};

export default PraktijkCard;
