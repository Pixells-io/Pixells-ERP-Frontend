import React, { useEffect, useState } from "react";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { IonIcon } from "@ionic/react";
import { closeCircle, copy, create } from "ionicons/icons";
import ModalDeleteAccount from "../../Catalog/Modals/ModalDeleteAccount";
import { getAccountingAccountById } from "../../Catalog/utils";
import { Form, useNavigation } from "react-router-dom";

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import ModalConfirmNewAccount from "../../Catalog/Modals/ModalConfirmNewAccount";

const FormDetailAccount = ({
  selectAccount,
  setSelectAccount,
  level,
  parentAccount,
}) => {
  const navigation = useNavigation();

  const [account, setAccount] = useState({
    id: "",
    type: "",
    accounting_account: "",
    name: "",
    level: "",
    currency: "",
    balance: "",
    type_of_account: "",
    sat_code: "",
  });

  const [checkedInputType, setCheckedInputType] = useState("0");
  const [checkedInputStatus, setCheckedInputStatus] = useState("0");
  const [isEditable, setIsEditable] = useState(false);
  const [modalCloneAccount, setModalCloneAccount] = useState(false);
  const [newCloneAccount, setNewCloneAccount] = useState({
    level: "",
    name: "",
  });

  useEffect(() => {
    getAccount();
  }, [selectAccount]);

  useEffect(() => {
    setIsEditable(false);
  }, [selectAccount]);

  const getAccount = async () => {
    const accountResponse = await getAccountingAccountById(selectAccount.id);
    setAccount(accountResponse.data);
    setCheckedInputType(accountResponse.data.type);
    setCheckedInputStatus(accountResponse.data.status);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevData) => ({ ...prevData, [name]: value }));
  };

  const newAccount = () => {
    let numAccount = 1;
    if (parentAccount.subAccounts.length != 0) {
      let ultimateAccount =
        parentAccount.subAccounts[parentAccount.subAccounts.length - 1];
      let ultimateDigit =
        ultimateAccount.levels[ultimateAccount.levels.length - 1];
      numAccount = Number(ultimateDigit) + 1;
    }
    const NewNumber = {
      name: `${selectAccount.name} copia (${numAccount})`,
      level: `${parentAccount.level}.${numAccount}`,
      levels: `${parentAccount.level}.${numAccount}`.split("."),
    };
    setNewCloneAccount(NewNumber);
    setModalCloneAccount(true);
  };

  return (
    <div className="h-full w-2/5 overflow-auto border-l p-2">
      {/* modals */}
      <ModalConfirmNewAccount
        modal={modalCloneAccount}
        setModal={setModalCloneAccount}
        newAccount={newCloneAccount}
        setSelectNewAccount={setNewCloneAccount}
        level={level}
      />
      <div className="flex justify-end">
        <IonIcon
          icon={closeCircle}
          className="h-6 w-6 cursor-pointer text-grisDisabled"
          onClick={() => setSelectAccount(null)}
        ></IonIcon>
      </div>
      <div className="flex items-center">
        <div className="w-full">
          <h2 className="text-sm font-normal text-grisText">
            Detalles de la Cuenta
          </h2>
        </div>
        <div className="flex w-full justify-center gap-x-4">
          <div
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#E8E8E8]"
            onClick={() => newAccount()}
          >
            <IonIcon
              icon={copy}
              className="h-5 w-5 cursor-pointer text-[#696974]"
            ></IonIcon>
          </div>
          <div
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#E8E8E8]"
            onClick={() => setIsEditable(!isEditable)}
          >
            <IonIcon
              icon={create}
              className={`h-5 w-5 cursor-pointer ${isEditable ? "text-primario" : "text-[#696974]"} `}
            ></IonIcon>
          </div>
          <ModalDeleteAccount
            account_id={account.id}
            account_name={account.name}
            level={level}
            setSelectAccount={setSelectAccount}
          />
        </div>
      </div>
      <Form
        className="mt-4"
        action={`/accounting/${level}`}
        method="post"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <input
          type="hidden"
          hidden
          name="account_id"
          className="hidden"
          value={account.id}
          readOnly
        />
        <input
          type="hidden"
          hidden
          name="type_option"
          className="hidden"
          value={"update_accountingAccount"}
          readOnly
        />
        <div className="my-4 flex gap-x-8">
          <input
            type="hidden"
            hidden
            name="type"
            className="hidden"
            value={checkedInputType}
            readOnly
          />
          <div className="flex items-center gap-x-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={checkedInputType == "1"}
              onCheckedChange={() => setCheckedInputType("1")}
              disabled={!isEditable}
            />
            <p className="font-roboto text-sm font-light text-grisText">
              Título
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={checkedInputType == "2"}
              onCheckedChange={() => setCheckedInputType("2")}
              disabled={!isEditable}
            />
            <p className="font-roboto text-sm font-light text-grisText">
              Cuenta Activa
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-3 gap-y-6 p-1 pb-8">
          <div className="col-span-12 md:col-span-7 xl:col-span-7">
            <p className="font-roboto text-sm font-light text-grisText">
              Cuenta Contable
            </p>
            <InputRouter
              id="accounting_account"
              name="accounting_account"
              value={
                !!account.accounting_account ? account.accounting_account : ""
              }
              onChange={handleInputChange}
              type="text"
              disabled={!isEditable}
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Nombre
            </p>
            <InputRouter
              id="name"
              name="name"
              value={!!account.name ? account.name : ""}
              onChange={handleInputChange}
              type="text"
              disabled={!isEditable}
            />
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <p className="mb-2 font-roboto text-sm font-light text-grisText">
              Nivel
            </p>
            <Input
              id="level"
              name="level"
              value={!!account.level ? account.level : ""}
              readOnly
              className="h-9.5 border border-grisText"
              disabled={true}
              type="text"
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
              // value={"MXN"}
              // onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Saldo
            </p>
            <InputRouter
              id="balance"
              name="balance"
              value={!!account.balance ? account.balance : ""}
              onChange={handleInputChange}
              type="text"
              disabled={!isEditable}
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Tipo de cuenta
            </p>
            <InputRouter
              id="type_of_account"
              name="type_of_account"
              value={!!account.type_of_account ? account.type_of_account : ""}
              onChange={handleInputChange}
              type="text"
              disabled={!isEditable}
            />
          </div>

          <div className="col-span-12">
            <p className="font-roboto text-sm font-light text-grisText">
              Código Agrupador SAT (Contabilidad Electrónica)
            </p>
            <SelectRouter
              name="sat_code"
              options={[
                { label: "123", value: "123" },
                { label: "321", value: "321" },
              ]}
              disabled={!isEditable}
            />
          </div>
          <div className="col-span-12 flex items-center gap-x-2">
            <input
              type="hidden"
              hidden
              name="status"
              className="hidden"
              value={checkedInputStatus}
              readOnly
            />
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={checkedInputStatus == "1"}
              onCheckedChange={(e) => setCheckedInputStatus(e ? "1" : "0")}
              disabled={!isEditable}
            />
            <p className="font-roboto text-sm font-light text-grisText">
              Activo
            </p>
          </div>
        </div>
        <div className="flex w-full justify-end">
          {isEditable && (
            <Button
              className="rounded-lg bg-primarioBotones text-xs hover:bg-primarioBotones"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Aceptar"}
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default FormDetailAccount;
