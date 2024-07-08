import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create, trash } from "ionicons/icons";

export const AccountsColumns = [
  {
    id: "name",
    header: "NOMBRE",
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <input
            className="accent-primarioBotones"
            type="checkbox"
            value="All"
            // onClick={() => onSelectFilter("crm")}
            // checked={filters.includes("crm")}
            readOnly
          />
          <label>{row?.original?.name}</label>
        </div>
      );
    },
  },
  {
    id: "bank",
    header: "BANCO",
    accessorKey: "bank",
  },
  {
    id: "type",
    header: "TIPO",
    accessorKey: "type",
  },
  {
    id: "Account Number",
    header: "NO. CUENTA",
    accessorKey: "accountNumber",
  },
  {
    id: "balance",
    header: "SALDO",
    accessorKey: "balance",
    cell: ({ row }) => {
      return <>${row?.original?.balance}</>;
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
          <IonIcon icon={create} className="h-5 w-5"></IonIcon>
          <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
        </div>
      );
    },
  },
];
