import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create } from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import ModalDeleteCategory from "../Modals/ModalDeleteCategory";

export const CategoryColumns = [
  {
    id: "id",
    header: "ID",
    accessorKey: "id",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <label>{row?.original?.id}</label>
        </div>
      );
    },
    meta: {
      filterButton: true,
    },
  },
  {
    id: "code",
    header: "CÓDIGO",
    accessorKey: "code",
  },
  {
    id: "name",
    header: "NOMBRE",
    accessorKey: "name",
    meta: {
      filterButton: true,
    },
    filterFn: "equals",
  },
  {
    id: "status",
    header: "ESTATUS",
    accessorKey: "status",
    cell: ({ row }) => {
      return (
        <label>{row?.original?.status == "0" ? "Inactivo" : "Activo"}</label>
      );
    },
  },
  {
    id: "created",
    header: "CREADO",
    accessorKey: "created",
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
            to={`/bank-management/edit-bank-account/` + row?.original?.id}
            className="flex items-center"
          >
            <IonIcon icon={create} className="h-5 w-5"></IonIcon>
          </Link>
          <ModalDeleteCategory category_id={row?.original?.id} />
        </div>
      );
    },
  },
];
