import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comprasData = [
  { concepto: "Compras", monto: 570000.0 },
  { concepto: "Pagos", monto: 100000.0 },
];

const ventasData = [
  { concepto: "Ventas", cantidad: 2, monto: 800000.0 },
  { concepto: "Cobros", cantidad: 5, monto: 100000.0 },
];

const BalanceTable = () => {
  // Calcular totales de compras y pagos
  const comprasTotal = comprasData[0].monto; // Compras
  const pagosTotal = comprasData[1].monto; // Pagos
  const estadoCompras = comprasTotal > pagosTotal ? "Por pagar" : "Por cobrar";

  // Calcular totales de ventas y cobros
  const ventasTotal = ventasData[0].monto; // Ventas
  const cobrosTotal = ventasData[1].monto; // Cobros
  const estadoVentas = ventasTotal > cobrosTotal ? "Por cobrar" : "Se debe";

  // Calcular el estado general
  const balanceEstado = comprasTotal < ventasTotal ? "A FAVOR" : "A PAGAR";

  return (
    <div className="w-full lg:max-w-3xl">
      <Tabs defaultValue="shopping" className="w-full">
        <TabsList className="mx-3 flex gap-6 justify-start rounded-none p-0 border-b bg-inherit py-6">
          <TabsTrigger
            className="mb-[-14px] rounded-none border-slate-300 border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="shopping"
          >
            COMPRAS
          </TabsTrigger>
          <TabsTrigger
            className="mb-[-14px] rounded-none border-slate-300 border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="sale"
          >
            VENTAS
          </TabsTrigger>
          <TabsTrigger
            className="mb-[-14px] rounded-none border-slate-300 border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="balance"
          >
            SALDO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="shopping" className="h-full w-full pt-2">
          <Table className={"mx-3 overflow-hidden"}>
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Concepto
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Monto
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Estatus
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comprasData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.concepto}</TableCell>
                  <TableCell>${item.monto.toLocaleString()}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>TOTAL:</TableCell>
                <TableCell>${comprasTotal.toLocaleString()}</TableCell>
                <TableCell>
                  <span
                    className={`flex w-24 justify-center rounded-2xl ${
                      estadoCompras === "Por pagar"
                        ? "bg-[#F4CEC9] p-1 font-bold text-[#A63737]"
                        : "bg-[#CBF4C9] p-1 font-bold text-[#0E6245]"
                    }`}
                  >
                    {estadoCompras}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="sale" className="h-full w-full pt-2">
          <Table className={"mx-3 overflow-hidden"}>
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Concepto
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Cantidad
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Monto
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Estatus
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ventasData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.concepto}</TableCell>
                  <TableCell>{item.cantidad}</TableCell>
                  <TableCell>${item.monto.toLocaleString()}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>TOTAL:</TableCell>
                <TableCell></TableCell>
                <TableCell>${ventasTotal.toLocaleString()}</TableCell>
                <TableCell>
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl " +
                      (estadoVentas === "Por cobrar"
                        ? "bg-[#CBF4C9] p-1 font-bold text-[#0E6245]"
                        : "bg-[#F4CEC9] p-1 font-bold text-[#A63737]")
                    }
                  >
                    {estadoVentas}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="balance" className="h-full w-full pt-2">
          <Table className={"mx-3 overflow-hidden"}>
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Concepto
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Estatus
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Monto
                </TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">
                  Estatus
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Compras</TableCell>
                <TableCell>
                  <span
                    className={`flex w-24 justify-center rounded-2xl ${
                      comprasTotal < ventasTotal
                        ? "bg-[#F4CEC9] text-[#A63737]"
                        : ventasTotal === comprasTotal
                          ? ""
                          : "bg-[#CBF4C9] text-[#0E6245]"
                    } p-1 font-bold`}
                  >
                    {ventasTotal < comprasTotal
                      ? "Por cobrar"
                      : ventasTotal === comprasTotal
                        ? ""
                        : "Por pagar"}
                  </span>
                </TableCell>
                <TableCell>${comprasTotal.toLocaleString()}</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ventas</TableCell>
                <TableCell>
                  <span
                    className={`flex w-24 justify-center rounded-2xl ${
                      ventasTotal > comprasTotal
                        ? "bg-[#CBF4C9] text-[#0E6245]"
                        : ventasTotal === comprasTotal
                          ? ""
                          : "bg-[#F4CEC9] text-[#A63737]"
                    } p-1 font-bold`}
                  >
                    {ventasTotal > comprasTotal
                      ? "Por cobrar"
                      : ventasTotal === comprasTotal
                        ? ""
                        : "Por pagar"}
                  </span>
                </TableCell>
                <TableCell>${ventasTotal.toLocaleString()}</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={"text-base"}>BALANCE GENERAL:</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  ${(ventasTotal - comprasTotal).toLocaleString()}
                </TableCell>
                <TableCell
                  className={`flex w-24 justify-center rounded-2xl ${comprasTotal < ventasTotal ? "text-base text-[#13A271]" : "text-base text-[#A63737]"}`}
                >
                  {comprasTotal < ventasTotal
                    ? "A FAVOR"
                    : ventasTotal - comprasTotal === 0
                      ? ""
                      : "A PAGAR"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BalanceTable;
