import React from "react";
import NavigationHeader from "@/components/navigation-header";
import DataTable from "@/components/table/DataTable";
import { StockItemColumns } from "./Table/StockItemColumns";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WarehouseColumns } from "./Table/WarehouseColumns";

function MainStockItem() {
  //datos de prueba --------------------------

  const data = [
    {
      id: 1,
      code: "0987",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 2,
      code: "0988",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 3,
      code: "0989",
      category: "Metales",
      name: "Clavos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 4,
      code: "0990",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
  ];

  //-------------------------------------------

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader/>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>
        <div className="flex justify-between">
            <p className="text-xl mt-1 font-poppins font-bold text-grisHeading">
              Stock General
            </p>
          
          </div>
        <Tabs
          defaultValue="products"
          className="h-full overflow-auto bg-white rounded-lg pt-2"
        >
          
          <TabsList className="mx-3 ml-6 flex gap-6 justify-start rounded-lg bg-blancoBox p-0 border-b bg-inherit py-6">
          <TabsTrigger
            className="mb-[-12px] rounded-none border-slate-300 border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="products"
          >
            ARTÍCULOS
          </TabsTrigger>
          <TabsTrigger
            className="mb-[-12px] rounded-none border-slate-300 border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="warehouse"
          >
            ALMACENES
          </TabsTrigger>
        </TabsList>
          <TabsContent value="products" className="mt-[-70px] w-full pt-4">
         
          <DataTable
          data={data}
          columns={StockItemColumns}
          searchNameFilter={"Nombre"}
          searchFilter={"name"}
          isCheckAll={false}
        />
          </TabsContent>
          <TabsContent
            value="warehouse"
            className="mt-[-70px] w-full pt-4"
          >
             <DataTable
          data={data}
          columns={WarehouseColumns}
          searchNameFilter={"Nombre"}
          searchFilter={"name"}
          isCheckAll={false}
        />
            
          </TabsContent>
        </Tabs>

       
      </div>
    </div>
  );
}

export default MainStockItem;
