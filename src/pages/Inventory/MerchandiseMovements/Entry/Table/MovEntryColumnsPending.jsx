import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const MovEntryColumnsPending = [
  {
    id: "code",
    accessorKey: "code",
    header: "CODIGO",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <label>{row?.original?.code}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  {
    id: "supplier",
    accessorKey: "supplier",
    header: "PROVEEDOR",
  },
  {
    id: "inventory_in",
    accessorKey: "inventory_out",
    header: "ALMACEN",
  },
  {
    id: "pending",
    accessorKey: "pending",
    header: "PEND.",
  },
  {
    id: "createdBy",
    accessorKey: "createdBy",
    header: "CREADO POR",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Avatar className="h-6 w-6">
          <AvatarImage
            src={row?.original?.user?.img}
            alt={row?.original?.user?.name}
          />
        </Avatar>
      </div>
    ),
  },
  {
    id: "created",
    accessorKey: "date",
    header: "CREACIÓN",
  },
  {
    id: "acciones",
    accessorKey: "acciones",
    header: () => (
      <div className="">
        <p className="text-center">ACCIONES</p>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Link to={`/shopping/request-orders/edit/${row.original?.id}`}>
          <IonIcon
            icon={informationCircleOutline}
            className="h-5 w-5 text-[#44444f]"
          />
        </Link>
      </div>
    ),
  },
];
