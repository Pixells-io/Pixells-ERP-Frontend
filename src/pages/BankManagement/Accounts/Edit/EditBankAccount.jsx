import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import React, { useEffect, useState } from "react";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { editBankAccount, getBank } from "../utils";

function EditBankAccount() {
  const navigation = useNavigation();
  const { banks, bankAccount } = useLoaderData();

  const [bankSelect, setBankSelect] = useState(bankAccount.data.bank_id);
  const [accountingAccountSelect, setAccountingAccountSelect] = useState(
    bankAccount.data.countable_account,
  );
  const [ownBankInfo, setOwnBankInfo] = useState({});

  const banksNew = banks.data.map((bank) => {
    return {
      value: bank.id,
      label: bank.name,
    };
  });

  useEffect(() => {
    getOwnBank(bankAccount.data.bank_id);
  }, []);

  const getOwnBank = async (value) => {
    const result = await getBank({ params: { id: value } });
    setOwnBankInfo(result.data);
  };

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

  return (
    <div className="flex h-full w-full min-w-fit overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Form
          id="bank-account-form"
          className="flex h-full w-full flex-col gap-3 overflow-auto px-6"
          action={`/bank-management/edit-bank-account/${bankAccount?.data?.id}`}
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 font-roboto">
            <input
              type="hidden"
              hidden
              name="bank_account_id"
              value={bankAccount?.data?.id}
            />
            <h2 className="mb-4 font-poppins text-sm font-semibold text-grisHeading">
              Editar Cuenta de Banco
            </h2>
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
                        defaultVal={bankAccount.data.account_id}
                        required={true}
                      />
                    </div>
                    <div className="basis-full">
                      <InputRouter
                        name="account_name"
                        type="text"
                        placeholder="Nombre de la Cuenta"
                        defaultVal={bankAccount.data.name}
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
                      defaultVal={bankAccount.data.account_number}
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
                      defaultVal={bankAccount.data.currency}
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm font-normal text-[#696974]">
                    Datos del Banco Propio
                  </p>
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-span-1">
                      <p className="text-xs text-grisText">País</p>
                    </div>
                    <div className="col-span-11">
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.country}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-xs text-grisText">Clave de Banco</p>
                    </div>
                    <div className="col-span-11">
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.bank_key}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm font-normal text-[#696974]">
                    Dirección del Banco
                  </p>
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-span-1">
                      <p className="text-xs text-grisText">Calle</p>
                    </div>
                    <div className="col-span-11">
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.street}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-xs text-grisText">Int.</p>
                    </div>
                    <div className="col-span-11">
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.int}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-xs text-grisText">Ext.</p>
                    </div>
                    <div className="col-span-11">
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.ext}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-xs text-grisText">Colonia</p>
                    </div>
                    <div className="col-span-11">
                      <p className="text-xs font-normal text-grisSubText">
                        {ownBankInfo?.cologne}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Save"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditBankAccount;

export async function Action({ request }) {
  const data = await request.formData();
  await editBankAccount(data);
  return 1;
}
