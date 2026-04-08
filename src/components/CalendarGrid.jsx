import React from 'react';
import monthImages from '../data/monthImages';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarGrid({
  month, year,
  getDaysInMonth, getFirstDay,
  handleDayClick,
  isInRange, isStart, isEnd, isToday,

}) {
  const accent   = monthImages[month].color;
  const total    = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  // Build array: nulls for empty leading cells, then day numbers
  const cells = Array.from({ length: firstDay + total }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  return (
    <div className="calendar-grid">
      {/* Day name headers */}
      {DAYS.map((d, i) => (
        <div
          key={d}
          className="day-name"
          style={i === 0 || i === 6 ? { color: accent } : {}}
        >
          {d}
        </div>
      ))}

      {/* Day cells */}
      {cells.map((day, idx) => {
        if (!day) return <div key={`empty-${idx}`} className="day-cell empty" />;

        const start   = isStart(day);
        const end     = isEnd(day);
        const inRange = isInRange(day);
        const today   = isToday(day);
        const col     = idx % 7;
        const weekend = col === 0 || col === 6;

        let className = 'day-cell';
        if (start)   className += ' range-start';
        if (end)     className += ' range-end';
        if (inRange) className += ' in-range';
        if (today)   className += ' today';

        return (
          <div
            key={day}
            className={className}
            style={{
              '--accent': accent,
              color: weekend && !start && !end ? accent : undefined,
            }}
            onClick={() => handleDayClick(day)}
            
          >
            <span className="day-num">{day}</span>
          </div>
        );
      })}
    </div>
  );
}