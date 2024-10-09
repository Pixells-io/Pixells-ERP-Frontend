import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const DatePagination = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const dayNames = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

  useEffect(() => {
    generateDateRange(currentDate);
  }, [currentDate]);

  const generateDateRange = (date) => {
    const range = [];
    for (let i = -5; i <= 5; i++) {
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

  const isMiddleDate = (date, index) => {
    return index === 5;
  };

  const handleCalendarSelect = (date) => {
    setCurrentDate(date);
    setCalendarOpen(false);
  };

  return (
    <div className="flex items-center justify-evenly">
      <div className="flex w-full justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => navigateDate(-1)}
        >
          <IonIcon icon={chevronBack} className="h-4 w-4" />
        </Button>
        <div className="flex space-x-8">
          {dateRange.map((date, index) => (
            <Button
              key={date.toISOString()}
              variant="ghost"
              size="sm"
              className={`px-2 py-1 font-poppins ${
                isMiddleDate(date, index)
                  ? "h-[39px] w-[90px] rounded-[8px] border border-[#44444F] bg-[#E8E8E8] text-sm"
                  : "h-[35px] w-[63px] text-xs text-[#44444F]"
              }`}
              onClick={() => setCurrentDate(date)}
            >
              <div className="text-xs font-medium">
                {isToday(date) ? (
                  <>
                    <div className="mb-0 font-poppins text-base font-semibold text-[#44444F]">
                      HOY
                    </div>
                    <div>{formatDate(date)}</div>
                  </>
                ) : (
                  formatDate(date)
                )}
              </div>
            </Button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => navigateDate(1)}
        >
          <IonIcon icon={chevronForward} className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex justify-end pb-2">
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="px-4 h-[24px] rounded-[20px] border-[#D7D7D7] bg-transparent text-center text-sm text-[#8F8F8F]"
            >
              Fecha
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={currentDate}
              onSelect={handleCalendarSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DatePagination;
