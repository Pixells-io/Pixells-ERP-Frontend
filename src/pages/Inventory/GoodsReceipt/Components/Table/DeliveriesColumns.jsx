import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const DeliveriesColumns = [
  {
    id: "code",
    accessorKey: "code",
    header: "CÓDIGO",
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
    id: "folio",
    accessorKey: "folio",
    header: "FOLIO DOC.",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <label>{row?.original?.folio}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  {
    id: "sku",
    accessorKey: "sku",
    header: "CANT. SKU.",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <label>{row?.original?.sku}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  {
    id: "c_articles",
    accessorKey: "c_articles",
    header: "CANT. ARTICULOS",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <label>{row?.original?.c_articles}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  
  {
    id: "inventory_in",
    accessorKey: "inventory_in",
    header: "ALMACEN",
  },
  {
    id: "created",
    accessorKey: "date",
    header: "CREACIÓN",
  },
  {
    id: "delivery_date",
    accessorKey: "delivery_date",
    header: "FECHA DE ENTREGA",
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
        <Link
          to={`/${row.original?.id}`}
        >
          <IonIcon
            icon={informationCircleOutline}
            className="h-5 w-5 text-[#44444f]"
          />
        </Link>
      </div>
    ),
  },
];
