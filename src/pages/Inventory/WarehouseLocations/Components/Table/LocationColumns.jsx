import React from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

export const LocationColumns = [
  {
    accessorKey: "id",
    header: "Código",
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
    accessorKey: "name",
    header: "Nombre",
    meta: { filterButton: true },
  },
  {
    accessorKey: "min_quantity",
    header: "Cantidad Mínima",
  },
  {
    accessorKey: "max_quantity",
    header: "Cantidad Máxima",
  },
  {
    accessorKey: "max_weight",
    header: "Peso Máximo",
  },
  {
    accessorKey: "active",
    header: "Estado",
    cell: ({ row }) => {
      const active = row.original.active;
      const color = active === 1 ? "text-[#00A259]" : "text-red-500";
      const text = active === 1 ? "Activo" : "Inactivo";
      const bgColor = active === 1 ? "bg-[#00A25940]" : "bg-red-100";
      return (
        <div className={`flex w-fit items-center rounded-full px-4 ${bgColor}`}>
          <span className={`text-[11px] font-semibold ${color}`}>{text}</span>
        </div>
      );
    }
  },
  {
    accessorKey: "created",
    header: "Creación",
  },
];