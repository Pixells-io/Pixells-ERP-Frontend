import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const WarehouseColumns = [
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
          <label>{row?.original?.inventory_code}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  {
    id: "name",
    accessorKey: "name",
    header: "NOMBRE",
    meta: { filterButton: true },
  },
  {
    id: "products",
    accessorKey: "products",
    header: "ARTICULOS",
    meta: { filterButton: true },
  },
  {
    id: "ubications",
    accessorKey: "ubications",
    header: "UBICACIONES",
  },
  {
    id: "created",
    accessorKey: "created",
    header: "CREADO POR",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Avatar className="h-6 w-6">
          <AvatarImage
            src={row?.original?.creator_image}
            alt={row?.original?.creator}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    id: "created",
    accessorKey: "created",
    header: "CREACIÓN",
  },
  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row }) => (
      <div className="flex items-center">
        <Link to={`/inventory/stock-items/warehouse/show/${row.original.id}`}>
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={informationCircleOutline}
              className="h-5 w-5 text-[#696974]"
            />
          </Button>
        </Link>
      </div>
    ),
  },
];
