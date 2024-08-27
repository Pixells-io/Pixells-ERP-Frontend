import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import {
  Form,
  redirect,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import Inputs from "../Components/SelectGroup";
import FormGroup from "../Components/FormGroup";
import { destroyWarehouse, editWarehouse, getWarehouseById } from "../utils";
import { createPusherClient } from "@/lib/pusher";
const EditWH = () => {
  //LOADING ID
  const { id } = useParams();
  const location = useLocation();

  const { data } = useLoaderData();
  const [warehouse, setWarehouse] = useState(data);
  const [warehouseId, setWarehouseId] = useState(id);

  //WEBSOCKET
  const pusherClient = createPusherClient();

  async function getWarehouseFunction(id) {
    const newData = await getWarehouseById(id);
    setWarehouse(newData.data);
  }

  useEffect(() => {
    setWarehouseId(id);
    let channel = pusherClient.subscribe(`private-get-inventories.${warehouseId}`);

    channel.bind("fill-inventories-data", ({warehouse}) => {
      getWarehouseFunction(warehouse);
    });

    return () => {
      pusherClient.unsubscribe(`private-get-inventories.${warehouseId}`);
    };
  }, [location, warehouseId]);

  const [formData, setFormData] = useState({
    code: warehouse?.code || "",
    name: warehouse?.name || "",
    street: warehouse?.street || "",
    ext: warehouse?.ext || "",
    int: warehouse?.int || "",
    cp: warehouse?.cp || "",
    city: warehouse?.city || "",
    colony: warehouse?.colony || "",
    state: warehouse?.state || "",
    country: warehouse?.country || "",
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [hiddenValue, setHiddenValue] = useState("edit");

  const handleDeleteClick = () => {
    setHiddenValue("destroy_inventory");
    console.log(warehouse)
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

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando Almacén: {id}
          </p>
        </div>
        {/*content */}

        <Form action={"/inventory/general-warehouses/edit/" +id} method="post">
          <div className="space-y-4">
            <Inputs formData={formData} handleInputChange={handleInputChange} />
            <FormGroup
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
          {/* Campos ocultos para enviar todos los datos del formulario */}
          <input
            type="hidden"
            hidden
            name="inventory_id"
            value={warehouse.id}
          />
          <input type="hidden" hidden name="type" value={hiddenValue} />
          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}
          <div className="mt-6 flex justify-end space-x-6">
            <button
              type="button"
              className="border-red text-red rounded-lg bg-transparent px-4 py-2 font-semibold shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
              onClick={handleDeleteClick}
            >
              Eliminar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditWH;

export async function Action({ request }) {
  const formData = await request.formData();
  switch (formData.get("type")) {
    case "edit":
      await editWarehouse(formData);
      break;

    case "destroy_inventory":
      await destroyWarehouse(formData);
      return redirect("/inventory/general-warehouses");
  }
  return "0";
}
