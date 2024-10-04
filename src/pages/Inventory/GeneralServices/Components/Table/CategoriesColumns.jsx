import React from "react";

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
          <IonIcon
            icon={informationCircleOutline}
            className="h-5 w-5 text-[#696974]"
          />
        </div>
      );
    },
  },
];
