import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { bookmark, chatbubbleEllipses, informationCircle } from "ionicons/icons";

export const GeneralFormulaColumns = [
  {
    id: "name",
    header: "NOMBRE",
    accessorKey: "name",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "type",
    header: "TIPO",
    accessorKey: "type",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "nationality",
    header: "NACIONALIDAD.",
    accessorKey: "nationality",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "contact",
    header: "CONTACTO",
    accessorKey: "contact",
  },
  {
    id: "email",
    header: "E-MAIL",
    accessorKey: "email",
  },
  {
    id: "actions",
    header: "ACTIONS",
    accessorKey: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1 text-[#696974]">
          <Link
            to={`/bank-management/collection/record/${row?.original?.id}`}
            className="flex items-center"
          >
            <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          </Link>
          <IonIcon className="hover:cursor-pointer h-5 w-5" icon={chatbubbleEllipses}></IonIcon>
          <IonIcon icon={bookmark} className="h-5 w-5 hover:cursor-pointer"></IonIcon>

        </div>
      );
    },
  },
];
