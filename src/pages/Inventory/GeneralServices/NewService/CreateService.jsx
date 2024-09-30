import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Button } from "@/components/ui/button";
import ServiceForm from "../Components/ServiceForm";

const CreateService = () => {
    const [initialValues, setInitialValues] = useState({
        productType: "1",
        codigoDeArticulo: "",
        nombreODescripcion: "",
        centroDeCostos: "",
        listaDePrecios: "",
        precio: "",
        almacen: "",
        unidadesDeMedida: "",
        categoria: "",
        codigoDeBarras: "",
        compra: false,
        venta: false,
        color:"#FF00FF"
      });
    
      const [inputsData, setInputsData] = useState({
        sujetoAImpuesto: false,
        disponibleParaDevolucion: false,
        manufacturaDisponible: false,
        fabricantes: "",
        comentario: "",
        activos: false,
        from: "",
        to: "",
        imagenPrincipal: null,
        metodoValoracion: "",
        costo: "",
        stockMinimo: "",
        stockMaximo: "",
        proveedor: "",
      });
      const [buyData, setBuyData] = useState({ proveedor: "" });

  const handleProductTypeChange = (type) => {
    setInitialValues({ productType: type });
  };

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

        <div className="flex justify-between">
          <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
            Nuevo Servicio
          </p>
        </div>
        
        <div className="h-full overflow-auto rounded-xl bg-white">
          <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              INFORMACIÓN DEL SERVICIO
            </span>
            <div className="flex items-center gap-x-4">
              <span className="font-roboto text-xs font-normal text-[#44444F]">
                Tipo de producto
              </span>

              <div className="flex gap-x-1 rounded-md bg-[#F2F2F2] p-1">
                <Button
                  type="button"
                  className={`h-[22px] text-xs font-normal duration-300 ease-out hover:bg-white ${initialValues.productType === "1" ? "bg-white text-[#44444F]" : "bg-inherit text-[#8F8F8F]"}`}
                  onClick={() => handleProductTypeChange("1")}
                >
                  Simple
                </Button>
                <Button
                  type="button"
                  className={`h-[22px] text-xs font-normal duration-300 ease-out hover:bg-white ${initialValues.productType === "2" ? "bg-white text-[#44444F]" : "bg-inherit text-[#8F8F8F]"}`}
                  onClick={() => handleProductTypeChange("2")}
                >
                  Variable
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-col space-y-4 overflow-auto">
          <ServiceForm  productType={initialValues.productType}
              inputsData={inputsData}
              setInputsData={setInputsData}
              buyData={buyData}
              setBuyData={setBuyData}
              principalInputs={initialValues}
              setPrincipalInputs={setInitialValues} />
              </div>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
