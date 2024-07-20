import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  { id: 1, name: "ACTIVO" },
  { id: 2, name: "PASIVO" },
  { id: 3, name: "CAPITAL CONTABLE" },
  { id: 4, name: "INGRESOS" },
  { id: 5, name: "COSTO DE VENTAS" },
  { id: 6, name: "GASTOS" },
  { id: 7, name: "FINANCIEROS" },
  { id: 8, name: "OTROS ING Y EGRE" },
];

const CatalogConsole = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(TABS[0].name);

  useEffect(() => {
    if (location.pathname === "/accounting") {
      const activoTab = TABS.find(tab => tab.id === 1 && tab.name === "ACTIVO");
      if (activoTab) {
        setActiveTab(activoTab.name);
      }
    }
  }, [location]);

  return (
    <div className="flex justify-center h-full rounded-xl overflow-auto p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="grid grid-cols-12 w-full h-full">
          <TabsList className="col-span-2 flex flex-col gap-2 justify-normal bg-transparent h-full">
            <div className="flex flex-col gap-2 pr-2 h-full items-center">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.name}
                  className="text-xs sm:text-sm text-grisText border border-grisSubText hover:bg-blancoBox
                             data-[state=active]:bg-[#44444F] 
                             data-[state=active]:sm-none data-[state=active]:font-semibold font-roboto
                             data-[state=active]:text-white rounded-full data-[state=active]:shadow-lg
                             h-10 flex items-center justify-center px-2
                             w-32 sm:w-40"
                >
                  <p className="text-xs whitespace-normal text-center leading-tight">
                    {tab.name}
                  </p>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {TABS.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.name}
              className="pl-4 col-span-10 overflow-auto h-full"
            >
              <p>CONTENT HERE</p>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default CatalogConsole;
