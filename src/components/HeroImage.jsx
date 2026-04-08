import React from 'react';
import monthImages from '../data/monthImages';

export default function HeroImage({ month, year }) {
  const data = monthImages[month];

  return (
    <div className="hero-image-wrapper">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${data.img})` }}
      />
      <div
        className="hero-overlay"
        style={{
          background: `linear-gradient(135deg, ${data.color}cc 0%, ${data.color}44 60%, transparent 100%)`
        }}
      />
      <div className="hero-label">
        <span className="hero-year">{year}</span>
        <span className="hero-month">{data.month.toUpperCase()}</span>
      </div>
      
    </div>
  );
}