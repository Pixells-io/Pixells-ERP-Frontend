import React from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

 export const ConfigColumns = [
    {
      accessorKey: "id",
      header: "Código",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.id}</label>
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
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Link to={`/inventory/warehouse-locations/config/${row.original.id}`}>
            <Button
              type="button"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={informationCircle}
                className="h-5 w-5 text-[#696974]"
              />
            </Button>
          </Link>
        </div>
      ),
    },
  ];

 