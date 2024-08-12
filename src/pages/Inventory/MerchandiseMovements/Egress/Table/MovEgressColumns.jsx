import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";
import { Link } from "react-router-dom";

export const MovEgressColumns = [
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
    id: "category",
    accessorKey: "category",
    header: "CATEGORÍA",
    meta: { filterButton: true },
  },
  {
    id: "name",
    accessorKey: "name",
    header: "NOMBRE",
    meta: { filterButton: true },
  },
  {
    id: "unitMeasurement",
    accessorKey: "unitMeasurement",
    header: "UNIDAD MEDIDA",
  },
  {
    id: "accountingAccount",
    accessorKey: "accountingAccount",
    header: "CUENTA CONTABLE",
  },
  {
    id: "type",
    accessorKey: "type",
    header: "TIPO",
  },
  {
    id: "createdBy",
    accessorKey: "createdBy",
    header: "CREADO POR",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src={row?.original?.createdBy} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: "CREACIÓN",
  },
  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row }) => (
      <Link
        to={
          "/inventory/merchandise-movements/egress/record/" + row?.original?.id
        }
        className="flex w-full items-center justify-center"
      >
        <IonIcon icon={informationCircle} className="text-gris2-500 h-6 w-6" />
      </Link>
    ),
  },
];
