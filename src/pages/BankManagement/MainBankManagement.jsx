import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
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
import { destroyBank, destroyBankAccount, getBanks, saveBank, saveBankAccount } from "./Accounts/utils";
import Banks from "./Accounts/Banks/Banks";
import BankAccounts from "./Accounts/BankAccounts/BankAccounts";

function MainBankManagement() {
  const { banks, bankAccounts } = useLoaderData();
  const [modalAddOwnBank, setModalAddOwnBank] = useState(false);
  const [modalBankAccount, setModalAddBankAccount] = useState(false);
  
  return (
    <div className="flex w-full">
      {/* Modals */}
      <FormAddOwnBank modal={modalAddOwnBank} setModal={setModalAddOwnBank} />
      <FormAddBankAccount
        modal={modalBankAccount}
        setModal={setModalAddBankAccount}
        banks={banks.data}
      />

      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">Tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              GESTIÓN DE BANCOS
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div>
            <p className="font-poppins text-xl font-bold text-grisHeading">
              Cuentas Bancarias
            </p>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={addCircleOutline}
                className="h-7 w-7 text-primarioBotones"
              />
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
          <div className="flex flex-col sm:flex-row gap-6 pr-6">
            <CardInformation
              title="SALDO"
              subtitle="Bancos y efectivo"
              total="1002.34"
              percentage="20"
              isPositive={true}
            />
            <CardInformation
              title="DEUDA"
              subtitle="Tarjeta de crédito"
              total="8700.40"
              percentage="20"
              isPositive={false}
            />
          </div>
        </div>

        <Tabs
          defaultValue="accounts"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="accounts"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              CUENTAS
            </TabsTrigger>
            <TabsTrigger
              value="banks"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              BANCOS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="accounts" className="mt-[-60px] p-2">
            <BankAccounts bankAccounts={bankAccounts}/>
          </TabsContent>
          <TabsContent className="mt-[-60px] p-2" value="banks">
            <Banks banks={banks} />
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
