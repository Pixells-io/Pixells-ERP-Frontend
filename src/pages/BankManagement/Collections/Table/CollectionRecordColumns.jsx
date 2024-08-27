import { formatNumber } from "../../Components/utils";

export const CollectionRecordColumns = [
  {
    id: "concept",
    header: "Concepto",
    accessorKey: "concept",
  },
  {
    id: "noDoc",
    header: "No. Doc",
    accessorKey: "noDoc",
  },
  {
    id: "typeDoc",
    header: "Tipo Doc..",
    accessorKey: "typeDoc",
  },
  {
    id: "paymentMethod",
    header: "Forma de Pago",
    accessorKey: "paymentMethod",
  },
  {
    id: "total",
    header: "Total",
    accessorKey: "total",
    cell: ({ row }) => {
      return <>{formatNumber(row?.original?.total)}</>;
    },
  },
  {
    id: "discount",
    header: "Desc %",
    accessorKey: "discount",
    cell: ({ row }) => {
      return <>{row?.original?.discount}%</>;
    },
  },
  {
    id: "outstandingBalance",
    header: "Saldo Pendiente",
    accessorKey: "outstandingBalance",
    cell: ({ row }) => {
      return <>{formatNumber(row?.original?.outstandingBalance)}</>;
    },
  },
  {
    id: "observations",
    header: "Observaciones",
    accessorKey: "observations",
  },
];
