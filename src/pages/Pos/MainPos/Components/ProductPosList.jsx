import React from "react";
import { Button } from "@/components/ui/button";
import PosTableForm from "../Table/PosTableForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ProductsPosList({
  productsOptions,
  validateIsGranel,
  clientSelect,
  setClientSelect,
  products,
  setTotalProducts,
  setProducts,
  cancelTicket,
  openConfirmSale,
  totalProducts,
  clientsOptions,
}) {
  return (
    <>
      {/* add */}
      <div className="grid w-full grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Productos
          </h2>
          <SelectRouter
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"article"}
            options={productsOptions}
            onChange={(e) => validateIsGranel(e)}
            getOptionLabel={(option) => option.article + " - " + option.sku}
            getOptionValue={(option) => option.id}
            filterOption={(option, value) => {
              return (
                option.data.article
                  .toLowerCase()
                  .includes(value.toLowerCase()) ||
                option.data.sku.toLowerCase().includes(value.toLowerCase()) ||
                option.data.description
                  .toLowerCase()
                  .includes(value.toLowerCase())
              );
            }}
          />
        </div>
        <div className="col-span-5 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Cliente &nbsp;&nbsp;&nbsp;
            <span className="font-poppins text-xl font-normal text-[#5B89FF]">
              {clientSelect.label}
            </span>
          </h2>
          <SelectRouter
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"clients"}
            options={clientsOptions}
            onChange={(e) => setClientSelect(e)}
          />
        </div>
      </div>

      {/* table */}
      <div className="mt-4 flex-1 overflow-auto">
        <div className="flex h-full w-full flex-col justify-between">
          <PosTableForm
            tableData={products}
            setTotalProducts={setTotalProducts}
            setProducts={setProducts}
          />
          <div className="mt-2 w-full">
            <div className="grid w-full grid-cols-9 px-2 py-2">
              <div className="col-span-4 flex items-center">
                <Button
                  type="button"
                  className="text-md rounded-3xl bg-grisDisabled px-6 py-7 font-medium text-white shadow-[0px_0px_6px_1px_rgba(0,0,0,0.2)]"
                  onClick={() => cancelTicket()}
                >
                  CANCELAR
                </Button>
              </div>
              <div className="col-span-1 flex items-center">
                <h2 className="font-poppins text-lg font-medium text-[#44444F]">
                  ARTICULOS:&nbsp;
                  {products.reduce(
                    (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
                    0,
                  )}
                </h2>
              </div>
              <div className="col-span-4 flex items-center justify-end">
                <Button
                  type="button"
                  className="flex min-w-[260px] justify-between rounded-3xl bg-primarioBotones py-7 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)]"
                  onClick={() =>
                    openConfirmSale(
                      products.reduce(
                        (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
                        0,
                      ),
                    )
                  }
                >
                  <span className="text-lg font-medium text-white">COBRAR</span>
                  <span className="font-poppins text-xl font-semibold text-white">
                    ${totalProducts}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPosList;
