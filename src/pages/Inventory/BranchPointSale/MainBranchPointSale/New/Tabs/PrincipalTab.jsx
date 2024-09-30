import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import React from "react";
import { Form, useNavigation } from "react-router-dom";

const PrincipalTab = ({ whareHouses, costCenter, priceList }) => {
  const navigation = useNavigation();

  return (
    <Form
      className="flex h-full w-full flex-col px-6 py-4"
      action={`/inventory/branch-points-sale/create`}
      method="post"
    >
      <div className="overflow-auto">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            <InputForm
              className="border-[#D7586B]"
              name="store_code"
              type="text"
              placeholder={"Código de Sucursal"}
              required={true}
            />
          </div>
          <div className="col-span-8">
            <InputForm
              className="border-[#D7586B]"
              name="name"
              type="text"
              placeholder={"Nombre o Descripción"}
              required={true}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"inventory_id"}
              options={whareHouses}
              placeholder="Almacén"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"cost_center_id"}
              options={costCenter}
              placeholder="Centro de Costos"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>

          <div className="col-span-12">
            <SelectRouter
              name={"price_list_id"}
              options={priceList}
              placeholder="Lista de Precios"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PrincipalTab;
