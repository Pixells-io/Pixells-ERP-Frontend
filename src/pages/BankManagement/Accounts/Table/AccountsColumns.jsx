import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline, create } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import ModalDeleteBankAccount from "../Modals/ModalDeleteBankAccount";

export const AccountsColumns = [
  {
    id: "name",
    header: "NOMBRE",
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <label>{row?.original?.name}</label>
        </div>
      );
    },
    meta: {
      filterButton: true,
    },
    // filterFn: "equals",
  },
  {
    id: "bank",
    header: "BANCO",
    accessorKey: "bank",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "type",
    header: "TIPO",
    accessorKey: "type",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "account_number",
    header: "NO. CUENTA",
    accessorKey: "account_number",
  },
  {
    id: "balance",
    header: "SALDO",
    accessorKey: "balance",
  },
  {
    id: "actions",
    header: "ACTIONS",
    accessorKey: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1 text-[#696974]">
          <Link
              to={`/bank-management/edit-bank-account/` + row?.original?.id}
            className="flex items-center"
          >
            <IonIcon icon={informationCircleOutline} className="h-5 w-5 text-[#696974]"></IonIcon>
          </Link>
          <ModalDeleteBankAccount bank_account_id={row?.original?.id} bankAccount_name={row?.original?.name} />
        </div>
      );
    },
  },
];
