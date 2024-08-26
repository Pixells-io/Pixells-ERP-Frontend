import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create, trash } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";

export const BanksColumns = (editFunction, deleteFunction) => [
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
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "country",
    header: "País",
    accessorKey: "country",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "bank_id",
    header: "Id del Banco",
    accessorKey: "bank_id",
    meta: {
      filterButton: true
    },
    filterFn: "equals",
  },
  {
    id: "phone",
    header: "Teléfono",
    accessorKey: "phone",
  },
  {
    id: "mail",
    header: "Email",
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
          <button type="button" onClick={() => editFunction(row?.original?.id)}>
            <IonIcon  icon={create} className="h-5 w-5"></IonIcon>
          </button>
          <button type="button" onClick={() => deleteFunction(row?.original?.id)}>
            <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
          </button>
        </div>
      );
    },
  },
];
