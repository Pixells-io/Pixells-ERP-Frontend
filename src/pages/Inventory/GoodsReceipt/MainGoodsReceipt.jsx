import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NavigationHeader from "@/components/navigation-header";
import DataTable from "@/components/table/DataTable";
import { DeliveriesColumns } from "./Components/Table/DeliveriesColumns";
import DateTab from "./Components/Tabs/DateTab";
import WarehouseTab from "./Components/Tabs/WarehouseTab";
import StatusTab from "./Components/Tabs/StatusTab";
const MainGoodsReceipt = () => {
  const tabTriggers = [
    { value: "lists", label: "Por Listas" },
    { value: "dates", label: "Por Fecha" },
    { value: "warehouses", label: "Por Almacén" },
    { value: "status", label: "Por Estatus" },
  ];
  const tabItems = [
    { value: "deliveries", label: "ENTREGAS" },
    { value: "pending", label: "PENDIENTES" },
    { value: "cancelled", label: "CANCELADAS" },
  ];
  const deliveriesData = [
    {
      id: "1",
      code: "DEL-001",
      folio: "FOLIO-1234",
      sku: 10,
      c_articles: 5,
      inventory_in: "Almacén A",
      date: "2023-10-01",
      delivery_date: "2023-10-05",
    },
    {
      id: "2",
      code: "DEL-002",
      folio: "FOLIO-5678",
      sku: 15,
      c_articles: 8,
      inventory_in: "Almacén B",
      date: "2023-10-02",
      delivery_date: "2023-10-06",
    },
    {
      id: "3",
      code: "DEL-003",
      folio: "FOLIO-9101",
      sku: 20,
      c_articles: 12,
      inventory_in: "Almacén C",
      date: "2023-10-03",
      delivery_date: "2023-10-07",
    },
    {
      id: "4",
      code: "DEL-004",
      folio: "FOLIO-1121",
      sku: 5,
      c_articles: 3,
      inventory_in: "Almacén A",
      date: "2023-10-04",
      delivery_date: "2023-10-08",
    },
    {
      id: "5",
      code: "DEL-005",
      fol: "FOLIO-3141",
      sku: 25,
      c_articles: 15,
      inventory_in: "Almacén B",
      date: "2023-10-05",
      delivery_date: "2023-10-09",
    },
  ];
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <Tabs
          defaultValue="lists"
          className="h-full overflow-hidden rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <p className="mt-1 h-[30px] font-poppins text-xl font-bold text-grisHeading">
              Entrega de Mercancías
            </p>
            <div className="flex justify-end gap-6">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                {tabTriggers.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          <TabsContent value="lists" className="rounded-md bg-blancoBg p-2">
            <Tabs
              defaultValue="deliveries"
              className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                {tabItems.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                    value={item.value}
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent
                value="deliveries"
                className="mt-[-70px] w-full pt-2"
              >
                <div className="h-[calc(100vh-200px)]">
                  <DataTable
                    data={deliveriesData}
                    columns={DeliveriesColumns}
                    searchFilter={"code"}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="dates">
            <div className=" h-[calc(100vh-280px)]">
              <DateTab />
            </div>
          </TabsContent>
          <TabsContent
            value="warehouses"
           
          >
            <div className=" h-[calc(100vh-280px)]">
              <WarehouseTab/>
            </div>
          </TabsContent>

          <TabsContent
            value="status"
          >
            <div className=" h-[calc(100vh-280px)]">
              <StatusTab/>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainGoodsReceipt;
