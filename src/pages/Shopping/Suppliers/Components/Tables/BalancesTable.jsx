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
  { concepto: "Compras", monto: "280,000.00" },
  { concepto: "Pagos", monto: "100,000.00" },
];
const ventasData = [
  { concepto: "Ventas", cantidad: 2, monto: "280,000.00" },
  { concepto: "Cobros", cantidad: 5, monto: "100,000.00" },
];

const SaldoData = [
  { concepto: "Compras",status:2, cantidad: 2, monto: "57,000.00" },
  { concepto: "Ventas",status:1, cantidad: 5, monto: "80,000.00" },
];
const BalanceTable = () => {
  return (
    <div className="w-full  max-w-2xl">
      <Tabs
        defaultValue="shopping"
        className=" w-full"
      >
        <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
          <TabsTrigger
            className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="shopping"
          >
            COMPRAS
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="sale"
          >
            VENTAS
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="balance"
          >
            SALDO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="shopping" className="h-full w-full pt-2">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-sm text-[#44444F]">Concepto</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Monto</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Estatus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comprasData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.concepto}</TableCell>
                  <TableCell>${item.monto}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>TOTAL:</TableCell>
                <TableCell>$180,000</TableCell>
                <TableCell>
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl bg-[#F4CEC9] p-1 font-bold text-[#A63737]"
                    }
                  >
                    Por Pagar
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl bg-[#CBF4C9] p-1 text-center font-bold text-[#0E6245]"
                    }
                  >
                    A favor
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="sale" className="h-full w-full pt-2">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                
                <TableHead className="font-poppins text-sm text-[#44444F]">Concepto</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Cantidad</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Monto</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Estatus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ventasData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.concepto}</TableCell>
                  <TableCell>{item.cantidad}</TableCell>
                  <TableCell>${item.monto}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>TOTAL:</TableCell>
                <TableCell></TableCell>
                <TableCell>$180,000</TableCell>
                <TableCell>
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl bg-[#F4CEC9] p-1 font-bold text-[#A63737]"
                    }
                  >
                    Por cobrar
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl bg-[#CBF4C9] p-1 text-center font-bold text-[#0E6245]"
                    }
                  >
                    Se debe
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="balance" className="h-full w-full pt-2">
          <Table>
            <TableHeader >
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-sm text-[#44444F]">Concepto</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Estatus</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Monto</TableHead>
                <TableHead className="font-poppins text-sm text-[#44444F]">Estatus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SaldoData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.concepto}</TableCell>
                  <TableCell>
                    <span
                      className={`flex w-24 justify-center rounded-2xl ${
                        item.status === 1
                          ? "bg-[#CBF4C9] text-[#0E6245]"
                          : "bg-[#F4CEC9] text-[#A63737] "
                      } p-1 font-bold`}
                    >
                      {item.status === 1 ? "Por cobrar" : "Por pagar"}
                    </span>
                  </TableCell>
                  <TableCell>${item.monto}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className={"text-base"}>BALANCE GENERAL:</TableCell>
                <TableCell></TableCell>
                <TableCell>$230,000.00</TableCell>
                <TableCell className="text-base text-[#13A271]">A FAVOR</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                    <div className="flex pl-4 items-center space-x-4">
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl bg-[#F4CEC9] p-1 font-bold text-[#A63737]"
                    }
                  >
                    Por cobrar
                  </span>
                  <span
                    className={
                      "flex w-24 justify-center rounded-2xl bg-[#CBF4C9] p-1 text-center font-bold text-[#0E6245]"
                    }
                  >
                    Se debe
                  </span>
                  </div>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BalanceTable;
