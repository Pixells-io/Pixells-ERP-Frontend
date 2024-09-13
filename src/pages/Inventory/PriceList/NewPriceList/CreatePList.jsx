import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import Inputs from "../Components/SelectGroup";
import DataTable from "../Components/DataTable/PriceListTable";
import { Link } from "react-router-dom";
import ObservationsSection from "../Components/Section";
import StatusInformation from "@/components/StatusInformation/status-information";

const CreatePriceList = () => {
  const [initialInputs, setInitialInputs] = useState({
    name: "",
    based_list: "",
    index_list: "",
    type: "1",
    rounding: false,
    from_date: "",
    to_date: "",
    principal_list: false,
  });

  const [indRef, setIndRef] = useState("");

  const [data, setData] = useState([
    {
      nuevoArticulo: "1231",
      descripcion: "ACEITE VEGETAL",
      listaPrecioBase: "53.30",
      precioBase: 53.3,
      precioUnitario: 53.3,
      indiceRefactorizacion: 2.1,
      indiceEditable: 2.1,
      precioRefactorizacion: 111.93,
    },
  ]);
let rounded=initialInputs.rounding;
  const handleIndRefChange = (value) => {
    setIndRef(value);
    setInitialInputs(prev => ({ ...prev, index_list: value }));
  };

  const handleDataChange = (newData) => {
    setData(newData);
  };

  const handleInputChange = (name, value) => {
    setInitialInputs(prev => {
      const newState = { ...prev, [name]: value };
      
      if (name === "type" && value === "2") {
        newState.from_date = "";
        newState.to_date = "";
      }
      
      return newState;
    });
  };
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nueva Lista de Precios
          </p>
          <div className="flex items-end justify-end pb-0">
            <Link to="/inventory/prices-lists">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                />
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}
        <div className="h-full bg-white p-7 space-y-4">
        <Inputs
            onIndRefChange={handleIndRefChange}
            data={initialInputs}
            setData={handleInputChange}
          />
          
          <DataTable
            initialData={data}
            onDataChange={handleDataChange}
            indRef={indRef}
            roundingF={rounded}
           
          />
          <ObservationsSection />
          <div className="justify-end">
          <StatusInformation
            status={"inProgress"}
            imgUser={
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          >
              <Button
                type="button"
                variant="outline"
                className="w-[120px] rounded-lg border-2 border-primarioBotones text-xs text-primarioBotones hover:text-primarioBotones"
              >
                Cancelar
              </Button>
              <Button
                type="button"
                onClick={() => alert("save")}
                className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
              >
                Crear
              </Button>
            </StatusInformation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePriceList;
