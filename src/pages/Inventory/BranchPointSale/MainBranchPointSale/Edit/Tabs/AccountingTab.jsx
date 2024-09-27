import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";

const AccountingTab = ({ store_id }) => {
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
          CONTABILIDAD
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
          <div className="mt-1 grid w-full grid-cols-12 gap-x-6 gap-y-2 border-t border-[#D7D7D7] py-6">
            <div className="col-span-4 flex gap-x-4">
              <div className="flex items-center justify-center">
                <Checkbox className="h-5 w-5 border-2 border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-normal text-grisText">
                  Cuenta temporal predeterminada
                </h2>
                <h3 className="text-[10px] font-light text-grisSubText">
                  Clientes sin identificar
                </h3>
              </div>
            </div>
            <div className="col-span-4">
              <Select
                name="account"
                required={false}
                // value={String(userSelect?.inventory_id)}
                // onValueChange={(e) => handleInputChange(e, "inventory_id", index)}
              >
                <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {[].map((account) => (
                    <SelectItem key={account.id} value={String(account.id)}>
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid w-full grid-cols-12 gap-x-6 gap-y-2 border-y border-[#D7D7D7] py-4">
            <div className="col-span-4 flex gap-x-4 items-center">
              <div className="flex items-center justify-center">
                <Checkbox className="h-5 w-5 border-2 border-primarioBotones data-[state=checked]:bg-primarioBotones" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-normal text-grisText">
                  Diarios predeterminados
                </h2>
                <h3 className="text-[10px] font-light text-grisSubText">
                  Para pedidos y facturas
                </h3>
              </div>
            </div>
            <div className="col-span-4">
              <p className="mb-2 text-xs font-normal text-grisText">
                Pedidos
              </p>
              <Select
                name="account"
                required={false}
                // value={String(userSelect?.inventory_id)}
                // onValueChange={(e) => handleInputChange(e, "inventory_id", index)}
              >
                <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {[].map((account) => (
                    <SelectItem key={account.id} value={String(account.id)}>
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-4">
              <p className="mb-2 text-xs font-normal text-grisText">
                Facturas
              </p>
              <Select
                name="account"
                required={false}
                // value={String(userSelect?.inventory_id)}
                // onValueChange={(e) => handleInputChange(e, "inventory_id", index)}
              >
                <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {[].map((account) => (
                    <SelectItem key={account.id} value={String(account.id)}>
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

export default AccountingTab;
