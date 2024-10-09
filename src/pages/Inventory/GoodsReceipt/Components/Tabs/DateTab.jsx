import React, { useState } from "react";
import DatePagination from "../DatePagination";

const Card = ({ title }) => (
  <div className="mb-4 rounded-lg bg-white p-4" style={{ boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.15)' }}>
    <h3 className="mb-2 border-b pb-2 font-poppins font-semibold text-[#44444F]">{title}</h3>
    <div className="mt-6 mb-6 flex items-center justify-between text-sm">
      <span className="font-roboto text-sm text-[#44444F]">Por Entregar</span>
      <span className="font-roboto text-sm text-[#44444F]">5 a procesar</span>
      <span className="cursor-pointer font-roboto text-primarioBotones">Ver</span>
    </div>
  </div>
);

const DateTab = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatColumnDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString("es-ES", options).toUpperCase();
  };

  const getNextDay = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay;
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="flex h-full flex-col rounded-md bg-blancoBg p-2">
      <div className="border-b">
        <DatePagination
          onDateChange={handleDateChange}
          initialDate={selectedDate}
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-wrap justify-between">
          {/* Primera columna */}
          <div className="min-w-[250px] flex-1 p-2 max-h-[400px] overflow-hidden">
            <h2 className="mb-2 rounded font-poppins text-[#44444F] p-2 text-lg font-semibold border-b">
              {isToday(selectedDate) ? "Hoy" : formatColumnDate(selectedDate)}
            </h2>
            <div className="overflow-auto h-[calc(400px-56px)]">
              <div className="space-y-4">
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
              </div>
            </div>
          </div>

          {/* Segunda columna */}
          <div className="min-w-[250px] flex-1 p-2 max-h-[400px] overflow-hidden">
            <h2 className="mb-2 rounded font-poppins text-[#44444F] p-2 text-lg font-semibold border-b">
              {formatColumnDate(getNextDay(selectedDate))}
            </h2>
            <div className="overflow-auto h-[calc(400px-56px)]"> 
              <div className="space-y-4">
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
              </div>
            </div>
          </div>

          {/* Tercera columna */}
          <div className="min-w-[250px] flex-1 p-2 max-h-[400px] overflow-hidden">
            <h2 className="mb-2 rounded font-poppins text-[#44444F] p-2 text-lg font-semibold border-b">
              {formatColumnDate(getNextDay(getNextDay(selectedDate)))}
            </h2>
            <div className="overflow-auto h-[calc(400px-56px)]">
              <div className="space-y-4">
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
                <Card title={"ALMACENES GLD"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTab;
