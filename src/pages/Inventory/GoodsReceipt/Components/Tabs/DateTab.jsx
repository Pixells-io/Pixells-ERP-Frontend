import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePagination from "../DatePagination";
import { Button } from "@/components/ui/button";

const Card = ({ title, id, date, onViewClick, showDetails }) => (
  <div
    className={`rounded-lg bg-white p-4 ${
      showDetails ? "w-full" : "mb-4 ml-2 mr-2 mt-2 w-full"
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
            <p className="font-roboto text-sm font-semibold text-[#44444F]">
              ID: {id}
            </p>
            <p className="mb-2 font-roboto text-sm text-[#44444F]">
              Fecha: {date}
            </p>
          </div>
          <div className="flex items-end justify-end">
            <Link
              to={`/inventory/goods-receipt/deliveries/details/${id}`}
              className="mb-4 cursor-pointer font-roboto text-primarioBotones"
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
    <div className="min-h-[400px] min-w-[250px] p-2 flex flex-col">
      <h2 className="sticky top-0 z-10 mb-2 flex justify-between border-b bg-white p-4">
        <span className="font-semibold font-poppins text-lg text-[#44444F]">
          {title || getDateTitle(date)}
        </span>
        <div className="flex justify-end">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8E8E8]">
            7
          </div>
        </div>
      </h2>
      <div className="flex-grow overflow-y-auto pr-4">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7].map((id) => (
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
    <div className="flex h-full flex-col overflow-hidden bg-blancoBg">
      <div className="flex-shrink-0 border-b p-2">
        <DatePagination
          onDateChange={handleDateChange}
          initialDate={selectedDate}
        />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="h-full overflow-hidden p-2">
          <div
            className={`grid gap-4 ${isShowModal ? "grid-cols-3" : "grid-cols-3"} h-full`}
          >
            {isShowModal ? (
              <>
                {renderColumn(selectedCardDate)}
                <div className="col-span-2 flex min-h-[700px] md:min-h-[2px] min-w-[250px] flex-col border-l p-2 pl-4">
                  <h2 className="sticky top-0 z-10 mb-2 font-poppins font-semibold flex justify-between bg-white p-4">
                    POR ENTREGAR
                  </h2>
                  <div className="flex-grow overflow-auto pr-4">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((id) => (
                        <Card
                          key={id}
                          title={id}
                          id={`019876${id}`}
                          date={"22 de septiembre 2024"}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Aquí se modifica el footer */}
                  <div className=" lg:h-[54px] md:h-[280px] border-t p-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-light text-[#8F8F8F]">
                        Actualizado 07 septiembre 2024
                      </label>
                      <Button
                        onClick={handleModalClose}
                        className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
                      >
                        Listo
                      </Button>
                    </div>
                  </div>
                  {/* Fin de la modificación */}
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
        </div>
      </div>
      {!isShowModal && (
        <div className="flex-shrink-0 border-t p-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-light text-[#8F8F8F]">
              Actualizado 07 septiembre 2024
            </label>
            <Button
              onClick={handleModalClose}
              className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            >
              Listo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTab;
