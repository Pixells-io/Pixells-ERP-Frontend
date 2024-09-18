import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import Inputs from "../Components/SelectGroup";
import DataTable from "../Components/DataTable/PriceListTable";
import { Link, useParams, useLoaderData, redirect} from "react-router-dom";
import StatusInformation from "@/components/StatusInformation/status-information";
import DeletePriceListDialog from "../Components/ModalDelete";
import { destroyPriceList } from "../utils";

const ViewPL = () => {
  const { id } = useParams();
  const client = useLoaderData();
  const { list, products, base_list } = client;

  const [modalDelete, setModalDelete] = useState(false);
  const initialInputs = {
    name: list?.data?.name || "",
    based_list: list?.data?.based_list?.value || "",
    index_list: list?.data?.index_list || "",
    type: list?.data?.type.toString() || "1",
    rounding: list?.data?.rounding === 0 ? false : true || false,
    from_date: list?.data?.from_date || "",
    to_date: list?.data?.to_date || "",
    principal_list: list?.data?.principal_list === 1 ? true : false || true,
  };

  const processedSlots = list?.data?.product_slots.map(slot => ({
    tipo: slot.type,
    nuevoArticulo: slot.product_master_id,
    descripcion: slot.name,
    listaPrecioBase: slot.based_price,
    precioBase: parseFloat(slot.price),
    precioUnitario: parseFloat(slot.price),
    indiceRefactorizacion: parseFloat(slot.refactorization_index),
    indiceEditable: parseFloat(slot.refactorization_index),
    precioRefactorizacion: parseFloat(slot.price) * parseFloat(slot.refactorization_index),
  })) || [];

  const [initialData] = useState(processedSlots);
  const [indRef, setIndRef] = useState("");
  const [comments, setComments] = useState(list?.data?.comments || "");
  const [data, setData] = useState(initialData);

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
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon icon={chevronBack} size="large" className="rounded-3xl bg-blancoBox p-1" />
            </div>
            <div className="h-12 w-12">
              <IonIcon icon={chevronForward} size="large" className="rounded-3xl bg-blancoBox p-1" />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">INVENTARIO</h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">Consultando Lista de Precio:</p>
          <div className="flex items-end justify-end pb-0">
            <Link to="/inventory/prices-lists">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon icon={closeCircle} size="small" className="cursor-pointer text-grisDisabled" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-4 bg-white p-7">
          <Inputs
            baseList={base_list.data}
            onIndRefChange={handleIndRefChange}
            data={initialInputs}
            setData={handleInputChange}
            isEditable={false}
          />
          <DataTable
            type={initialInputs.type}
            initialData={data}
            onDataChange={handleDataChange}
            products={products.data}
            indRef={indRef}
            roundingF={initialInputs.rounding}
            isEditable={false}
          />
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
                className="w-[120px] rounded-lg border-2 border-[#D7586B] text-xs text-[#D7586B] hover:text-[#D7586B]"
                onClick={() => setModalDelete(true)}
              >
                Eliminar
              </Button>
              </StatusInformation>
          </div>
        </div>
      </div>
      <DeletePriceListDialog
        id={id}
        name={initialInputs.name}
        modal={modalDelete}
        setModal={setModalDelete}
      />
    </div>
  );
};

export default ViewPL;
export async function Action({ request }) {
  const formData = await request.formData();
  console.log(formData.get("price_list_id"))
  const response = await destroyPriceList(formData);

  return redirect("/inventory/prices-lists");
}
