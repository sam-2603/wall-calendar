import { useState, useCallback } from 'react';

export default function useCalendar() {
  const today = new Date();
  
  const [cal, setCal] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    rangeStart: null,
    rangeEnd: null,
    hoverDay: null,
  });

  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  const getFirstDay    = (y, m) => new Date(y, m, 1).getDay();

  const prevMonth = useCallback(() => {
    setCal(prev => {
      const isJan = prev.month === 0;
      return {
        ...prev,
        month: isJan ? 11 : prev.month - 1,
        year: isJan ? prev.year - 1 : prev.year,
        rangeStart: null,
        rangeEnd: null,
      };
    });
  }, []);

  const nextMonth = useCallback(() => {
    setCal(prev => {
      const isDec = prev.month === 11;
      return {
        ...prev,
        month: isDec ? 0 : prev.month + 1,
        year: isDec ? prev.year + 1 : prev.year,
        rangeStart: null,
        rangeEnd: null,
      };
    });
  }, []);

  const handleDayClick = useCallback((day) => {
    setCal(prev => {
      if (!prev.rangeStart || (prev.rangeStart && prev.rangeEnd)) {
        return { ...prev, rangeStart: day, rangeEnd: null };
      } else {
        if (day < prev.rangeStart) {
          return { ...prev, rangeStart: day, rangeEnd: prev.rangeStart };
        } else {
          return { ...prev, rangeEnd: day };
        }
      }
    });
  }, []);

  const setHoverDay = useCallback((day) => {
    setCal(prev => ({ ...prev, hoverDay: day }));
  }, []);

  const isInRange = (day) => {
    const end = cal.rangeEnd ?? cal.hoverDay;
    if (!cal.rangeStart || !end) return false;
    const lo = Math.min(cal.rangeStart, end);
    const hi = Math.max(cal.rangeStart, end);
    return day > lo && day < hi;
  };

  const isStart = (day) => day === cal.rangeStart;
  const isEnd   = (day) => cal.rangeEnd !== null && day === cal.rangeEnd;
  const isToday = (day) =>
    cal.year  === today.getFullYear() &&
    cal.month === today.getMonth() &&
    day       === today.getDate();

  return {
    year: cal.year,
    month: cal.month,
    rangeStart: cal.rangeStart,
    rangeEnd: cal.rangeEnd,
    hoverDay: cal.hoverDay,
    setHoverDay,
    getDaysInMonth,
    getFirstDay,
    prevMonth,
    nextMonth,
    handleDayClick,
    isInRange,
    isStart,
    isEnd,
    isToday,
  };
}