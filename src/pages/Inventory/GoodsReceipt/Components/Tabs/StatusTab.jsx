import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const renderColumn = (title) => (
  <div className="max-h-[400px] min-w-[250px] p-2">
   <h2 className="mb-2 flex justify-between rounded border-b p-2">
  <span className="font-semibold font-poppins text-lg text-[#44444F]">{title}</span>
  <div className="flex justify-end">
    <div className="rounded-full h-6 w-6 flex justify-center items-center bg-[#E8E8E8]">3</div>
  </div>
</h2>

    <div className="h-[calc(400px-56px)] overflow-auto">
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
  </div>
);

const Card = ({ title,id ,date}) => (
    <div
      className={"rounded-lg bg-white p-4 mb-4 ml-2 mr-2 mt-2"}
      style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.15)" }}
    >
      

          <div className="flex justify-between p-2">
          <div>
            {" "}
            <p className=" font-roboto text-sm font-semibold text-[#44444F]">ID: {id}</p>
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
      
      
    </div>
  );

const StatusTab = () => {
  return (
    <div className="flex h-full flex-col rounded-md bg-blancoBg p-2">
      <div className="border-b">
        <h2 className="font-poppins font-semibold text-xl text-[#44444F] p-4">
          ENTREGAS POR ESTATUS
        </h2>
      </div>

      <div className="mt-4 grid flex-grow grid-cols-3 gap-4 overflow-hidden">
      {renderColumn("POR ACEPTAR")}
      {renderColumn("EN PREPARACION")}
      {renderColumn("POR ENTREGAR")}
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
export default StatusTab;