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
    <div className="grid grid-cols-12">
      {/* add */}
      <div className="col-span-9 grid w-full grid-cols-12 gap-10">
        <div className="col-span-12 flex flex-col gap-y-4">
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
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">Cliente</div>
          <div className="col-span-6">José Saturdino Cardozo</div>
          <div className="col-span-3">
            <Button
              type="button"
              className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-xl bg-primarioBotones px-3 py-1"
            >
              <IonIcon icon={add} className="h-5 w-5"></IonIcon>
              Cliente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPosGrid;
