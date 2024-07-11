import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";

export const ChecksColumns = [
  {
    id: "date",
    header: "Fecha",
    accessorKey: "date",
    cell: ({ row }) => {
      return (
        <label className="font-roboto text-xs font-normal text-[#44444F]">
          {row?.original?.date}
        </label>
      );
    },
  },
  {
    id: "amount",
    header: "Importe",
    accessorKey: "amount",
    cell: ({ row }) => {
      return (
        <label className="font-roboto text-xs font-normal text-[#44444F]">
          {" "}
          ${row?.original?.amount}
        </label>
      );
    },
  },
  {
    id: "country",
    header: "País",
    accessorKey: "country",
    cell: ({ row }) => {
      return (
        <label className="font-roboto text-xs font-normal text-[#44444F]">
          {row?.original?.country}
        </label>
      );
    },
  },
  {
    id: "checkName",
    header: "Nombre del Cheque",
    accessorKey: "checkName",
    cell: ({ row }) => {
      return (
        <label className="font-roboto text-xs font-normal text-[#44444F]">
          {row?.original?.checkName}
        </label>
      );
    },
  },
  {
    id: "branch",
    header: "Sucursal",
    accessorKey: "branch",
    cell: ({ row }) => {
      return (
        <label className="font-roboto text-xs font-normal text-[#44444F]">
          {row?.original?.branch}
        </label>
      );
    },
  },
  {
    id: "account",
    header: "Cuenta",
    accessorKey: "account",
    cell: ({ row }) => {
      return (
        <label className="font-roboto text-xs font-normal text-[#44444F]">
          {row?.original?.account}
        </label>
      );
    },
  },
  {
    id: "noCheck",
    header: "No. del cheque",
    accessorKey: "noCheck",
    cell: ({ row }) => {
      return (
        <div className="flex items-end justify-center gap-2">
          <label className="font-roboto text-xs font-normal text-[#44444F]">
            {row?.original?.noCheck}
          </label>
          
          <IonIcon
            icon={closeCircle}
            size="small"
            className="cursor-pointer text-grisDisabled"
          ></IonIcon>
        </div>
      );
    },
  },
];
