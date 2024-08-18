import React from "react";
import DataTable from "../Tabs/Datatable";

const WarehouseForm = () => {
    const columns = [
        { accessorKey: 'codigoAlmacen', header: 'Código Almacén' },
        { accessorKey: 'nombreAlmacen', header: 'Nombre Almacén' },
        { 
            accessorKey: 'enStock',
            cell: ({ getValue }) => (
              <div className="py-5 border-l border-r border-primario w-full h-full flex items-center justify-center">
                    {getValue()}
                </div>
            ),
            header: () => (
              <div className=" border-l border-t border-r border-primario rounded-t-lg p-4">
                    En Stock
                </div>
            )
        },
        { 
            accessorKey: 'comprometido',
            cell: ({ getValue }) => (
              <div className="py-5 border-l border-r border-primario w-full h-full flex items-center justify-center">
                    {getValue()}
                </div>
            ),
            header: () => (
              <div className="border-l border-t border-r border-primario rounded-t-lg p-6">
                    Comprometido
                </div>
            )
        },
        { 
            accessorKey: 'pedido', 
            cell: ({ getValue }) => (
              <div className="py-5 border-l border-r border-primario w-full h-full flex items-center justify-center">
                    {getValue()}
                </div>
            ),
            header: () => (
              <div className="border-l border-t border-r border-primario rounded-t-lg p-6">
                    Pedido
                </div>
            )
        },
        { 
            accessorKey: 'disponible',
            cell: ({ getValue }) => (
                <div className="py-5 border-l border-r border-primario w-full h-full flex items-center justify-center">
                    {getValue()}
                </div>
            ),
            header: () => (
                <div className="border-l border-t border-r border-primario rounded-t-lg p-6">
                    Disponible
                </div>
            ),
           
        },
        { accessorKey: 'ctotal', header: 'Costo Total Art.' },
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
        <div className="w-full">
            <DataTable 
                columns={columns} 
                data={data}   
            />
        </div>
    );
};

export default WarehouseForm;
