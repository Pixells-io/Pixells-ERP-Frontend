import React from "react";

import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

export const CombosColumns = [
  {
    id: "name",
    accessorKey: "name",
    header: "NOMBRE",
  },
  {
    id: "services",
    accessorKey: "services",
    header: "SERVICIOS",
  },
  {
    id: "created_at",
    accessorKey: "created_at",
    header: "CREADO",
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "ACCIONES",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 text-[#696974]">
          <a href={``}>
            <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          </a>
        </div>
      );
    },
  },
];
