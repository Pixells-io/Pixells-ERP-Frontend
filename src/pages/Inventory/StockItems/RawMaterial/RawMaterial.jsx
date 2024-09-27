import React from "react";
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "../Table/Datatable";
import { StockWarehouseColumns } from "../Table/StockWarehouseColumns";
import { MaterialColumns } from "../Table/MaterialRawColumns";

const data = [
  {
    warehouseCode: "01",
    warehouseName: "Guadalajara",
    inStock: 54,
    committed: 10,
    order: 0,
    available: 44,
    ctotal: 5436,
  },
  {
    warehouseCode: "02",
    warehouseName: "Monterrey",
    inStock: 2,
    committed: 0,
    order: 15,
    available: 17,
    ctotal: "",
    variable:2
  },
];

function MaterialWarehouse() {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
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
        <Tabs
          defaultValue="stock"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <div className="flex justify-between">
              <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
                Stock General
              </p>
            </div>
            <div className="flex justify-end gap-6">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                <TabsTrigger
                  value="stock"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Stock
                </TabsTrigger>
                <TabsTrigger
                  value="summary"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Resumen
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="stock" className="rounded-md p-2">
            <div className="flex h-full w-full space-y-4 flex-col rounded-xl bg-white">
              <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
                <span className="font-poppins text-lg font-medium text-[#44444F]">
                ARTÍCULOS EN ALMACÉN
                </span>
               
              </div>
              <DataTable data={data} columns={MaterialColumns} />
            </div>
          </TabsContent>
          <TabsContent value="summary" className="rounded-md p-2">
       
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MaterialWarehouse;
