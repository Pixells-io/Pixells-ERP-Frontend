import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";

export const CategoriesColumns = [
  {
    id: "name",
    accessorKey: "name",
    header: "NOMBRE",
    meta: { filterButton: true },
  },
  {
    id: "description",
    accessorKey: "description",
    header: "DESCRIPCION",
    meta: { filterButton: true },
  },

  {
    id: "created_at",
    accessorKey: "created_at",
    header: "CREADO",
    meta: { filterButton: true },
  },

  {
    id: "actions",
    accessorKey: "actions",
    header: "ACCIONES",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Link to={`/inventory/general-services/category/${row?.original?.id}`} >
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
      );
    },
  },
];
