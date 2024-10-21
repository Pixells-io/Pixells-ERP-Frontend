import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { add, informationCircleOutline, trashOutline } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLoaderData, redirect } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { createPusherClient } from "@/lib/pusher";
import { getWarehouses } from "./utils";
import NavigationHeader from "@/components/navigation-header";
import ModalDeleteWarehouse from "./Components/Modals/ModalDeleteWarehouse";
import { destroyWarehouse } from "./utils";
const MainGW = () => {
  const { data } = useLoaderData();
  const [warehouseId, setWarehouseId] = useState(null);
  const [warehouseName, setWarehouseName] = useState(null);
  const [warehouseDestroyModal, setWarehouseDestroyModal] = useState(false);
  const [warehouseInfo, setwarehouseInfo] = useState(data);
  const pusherClient = createPusherClient();
  async function getWarehousesFunction() {
    let newData = await getWarehouses();
    setwarehouseInfo(newData.data);
  }
  

  useEffect(() => {
    pusherClient.subscribe("private-get-inventories");

    pusherClient.bind("fill-inventories", ({ message }) => {
    getWarehousesFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-inventories");
    };
  }, []);

  const columns = [
    {
      accessorKey: "inventory_code",
      header: "Código",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.inventory_code}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },

    {
      accessorKey: "name",
      header: "Nombre",
      meta: { filterButton: true },
    },

    {
      accessorKey: "creator",
      header: "Creado Por",
    },
    {
      accessorKey: "created",
      header: "Creación",
    },
    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Link to={`/inventory/general-warehouses/edit/${row.original.id}`}>
            <Button
              type="button"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={informationCircleOutline}
                className="h-5 w-5 text-[#696974]"
              />
            </Button>
          </Link>
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            onClick={() =>
              openDestroyWarehouseModal(row.original?.name, row.original?.id)
            }
          >
            <IonIcon icon={trashOutline} className="h-5 w-5 text-[#696974]" />
          </Button>
        </div>
      ),
    },
  ];
  function openDestroyWarehouseModal(name, id) {
    setWarehouseName(name);
    setWarehouseId(id);
    setWarehouseDestroyModal(true);
  }
  return (
    <div className="flex w-full">
      <ModalDeleteWarehouse
        modal={warehouseDestroyModal}
        setModal={setWarehouseDestroyModal}
        warehouse_name={warehouseName}
        warehouse_id={warehouseId}
      />
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
            Almacenes Generales
          </p>
          <div className="flex justify-end gap-6">
            <Link to="/inventory/general-warehouses/create">
              <Button
                type="button"
                className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
                <IonIcon icon={add} className="h-4 w-4" />
                <span className="text-xs font-medium">Nuevo</span>
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}

        <div className="h-full w-full overflow-hidden">
          <Tabs
            defaultValue="warehouse"
            className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="warehouse"
              >
                ALMACENES
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="warehouse"
              className="mt-[-70px] w-full overflow-auto pt-2"
            >
              <DataTable
                data={warehouseInfo}
                columns={columns}
                searchFilter="name"
                searchNameFilter="Buscar por nombre"
                isCheckAll={true}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainGW;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "destroy_inventory":
      await destroyWarehouse(data);
      return redirect("/inventory/general-warehouses");
  }
}
