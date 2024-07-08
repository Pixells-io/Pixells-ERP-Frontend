import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle, create, trash } from "ionicons/icons";

export const AddCollectionsColumns = [
  {
    id: "concept",
    header: "CONCEPTO",
    accessorKey: "concept",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <input
            className="accent-primarioBotones"
            type="checkbox"
            value="All"
            // onClick={() => onSelectFilter("crm")}
            // checked={filters.includes("crm")}
            readOnly
          />
          <label>{row?.original?.concept}</label>
        </div>
      );
    },
  },
  {
    id: "typeDoc",
    header: "TIPO. DOC",
    accessorKey: "typeDoc",
  },
  {
    id: "creditDays",
    header: "Días de crédito",
    accessorKey: "creditDays",
  },
  {
    id: "overdueBalance",
    header: "SALDO VENCIDO",
    accessorKey: "overdueBalance",
    cell: ({ row }) => {
      return <>${row?.original?.overdueBalance}</>;
    },
  },
  {
    id: "discount",
    header: "DESC %",
    accessorKey: "discount",
    cell: ({ row }) => {
      return <>{row?.original?.discount}%</>;
    },
  },
  {
    id: "observations",
    header: "Observaciónes",
    accessorKey: "observations",
  },
  {
    id: "total",
    header: "TOTAL",
    accessorKey: "total",
    cell: ({ row }) => {
      return <>${row?.original?.total}</>;
    },
  },
];
