import React from "react";
import NavigationHeader from "@/components/navigation-header";
import { useParams } from "react-router-dom";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import ProductsTable from "../Components/Table/DataTableProducts";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";

const DeliveryDetails = () => {
  const { id } = useParams();
  const datos = [
    {
      item: "Producto 1",
      codigo: "ABC123",
      valor: "$100",
      desc: "10%",
      impuesto: "$15",
      cantidad: "2",
      unidad: "Pieza",
      fechaEntrega: "10/10/2024",
      total: "$220",
    },
    {
      item: "Producto 2",
      codigo: "DEF456",
      valor: "$200",
      desc: "5%",
      impuesto: "$20",
      cantidad: "1",
      unidad: "Pieza",
      fechaEntrega: "11/10/2024",
      total: "$210",
    },
  ];

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <NavigationHeader />

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

        {/* Contenedor flex para llenar el espacio disponible y tener el footer en la parte inferior */}
        <div className="flex flex-col justify-between space-y-4 overflow-hidden h-full rounded-xl bg-white p-4 pr-12">
         <div className="overflow-auto">
          {/* Contenido principal (Formulario y tabla) */}
          <div className="space-y-4 rounded-[10px] border p-4">
            <div className="grid grid-cols-4 gap-4">
              <InputForm
                placeholder="Código de Cotización"
                className={"col-span-1"}
              />
              <SelectRouter
                placeholder="Lista de Precios"
                className={"col-span-1"}
              />
              <SelectRouter
                placeholder="Centro de Costos"
                className={"col-span-1"}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <InputForm
                placeholder="Vencimiento"
                type="date"
                className={"col-span-1"}
              />
              <InputForm placeholder="Cliente" className={"col-span-1"} />
            </div>
          </div>

          {/* Tabla de productos */}
          <div className="flex-grow">
            <ProductsTable data={datos} />
          </div>
          </div>
          {/* StatusInformation como footer */}
          <div className="mt-10 w-full self-end">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button className="h-[31px] w-[98px] rounded-xl bg-transparent text-[#8F8F8F] border border-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-transparent">
                Cancelar
              </Button>
              <Button className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
                Guardar
              </Button>
            </StatusInformation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
