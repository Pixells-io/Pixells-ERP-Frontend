import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";

const InvoicesAndReceipts = ({ store_id }) => {
  const navigation = useNavigation();
  const [accountingSelect, setAccountingSelect] = useState({});

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${store_id}`}
      method="post"
    >
      <div className="overflow-auto">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          FACTURAS Y RECIBOS
        </h2>
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="store_id"
          value={store_id}
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value="userBranchTab"
        />

        <input
          type="text"
          className="hidden"
          hidden
          name="users"
          value={JSON.stringify(accountingSelect)}
          onChange={() => {}}
        />

        <div className="mt-4">
          <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
            CONFIGURACIÓN
          </p>
          <div className="mt-1 grid w-full grid-cols-12 gap-x-6 gap-y-2 border-y border-[#D7D7D7] py-3">
            <div className="col-span-4 flex gap-x-4 items-center">
              <div className="flex items-center justify-center">
                <Checkbox className="h-5 w-5 border-2 border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-normal text-grisText">
                  Encabezado y pie de página
                </h2>
                <h3 className="text-[10px] font-light text-grisSubText">
                  Agrega textos a tu ticket
                </h3>
              </div>
            </div>
            <div className="col-span-4">
              <SelectRouter
                // value={
                //   [].find(
                //     (data) => data.id == data?.user_id,
                //   ) || null
                // }
                name={"header"}
                options={[]}
                placeholder={"Encabezado"}
                required={false}
                // onChange={(e) => handleInputChange(e.id, "header")}
                getOptionValue={(e) => e.id}
                getOptionLabel={(e) => e.position_name}
              />
            </div>
            <div className="col-span-4">
              <SelectRouter
                // value={
                //   [].find(
                //     (data) => data.id == data?.user_id,
                //   ) || null
                // }
                name={"footer"}
                placeholder={"Pie de página"}
                options={[]}
                required={false}
                // onChange={(e) => handleInputChange(e.id, "footer")}
                getOptionValue={(e) => e.id}
                getOptionLabel={(e) => e.position_name}
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-12 gap-x-6 gap-y-2 border-b border-[#D7D7D7] py-5">
            <div className="col-span-4 flex items-center gap-x-4">
              <div className="flex items-center justify-center">
                <Checkbox className="h-5 w-5 border-2 border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-normal text-grisText">
                  Agrega código QR al ticket
                </h2>
                <h3 className="text-[10px] font-light text-grisSubText">
                  Permite trazabilidad del ticket
                </h3>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 gap-x-6 gap-y-2 border-b border-[#D7D7D7] py-5">
            <div className="col-span-4 flex items-center gap-x-4">
              <div className="flex items-center justify-center">
                <Checkbox className="h-5 w-5 border-2 border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-normal text-grisText">
                  Impresión automática de ticket
                </h2>
                <h3 className="text-[10px] font-light text-grisSubText">
                  Imprime de forma instantánea en todas las cajas
                </h3>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 gap-x-6 gap-y-2 border-b border-[#D7D7D7] py-5">
            <div className="col-span-4 flex items-center gap-x-4">
              <div className="flex items-center justify-center">
                <Checkbox className="h-5 w-5 border-2 border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-normal text-grisText">
                  Código para auto-facturación
                </h2>
                <h3 className="text-[10px] font-light text-grisSubText">
                  Permite que tus clientes facturen directamente en el portal
                </h3>
              </div>
            </div>
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

export default InvoicesAndReceipts;
