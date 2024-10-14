import React from "react";
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
}) {
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
          {Array(50)
            .fill()
            .map((e, index) => (
              <div
                key={index}
                className="cursor-pointer text-roboto flex h-[100px] w-[169px] items-center justify-center rounded-xl bg-primarioBotones text-xl font-semibold text-white"
              >
                Calzado
              </div>
            ))}
        </div>
      </div>
      <div className="w-full max-w-[413px] border-l border-[#D7D7D7] p-4">
        <div className="flex w-full max-w-[413px] flex-row justify-between">
          <div className="flex gap-x-4">
            <div className="w-fit font-poppins text-lg font-normal text-grisHeading">
              Cliente
            </div>
            <div className="w-fit font-poppins text-base font-medium text-grisText">
              José Saturdino Cardozo
            </div>
          </div>
          <div className="w-fit">
            <Button
              type="button"
              className="flex h-[24px] w-fit cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-primarioBotones px-2 py-0 text-[11px] font-medium"
            >
              <IonIcon icon={add} className="h-4 w-4"></IonIcon>
              Cliente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPosGrid;
