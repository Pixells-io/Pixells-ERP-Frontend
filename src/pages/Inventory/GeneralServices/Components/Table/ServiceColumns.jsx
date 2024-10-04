import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline, trashOutline, } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ServiceColumns = [
  {
    id: "id",
    accessorKey: "id",
    header: "CÓDIGO",
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
    meta: { filterButton: true },
  },
  {
    id: "name",
    accessorKey: "name",
    header: "NOMBRE",
    meta: { filterButton: true },
  },
  {
    id: "category",
    accessorKey: "category",
    header: "CATEGORIAS",
    meta: { filterButton: true },
  },
  {
    id: "price",
    accessorKey: "price",
    header: "PRECIO",
  },
  {
    id: "acciones",
    header: <div className="text-center">Acciones</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-1">
        <Link to={`/inventory/general-services/service/edit/${row?.original?.id}`}>
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
        <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            onClick={() =>
              openDestroyServiceModal(row.original?.name, row.original?.id)
            }
          >
            <IonIcon icon={trashOutline} className="h-5 w-5 text-[#696974]" />
          </Button>
      </div>
    ),
  },
];
