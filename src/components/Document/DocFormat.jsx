import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";

/**
 *
 * @component
 * @example
 * const documentInfo = {
 *   logoUrl: "https://example.com/logo.png",
 *   qrUrl:"https://example.com/qr.png"
 *   numero: "1456",
 *   fechaDoc: "15 Junio 2024",
 *   fechaEntrega: "17 Junio 2024",
 *   proveedor: {
 *     nombre: "Coca Cola inc.",
 *     direccion: "Santa Sofia 1456-4 Zapopan, Jalisco",
 *     telefono: "01222",
 *     descripcion: "proveedor ejemplo",
 *     correo: "email@correo.com"
 *   },
 *   entrega: {
 *     direccion: "Av. Revolución 1234, Ciudad de México",
 *     telefono: "55 1234 5678",
 *     descripcion: "Entrega a domicilio",
 *     correo: "entrega@example.com"
 *   },
 *   totales: {
 *     subtotal: "353,280.00",
 *     impuesto: "56,524.00",
 *     retencion: "0.00",
 *     total: "409,804.00"
 *   }
 * };
 *
 * const items = [
 *   {
 *     item: "Producto 1",
 *     codigo: "001",
 *     valor: 100,
 *     descuento: 10,
 *     impuesto: 5,
 *     cantidad: 2,
 *     unidad: "pza",
 *     fecha: "2024-07-29",
 *     total: 190,
 *   },
 *   // ... más items
 * ];
 *
 * return (
 *   <Document
 *     documentType="factura"
 *     documentInfo={documentInfo}
 *     items={items}
 *   />
 * );
 */

const DocumentFormat = ({ documentType, documentInfo, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const obtenerTitulo = () => {
    switch (documentType) {
      case "orden":
        return "ORDEN DE COMPRA";
      case "cotizacion":
        return "COTIZACIÓN";
      case "pedido":
        return "PEDIDO";
      case "ticket":
        return "TICKET VENTA";
      case "factura":
        return "FACTURA";
      default:
        return "COTIZACIÓN";
    }
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = items.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col overflow-auto rounded-xl bg-white p-4">
      {/* Header section */}
      <header className="mb-4 flex items-center justify-between pl-[43px] pt-[20px]">
        <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-lg border">
          {(documentType === "cotizacion") && (
            <div className="text-md absolute right-0 top-0 flex h-[40px] w-[250px] origin-top-left translate-x-[65px] translate-y-[70px] -rotate-45 transform items-center justify-center bg-[#FFB27A] pr-6 font-bold text-white">
              PENDIENTE
            </div>
          )}
          <img
            src={documentInfo.logoUrl}
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pr-[43px] pt-[36px] text-right">
          <h2 className="mb-2 text-xl font-bold">{obtenerTitulo()}</h2>
          <p>
            Numero: {documentInfo.numero}
            <br />
            Fecha de doc: {documentInfo.fechaDoc}
            <br />
            <strong>Fecha de entrega:</strong> {documentInfo.fechaEntrega}
          </p>
        </div>
      </header>

      <p className="border-[1px] border-b-primario"></p>

      {/* Provider and delivery information */}
      <section className="flex justify-between p-4">
        <p>
          <strong>Proveedor:</strong>
          <br />
          <span>{documentInfo.proveedor.nombre}</span>
          <br />
          <span>
            {documentInfo.proveedor.direccion}
            <br />
            Tel. {documentInfo.proveedor.telefono} <br />
            {documentInfo.proveedor.descripcion} <br />
            correo: {documentInfo.proveedor.correo}
          </span>
        </p>
        <p>
          <strong>Entregar por:</strong>
          <br />
          <span>
            {documentInfo.entrega.direccion}
            <br />
            Tel. {documentInfo.entrega.telefono} <br />
            {documentInfo.entrega.descripcion} <br />
            correo: {documentInfo.entrega.correo}
          </span>
        </p>
      </section>

      {/* Table section */}
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col">
        <div className="overflow-auto rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow className="border-b-primario">
                {columns.map((column) => (
                  <TableHead key={column.accessorKey}>
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column.accessorKey}>
                      {row[column.accessorKey]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex items-center justify-end p-2">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="mr-2 rounded-full"
            >
              <IonIcon icon={chevronBackOutline} className="mr-1" />
            </Button>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              variant="outline"
              className="ml-2 rounded-full"
            >
              <IonIcon icon={chevronForwardOutline} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Comments and approval section */}
      <section className="mt-2 flex justify-between p-4">
        <div>
          {(documentType === "pedido" ||
            documentType === "ticket" ||
            documentType === "factura") && (
            <>
              <h2 className="mb-2 font-roboto text-sm text-[#44444F]">
                Comentarios adicionales:
              </h2>
              <div className="h-[75px] w-[300px] rounded-lg border border-[#D7D7D7]"></div>
            </>
          )}

          {(documentType === "pedido" ||
            documentType === "ticket" ||
            documentType === "factura") && (
            <section className="justify-start-items-start ml-4 flex pb-8 pt-4">
              <p className="font-roboto text-sm text-[#44444F]">
                Aprobado por:{" "}
              </p>
            </section>
          )}
        </div>

        <div className="font-roboto text-sm text-[#44444F]">
          {(documentType === "pedido" || documentType === "ticket") && (
            <div className="grid grid-cols-2 gap-x-4 text-right">
              <span>Subtotal</span>
              <span>${documentInfo.totales.subtotal}</span>
              <span>Impuesto</span>
              <span>${documentInfo.totales.impuesto}</span>
              <span>Retención</span>
              <span>${documentInfo.totales.retencion}</span>
              <div className="col-span-2 mt-2 flex justify-between rounded-lg border-none bg-[#F6F6F6] px-2 py-2">
                <span className="pl-2 font-bold text-primarioBotones">
                  Total
                </span>
                <span className="text-right font-bold text-primarioBotones">
                  ${documentInfo.totales.total}
                </span>
              </div>
            </div>
          )}

          {documentType === "pedido" && (
            <div className="justify-center pt-4 pl-4">
              <div className="ml-4 relative flex h-[100px] w-[100px] items-end justify-end">
                <img
                  src={documentInfo.logoUrl}
                  alt="Código qr"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
          {documentType === "factura" && (
            <div className="grid grid-cols-2 gap-x-4 rounded-lg border border-grisDisabled text-right">
              <span>Subtotal</span>
              <span>${documentInfo.totales.subtotal}</span>
              <span>Impuesto</span>
              <span>${documentInfo.totales.impuesto}</span>
              <span>Retención</span>
              <span>${documentInfo.totales.retencion}</span>
              <div className="col-span-2 mt-2 flex justify-between border border-2 border-transparent border-t-grisHeading bg-[#F6F6F6] px-2 py-2">
                <span className="pl-2 font-bold text-grisHeading">Total</span>
                <span className="text-right font-bold text-grisHeading">
                  ${documentInfo.totales.total}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DocumentFormat;
