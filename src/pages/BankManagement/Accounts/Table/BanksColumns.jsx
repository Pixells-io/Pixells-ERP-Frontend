import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create, trash } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import ModalDeleteBank from "../Modals/ModalDeleteBank";

export const BanksColumns = [
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
    id: "country",
    header: "PAÍS",
    accessorKey: "country",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "bank_id",
    header: "ID DEL BANCO",
    accessorKey: "bank_id",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "phone",
    header: "TELÉFONO",
    accessorKey: "phone",
  },
  {
    id: "mail",
    header: "EMAIL",
    accessorKey: "mail",
  },
  {
    id: "actions",
    header: "ACTIONS",
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
          <Link
            to={`/bank-management/edit-bank/` + row?.original?.id}
            className="flex items-center"
          >
            <IonIcon icon={create} className="h-5 w-5"></IonIcon>
          </Link>
          <ModalDeleteBank bank_id={row?.original?.id} bank_name={row?.original?.name} />
        </div>
      );
    },
  },
];
