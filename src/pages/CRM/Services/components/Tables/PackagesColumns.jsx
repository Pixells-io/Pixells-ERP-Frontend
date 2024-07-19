import React from "react";

import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

export const PackagesColumns = [
  {
    id: "name",
    accessorKey: "name",
    header: "NAME",
  },
  {
    id: "services",
    accessorKey: "services",
    header: "SERVICES",
  },
  {
    id: "created_at",
    accessorKey: "created_at",
    header: "CREATED",
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 text-[#696974]">
          <a href={`/crm/services/packages/${row.original.id}`}>
            <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          </a>
        </div>
      );
    },
  },
];
