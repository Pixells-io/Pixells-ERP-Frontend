import React from "react";

import { IonIcon } from "@ionic/react";
import {
  bookmark,
  chatbubbleEllipses,
  informationCircle,
} from "ionicons/icons";
import { Link } from "react-router-dom";

export const clientColumns = [
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => {
      const info = row.getValue("type");
      return <div>{info == 1 ? "Person" : "Corp"}</div>;
    },
  },
  {
    accessorKey: "business_name",
    header: "COMPANY",
  },

  {
    accessorKey: "contact_name",
    header: "CONTACT",
  },
  {
    accessorKey: "contact_phone",
    header: "PHONE",
  },
  {
    accessorKey: "contact_email",
    header: "EMAIL",
  },
  {
    accessorKey: "services",
    header: () => <div>SERVICE</div>,
    cell: ({ row }) => {
      const services = row.getValue("services");
      const serviceStrings = services
        .map((service) => service.service.name)
        .join(", ");
      // console.log(serviceStrings);

      return <div>{serviceStrings}</div>;
    },
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
