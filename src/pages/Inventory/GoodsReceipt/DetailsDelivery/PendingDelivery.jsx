import React from "react";
import NavigationHeader from "@/components/navigation-header";
import { useParams } from "react-router-dom";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const DeliveryDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mt-1 h-[30px] font-poppins text-xl font-bold text-grisHeading">
            Entrega Pendiente: {id}
          </p>
        </div>

        <div className="bg-white p-7">
        <div className="space-y-4 border p-4 rounded-[10px]">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <InputForm 
              placeholder="Código" />
            </div>
            <div className="col-span-2">
            <SelectRouter placeholder={"Listas de Precios"} />
            </div>
            <div className="col-span-2">
              <SelectRouter placeholder={"Centro de Costos"} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputForm placeholder="vencimiento" type="date" />
            </div>
            <div>
              <InputForm placeholder="cliente"/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
