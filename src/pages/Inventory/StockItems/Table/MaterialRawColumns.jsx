import React from "react";
import { Link } from "react-router-dom";

export const MaterialColumns = [
  {
    id: "code",
    accessorKey: "code",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
        CÓDIGO
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
  },
  {
    id: "name",
    accessorKey: "name",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
        NOMBRE
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    meta: { filterButton: true },
  },
  {
    id: "ubication",
    accessorKey: "ubication",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
        UBICACION
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    meta: { filterButton: true },
  },
  {
    accessorKey: "stock",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#69D8B34D] bg-opacity-30 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#69D8B34D] bg-opacity-30 text-center font-poppins text-sm text-[#44444F]">
        STOCK
      </div>
    ),
  },
  {
    accessorKey: "engaged",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#D8A4694D] bg-opacity-30 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#D8A4694D] bg-opacity-30 text-center font-poppins text-sm text-[#44444F]">
        COMP.
      </div>
    ),
  },
  {
    accessorKey: "order",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#CBD8694D] bg-opacity-30 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#CBD8694D] bg-opacity-30 text-center font-poppins text-sm text-[#44444F]">
        PEDIDO
      </div>
    ),
  },
  {
    accessorKey: "available",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#69D8D64D] bg-opacity-30 p-0 px-4 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#69D8D64D] bg-opacity-30 text-center font-poppins text-sm text-[#44444F]">
        DISP.
      </div>
    ),
  },
  {
    accessorKey: "cost",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
        COSTO TOTAL
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="font-roboto text-sm font-semibold text-[#44444F]">
        {getValue()}
      </div>
    ),
  },
  {
    id: "variable",
    accessorKey: "variable",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]"></div>
    ),
    cell: ({ getValue, row }) => (
      <div className="flex items-center">
        {row?.original?.variations_val === true ? (
          <Link to={`/inventory/stock-items/product/edit/${getValue()}`}>
            <span className="text-[#5B89FF]">Ver Variables</span>
          </Link>
        ) : (
          false
        )}
      </div>
    ),
    meta: { filterButton: true },
  },
];
