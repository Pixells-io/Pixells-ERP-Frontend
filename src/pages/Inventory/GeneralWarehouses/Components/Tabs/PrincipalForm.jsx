import React, { useState } from "react";
import { Form, useNavigation,useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import { Switch } from "@/components/ui/switch";

const PrincipalFormWarehouse = ({ initialValues }) => {
  const navigation = useNavigation();
  const {id} = useParams();
  const [values, setValues] = useState(initialValues || {
    code: '',
    name: '',
    street: '',
    ext: '',
    int: '',
    cp: '',
    active: false
  });

  const handleInputChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };


  // Determine action based on url
  const actionUrl = !id ? "/inventory/general-warehouses/create" : "/inventory/general-warehouses/edit/"+id;
  return (
    <Form action={actionUrl} method={"post"} id="form-warehouse" className="flex h-full w-full flex-col overflow-auto py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">PRINCIPAL</h2>
        <input type="hidden" name="inventory_id" value={values.inventory_id}/>
        <input type="hidden" name="type" value="edit_principal"/>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-3">
            <InputForm
              name="inventory_code"
              type="text"
              placeholder={"Código"}
              required={false}
              value={values.inventory_code}
              onChange={(e) => handleInputChange(e.target.value, "inventory_code")}
              disabled={true}
            />
          </div>
          <div className="col-span-9">
            <InputForm
              name="name"
              type="text"
              placeholder={"Nombre"}
              required={true}
              value={values.name}
              onChange={(e) => handleInputChange(e.target.value, "name")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="country"
              type="text"
              placeholder={"País"}
              required={true}
              value={values.country}
              onChange={(e) => handleInputChange(e.target.value, "country")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="city"
              type="text"
              placeholder={"Ciudad"}
              required={true}
              value={values.city}
              onChange={(e) => handleInputChange(e.target.value, "city")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="state"
              type="text"
              placeholder={"Estado"}
              required={true}
              value={values.state}
              onChange={(e) => handleInputChange(e.target.value, "state")}
            />
          </div>
          


          <div className="col-span-12">
            <InputForm
              name="colony"
              type="text"
              placeholder={"Colonia"}
              required={true}
              value={values.colony}
              onChange={(e) => handleInputChange(e.target.value, "colony")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="street"
              type="text"
              placeholder={"Calle"}
              required={true}
              value={values.street}
              onChange={(e) => handleInputChange(e.target.value, "street")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="ext"
              type="text"
              placeholder={"Número Exterior"}
              required={true}
              value={values.ext}
              onChange={(e) => handleInputChange(e.target.value, "ext")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="int"
              type="text"
              placeholder={"Número Interior"}
              required={true}
              value={values.int}
              onChange={(e) => handleInputChange(e.target.value, "int")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="cp"
              type="text"
              placeholder={"Código Postal"}
              required={true}
              value={values.cp}
              onChange={(e) => handleInputChange(e.target.value, "cp")}
            />
          </div>
          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">ESTATUS</h2>
            <div className="mt-1 flex w-full justify-between border-b border-t border-[#D7D7D7] py-3 pl-4">
              <div className="flex items-center gap-x-3">
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  name="active"
                  checked={values.active}
                  onCheckedChange={(e) => handleInputChange(e, "active")}
                />
                <label className="font-roboto text-xs font-normal text-grisText">Activo</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full justify-between items-center min-h-[32px]">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            type="submit"
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

export default PrincipalFormWarehouse;

