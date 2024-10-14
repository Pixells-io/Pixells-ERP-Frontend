import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import StatusInProgress from "../../Components/StatusInformation/StatusInProgress";
import StatusDone from "../../Components/StatusInformation/StatusDone";
import { formatNumber } from "../../Components/utils";

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
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "noDoc",
    header: "NO. DOC",
    accessorKey: "noDoc",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "typeDoc",
    header: "TIPO DOC.",
    accessorKey: "typeDoc",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
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
      return <>{formatNumber(row?.original?.total)}</>;
    },
  },
  {
    id: "status",
    header: "ESTATUS",
    accessorKey: "status",
    cell: ({ row }) => {
      
      return <> 
      {row?.original?.status == "inProgress" ? <StatusInProgress /> : 
      row?.original?.status == "done" && <StatusDone />}
      </>;
    },
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
            <IonIcon icon={informationCircleOutline} className="h-5 w-5 text-[#696974]"></IonIcon>
            </Link>
        </div>
      );
    },
  },
];
