import React from "react";
import DataTable from "../Tabs/Datatable";

const WarehouseForm = () => {
  const columns = [
    { accessorKey: "codigoAlmacen", header: "Código Almacén" },
    { accessorKey: "nombreAlmacen", header: "Nombre Almacén" },
    {
      accessorKey: "enStock",
      cell: ({ getValue }) => (
        <div className="flex h-full w-full items-center justify-center bg-[#69CDD84D] py-5">
          {getValue()}
        </div>
      ),
      header: () => (
        <div className="rounded-t-lg bg-[#69CDD84D] p-6">En Stock</div>
      ),
    },
    {
      accessorKey: "comprometido",
      cell: ({ getValue }) => (
        <div className="flex h-full w-full items-center justify-center bg-[#69CDD866] py-5">
          {getValue()}
        </div>
      ),
      header: () => (
        <div className="rounded-t-lg bg-[#69CDD866] p-6">Comprometido</div>
      ),
    },
    {
      accessorKey: "pedido",
      cell: ({ getValue }) => (
        <div className="flex h-full w-full items-center justify-center bg-[#69CDD880] py-5">
          {getValue()}
        </div>
      ),
      header: () => (
        <div className="rounded-t-lg bg-[#69CDD880] p-6">Pedido</div>
      ),
    },
    {
      accessorKey: "disponible",
      cell: ({ getValue }) => (
        <div className="flex h-full w-full items-center justify-center bg-[#69CDD899] py-5">
          {getValue()}
        </div>
      ),
      header: () => (
        <div className="rounded-t-lg bg-[#69CDD899] p-6">Disponible</div>
      ),
    },
    {
      accessorKey: "ctotal",
      cell: ({ getValue }) => (
        <div className="flex h-full w-full items-center justify-center bg-[#69CDD8B2] py-5">
          {getValue()}
        </div>
      ),
      header: () => (
        <div className="rounded-t-lg bg-[#69CDD8B2] p-6">Costo Art.</div>
      ),
    },
  ];

  const data = [
    {
      codigoAlmacen: "A001",
      nombreAlmacen: "Almacén 1",
      enStock: 100,
      comprometido: 50,
      pedido: 20,
      disponible: 30,
      ctotal: 1000,
    },
    {
      codigoAlmacen: "A002",
      nombreAlmacen: "Almacén 2",
      enStock: 200,
      comprometido: 100,
      pedido: 40,
      disponible: 60,
      ctotal: 2000,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
    {
      codigoAlmacen: "A003",
      nombreAlmacen: "Almacén 3",
      enStock: 123,
      comprometido: 330,
      pedido: 240,
      disponible: 360,
      ctotal: 222,
    },
  ];

  return (
    <div className="h-full w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default WarehouseForm;
