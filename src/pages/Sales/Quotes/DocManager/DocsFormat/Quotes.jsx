import React from "react";
import TableDT from "../../components/Tabs/DocDataTable";

const Document = ({ DocumentType }) => {
  const columns = [
    { accessorKey: "item", header: "Item" },
    { accessorKey: "codigo", header: "Código" },
    { accessorKey: "valor", header: "Valor" },
    { accessorKey: "descuento", header: "Descuento" },
    { accessorKey: "impuesto", header: "Impuesto" },
    { accessorKey: "cantidad", header: "Cantidad" },
    { accessorKey: "unidad", header: "Unidad" },
    { accessorKey: "fecha", header: "Fecha" },
    { accessorKey: "total", header: "Total" },
  ];

  const data = [
    {
      item: "Producto 1",
      codigo: "001",
      valor: 100,
      descuento: 10,
      impuesto: 5,
      cantidad: 2,
      unidad: "pza",
      fecha: "2024-07-29",
      total: 190,
    },
    {
      item: "Producto 2",
      codigo: "001",
      valor: 100,
      descuento: 10,
      impuesto: 5,
      cantidad: 2,
      unidad: "pza",
      fecha: "2024-07-29",
      total: 190,
    },
    {
      item: "Producto 3",
      codigo: "001",
      valor: 100,
      descuento: 10,
      impuesto: 5,
      cantidad: 2,
      unidad: "pza",
      fecha: "2024-07-29",
      total: 190,
    },
  ];

  const obtenerTitulo = () => {
    switch (DocumentType) {
      case "cotizacion":
        return "COTIZACIÓN";
      case "ticket":
        return "TICKET VENTA";
      case "factura":
        return "FACTURA";
      default:
        return "COTIZACIÓN";
    }
  };

  return (
    <div className="flex flex-col overflow-auto rounded-xl bg-white p-4">
      <header className="mb-4 flex items-center justify-between pl-[43px] pt-[20px]">
        <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-lg border">
          {DocumentType === "cotizacion" && (
            <div className="text-md absolute right-0 top-0 flex h-[40px] w-[250px] origin-top-left translate-x-[65px] translate-y-[70px] -rotate-45 transform items-center justify-center bg-[#FFB27A] pr-6 font-bold text-white">
              PENDIENTE
            </div>
          )}
          <img
            src="https://assets.turbologo.com/assets/landing/logo_maker/Frame-413-fd071c7116548f4e90154b784ff58331d19c846b4bf82a6395d84c2b6906f088.webp"
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pr-[43px] pt-[36px] text-right">
          <h2 className="mb-2 text-xl font-bold">{obtenerTitulo()}</h2>
          <p>
            Numero: 1456
            <br />
            Fecha de doc: 15 Junio 2024
            <br />
            <strong>Fecha de entrega:</strong> 17 Junio 2024
          </p>
        </div>
      </header>

      <p className="border-[1px] border-b-primario"></p>

      <section className="flex justify-between p-4">
        <p>
          <strong>Proveedor:</strong>
          <br />
          <span>Coca Cola inc.</span>
          <br />
          <span>
            Santa Sofia 1456-4 Zapopan, Jalisco
            <br />
            Tel. 01222 <br />
            proveedor ejemplo <br />
            correo: email@correo.com
          </span>
        </p>
        <p>
          <strong>Entregar por:</strong>
          <br />
          <span>
            Santa Sofia 1456-4 Zapopan, Jalisco
            <br />
            Tel. 01222 <br />
            proveedor ejemplo <br />
            correo: email@correo.com
          </span>
        </p>
      </section>

      <div className="mx-auto mt-4 w-full max-w-4xl">
        <TableDT columns={columns} data={data} />
      </div>

      <section className="mt-2 flex justify-between p-4">
        <div>
          {(DocumentType === "ticket" || DocumentType === "factura") && (
            <>
              <h2 className="mb-2 font-roboto text-sm text-[#44444F]">
                Comentarios adicionales:
              </h2>
              <div className="h-[75px] w-[300px] rounded-lg border border-[#D7D7D7]"></div>
            </>
          )}

          {(DocumentType === "ticket" || DocumentType === "factura") && (
            <section className="justify-start-items-start ml-4 flex pb-8 pt-4">
              <p className="font-roboto text-sm text-[#44444F]">
                Aprobado por:{" "}
              </p>
            </section>
          )}
        </div>

        <div className="font-roboto text-sm text-[#44444F]">
          {DocumentType === "ticket" && (
            <div className="grid grid-cols-2 gap-x-4 text-right">
              <span>Subtotal</span>
              <span>$353,280.00</span>
              <span>Impuesto</span>
              <span>$56,524.00</span>
              <span>Retención</span>
              <span>$0.00</span>
              <div className="col-span-2 mt-2 flex justify-between rounded-lg border-none bg-[#F6F6F6] px-2 py-2">
                <span className="pl-2 font-bold text-primarioBotones">
                  Total
                </span>
                <span className="text-right font-bold text-primarioBotones">
                  $409,804.00
                </span>
              </div>
            </div>
          )}

          {DocumentType === "factura" && (
            <div className="grid grid-cols-2 gap-x-4 rounded-lg border border-grisDisabled text-right">
              <span>Subtotal</span>
              <span>$353,280.00</span>
              <span>Impuesto</span>
              <span>$56,524.00</span>
              <span>Retención</span>
              <span>$0.00</span>
              <div className="col-span-2 mt-2 flex justify-between border border-2 border-transparent border-t-grisHeading bg-[#F6F6F6] px-2 py-2">
                <span className="pl-2 font-bold text-grisHeading">Total</span>
                <span className="text-right font-bold text-grisHeading">
                  $409,804.00
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Document;
