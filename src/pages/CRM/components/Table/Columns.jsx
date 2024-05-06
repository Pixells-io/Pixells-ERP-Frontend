import React from "react";

import { IonIcon } from "@ionic/react";
import {
  bookmark,
  chatbubbleEllipses,
  informationCircle,
} from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const columns = [
  {
    accessorKey: "bussines_name",
    header: "COMPANY",
  },
  {
    accessorKey: "service",
    header: () => <div>SERVICE</div>,
    cell: ({ row }) => {
      const services = row.getValue("service");
      const serviceStrings = services.map((service) => service.name).join(", ");
      //   console.log(serviceStrings);

      return <div>{serviceStrings}</div>;
    },
  },
  // {
  //     accessorKey: "amount",
  //     header: () => <div className="text-right">Amount</div>,
  //     cell: ({ row }) => {
  //         const amount = parseFloat(row.getValue("amount"));
  //         const formatted = new Intl.NumberFormat("en-US", {
  //             style: "currency",
  //             currency: "USD",
  //         }).format(amount);

  //         return <div className="text-right font-medium">{formatted}</div>;
  //     },
  // },
  {
    accessorKey: "contact",
    header: "CONTACT",
  },
  {
    accessorKey: "phone",
    header: "PHONE",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 text-[#696974]">
          <Link
            to={`/crm/leads/${row?.original?.id}`}
            className="flex items-center"
          >
            <IonIcon icon={informationCircle} className="w-5 h-5"></IonIcon>
          </Link>
          <IonIcon icon={chatbubbleEllipses} className="w-5 h-5"></IonIcon>
          <IonIcon icon={bookmark} className="w-5 h-5"></IonIcon>
        </div>
      );
    },
  },
];
