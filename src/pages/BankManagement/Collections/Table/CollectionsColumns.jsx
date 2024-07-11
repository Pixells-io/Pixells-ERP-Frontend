import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create, trash } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import StatusInProgress from "../../Components/StatusInformation/StatusInProgress";
import StatusDone from "../../Components/StatusInformation/StatusDone";

export const CollectionsColumns = [
  {
    id: "concept",
    header: "CONCEPTO",
    accessorKey: "concept",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <label>{row?.original?.concept}</label>
        </div>
      );
    },
  },
  {
    id: "noDoc",
    header: "NO. DOC",
    accessorKey: "noDoc",
  },
  {
    id: "typeDoc",
    header: "TIPO DOC.",
    accessorKey: "typeDoc",
  },
  {
    id: "paymentMethod",
    header: "FORMA PAGO",
    accessorKey: "paymentMethod",
  },
  {
    id: "total",
    header: "TOTAL",
    accessorKey: "total",
    cell: ({ row }) => {
      return <> ${row?.original?.total}</>;
    },
  },
  {
    id: "status",
    header: "ESTATUS",
    accessorKey: "status",
    cell: ({ row }) => {
      
      return <> 
      {row?.original?.status == 2 ? <StatusInProgress /> : 
      row?.original?.status == 3 && <StatusDone />}
      </>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1 text-[#696974]">
          <Link
            // to={`/crm/leads/${row?.original?.id}`}
            className="flex items-center"
          >
            <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          </Link>
        </div>
      );
    },
  },
];
