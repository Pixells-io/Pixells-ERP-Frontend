import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InputForm from "@/components/InputForm/InputForm";
import { Label } from "@/components/ui/label";
import {  searchOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const renderColumn = (title) => (
  <div className="min-h-[400px] min-w-[250px] p-2 flex flex-col">
    <h2 className="mb-2 flex justify-between border-b p-2">
      <span className="font-semibold font-poppins text-lg text-[#44444F]">{title}</span>
      <div className="flex justify-end">
        <div className="rounded-full h-6 w-6 flex justify-center items-center bg-[#E8E8E8]">3</div>
      </div>
    </h2>

    <div className="flex-grow overflow-y-auto">
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((id) => (
          <Card key={id} title={id} id={`019876${id}`} date={"22 de septiembre 2024"} />
        ))}
      </div>
    </div>
  </div>
);

const Card = ({ title, id, date }) => (
  <div
    className={"rounded-lg bg-white p-4 mb-4 ml-2 mr-2 mt-2"}
    style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.15)" }}
  >
    <div className="flex justify-between p-2">
      <div>
        <p className=" font-roboto text-sm font-semibold text-[#44444F]">ID: {id}</p>
        <p className="mb-2 font-roboto text-sm text-[#44444F]">Fecha: {date}</p>
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
  </div>
);

const StatusTab = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-md bg-blancoBg">
     <div className="flex-shrink-0 h-[54px] flex justify-between border-b">
        <h2 className="font-poppins font-semibold text-xl text-[#44444F] ml-4 mt-4">
          ENTREGAS POR ALMACÉN
        </h2>
        <div className="flex mt-2 mr-2 h-9 w-44 items-center justify-end rounded-3xl border-[1px] border-[#D7D7D7] px-2 py-2 text-[10px]">
          <Label htmlFor="search">
            <IonIcon
              icon={searchOutline}
              className="h-6 w-6 stroke-1 text-[#8F8F8F]"
            />
          </Label>
          <InputForm
            name="search"
            className="h-full w-full border-0 bg-transparent text-sm font-normal text-[#8F8F8F] !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#8F8F8F]"
          />
        </div>
      </div>

      <div className="mt-4 grid flex-grow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
        {renderColumn("POR ACEPTAR")}
        {renderColumn("EN PREPARACION")}
        {renderColumn("POR ENTREGAR")}
      </div>
      
      <div className="h-[54px] pb-6 flex-shrink-0 p-4 mb-2">
          <div className="flex items-center pb-2  justify-between">
            <label className="text-xs font-light text-[#8F8F8F]">
              Actualizado 07 septiembre 2024
            </label>
            <Button
              className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            >
              Listo
            </Button>
          </div>
        </div>
    </div>
  );
};

export default StatusTab;
