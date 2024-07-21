import React, { useState ,useEffect, useMemo } from "react";
import { IonIcon } from "@ionic/react";
import {
  informationCircle,
  addCircleOutline,
  chevronBack,
  chevronForward,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
const MainPolicy = () => {
  const [tableData, setTableData] = useState([]);
  const misDatos = [
    {
      tipo: "AC-3",
      numeracion: 1,
      fecha: "22-04-2023",
      estado: "En progreso",
      xml: "Ninguno",
      observaciones: "",
      total: "0.00",
    },
    {
      tipo: "AC-5",
      numeracion: 2,
      fecha: "18-04-2023",
      estado: "Borrador",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-4",
      numeracion: 3,
      fecha: "03-03-2023",
      estado: "En progreso",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-1",
      numeracion: 4,
      fecha: "27-04-2023",
      estado: "Finalizado",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-2",
      numeracion: 5,
      fecha: "17-08-2024",
      estado: "En progreso",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-7",
      numeracion: 6,
      fecha: "22-10-2024",
      estado: "Borrador",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-9",
      numeracion: 7,
      fecha: "03-11-2024",
      estado: "Finalizado",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-12",
      numeracion: 8,
      fecha: "14-04-2023",
      estado: "Finalizado",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-11",
      numeracion: 9,
      fecha: "12-12-2023",
      estado: "Borrador",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-8",
      numeracion: 10,
      fecha: "21-08-2023",
      estado: "Borrador",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
    {
      tipo: "AC-14",
      numeracion: 11,
      fecha: "21-08-2023",
      estado: "Finalizado",
      xml: "Ocupado",
      observaciones: "Abierto",
      total: "0.00",
    },
  ];
  const getStatusStyle = (status) => {
    switch (status) {
      case "En progreso":
        return {
          backgroundColor: "rgba(250, 163, 100, 0.25)",
          color: "#FAA364",
        };
      case "Borrador":
        return {
          backgroundColor: "rgba(91, 137, 255, 0.25)",
          color: "#5B89FF",
        };
      case "Finalizado":
        return { backgroundColor: "rgba(0, 162, 89, 0.25)", color: "#00A259" };
      default:
        return {};
    }
  };

  const columns = useMemo(
    () => [
      {
        id: "tipo",
        accessorKey: "tipo",
        header: "Tipo",
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <Checkbox
                className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
               
              />
              <label>{row?.original?.tipo}</label>
            </div>
          );
        },    
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "numeracion",
        accessorKey: "numeracion",
        header: "Numeracion",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "fecha",
        accessorKey: "fecha",
        header: "Fecha",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "estado",
        accessorKey: "estado",
        header: "Estado",
        cell: ({ row }) => (
          <span
            className="flex justify-center rounded-full px-2 py-1 font-roboto text-xs"
            style={{
              ...getStatusStyle(row.original.estado),
            }}
          >
            {row.original.estado}
          </span>
        ),
      },
      {
        id: "xml",
        accessorKey: "xml",
        header: "XML ASOCIADOS",
      },
      {
        id: "observaciones",
        accessorKey: "observaciones",
        header: "Observaciones",
      },
      {
        id: "total",
        accessorKey: "total",
        header: "Total",
      },
      {
        id: "acciones",
        accessorKey: "acciones",
        header: "Acciones",
        cell: ({ row }) => (
          <div className="flex justify-center">
            <Link to="/accounting/policy/details">
              <IonIcon
                icon={informationCircle}
                size="small"
                className="text-gray-500"
              />
            </Link>
          </div>
        ),
      },
    ],
    [tableData],
  );



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

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Pólizas de Ajuste Contable
          </p>
        </div>
        <Link to="/accounting/policy/create">
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="text-blue-500"
          />
        </Link>
        {/*content */}
        <div className="overflow-auto rounded-xl bg-white p-4">
          <div className="flex items-start">
            <div className="left-2 w-1/5">
              <Tabs
                defaultValue="ASIENTOS"
                className="top-4 flex h-full rounded-lg pl-4 pt-2"
              >
                <TabsList className="mb-3 w-full bg-transparent">
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="ASIENTOS"
                  >
                    ASIENTOS
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="mt-4">
            <DataTable
              data={misDatos}
              columns={columns}
              searchFilter={"tipo"}
              searchNameFilter={"Ingrese el tipo"}
              isCheckAll={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPolicy;