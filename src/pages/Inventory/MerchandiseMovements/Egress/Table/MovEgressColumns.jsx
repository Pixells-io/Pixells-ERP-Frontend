import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    header: () => (
      <div className="">
        <p className="text-center">
          ACCIONES
        </p>
      </div>
    ), 
    cell: ({ row }) => (
      <Link
        to={
          "/inventory/merchandise-movements/egress/record/" + row?.original?.id
        }
        className="flex w-full items-center justify-center"
      >
         <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
            icon={informationCircleOutline}
            className="text-[#44444f] w-5 h-5"
          />
          </Button>
      </Link>
    ),
  },
];
