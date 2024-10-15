import InputForm from "@/components/InputForm/InputForm";
import Switch from "@/components/SwitchPropio/Switch";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import React from "react";
import { Form } from "react-router-dom";

const GeneralTab = ({}) => {
  return (
    <Form className="flex h-full w-full flex-col py-4" method="post">
      <div className="flex-1 overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-grisHeading">
          GENERAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4">
            <InputForm
              className="border-[#D7586B]"
              name="code"
              type="text"
              placeholder={"Código de Servicio"}
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
              name={"category"}
              options={[]}
              placeholder="Categoría"
              required={true}
              getOptionValue={(e) => e.id}
              getOptionLabel={(e) => e.name}
            />
          </div>
          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">BLOQUEO</h2>
            <div className="mt-1 flex w-full justify-between border-b border-t border-grisDisabled py-2 pl-0">
              <div className="flex items-center gap-x-10">
                <div className="flex items-center gap-x-3">
                  <Switch
                    name="active"
                    checked={true}
                    onCheckedChange={(e) => {}}
                  />
                  <label className="font-roboto text-xs font-normal text-grisText">
                    Activo
                  </label>
                </div>
                <div className="flex items-center gap-x-4">
                  <label className="text-xs font-light text-grisSubText">
                    Cada
                  </label>
                  <InputForm
                    name="minutes"
                    type="number"
                    className={
                      "m-0 h-[19px] w-fit max-w-[40px] rounded-[6px] p-0 text-center text-xs font-normal text-grisSubText"
                    }
                    defaultValue={0}
                  />
                  <label className="text-xs font-light text-grisSubText">
                    minutos
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full items-end px-6">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-grisSubText">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            className="h-[31px] rounded-xl bg-blancoBox2 text-xs font-semibold text-grisHeading hover:bg-blancoBox2"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default GeneralTab;
