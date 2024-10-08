import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const DatePagination = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([]);

  const dayNames = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

  useEffect(() => {
    generateDateRange(currentDate);
  }, [currentDate]);

  const generateDateRange = (date) => {
    const range = [];
    for (let i = -4; i <= 4; i++) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + i);
      range.push(newDate);
    }
    setDateRange(range);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const dayName = dayNames[date.getDay()];
    return `${day} ${dayName}`;
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-full">
      <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => navigateDate(-1)}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex space-x-4">
        {dateRange.map((date) => (
          <Button 
            key={date.toISOString()} 
            variant="ghost"
            size="sm" 
            className={`px-2 py-1 ${isToday(date) ? 'bg-white rounded-full shadow' : ''}`}
            onClick={() => setCurrentDate(date)}
          >
            <div className="text-xs font-medium">
              {isToday(date) ? (
                <>
                  <div className="text-[10px] leading-tight">HOY</div>
                  <div>{formatDate(date)}</div>
                </>
              ) : (
                formatDate(date)
              )}
            </div>
          </Button>
        ))}
      </div>
      <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => navigateDate(1)}>
        <ChevronRight className="h-4 w-4" />
      </Button>
     
    </div>
  );
};

export default DatePagination;