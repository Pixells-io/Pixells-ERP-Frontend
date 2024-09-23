import React from "react";
import { IonIcon } from "@ionic/react";
import { trashOutline, informationCircleOutline, add } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Link, useLoaderData } from "react-router-dom";

const BranchesTab = () => {
  const { stores } = useLoaderData();

  const columns = [
    {
      accessorKey: "store_code",
      header: "CÓDIGO",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.store_code}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "name",
      header: "NOMBRE",
      meta: { filterButton: true },
    },
    {
      accessorKey: "city",
      header: "CIUDAD",
      meta: { filterButton: true },
    },
    {
      accessorKey: "users",
      header: "Usuarios",
    },
    {
      accessorKey: "cashboxes",
      header: "CAJAS",
    },
    {
      accessorKey: "status",
      header: "ESTATUS",
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-1">
         
        </div>
      ),
    },
    {
      accessorKey: "created",
      header: "CREACIÓN",
    },
    {
      id: "ACCIONES",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-1">
          <Link to={`/inventory/branch-points-sale/edit/${row.original.id}`}>
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
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={stores.data}
      columns={columns}
      searchFilter="store_code"
      searchNameFilter="Buscar por código"
      isCheckAll={true}
    />
  );
};

export default BranchesTab;
