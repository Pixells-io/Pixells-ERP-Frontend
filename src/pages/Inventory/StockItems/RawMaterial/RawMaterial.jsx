import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "../Table/Datatable";
import { useLoaderData } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TableRowProduct from "../Components/TableRowProduct";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

function MaterialWarehouse() {
  const { data } = useLoaderData();
  const [products, setProducts] = useState(data.products);
  const [searchTerm, setSearchTerm] = useState("");

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
        <Tabs defaultValue="stock" className="h-full rounded-lg pt-2">
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
          <TabsContent
            value="stock"
            className="p2 h-full overflow-auto rounded-lg bg-white"
          >
            <div className="border-[#D7D7D7 flex w-full justify-between border-b px-4 py-4">
              <span className="font-poppins text-lg font-medium text-grisHeading">
                ARTÍCULOS EN ALMACEN
              </span>
              <div className="flex h-9 w-44 items-center rounded-3xl border-[1px] border-[#D7D7D7] px-2 py-2 text-[10px]">
                <Label htmlFor="search">
                  <IonIcon
                    icon={searchOutline}
                    className="h-6 w-6 stroke-1 text-[#8F8F8F]"
                  ></IonIcon>
                </Label>
                <Input
                  id="search"
                  className="h-full w-full border-0 bg-transparent text-sm font-normal text-[#8F8F8F] !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#8F8F8F]"
                  placeholder={"Search"}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex h-full w-full flex-col space-y-4 overflow-auto rounded-xl px-8 py-6">
              <div>
                {/* HEADER */}
                <div className="flex w-full border-b border-[#44444F]">
                  <div className="mx-2 w-1/12 py-4">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      CÓDIGO
                    </span>
                  </div>
                  <div className="mx-2 w-3/12 py-4">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      NOMBRE
                    </span>
                  </div>
                  <div className="mx-2 w-2/12 py-4">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      UBICACION
                    </span>
                  </div>
                  <div className="mx-2 w-1/12 rounded-t-2xl bg-[#69D8B34D] py-4 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      STOCK
                    </span>
                  </div>
                  <div className="mx-2 w-1/12 rounded-t-2xl bg-[#D8A4694D] py-4 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      COMP.
                    </span>
                  </div>
                  <div className="mx-2 w-1/12 rounded-t-2xl bg-[#CBD8694D] py-4 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      PEDIDO
                    </span>
                  </div>
                  <div className="mx-2 w-1/12 rounded-t-2xl bg-[#69D8D64D] py-4 text-center">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      DISP.
                    </span>
                  </div>
                  <div className="mx-2 w-1/12 py-4">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      COSTO
                    </span>
                  </div>
                  <div className="mx-2 w-1/12 py-4">
                    <span className="h-full items-center whitespace-nowrap font-poppins text-sm font-medium text-[#44444F]">
                      VARIABLES
                    </span>
                  </div>
                </div>
                {/* BODY */}
                {products
                  .filter(
                    (item) =>
                      item.code
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  )
                  .map((product, i) => (
                    <TableRowProduct product={product} key={i} />
                  ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="summary" className="rounded-md p-2"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MaterialWarehouse;
