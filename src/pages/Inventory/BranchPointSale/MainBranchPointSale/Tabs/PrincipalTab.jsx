import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import React from "react";
import { Form } from "react-router-dom";

const PrincipalTab = () => {
  return (
    <Form className="flex h-full w-full flex-col px-6 py-4">
      <di v>
        <h2 className="font-poppns text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            <InputForm
              className="border-[#D7586B]"
              name="codeBranch"
              type="text"
              placeholder={"Código de Sucursal"}
            />
          </div>
          <div className="col-span-8">
            <InputForm
              className="border-[#D7586B]"
              name="name"
              type="text"
              placeholder={"Nombre o Descripción"}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              className="border-[#D7586B]"
              name="store"
              type="text"
              placeholder={"Almacen"}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="store"
              type="text"
              placeholder={"Centro de Costos"}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="store"
              type="text"
              placeholder={"Lista de Precios"}
            />
          </div>
        </div>
      </di>
      <div className="flex w-full flex-1 items-end">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
            Guardar
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PrincipalTab;
