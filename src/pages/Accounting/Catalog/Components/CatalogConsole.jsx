import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AccountingAccount from "../../components/AccountingAccount";

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
      const activoTab = TABS.find(
        (tab) => tab.id === 1 && tab.name === "ACTIVO",
      );
      if (activoTab) {
        setActiveTab(activoTab.name);
      }
    }
  }, [location]);

  const dataAccounts = [
    {
      id: 1,
      numberAccount: "1000",
      name: "ACTIVO",
      isPermanent: true,
      subAccounts: [
        {
          id: 1,
          numberAccount: "1100",
          name: "Activo circulante",
          isPermanent: true,
          subAccounts: [
            {
              id: 2,
              numberAccount: "1110",
              name: "Caja",
              isPermanent: true,
              subAccounts: [
                {
                  id: 3,
                  numberAccount: "1111",
                  name: "Ingreso a caja 1",

                  subAccounts: [{
                      id: 20,
                numberAccount: "1110",
                name: "Caja",
                subAccounts:[]
                  }
                  ],
                },
                {
                  id: 10,
                  numberAccount: "1112",
                  name: "Ingreso a caja 2",

                  subAccounts: [],
                },
                {
                  id: 11,
                  numberAccount: "1113",
                  name: "Ingreso a caja 3",

                  subAccounts: [],
                },
                {
                  id: 12,
                  numberAccount: "1114",
                  name: "Ingreso a caja 4",

                  subAccounts: [],
                },
                {
                  id: 15,
                  numberAccount: "1115",
                  name: "Ingreso a caja 5",

                  subAccounts: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          numberAccount: "1200",
          name: "Activo Fijo",
          isPermanent: true,
          subAccounts: [
            {
              id: 5,
              numberAccount: "1210",
              name: "Terrenos",
              isPermanent: true,
              subAccounts: [
                {
                  id: 6,
                  numberAccount: "1211",
                  name: "Terrenos baratos",
                  subAccounts: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 21,
      numberAccount: "2000",
      name: "PASIVO",
      isPermanent: true,
      subAccounts: []
    },
    {
      id: 22,
      numberAccount: "3000",
      name: "CAPITAL CONTABLE",
      isPermanent: true,
      subAccounts: []
    },
    {
      id: 23,
      numberAccount: "4000",
      name: "INGRESOS",
      isPermanent: true,
      subAccounts: []
    },
    {
      id: 24,
      numberAccount: "5000",
      name: "COSTO DE VENTAS",
      isPermanent: true,
      subAccounts: []
    },
    {
      id: 25,
      numberAccount: "6000",
      name: "GASTOS",
      isPermanent: true,
      subAccounts: []
    },
    {
      id: 26,
      numberAccount: "7000",
      name: "FINANCIEROS",
      isPermanent: true,
      subAccounts: []
    },
    {
      id: 27,
      numberAccount: "8000",
      name: "OTROS ING Y EGRE",
      isPermanent: true,
      subAccounts: []
    },
  ];

  return (
    <div className="flex h-full justify-center overflow-auto rounded-xl p-0">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="grid h-full w-full grid-cols-12">
          <TabsList className="col-span-2 flex h-full flex-col justify-normal gap-2 bg-transparent">
            <div className="flex h-full flex-col items-center gap-2 pr-2">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.name}
                  className="data-[state=active]:sm-none flex h-10 w-32 items-center justify-center rounded-full border border-grisSubText px-2 font-roboto text-xs text-grisText hover:bg-blancoBox data-[state=active]:bg-[#44444F] data-[state=active]:font-semibold data-[state=active]:text-white data-[state=active]:shadow-lg sm:w-40 sm:text-sm"
                >
                  <p className="whitespace-normal text-center text-xs leading-tight">
                    {tab.name}
                  </p>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {dataAccounts.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.name}
              className="col-span-10 h-full bg-blancoBg pl-4 overflow-auto mt-0"
            >
              <AccountingAccount account={tab}/>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default CatalogConsole;
