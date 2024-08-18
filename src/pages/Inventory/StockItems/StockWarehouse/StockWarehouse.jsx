import React from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import DataTable from "../Table/Datatable";
import { StockWarehouseColumns } from "../Table/StockWarehouseColumns";

const data = [
  {
    warehouseCode: "01",
    warehouseName: "Guadalajara",
    inStock: 54,
    committed: 10,
    order: "",
    available: 44,
    ctotal: 5436,
  },
  {
    warehouseCode: "02",
    warehouseName: "Monterrey",
    inStock: 2,
    committed: "",
    order: 15,
    available: 17,
    ctotal: "",
  },
];

function StockWarehouse() {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              INVENTARIO
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Aceite de Girasol
          </p>
        </div>

        <div className="rounded-xl bg-blancoBg p-4">
          <p className="text-md font-poppins font-medium text-grisHeading">
            General
          </p>
          <div className="grid max-w-[300px] grid-cols-3 content-center gap-y-4 p-4">
            <div>
              <label className="text-xs font-light text-grisText">COSTO</label>
            </div>
            <div className="col-span-2">
              <label className="text-md font-poppins font-medium">
                $300.00
              </label>
            </div>
            <div>
              <label className="text-xs font-light text-grisText">PRECIO</label>
            </div>
            <div className="col-span-2">
              <label className="text-md font-poppins font-medium">
                $450.00
              </label>
            </div>
            <div>
              <label className="text-xs font-light text-grisText">
                DISPONIBLE
              </label>
            </div>
            <div className="col-span-2">
              <label className="text-md font-poppins font-medium">
                120 UNIDADES
              </label>
            </div>
            <div>
              <label className="text-xs font-light text-grisText">
                PENDIENTE
              </label>
            </div>
            <div className="col-span-2">
              <label className="text-md font-poppins font-medium">
                60 UNIDADES
              </label>
            </div>
          </div>
        </div>

        <div className="overflow-auto rounded-xl bg-blancoBg p-6">
          <p className="text-md font-poppins font-medium text-grisHeading">
            STOCK POR ALMACEN
          </p>
          <DataTable data={data} columns={StockWarehouseColumns} />
        </div>
      </div>
    </div>
  );
}

export default StockWarehouse;
