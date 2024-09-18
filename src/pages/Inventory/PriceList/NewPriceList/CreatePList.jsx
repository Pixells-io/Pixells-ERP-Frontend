import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import Inputs from "../Components/SelectGroup";
import DataTable from "../Components/DataTable/PriceListTable";
import { Link, useLoaderData, useSubmit } from "react-router-dom";
import StatusInformation from "@/components/StatusInformation/status-information";
import { getBaseListById, savePriceList } from "../utils";



const CreatePriceList = () => {
  const selectsdata = useLoaderData();
  const submit = useSubmit();
  const { base_list, products } = selectsdata;
 
  const [initialInputs, setInitialInputs] = useState({
    name: "",
    based_list: "",
    index_list: "",
    type: "1",
    rounding: false,
    from_date: "",
    to_date: "",
    principal_list: true,
  });


  //Value for new products
  const [indRef, setIndRef] = useState("");

  //arrays for products
  const [data, setData] = useState([
    {
      tipo: initialInputs.type,
      nuevoArticulo: "",
      descripcion: "",
      listaPrecioBase: "0",
      precioBase: 0,
      precioUnitario: 0,
      indiceRefactorizacion: 0,
      indiceEditable: 0.0,
      precioRefactorizacion: 0,
    },
  ]);
  const [slotsData, setSlotsData] = useState([]);

  const [comments, setComments] = useState("");

  
  
  useEffect(() => {
    const handleBaseListData = async () => {
      if (initialInputs.based_list > 0) {
        try {
          // Enviar el valor envuelto en un objeto con la propiedad `id`
          const baseListData = await getBaseListById({ id: initialInputs.based_list });
          setIndRef(baseListData.data.index_list);
          setInitialInputs(prev => ({
            ...prev,
            index_list: baseListData.data.index_list
          }));
          console.log(baseListData.data.product_slots)
          /**
           * product_master_id: nuevo articulo 
           * descripcion: select 
           * precio unitario: price
           * indice de refactorizacion y indice editable: refactorization_index
           * type: type
           */
        } catch (error) {
          console.error("Error al obtener la lista base:", error);
        }
      }
    };
    const extractProductSlots = async () => {
      if (initialInputs.based_list > 0) {
        try {
          const baseListData = await getBaseListById({ id: initialInputs.based_list });
          const slots = baseListData.data.product_slots.map(slot => ({
            id: slot.product_master_id,
            price: slot.price
          }));
          setSlotsData(slots); // Guardar los slots en el estado
        } catch (error) {
          console.error("Error al obtener los slots de productos:", error);
        }
      }
    };
    
  
    extractProductSlots();
    handleBaseListData();
  }, [initialInputs.based_list]);
  
  
  const handleIndRefChange = (value) => {
  setIndRef(value);
  setInitialInputs((prev) => ({ ...prev, index_list: value }));

 
};


  const handleDataChange = (newData) => {
    setData(newData);
  };

 
  const handleInputChange = (name, value) => {
    setInitialInputs((prev) => {
      const newState = { ...prev, [name]: value };

      if (name === "type" && value === "2") {
        newState.from_date = "";
        newState.to_date = "";
      }

      return newState;
    });
  };


  const handleSubmit = async (event) => {
    const formData = new FormData();
    const convertToBoolean = (value) =>
      value === true ? 1 : value === false ? 0 : 0;

    const info = {
      name: initialInputs.name || "Default Name",
      based_list: parseInt(initialInputs.based_list) || 0,
      index_list: parseInt(initialInputs.index_list) || 0,
      rounding: convertToBoolean(initialInputs.rounding),
      comments: comments,
      aditional_comments: "",
      type: parseInt(initialInputs.type) || 1,
      from_date: initialInputs.from_date,
      to_date: initialInputs.to_date,
      principal_list: convertToBoolean(initialInputs.principal_list),
      products: data.map((row) => ({
        type: parseInt(row.tipo) || 0,
        product_master_id: parseInt(row.nuevoArticulo) || 0,
        based_price: parseFloat(row.precioBase) || 0,
        refactorization_index: parseFloat(row.indiceRefactorizacion) || 0,
        price: parseFloat(row.precioRefactorizacion) || 0,
      })),
    };
 
    console.log(info)
    // Append to FormData
    formData.append("info", JSON.stringify(info));

    submit(formData, {
      action: `/inventory/prices-lists/create`,
      method: "POST",
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
        <div className="space-y-4 bg-white p-7">
          <Inputs
            baseList={base_list.data}
            onIndRefChange={handleIndRefChange}
            data={initialInputs}
            setData={handleInputChange}
          />
          <div className="h-80 overflow-auto">
          <DataTable
  type={initialInputs.type}
  initialData={data}
  onDataChange={handleDataChange}
  products={products.data}
  indRef={initialInputs.index_list}
  roundingF={initialInputs.rounding}
  slots={slotsData} // Pasar los datos de slots al DataTable
/>

          </div>
          <div className="justify-end">
            <StatusInformation
              status={"inProgress"}
              comments={comments}
              setComments={setComments}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button
                type="button"
                variant="outline"
                className="w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] hover:text-primarioBotones"
              >
                Cancelar
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
                className={`rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
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

export async function Action({ request }) {

  const formData = await request.formData();
  const response = await savePriceList(formData);
 
  return "0";

}
