import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const TraceabilityColumns = [
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
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <label>{row?.original?.name}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  {
    id: "type",
    accessorKey: "type",
    header: "TIPO",
    cell: ({ row }) => (
      <>
        {row?.original?.type === "1" ? (
          <span>Compra</span>
        ) : row?.original?.type === "2" ? (
          <span>Produccion</span>
        ) : row?.original?.type === "3" ? (
          <span>Transferencia</span>
        ) : (
          <span>Salida</span>
        )}
      </>
    ),
  },
  {
    id: "estatus",
    accessorKey: "estatus",
    header: "ESTATUS",
    cell: ({ row }) => (
      <>
        {row?.original?.status === "1" ? (
          <span>Pendiente</span>
        ) : row?.original?.status === "2" ? (
          <span>Enviado</span>
        ) : row?.original?.status === "3" ? (
          <span>Recibido</span>
        ) : row?.original?.status === "4" ? (
          <span>Parcial</span>
        ) : row?.original?.status === "5" ? (
          <span>Problema</span>
        ) : row?.original?.status === "6" ? (
          <span>Cancelado</span>
        ) : row?.original?.status === "6" ? (
          <span>Completado</span>
        ) : (
          false
        )}
      </>
    ),
  },
  {
    id: "inventory_in",
    accessorKey: "inventory_out",
    header: "ALMACEN",
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
