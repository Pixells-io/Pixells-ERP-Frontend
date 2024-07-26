import React, { useState } from "react";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const FormDetailAccount = ({ account, setSelectAccount }) => {
  return (
    <div className="h-full w-2/5 overflow-auto border-l p-2">
      <div className="flex justify-end">
        <IonIcon
          icon={closeCircle}
          className="h-6 w-6 cursor-pointer text-grisDisabled"
          onClick={() => setSelectAccount(null)}
        ></IonIcon>
      </div>
      <div>
        <h2 className="text-sm font-normal text-grisText">
          Detalles de la cuenta
        </h2>
      </div>
      <form className="mt-4">
        <div className="grid grid-cols-12 gap-x-3 gap-y-6 p-1 pb-8">
          <div className="col-span-12 md:col-span-7 xl:col-span-7">
            <p className="font-roboto text-sm font-light text-grisText">
              Cuenta Contable
            </p>
            <InputRouter
              id="accountingAccount"
              name="accountingAccount"
              // value={newItem.rubro}
              // onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Nombre
            </p>
            <InputRouter
              id="name"
              name="name"
              // value={newItem.rubro}
              // onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <p className="font-roboto text-sm font-light text-grisText">
              Nivel
            </p>
            <SelectRouter
              name="level"
              options={[
                { label: "2", value: "3" },
                { label: "3", value: "3" },
              ]}
              placeholder="level"
            />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <p className="font-roboto text-sm font-light text-grisText">
              Moneda
            </p>
            <SelectRouter
              name="currency"
              options={[
                { label: "MXN", value: "MXN" },
                { label: "DLLS", value: "DLLS" },
              ]}
              placeholder="Moneda"
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Saldo
            </p>
            <InputRouter
              id="balance"
              name="balance"
              // value={newItem.rubro}
              // onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Tipo de cuenta
            </p>
            <InputRouter
              id="accountType"
              name="accountType"
              // value={newItem.rubro}
              // onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Código Agrupador SAT (Contabilidad Electrónica)
            </p>
            <SelectRouter
              name="codeSAT"
              options={[
                { label: "123", value: "123" },
                { label: "321", value: "321" },
              ]}
              placeholder="codeSAT"
            />
          </div>

          <div className="col-span-12">
            <div className="flex items-center gap-x-2">
              {/* <Checkbox className="border border-[#696974] data-[state=checked]:bg-primarioBotones" /> */}
              <input
                type="checkbox"
                // className="peer hidden"
                // checked={permission}
                // onChange={() => changeStatus()}
              />
              <p className="font-roboto text-sm font-light text-grisText">
                Cuenta Activa
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormDetailAccount;