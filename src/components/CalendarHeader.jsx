import React from 'react';
import monthImages from '../data/monthImages';

export default function CalendarHeader({ month, year, onPrev, onNext }) {
  const accent = monthImages[month].color;

  return (
    <div className="cal-header">
      <button className="nav-btn" onClick={onPrev} style={{ color: accent }}>
        &#8592;
      </button>
      <div className="cal-title" style={{ color: accent }}>
        {monthImages[month].month} {year}
      </div>
      <button className="nav-btn" onClick={onNext} style={{ color: accent }}>
        &#8594;
      </button>
    </div>
  );
}