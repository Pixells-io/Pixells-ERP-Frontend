import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Form, redirect, useNavigation, useParams } from "react-router-dom";

const PrincipalTab = ({ whareHouses, costCenter, priceList, storeDetail }) => {
  const navigation = useNavigation();
  const { id } = useParams();

  const [store, setStore] = useState(storeDetail);

  const changeValue = (value, data) => {

  };

  return (
    <Form
      className="flex h-full w-full flex-col px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${id}`}
      method="post"
    >
      <div>
        <h2 className="font-poppns text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            <input
              type="text"
              className="hidden"
              hidden
              readOnly
              name="store_id"
              // value={store.id}
              value={id}
            />
            <input
              type="text"
              className="hidden"
              hidden
              readOnly
              name="type_option"
              value="update_principalBranchTab"
            />
            <InputForm
              className="border-[#D7586B]"
              name="store_code"
              type="text"
              placeholder={"Código de Sucursal"}
              required={true}
              // value={store.store_code}
              // onChange={(e) => updateValue("store_code", e)}
            />
          </div>
          <div className="col-span-8">
            <InputForm
              className="border-[#D7586B]"
              name="name"
              type="text"
              placeholder={"Nombre o Descripción"}
              required={true}
              // value={store.name}
              // onChange={(e) => updateValue("name", e)}
              />
          </div>
          <div className="col-span-12">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Almacén
            </p>
            <Select name="inventory_id" required={true}>
              <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7586B] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {whareHouses.map((whareHouse) => (
                  <SelectItem key={whareHouse.id} value={String(whareHouse.id)}>
                    {whareHouse.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Centro de Costos
            </p>

            <Select name="cost_center_id">
              <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {costCenter.map((cc) => (
                  <SelectItem key={cc.id} value={String(cc.id)}>
                    {cc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Lista de Precios
            </p>

            <Select name="price_list_id">
              <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectContent>
                  {priceList.map((pl) => (
                    <SelectItem key={pl.id} value={String(pl.id)}>
                      {pl.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 items-end">
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
