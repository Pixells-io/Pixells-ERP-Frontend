import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PosTableForm from "../Table/PosTableForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

function ProductsPosGrid({
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
  ticketSelect,
}) {
  const [categories, setCategories] = useState([
    { id: 1, name: "Calzado" },
    { id: 2, name: "Ropa" },
    { id: 3, name: "Accesorios" },
    { id: 4, name: "Ropa de cama" },
  ]);

  return (
    <div className="flex h-full w-full">
      {/* add */}
      <div className="flex w-full flex-col gap-y-4 p-4">
        <div className="flex flex-col gap-y-4">
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
          <h2 className="text-md font-roboto font-semibold text-grisHeading">
            Categorías
          </h2>
        </div>
        {/* categorias */}

        <div className="flex flex-wrap gap-4 overflow-auto">
          {categories.map((c, index) => (
            <div
              key={index}
              className="text-roboto flex h-[100px] w-[169px] cursor-pointer items-center justify-center rounded-xl bg-primarioBotones text-xl font-semibold text-white"
            >
              {c.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full max-w-[413px] flex-col border-l border-[#D7D7D7] p-4">
        {/* info clients and tickets */}
        <div className="">
          <div className="flex w-full max-w-[413px] flex-row justify-between gap-x-8">
            <div className="flex w-full items-center gap-x-4">
              <div className="w-fit font-poppins text-lg font-normal text-grisHeading">
                Cliente
              </div>
              <div className="w-full font-poppins text-base font-medium text-grisText">
                <SelectRouter
                  name="client"
                  options={clientsOptions}
                  value={clientSelect}
                  onChange={(e) => setClientSelect(e)}
                />
              </div>
            </div>
            <div className="flex w-fit items-center">
              <Button
                type="button"
                className="flex h-[24px] w-fit cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-primarioBotones px-2 py-0 text-[11px] font-medium"
              >
                <IonIcon icon={add} className="h-4 w-4"></IonIcon>
                Cliente
              </Button>
            </div>
          </div>
          <div className="mt-2 flex gap-x-7">
            <div className="w-fit font-poppins text-lg font-normal text-grisHeading">
              Ticket
            </div>
            <div className="w-fit font-poppins text-base font-medium text-grisText">
              {ticketSelect}
            </div>
          </div>
        </div>
        {/* products */}
        <div className="flex w-full flex-1 flex-col overflow-auto">
          <div className="mt-4 grid grid-cols-12 border-b border-[#D7D7D7] p-2">
            <div className="col-span-5 text-xs font-medium text-grisText">
              Producto
            </div>
            <div className="col-span-1 text-xs font-medium text-grisText">
              Qty
            </div>
            <div className="col-span-3 text-xs font-medium text-grisText">
              Each
            </div>
            <div className="col-span-3 text-xs font-medium text-grisText">
              Total
            </div>
          </div>
          <div className="overflow-auto">
            {products.map((p) => (
              <div className="grid grid-cols-12 px-2 py-2.5 hover:bg-primario/10">
                <div className="col-span-5 text-sm font-normal text-grisHeading">
                  {p.article}
                </div>
                <div className="col-span-1 flex justify-center text-sm font-normal text-grisHeading">
                  {p.quantity}
                </div>
                <div className="col-span-3 text-sm font-normal text-grisHeading">
                  ${p.price.toFixed(2)}
                </div>
                <div className="col-span-3 flex items-center justify-center rounded-3xl border border-[#44444F] text-sm font-medium text-grisHeading">
                  $
                  {(
                    (Number(p.price) + Number(p.price) * 0.16) *
                    Number(p.quantity)
                  ).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* info */}
        <div className="grid grid-cols-12 gap-y-4 border-t border-[#D7D7D7] py-4">
          <div className="col-span-7 text-sm font-medium text-grisHeading">
            ITEMS
          </div>
          <div className="col-span-5 text-sm font-medium text-grisHeading">
            {products.reduce(
              (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
              0,
            )}
          </div>
          <div className="col-span-7 text-sm font-medium text-grisHeading">
            SUBTOTAL
          </div>
          <div className="col-span-5 text-sm font-medium text-grisHeading">
            $
            {products
              .reduce((a, c) => a + Number(c.price) * Number(c.quantity), 0)
              .toFixed(2)}
          </div>
          <div className="col-span-7 text-sm font-medium text-grisHeading">
            DESCUENTO
          </div>
          <div className="col-span-5 text-sm font-medium text-[#D7586B]">
            $0.00
          </div>
          <div className="col-span-7 text-sm font-medium text-grisHeading">
            IMPUESTO
          </div>
          <div className="col-span-5 text-sm font-medium text-grisHeading">
            $
            {products
              .reduce(
                (a, c) => a + Number(c.quantity) * (Number(c.price) * 0.16),
                0,
              )
              .toFixed(2)}
          </div>
          <div className="col-span-12 grid grid-cols-12 rounded-md bg-[#00A25940]/25 px-2 py-0.5">
            <div className="col-span-7 flex items-center text-base font-semibold text-grisHeading">
              TOTAL
            </div>
            <div className="col-span-5 flex items-center text-xl font-semibold text-grisHeading">
              ${totalProducts}
            </div>
          </div>
          <div className="col-span-12 mt-6 flex w-full justify-between">
            <Button
              type="button"
              className="h-[54px] w-[138px] rounded-3xl bg-[#D7586B] p-0 text-xl font-semibold text-white"
              onClick={() => cancelTicket()}
            >
              CANCELAR
            </Button>
            <Button
              type="button"
              className="h-[54px] w-[194px] rounded-3xl bg-[#00A259] p-0 text-xl font-semibold text-white"
              onClick={() =>
                openConfirmSale(
                  products.reduce(
                    (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
                    0,
                  ),
                )
              }
            >
              PAGAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPosGrid;
