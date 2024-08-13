import React from "react";

export const StockWarehouseColumns = [
  {
    accessorKey: "warehouseCode",
    header: () => (
      <div className="flex h-full items-center font-roboto text-sm font-semibold text-grisText">
        CÓDIGO ALMACÉN
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
  },
  {
    accessorKey: "warehouseName",
    header: () => (
      <div className="flex h-full items-center font-roboto text-sm font-semibold text-grisText">
        NOMBRE ALMACÉN
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
  },
  {
    accessorKey: "inStock",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center border-l border-r border-primario py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center rounded-t-lg border-l border-r border-t border-primario px-0 font-roboto text-sm font-semibold text-grisText">
        EN STOCK
      </div>
    ),
  },
  {
    accessorKey: "committed",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center border-l border-r border-primario py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center rounded-t-lg border-l border-r border-t border-primario px-0 font-roboto text-sm font-semibold text-grisText">
        COMPROMETIDO
      </div>
    ),
  },
  {
    accessorKey: "order",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center border-l border-r border-primario py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center rounded-t-lg border-l border-r border-t border-primario px-0 font-roboto text-sm font-semibold text-grisText">
        PEDIDO
      </div>
    ),
  },
  {
    accessorKey: "available",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center border-l border-r border-primario py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center rounded-t-lg border-l border-r border-t border-primario px-0 font-roboto text-sm font-semibold text-grisText">
        DISPONIBLE
      </div>
    ),
  },
  {
    accessorKey: "ctotal",
    header: () => (
      <div className="flex h-full items-center font-roboto text-sm font-semibold text-grisText">
        COSTO TOTAL ART.
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-semibold text-[#44444F]">
        {getValue()}
      </div>
    ),
  },
];
