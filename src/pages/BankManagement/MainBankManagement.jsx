import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, add } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import CardInformation from "./Components/CardInformation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FormAddOwnBank from "./Accounts/FormAddOwnBank";
import FormAddBankAccount from "./Accounts/FormAddBankAccount";
import { redirect, useLoaderData } from "react-router-dom";
import {
  destroyBank,
  destroyBankAccount,
  getBanks,
  saveBank,
  saveBankAccount,
} from "./Accounts/utils";
import Banks from "./Accounts/Banks/Banks";
import BankAccounts from "./Accounts/BankAccounts/BankAccounts";
import NavigationHeader from "@/components/navigation-header";
import BalanceDataTable from "./Components/Table/BalanceTable";
import BankCard from "./Components/BankBalanceCard";
import CardBalanceTotal from "./Components/CardBalanceGeneral";
import BalanceTabContent from "./Components/Tabs/BalancesTab";
function MainBankManagement() {
  const { banks, bankAccounts } = useLoaderData();
  const [modalAddOwnBank, setModalAddOwnBank] = useState(false);
  const [modalBankAccount, setModalAddBankAccount] = useState(false);
  const tabsContents = [
    { value: "accounts", label: "Cuentas" },
    { value: "balances", label: "Saldos" },
  ];
  const tabItems = [
    { value: "accounts", label: "CUENTAS" },
    { value: "banks", label: "BANCOS" },
  ];
  const banksData = [
    { title: "Banamex", balance: "$1,400,527.00" },
    { title: "Bancomer", balance: "$237,458.00" },
    { title: "Santander", balance: "$567,492.00" },
    { title: "BanRegio", balance: "$69,599.90" },
  ];
  const datos = [
    {
      cuenta: "38947289",
      bancos: "Banamex",
      razonSocial: "Pixells Inc.",
      descripcion: "Cuenta Cheques",
      ingreso: "$2,400,527.00",
      egreso: "$1,000,000.00",
      balance: "$1,400,527.00",
    },
  ];

  return (
    <div className="flex h-full w-full">
      {/* Modals */}
      <FormAddOwnBank modal={modalAddOwnBank} setModal={setModalAddOwnBank} />
      <FormAddBankAccount
        modal={modalBankAccount}
        setModal={setModalAddBankAccount}
        banks={banks.data}
      />

      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-md font-poppins font-bold text-[#44444F]">
              GESTIÓN DE BANCOS
            </h2>
          </div>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>
     
        <Tabs
          defaultValue="accounts"
          className="h-full w-full overflow-hidden rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <div className="flex justify-start">
              <p className="font-poppins text-xl font-bold text-grisHeading">
                Cuentas Bancarias
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                {tabsContents.map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                    value={value}
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones">
                    <IonIcon icon={add} className="h-4 w-4" />
                    <span className="text-xs font-medium">Nuevo</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    className="w-full hover:cursor-pointer focus:bg-hoverModal"
                    onClick={() => setModalAddOwnBank(true)}
                  >
                    Bancos
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-full hover:cursor-pointer focus:bg-hoverModal"
                    onClick={() => setModalAddBankAccount(true)}
                  >
                    Cuenta Bancaría
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <TabsContent value="accounts" className="h-full">
            <Tabs
              defaultValue="accounts"
              className="h-full overflow-hidden rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                {tabItems.map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                    value={value}
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="accounts" className="mt-[-70px] p-2">
                <BankAccounts bankAccounts={bankAccounts} />
              </TabsContent>
              <TabsContent className="mt-[-70px] p-2" value="banks">
                <Banks banks={banks} />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent
            value="balances"
            className="h-full overflow-hidden"
          >
          <BalanceTabContent banksData={banksData} balanceData={datos}/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainBankManagement;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "save_bank":
      await saveBank(data);
      break;
    case "destroy_bank":
      await destroyBank(data);
      break;
    case "save_bankAccount":
      await saveBankAccount(data);
      break;
    case "destroy_bankAccount":
      await destroyBankAccount(data);
      break;
  }

  return redirect(`/bank-management`);
}
