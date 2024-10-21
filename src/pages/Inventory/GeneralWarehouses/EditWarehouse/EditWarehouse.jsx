import React, { useState, useEffect } from "react";
import {
  redirect,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrincipalFormWarehouse from "../Components/Tabs/PrincipalForm";
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
    let channel = pusherClient.subscribe(`private-get-inventories`);

    channel.bind("fill-inventories-data", ({ warehouse }) => {
      getWarehouseFunction(warehouse);
    });

    return () => {
      pusherClient.unsubscribe(`private-get-inventories`);
    };
  }, [location, warehouseId]);

  const [formData, setFormData] = useState({
    inventory_id: warehouse?.id || "",
    inventory_code: warehouse?.inventory_code || "",
    name: warehouse?.name || "",
    street: warehouse?.street || "",
    ext: warehouse?.ext || "",
    int: warehouse?.int || "",
    cp: warehouse?.cp || "",
    active: warehouse?.active === 1 ? true : false,
    city: warehouse?.city || "",
    colony: warehouse?.colony || "",
    state: warehouse?.state || "",
    country: warehouse?.country || "",
  });
  const tabOptions = [
    {
      value: "principal",
      label: "Principal",
      subLabel: "Información inicial del servicio",
      disabled: false,
      update: {
        day: "Hoy",
        date: "14:36",
      },
    },
    {
      value: "general",
      label: "General",
      subLabel: "Ajusta los parámetros básicos",
      disabled: true,
      update: null,
    },
    {
      value: "users",
      label: "Usuarios",
      subLabel: "Determina el responsable y los participantes",
      disabled: true,
      update: null,
    },
    {
      value: "process",
      label: "Proceso",
      subLabel: "Establece los pasos a seguir por el equipo",
      disabled: true,
      update: null,
    },
    {
      value: "shopping",
      label: "Compras",
      subLabel: "Configura parametros para compras",
      disabled: true,
      update: null,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <NavigationHeader />

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Almacén
          </p>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-[#FBFBFB]">
          <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              INFORMACIÓN DEL ALMACÉN
            </span>
          </div>
          <Tabs
            defaultValue="principal"
            className="flex h-full w-full flex-1 overflow-hidden"
          >
            <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 overflow-auto border-r bg-transparent p-6">
              {tabOptions.map(
                ({ value, label, subLabel, disabled, update }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    disabled={disabled}
                    className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
                      value === "variables"
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    <div className="flex w-full flex-col justify-start">
                      <p className="text-start font-roboto text-sm font-medium leading-tight text-[#44444F]">
                        {label}
                      </p>
                      <p className="text-start font-roboto text-[11px] font-normal leading-tight text-[#8F8F8F]">
                        {subLabel}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {!!update ? (
                        <>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.day}
                          </label>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.date}
                          </label>
                        </>
                      ) : (
                        <label className="text-xs font-light text-[#8F8F8F]">
                          New
                        </label>
                      )}
                    </div>
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            <TabsContent value="principal" className="w-full">
              <PrincipalFormWarehouse initialValues={formData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditWH;

export async function Action({ request }) {
  const formData = await request.formData();

  switch (formData.get("type")) {
    case "edit_principal":
      if (!!data.get("inventory_id")) {
        await editWarehouse(formData);
        return redirect("/inventory/general-warehouses");
      } else {
        break;
      }
    case "destroy_inventory":
      await destroyWarehouse(formData);
      return redirect("/inventory/general-warehouses");
      break;
  }
  return "0";
}
