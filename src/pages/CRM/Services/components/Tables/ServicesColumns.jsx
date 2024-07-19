import React from "react";

import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

export const ServicesColumns = [
    {
        id: "name",
        accessorKey: "name",
        header: "NAME",
        
      },
      {
        id: "description",
        accessorKey: "description",
        header: "DESCRIPTION"
      },
      {
        id: "category",
        accessorKey: "category",
        header: "CATEGORY",
        meta: {
            filterButton: true
          },
          filterFn: "equals",
      },
      {
        id: "position",
        accessorKey: "position",
        header: "POSITION"
      },
      {
        id: "created_at",
        accessorKey: "created_at",
        header: "CREATED"
      },
      {
        id: "actions",
        accessorKey: "actions",
        header: "ACTIONS",
        cell: ({ row }) => {
          // console.log(row?.original?.id);
          return (
            <div className="flex gap-2 text-[#696974]">
              <a href={`/crm/services/${row.original.id}`}>
                <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
              </a>
            </div>
          );
        },
      },
];
