import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

const PrincipalTab = ({ whareHouses, costCenter, priceList, storeDetail }) => {
  const navigation = useNavigation();

  const [store, setStore] = useState({
    id: storeDetail?.id,
    store_code: storeDetail?.store_code,
    name: storeDetail?.name,
    inventory_id: storeDetail?.inventory?.value,
    cost_center_id: storeDetail?.cost_center?.value,
    price_list_id: storeDetail?.price_list?.value,
  });

  useEffect(() => {
    chagenValueStore();
  }, [storeDetail]);

  const chagenValueStore = () => {
    setStore({
      id: storeDetail?.id,
      store_code: storeDetail?.store_code,
      name: storeDetail?.name,
      inventory_id: storeDetail?.inventory?.value,
      cost_center_id: storeDetail?.cost_center?.value,
      price_list_id: storeDetail?.price_list?.value,
    });
  };

  const handleInputChange = (value, name) => {
    setStore((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Form
      className="flex h-full w-full flex-col py-4"
      action={`/inventory/branch-points-sale/edit/${store?.id}`}
      method="post"
    >
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
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
              value={store.id}
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
              value={store.store_code}
              onChange={(e) => handleInputChange(e.target.value, "store_code")}
            />
          </div>
          <div className="col-span-8">
            <InputForm
              className="border-[#D7586B]"
              name="name"
              type="text"
              placeholder={"Nombre o Descripción"}
              required={true}
              value={store.name}
              onChange={(e) => handleInputChange(e.target.value, "name")}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              value={
                whareHouses.find(
                  (whareHouse) => whareHouse.id == store?.inventory_id,
                ) || null
              }
              name={"inventory_id"}
              options={whareHouses}
              placeholder="Almacén"
              required={true}
              onChange={(e) => handleInputChange(e.id, "inventory_id")}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              value={
                costCenter.find((cc) => cc.id == store?.cost_center_id) || null
              }
              name={"cost_center_id"}
              options={costCenter}
              placeholder="Centro de Costos"
              required={true}
              onChange={(e) => handleInputChange(e.id, "cost_center_id")}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              value={
                priceList.find((pl) => pl.id == store?.price_list_id) || null
              }
              name={"price_list_id"}
              options={priceList}
              placeholder="Lista de Precios"
              required={true}
              onChange={(e) => handleInputChange(e.id, "price_list_id")}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end px-6">
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
