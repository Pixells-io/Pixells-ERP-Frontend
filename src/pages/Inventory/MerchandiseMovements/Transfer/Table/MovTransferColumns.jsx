import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import {
  checkmarkCircleOutline,
  closeCircleOutline,
  informationCircleOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import ModalCancelTransfer from "../Entry/Modal/ModalCancelTransfer";

export const MovTransferColumns = [
  {
    id: "code",
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
    id: "status",
    accessorKey: "status",
    header: "ESTATUS",
    cell: ({ row }) => (
      <div className="flex items-center">
        {row?.original?.status == 1 ? (
          <span className="rounded-2xl bg-blue-100 px-2 py-1 text-xs text-primario">
            Pendiente
          </span>
        ) : row?.original?.status == 2 ? (
          <span className="rounded-2xl bg-blue-100 px-2 py-1 text-xs text-primario">
            Enviado
          </span>
        ) : row?.original?.status == 3 ? (
          <span className="rounded-2xl bg-green-200 px-2 py-1 text-xs text-green-600">
            Recibido
          </span>
        ) : row?.original?.status == 4 ? (
          <span className="rounded-2xl bg-yellow-200 px-2 py-1 text-xs text-yellow-600">
            Parcial
          </span>
        ) : row?.original?.status == 5 ? (
          <span className="rounded-2xl bg-red-200 px-2 py-1 text-xs text-red-600">
            Problema
          </span>
        ) : row?.original?.status == 6 ? (
          <span className="rounded-2xl bg-red-200 px-2 py-1 text-xs text-red-600">
            Cancelado
          </span>
        ) : row?.original?.status == 7 ? (
          <span className="rounded-2xl bg-green-200 px-2 py-1 text-xs text-green-600">
            Completo
          </span>
        ) : (
          false
        )}
      </div>
    ),
  },
  {
    id: "quantity",
    accessorKey: "quantity",
    header: "CANT. DE ARTICULOS",
    meta: { filterButton: true },
  },
  {
    id: "from",
    accessorKey: "inventory_out",
    header: "DE ALMACÉN",
  },
  {
    id: "to",
    accessorKey: "inventory_in",
    header: "ALMACÉN DESTINO",
  },
  {
    id: "createdBy",
    accessorKey: "user",
    header: "SOLICITANTE",
    cell: ({ row }) => (
      <div className="flex items-center">
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
    id: "createdAt",
    accessorKey: "date",
    header: "FECHA",
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
      <div className="flex justify-center gap-4">
        {row?.original?.status == 2 ? (
          <>
            <Link
              to={`/inventory/merchandise-movements/transfer/entry/${row?.original?.id}`}
            >
              <IonIcon
                icon={checkmarkCircleOutline}
                className="h-5 w-5 text-[#44444f]"
              />
            </Link>
            <ModalCancelTransfer transfer_id={row?.original?.id} />
          </>
        ) : (
          <>
            <Link
              to={`/inventory/merchandise-movements/transfer/record/${row?.original?.id}`}
            >
              <IonIcon
                icon={informationCircleOutline}
                className="h-5 w-5 text-[#44444f]"
              />
            </Link>
          </>
        )}
      </div>
    ),
  },
];
