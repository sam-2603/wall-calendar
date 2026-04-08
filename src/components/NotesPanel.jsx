import React from 'react';
import monthImages from '../data/monthImages';

export default function NotesPanel({ month, year, rangeStart, rangeEnd }) {
  const storageKey = `notes-${year}-${month}`;
  const accent     = monthImages[month].color;

  
  const currentNote = localStorage.getItem(storageKey) || '';

  const handleChange = (e) => {
    localStorage.setItem(storageKey, e.target.value);
   
  };

  const rangeLabel = rangeStart
    ? rangeEnd
      ? ` ${monthImages[month].month} ${rangeStart} – ${rangeEnd}`
      : ` ${monthImages[month].month} ${rangeStart} selected`
    : ' No date selected';

  return (
    <div className="notes-panel">
      <div className="notes-header" style={{ borderColor: accent }}>
        <span className="notes-title" style={{ color: accent }}>Notes</span>
        <span className="notes-range">{rangeLabel}</span>
      </div>
      <textarea
        className="notes-area"
        placeholder="Jot down memos, reminders, or plans for this month…"
        defaultValue={currentNote}
        onChange={handleChange}
        key={storageKey}
        style={{ '--accent': accent }}
      />
      <div className="notes-lines">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="note-line" />
        ))}
      </div>
    </div>
  );
}