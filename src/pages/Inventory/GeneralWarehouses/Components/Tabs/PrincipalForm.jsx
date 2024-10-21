import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const PrincipalFormWarehouse = ({initialValues }) => {
  const navigation = useNavigation();
  // Estado para mantener los valores de los campos
  const [values, setValues] = useState(initialValues);
  // Maneja los cambios en los campos de entrada
  const handleInputChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  // Maneja los cambios en los campos de selección
  const handleSelectChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const selectStyle =
    "w-full rounded-xl border border-grisText-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
 
    <div className="flex h-full w-full flex-col overflow-auto py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-3">
            <InputForm
              className="border-[#D7586B]"
              name="code"
              type="text"
              placeholder={"Código"}
              required={false}
              value={values["code"]}
              onChange={(e) => handleInputChange(e.target.value, "code")}
              readOnly
            />
          </div>
          <div className="col-span-9">
            <InputForm
              className="border-[#D7586B]"
              name="name"
              type="text"
              placeholder={"Nombre"}
              required={true}
              value={values["name"]}
              onChange={(e) => handleInputChange(e.target.value, "name")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              className="border-[#D7586B]"
              name="street"
              type="text"
              placeholder={"Calle"}
              required={true}
              value={values["street"]}
              onChange={(e) => handleInputChange(e.target.value, "street")}
            />
          </div>
          <div className="col-span-12">
          <InputForm
              className="border-[#D7586B]"
              name="ext"
              type="text"
              placeholder={"Número Exterior "}
              required={true}
              value={values["ext"]}
              onChange={(e) => handleInputChange(e.target.value, "ext")}
            />
          </div>
          <div className="col-span-12">
          <InputForm
              className="border-[#D7586B]"
              name="int"
              type="text"
              placeholder={"Número Interior"}
              required={true}
              value={values["int"]}
              onChange={(e) => handleInputChange(e.target.value, "int")}
            />
          </div>
          <div className="col-span-12">
          <InputForm
              className="border-[#D7586B]"
              name="cp"
              type="text"
              placeholder={"Código Postal"}
              required={true}
              value={values["cp"]}
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
                  checked={generalData?.status == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "active")
                  }
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>

                {!!generalData?.start && !!generalData?.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="start"
                        className="hidden"
                        value={format(generalData?.start, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(generalData?.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="end"
                        className="hidden"
                        value={format(generalData?.end, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(generalData?.end, "PP")}
                      </label>
                    </div>
                  </div>
                ) : (
                  <label className="font-roboto text-xs font-light text-grisSubText">
                    (Sin periodo de tiempo)
                  </label>
                )}
              </div>
              <div className="flex items-center">
                {!!generalData?.start && !!generalData?.end ? (
                  <Button
                    type="button"
                    className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                    onClick={() => clearPeriod()}
                  >
                    Restablecer
                  </Button>
                ) : (
                  <ModalPeriod setFunctionParent={addDate} />
                )}
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
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrincipalFormWarehouse;
