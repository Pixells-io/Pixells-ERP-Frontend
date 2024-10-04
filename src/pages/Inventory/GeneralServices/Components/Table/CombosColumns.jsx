import React from "react";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";

export const CombosColumns = [
  {
    id: "name",
    accessorKey: "name",
    header: "NOMBRE",
    meta: { filterButton: true },
  },
  {
    id: "services",
    accessorKey: "services",
    header: "SERVICIOS",
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
          <IonIcon
            icon={informationCircleOutline}
            className="h-5 w-5 text-[#696974]"
          />
        </div>
      );
    },
  },
];
