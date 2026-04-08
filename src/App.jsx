import React from 'react';
import './App.css';
import useCalendar from './hooks/useCalendar';
import HeroImage from './components/HeroImage';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import NotesPanel from './components/NotesPanel';
import monthImages from './data/monthImages';

export default function App() {
  const cal    = useCalendar();
  const accent = monthImages[cal.month].color;

  return (
    <div className="app-bg">
      <div className="calendar-card">

        {/* ── Binding strip at top ── */}
        <div className="binding-strip" style={{ background: accent }}>
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="ring" />
          ))}
        </div>

        {/* ── Main body: hero + right panel ── */}
        <div className="card-body">
          <HeroImage month={cal.month} year={cal.year} />

          <div className="right-panel">
            <CalendarHeader
              month={cal.month}
              year={cal.year}
              onPrev={cal.prevMonth}
              onNext={cal.nextMonth}
            />
            <CalendarGrid
              month={cal.month}
              year={cal.year}
              getDaysInMonth={cal.getDaysInMonth}
              getFirstDay={cal.getFirstDay}
              handleDayClick={cal.handleDayClick}
              isInRange={cal.isInRange}
              isStart={cal.isStart}
              isEnd={cal.isEnd}
              isToday={cal.isToday}
              hoverDay={cal.hoverDay}
              setHoverDay={cal.setHoverDay}
              rangeStart={cal.rangeStart}
              rangeEnd={cal.rangeEnd}
            />
            <NotesPanel
              month={cal.month}
              year={cal.year}
              rangeStart={cal.rangeStart}
              rangeEnd={cal.rangeEnd}
            />
          </div>
        </div>

      </div>
    </div>
  );
}