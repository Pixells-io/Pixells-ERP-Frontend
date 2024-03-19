import React from "react";

import { IonIcon } from "@ionic/react";
import {
  bookmark,
  chatbubbleEllipses,
  informationCircle,
} from "ionicons/icons";

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
    cell: () => {
      return (
        <div className="flex gap-2 text-[#696974]">
          <IonIcon icon={informationCircle} className="w-5 h-5"></IonIcon>
          <IonIcon icon={chatbubbleEllipses} className="w-5 h-5"></IonIcon>
          <IonIcon icon={bookmark} className="w-5 h-5"></IonIcon>
        </div>
      );
    },
  },
];
