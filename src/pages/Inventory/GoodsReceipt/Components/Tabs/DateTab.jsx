import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePagination from "../DatePagination";
import { Button } from "@/components/ui/button";

const Card = ({ title, id, date, onViewClick, showDetails }) => (
  <div
    className={`rounded-lg bg-white p-4 ${
      showDetails ? "max-w-[40%]" : "mb-4 ml-2 mr-2 mt-2 w-full"
    }`}
    style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.15)" }}
  >
    {!showDetails ? (
      <>
        <h3 className="mb-2 border-b pb-2 font-poppins font-semibold text-[#44444F]">
          {title}
        </h3>
        <div className="mb-6 mt-6 flex items-center justify-between text-sm">
          <span className="font-roboto text-sm text-[#44444F]">
            Por Entregar
          </span>
          <span className="font-roboto text-sm text-[#44444F]">
            5 a procesar
          </span>
          <span
            className="cursor-pointer font-roboto text-primarioBotones"
            onClick={() => onViewClick(id, date)}
          >
            Ver
          </span>
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-between p-2">
          <div>
            {" "}
            <p className=" font-roboto text-sm text-[#44444F]">ID: {id}</p>
            <p className="mb-2 font-roboto text-sm text-[#44444F]">
              Fecha: {date}
            </p>
          </div>

          <div className="flex items-end justify-end">
            <Link
              to={`/inventory/goods-receipt/deliveries/details/${id}`}
              className="cursor-pointer mb-4 font-roboto text-primarioBotones"
            >
              Ver
            </Link>
          </div>
        </div>
      </>
    )}
  </div>
);

const DateTab = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardDate, setSelectedCardDate] = useState(null);

  const formatColumnDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString("es-ES", options).toUpperCase();
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleModalOpen = (id, date) => {
    setSelectedCardId(id);
    setSelectedCardDate(date);
    setIsShowModal(true);
  };

  const handleModalClose = () => {
    setIsShowModal(false);
    setSelectedCardId(null);
    setSelectedCardDate(null);
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const getDateTitle = (date) => {
    if (isToday(date)) {
      return "Hoy";
    }
    return formatColumnDate(date);
  };

  const renderColumn = (date, title, showDetails = false) => (
    <div className="max-h-[400px] min-w-[250px] overflow-hidden p-2">
      <h2 className="mb-2 rounded border-b p-2 font-poppins text-lg font-semibold text-[#44444F]">
        {title || getDateTitle(date)}
      </h2>
      <div className="h-[calc(400px-56px)] overflow-auto">
        <div className="space-y-4">
          {[1, 2, 3].map((id) => (
            <Card
              key={id}
              title="Almacene Norte GDL"
              id={`019876${id}`}
              date={date.toLocaleDateString()}
              onViewClick={(cardId) => handleModalOpen(cardId, date)}
              showDetails={showDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-full flex-col rounded-md bg-blancoBg p-2">
      <div className="border-b">
        <DatePagination
          onDateChange={handleDateChange}
          initialDate={selectedDate}
        />
      </div>
      <div className="mt-4 grid flex-grow grid-cols-3 gap-4 overflow-hidden">
        {isShowModal ? (
          <>
            {renderColumn(selectedCardDate)}
            <div className="col-span-2 border-l pl-4">
              <h2 className="mb-2 rounded border-b p-2 font-poppins text-lg font-semibold text-[#44444F]">
                POR ENTREGAR
              </h2>
              <div className="mr-4 flex items-end justify-end">
                <Button
                  onClick={handleModalClose}
                  className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
                >
                  Cerrar
                </Button>
              </div>
              <div className="h-[calc(400px-56px)] overflow-auto">
                <Card
                  id={selectedCardId}
                  date={"27 Septiembre 2024"}
                  showDetails={true}
                  title="Almacene Norte GDL" // Aquí puedes poner el nombre que desees
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {renderColumn(selectedDate)}
            {renderColumn(new Date(selectedDate.getTime() + 86400000))}
            {renderColumn(new Date(selectedDate.getTime() + 172800000))}
          </>
        )}
      </div>
      <div className="ml-2 flex w-full items-center justify-between border-t p-4">
        <label className="text-xs font-light text-[#8F8F8F]">
          Actualizado 07 septiembre 2024
        </label>
        <Button className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
          Listo
        </Button>
      </div>
    </div>
  );
};

export default DateTab;
