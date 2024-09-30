import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "../Table/Datatable";
import { StockWarehouseColumns } from "../Table/StockWarehouseColumns";
import { MaterialColumns } from "../Table/MaterialRawColumns";
import { useLoaderData } from "react-router-dom";
import TableRowProduct from "../Components/TableRowProduct";

function MaterialWarehouse() {
  const { data } = useLoaderData();
  const [products, setProducts] = useState(data.products);

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
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]"></div>
        </div>
        <Tabs
          defaultValue="stock"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <div className="flex justify-between">
              <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
                Almacen {data.inventory}
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
          <TabsContent value="stock" className="rounded-md bg-white px-6 py-4">
            <div className="flex h-full w-full flex-col space-y-4 rounded-xl">
              <div>
                {/* HEADER */}
                <div className="flex w-full border-b border-[#44444F] py-4">
                  <div className="w-1/12">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      CÓDIGO
                    </span>
                  </div>
                  <div className="w-3/12">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      NOMBRE
                    </span>
                  </div>
                  <div className="w-2/12">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      UBICACION
                    </span>
                  </div>
                  <div className="w-1/12 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      STOCK
                    </span>
                  </div>
                  <div className="w-1/12 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      COMP.
                    </span>
                  </div>
                  <div className="w-1/12 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      PEDIDO
                    </span>
                  </div>
                  <div className="w-1/12 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      DISP.
                    </span>
                  </div>
                  <div className="w-1/12">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      COSTO
                    </span>
                  </div>
                  <div className="w-1/12">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      VARIABLES
                    </span>
                  </div>
                </div>
                {/* BODY */}
                {products.map((product, i) => (
                  <TableRowProduct product={product} key={i} />
                ))}
              </div>
              <DataTable
                data={products}
                columns={MaterialColumns}
                searchNameFilter={"Buscar..."}
                searchFilter={"warehouseCode"}
              />
            </div>
          </TabsContent>
          <TabsContent value="summary" className="rounded-md p-2"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MaterialWarehouse;
