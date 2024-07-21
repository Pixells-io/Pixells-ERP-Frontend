import React, { useState, useEffect, useMemo } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import AddItemDialog from "../components/AddCostModal";
import DataTable from "@/components/table/DataTable";
import AddConfig from "../components/ModalConfig";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MainCost = () => {
  const [misDatos, setMisDatos] = useState([
    {
      codigo: "AC-3",
      nombre: 1,
      creacion: "22-04-2023",
      descripcion: "En progreso",
    },
    {
      codigo: "AC-5",
      nombre: 2,
      creacion: "18-04-2023",
      descripcion: "Borrador",
    },
    {
      codigo: "AC-4",
      nombre: 3,
      creacion: "03-03-2023",
      descripcion: "En progreso",
    },
  ]);
  const columns = useMemo(
    () => [
      {
        id: "codigo",
        accessorKey: "codigo",
        header: "Codigo",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "nombre",
        accessorKey: "nombre",
        header: "Nombre",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "creacion",
        accessorKey: "creacion",
        header: "Creación",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "descripcion",
        accessorKey: "descripcion",
        header: "Descripción",
      },
      {
        id: "acciones",
        accessorKey: "acciones",
        header: "Acciones",
        cell: ({ row }) => (
          <div className="flex">
            <AddConfig />
          </div>
        ),
      },
    ],
    [],
  );

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Actualiza tableData cuando misDatos cambie
    setTableData(misDatos.map((item) => ({ ...item, checked: false })));
  }, [misDatos]);

  const handleAddItem = (newItem) => {
    setMisDatos((prev) => [...prev, newItem]);
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
            <div>Accounting - policy</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Centro de Costos
          </p>
        </div>
        <AddItemDialog onAddItem={handleAddItem} />

        {/* Data Table */}
        <div className="overflow-auto rounded-xl bg-white p-4">
          <div className="flex items-center">
            <div className="left-2 w-1/5">
              <Tabs
                defaultValue="CENTRO DE COSTOS"
                className="top-4 flex h-full rounded-lg pl-4 pt-2"
              >
                <TabsList className="mb-3 w-full bg-transparent">
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="CENTRO DE COSTOS"
                  >
                    CENTRO DE COSTOS
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="mt-4">
            <DataTable
              data={tableData}
              columns={columns}
              searchFilter={"codigo"}
              searchNameFilter={"Ingrese el código"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCost;