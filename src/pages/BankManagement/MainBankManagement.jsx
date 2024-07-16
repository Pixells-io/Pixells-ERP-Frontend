import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import CardInformation from "./Components/CardInformation";
import DataTable from "./Components/Table/DataTable";
import { AccountsColumns } from "./Accounts/Table/AccountsColumns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FormAddOwnBank from "./Accounts/FormAddOwnBank";
import FormAddBankAccount from "./Accounts/FormAddBankAccount";

function MainBankManagement() {
  const [modalAddOwnBank, setModalAddOwnBank] = useState(false);
  const [modalBankAccount, setModalAddBankAccount] = useState(false);

  const handleEdit = (id) => {
    alert("edit id: " + id);
  }
  
  const handleDelete = (id) => {
    alert("delete id: " + id);
  }

  const columns = React.useMemo(
    () => AccountsColumns(handleEdit, handleDelete),
    [handleEdit, handleDelete]
  );

  //datos de prueba --------------------------

  const data = [
    {
      id: "1",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco",
      accountNumber: "789789788asdasdsaad",
      balance: "54600.00",
    },
    {
      id: "2",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "3",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "17897897891",
      balance: "54600.00",
    },
    {
      id: "4",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "7",
      balance: "54600.00",
    },
    {
      id: "5",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "6",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "7",
      name: "Cheque principal 7",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "8",
      name: "Cheque principal 7",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "9",
      name: "Cheque principal 7",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "10",
      name: "Cheque principal 7",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "11",
      name: "Cheque principal 11",
      bank: "Banamex",
      type: "Banco nacional 11",
      accountNumber: "789789789",
      balance: "54600.00",
    },
  ];

  const data2 = [
    {
      id: "7",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "8",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "9",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "10",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "11",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
    {
      id: "12",
      name: "Cheque principal",
      bank: "Banamex",
      type: "Banco nacional",
      accountNumber: "789789789",
      balance: "54600.00",
    },
  ];

  //-------------------------------------------

  return (
    <div className="flex w-full">
      {/* Modals */}
      <FormAddOwnBank modal={modalAddOwnBank} setModal={setModalAddOwnBank} />
      <FormAddBankAccount
        modal={modalBankAccount}
        setModal={setModalAddBankAccount}
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
                <DropdownMenuTrigger>
                  <IonIcon
                    icon={addCircleOutline}
                    size="large"
                    className="mt-5 cursor-pointer text-blue-500"
                  ></IonIcon>
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
          <div className="flex gap-6 pr-6">
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
            <DataTable
              data={data}
              columns={columns}
              searchFilter={"bank"}
            />
          </TabsContent>
          <TabsContent className="mt-[-60px] p-2" value="banks">
            <DataTable
              data={data2}
              columns={columns}
              names={[]}
              searchFilter={"bank"}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainBankManagement;
