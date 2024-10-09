import React from "react";
import DatePagination from "../DatePagination";

const Card = ({ title, content }) => (
  <div className="rounded-[10px] bg-[#FBFBFB] p-12 shadow-lg">
    <h3 className="mb-2 text-lg text-[#44444F] pb-4 border-b font-poppins font-semibold">{title}</h3>
    <div className="flex items-start gap-6">
    <div className="mt-4 flex justify-center gap-6 text-sm font-roboto">
      <span>Por Entregar</span>
      <span>5 a procesar</span>
      <span className="text-blue-500">Ver</span>
    </div>
    </div>
  </div>
);

const DateTab = () => {
  return (
    <div className="rounded-md bg-blancoBg p-2">
      <div className="mb-4 border-b pb-2">
        <DatePagination />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
       
          <Card
            key={2}
            title={`Almacene Norte GDL 2`}
          />
      </div>
    </div>
  );
};

export default DateTab;