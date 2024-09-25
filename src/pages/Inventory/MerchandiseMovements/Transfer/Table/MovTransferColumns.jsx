import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline} from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const MovTransferColumns = [
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
    header: "DESCRIPCIÓN",
    meta: { filterButton: true },
  },
  {
    id: "name",
    accessorKey: "name",
    header: "CANT. DE ARTICULOS",
    meta: { filterButton: true },
  },
  {
    id: "unitMeasurement",
    accessorKey: "unitMeasurement",
    header: "DE ALMACÉN",
  },
  {
    id: "accountingAccount",
    accessorKey: "accountingAccount",
    header: "ALMACÉN DESTINO",
  },
 
  {
    id: "createdBy",
    accessorKey: "createdBy",
    header: "SOLICITANTES",
    cell: ({ row }) => (
      <div className="flex items-center">
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
    header: "FECHA ESPERADA",
  },
  {
    id: "acciones",
    accessorKey: "acciones",
    header: () => (
      <div className="">
        <p className="text-center">
          ACCIONES
        </p>
      </div>
    ),        
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Link to="/inventory/merchandise-movements/transfer/record/1">
          <span className="text-[#5B89FF] font-roboto text-xs">Ver</span>
        </Link>
      </div>
    ),
  },
];
