import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { getBank } from "./utils";

function FormAddBankAccount({ modal, setModal, banks }) {
  const [bankSelect, setBankSelect] = useState("");
  const [accountingAccountSelect, setAccountingAccountSelect] = useState("");
  const [ownBankInfo, setOwnBankInfo] = useState({});
  const navigation = useNavigation();

  const banksNew = banks.map((bank) => {
    return {
      value: bank.id,
      label: bank.name,
    };
  });

  useEffect(() => {
    if (navigation.state === "idle") {
      clearData();
      setModal(false);
    }
  }, [navigation.state]);

  const accountingAccountAux = [
    {
      value: 1,
      label: "1.1.1 Ingreso act1 ",
    },
    {
      value: 2,
      label: "1.1.2 Ingreso act2 ",
    },
  ];

  const getOwnBank = async (value) => {
    const result = await getBank({ params: { id: value } });
    setOwnBankInfo(result.data);
  };

  const clearData = () => {
    setBankSelect("");
    setAccountingAccountSelect("");
    setOwnBankInfo({});
  };

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        clearData();
      }}
    >
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Cuenta Bancaria
          </DialogTitle>
        </DialogHeader>
        <Form
          id="bank-account-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/bank-management"
          method="post"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            readOnly
            name="type_option"
            value={"save_bankAccount"}
          />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-8 font-light">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6">
                    <SelectField
                      name="bank_id"
                      options={banksNew}
                      placeholder="Banco Propio"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                      value={Number(bankSelect) || undefined}
                      onValueChange={(e) => {
                        setBankSelect(e);
                        getOwnBank(e);
                      }}
                      required={true}
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="basis-1/3">
                      <InputRouter
                        name="account_id"
                        type="text"
                        placeholder="ID Cuenta"
                        required={true}
                      />
                    </div>
                    <div className="basis-full">
                      <InputRouter
                        name="account_name"
                        type="text"
                        placeholder="Nombre de la Cuenta"
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Datos de la Cuenta Bancaria
                </div>
                <div className="flex gap-2">
                  <div className="basis-1/2">
                    <InputRouter
                      name="account_number"
                      type="text"
                      placeholder="Número de cuenta"
                      required={true}
                    />
                  </div>
                  <div className="basis-1/2 pt-5">
                    <SelectField
                      name="countable_account_id"
                      options={accountingAccountAux}
                      placeholder="Cuenta Contable"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                      value={Number(accountingAccountSelect) || undefined}
                      onValueChange={(e) => setAccountingAccountSelect(e)}
                      required={true}
                    />
                  </div>
                  <div className="basis-auto pt-5">
                    <SelectField
                      name="currency"
                      options={[
                        { label: "MXN", value: "1" },
                        { label: "DLLS", value: "2" },
                      ]}
                      placeholder="Moneda"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                      required={true}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-3/5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm font-normal text-[#696974]">
                        Datos del Banco Propio
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <p className="text-xs text-grisText">País</p>
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.country}
                      </p>
                      <p className="text-xs text-grisText">Clave de Banco</p>
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.bank_key}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-3/5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm font-normal text-[#696974]">
                        Dirección del Banco
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <p className="text-xs text-grisText">Calle</p>
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.street}
                      </p>
                      <p className="text-xs text-grisText">Int.</p>
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.int}
                      </p>
                      <p className="text-xs text-grisText">Ext.</p>
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.ext}
                      </p>
                      <p className="text-xs text-grisText">Colonia</p>
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.cologne}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <DialogDescription></DialogDescription>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="bank-account-form"
            className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormAddBankAccount;
