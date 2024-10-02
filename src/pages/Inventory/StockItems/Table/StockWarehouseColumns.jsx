import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const StockWarehouseColumns = [
  {
    accessorKey: "warehouseCode",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
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
    id: "warehouseName",
    accessorKey: "warehouseName",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
        NOMBRE ALMACÉN
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
    accessorKey: "inStock",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#69D8D64D] bg-opacity-30 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#69D8D64D] bg-opacity-30 text-center font-poppins text-sm text-[#44444F]">
        EN STOCK
      </div>
    ),
  },
  {
    accessorKey: "committed", 
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#69D8D666] bg-opacity-40 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#69D8D666] bg-opacity-40 text-center font-poppins text-sm text-[#44444F]">
        COMPROMETIDO
      </div>
    ),
  },
  {
    accessorKey: "order",
    cell: ({ getValue }) => (
      <div className="flex h-full w-full items-center justify-center bg-[#69D8D680] bg-opacity-50 py-5 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#69D8D680] bg-opacity-50 text-center font-poppins text-sm text-[#44444F]">
        PEDIDO
      </div>
    ),
  },
  {
    accessorKey: "available",
    cell: ({ getValue }) => (
      <div className="flex h-full p-0 w-full items-center justify-center bg-[#69D8D699] bg-opacity-60 py-5 px-4 font-roboto text-sm font-normal text-[#44444F]">
        {getValue()}
      </div>
    ),
    header: () => (
      <div className="flex h-full items-center justify-center whitespace-nowrap rounded-t-[10px] border-none bg-[#69D8D699] bg-opacity-60 text-center font-poppins text-sm text-[#44444F]">
        DISPONIBLE
      </div>
    ),
  },
  {
    accessorKey: "ctotal",
    header: () => (
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
        COSTO TOTAL ART.
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
      <div className="flex h-full items-center whitespace-nowrap font-poppins text-sm text-[#44444F]">
         
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="flex items-center">
      <Link to={`/inventory/stock-items/product/edit/${getValue()}`}>
           <span className="text-[#5B89FF]">Ver Ubicacion</span>
       </Link>
   </div>
    ),
    meta: { filterButton: true },
  },
];