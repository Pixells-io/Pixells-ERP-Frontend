import Finalized from "../../Components/status/Finalized";
import InProgress from "../../Components/status/InProgress";
import Pending from "../../Components/status/Pending";

export const WordOrderColumns = [
  {
    id: "operation",
    header: "Operación",
    accessorKey: "operation",
  },
  {
    id: "operationProcess",
    header: "Proceso de Operación",
    accessorKey: "operationProcess",
  },
  {
    id: "product",
    header: "Producto",
    accessorKey: "product",
  },
  {
    id: "amount",
    header: "Cantidad",
    accessorKey: "amount",
  },
  {
    id: "date",
    header: "Fecha",
    accessorKey: "date",
  },
  {
    id: "estimatedDuration",
    header: "Duración Estimada",
    accessorKey: "estimatedDuration",
  },
  {
    id: "realDuration",
    header: "Duración Real",
    accessorKey: "realDuration",
  },
  {
    id: "state",
    header: "Estado",
    accessorKey: "state",
    cell: ({ row }) => {
      return <>
        {

          row?.original?.state == 1 ? (<Pending />) :
          row?.original?.state == 2 ? (<InProgress />) :
          row?.original?.state == 3 && (<Finalized />)
        }
      </>;
    },
  },
];
