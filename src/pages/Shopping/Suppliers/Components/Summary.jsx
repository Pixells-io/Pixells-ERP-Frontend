import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShoppingTable from "./Tables/PurchasedTable";
const Summary = () => {
  return (
    <div className="h-full overflow-auto rounded-xl bg-white">
      <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE ACTIVIDADES
        </span>
      </div>
      <div className="flex h-full w-full overflow-hidden rounded-[10px] p-6">
        <Tabs defaultValue="compras" className="flex w-full space-y-6 flex-col">
          <TabsList className="mb-4 grid w-full grid-cols-4 gap-6 bg-transparent">
            {[
              { value: "compras", title: "Compras Realizadas" },
              { value: "pagos", title: "Pagos Realizados" },
              { value: "devoluciones", title: "Devoluciones" },
              { value: "estadisticas", title: "Estadísticas" },
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
          <TabsContent value="compras">
            <ShoppingTable/>
          </TabsContent>
          <TabsContent value="pagos">Contenido de Pagos Realizados</TabsContent>
          <TabsContent value="devoluciones">
            Contenido de Devoluciones
          </TabsContent>
          <TabsContent value="estadisticas">
            Contenido de Estadísticas
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Summary;
