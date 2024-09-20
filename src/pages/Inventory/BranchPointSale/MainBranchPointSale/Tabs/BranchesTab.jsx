import React from "react";
import { IonIcon } from "@ionic/react";
import { trashOutline, informationCircleOutline, add } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const BranchesTab = () => {
  const columns = [
    {
      accessorKey: "code",
      header: "CÓDIGO",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.code}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "category",
      header: "CATEGORÍA",
      meta: { filterButton: true },
    },
    {
      accessorKey: "name",
      header: "NOMBRE",
      meta: { filterButton: true },
    },
    {
      accessorKey: "measure",
      header: "UNIDAD MEDIDA",
    },
    {
      accessorKey: "type",
      header: "TIPO",
      cell: ({ row }) => {
        return (
          <>
            {row.original?.type == 0 ? (
              <span>Simple</span>
            ) : (
              <span>Variable</span>
            )}
          </>
        );
      },
    },
    {
      accessorKey: "createdBy",
      header: "CREADO POR",
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
          <Link to={`/inventory/edit/${row.original.id}`}>
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
              openDestroyProductModal(row.original?.name, row.original?.id)
            }
          >
            <IonIcon icon={trashOutline} className="h-5 w-5 text-[#696974]" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={[]}
      columns={columns}
      searchFilter="code"
      searchNameFilter="Buscar por código"
      isCheckAll={true}
    />
  );
};

export default BranchesTab;
