import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SaleTable from "./Tables/SaleTable";
import BillingTable from "./Tables/BillingTable";
import ReturnTable from "./Tables/ReturnTable";
import BalanceTable from "./Tables/BalancesTable";
import { Button } from "@/components/ui/button";
const Summary = () => {
  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-transparent overflow-auto">
      <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE ACTIVIDADES
        </span>
      </div>
      <div className="flex h-full w-full flex-col overflow-auto rounded-[10px] p-6">
        <Tabs defaultValue="sales" className="flex w-full flex-col">
          <TabsList className="mb-4 grid w-full grid-cols-4 gap-6 bg-transparent">
            {[
              { value: "sales", title: "Ventas Realizadas" },
              { value: "billing", title: "Cobros Realizados" },
              { value: "return", title: "Devoluciones" },
              { value: "balance", title: "Saldos Generales" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                className="flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1]"
                value={tab.value}
              >
                <div className="flex w-full flex-col justify-start">
                  <p className="text-start font-roboto text-sm font-medium leading-tight text-[#44444F]">
                    {tab.title}
                  </p>
                  <p className="text-start font-roboto text-[11px] font-normal leading-tight text-[#8F8F8F]">
                    Fecha de entrega:
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sales" className="pt-4">
            <SaleTable />
          </TabsContent>
          <TabsContent value="billing" className="pt-4">
            <BillingTable />
          </TabsContent>
          <TabsContent value="return" className="pt-4">
            <ReturnTable />
          </TabsContent>
          <TabsContent
            value="balance"
            className="flex items-start justify-center pt-2"
          >
            <BalanceTable />
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex w-full justify-between px-6 pb-3">
        <div className="flex justify-start">
          <span className={"mt-8 font-roboto text-sm text-[#8F8F8F]"}>
            Fecha de actualizacion: 07 de septiembre 2024
          </span>
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            className={`mt-4 rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
          >
            Listo
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Summary;
