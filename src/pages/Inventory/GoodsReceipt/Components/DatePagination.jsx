import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Button } from "@/components/ui/button";

const DatePagination = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([]);

  const dayNames = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

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

  const isMiddleDate = (date, index) => {
    return index === 4; // The middle date is at index 4 (0-based index)
  };

  return (
    <div className="flex items-center justify-evenly border-b px-4 py-2">
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
                ? "bg-[#E8E8E8] border text-sm border-[#44444F] w-[90px] h-[39px] rounded-[8px]"
                : "text-[#44444F] text-xs font-semibold"
            }`}
            onClick={() => setCurrentDate(date)}
          >
            <div className="text-xs font-medium">
              {isToday(date) ? (
                <>
                  <div className="font-poppins text-[#44444F] mb-0 text-base">
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
  );
};

export default DatePagination;