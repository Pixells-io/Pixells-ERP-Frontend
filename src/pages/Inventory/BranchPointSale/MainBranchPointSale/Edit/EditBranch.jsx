import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoaderData } from "react-router-dom";
import PrincipalTab from "./Tabs/PrincipalTab";
import GeneralTab from "./Tabs/GeneralTab";
import {
  createCashBoxesBranchTab,
  createGeneralBranchTab,
  createUsersBranchTab,
  destroyCashBoxesBranchTab,
  updateCashBoxesBranchTab,
  updateGeneralBranchTab,
  updatePrincipalBranchTab,
} from "../../utils";
import UserTab from "./Tabs/UserTab";
import CashBoxTab from "./Tabs/CashBoxTab/CashBoxTab";
import PaymentTab from "./Tabs/PaymentTab";
import AccountingTab from "./Tabs/AccountingTab";

const EditBranch = () => {
  const { whareHouses, costCenter, priceList, storeDetail, users, positions } =
    useLoaderData();

  const tabOptions = [
    {
      value: "principal",
      label: "Principal",
      subLabel: "Información inicial de la sucursal",
      disabled: false,
      update: {
        day: "Hoy",
        date: "14:36",
      },
    },
    {
      value: "general",
      label: "General",
      subLabel: "Ajusta los parámetros básicos",
      disabled: false,
      update: null,
    },
    {
      value: "users",
      label: "Usuarios",
      subLabel: "Gestiona los usuarios que usarán el sistema",
      disabled: false,
      update: null,
    },
    {
      value: "cashBoxes",
      label: "Cajas",
      subLabel: "Configura las cajas que tendrás disponibles",
      disabled: false,
      update: null,
    },
    {
      value: "payment",
      label: "Pago",
      subLabel: "Habilita los métodos de pago deseados",
      disabled: false,
      update: null,
    },
    {
      value: "accounting",
      label: "Contabilidad",
      subLabel: "Configura parametros para contabilidad",
      disabled: false,
      update: null,
    },
    {
      value: "invoicesAndReceipts",
      label: "Facturas y Recibos",
      subLabel: "Configura parametros para los tickets",
      disabled: false,
      update: null,
    },
    {
      value: "devices",
      label: "Dispositivos",
      subLabel: "Confirma los dispositivos que estarán activos",
      disabled: false,
      update: null,
    },
    {
      value: "stock",
      label: "Stock",
      subLabel: "Consulta el inventario en tiempo real",
      disabled: false,
      update: null,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-poppins text-xl font-bold text-[#44444F]">
            Nueva Sucursal
          </p>
        </div>

        <div className="flex flex-1 flex-col overflow-auto rounded-xl bg-white">
          <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              INFORMACIÓN DE LA SUCURSAL
            </span>
          </div>

          <Tabs
            defaultValue="principal"
            className="flex w-full flex-1 overflow-auto"
          >
            <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 overflow-auto bg-transparent p-6">
              {tabOptions.map(
                ({ value, label, subLabel, disabled, update }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    disabled={disabled}
                    className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
                      value === "variables"
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    <div className="flex w-full flex-col justify-start">
                      <p className="text-start font-roboto text-sm font-medium leading-tight text-[#44444F]">
                        {label}
                      </p>
                      <p className="text-start font-roboto text-[11px] font-normal leading-tight text-[#8F8F8F]">
                        {subLabel}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {!!update ? (
                        <>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.day}
                          </label>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.date}
                          </label>
                        </>
                      ) : (
                        <label className="text-xs font-light text-[#8F8F8F]">
                          New
                        </label>
                      )}
                    </div>
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            <TabsContent value="principal" className="w-full">
              <PrincipalTab
                whareHouses={whareHouses.data}
                costCenter={costCenter.data}
                priceList={priceList.data}
                storeDetail={storeDetail.data}
              />
            </TabsContent>
            <TabsContent value="general" className="w-full">
              <GeneralTab
                informationDetails={storeDetail?.data?.information}
                store_id={storeDetail?.data?.id}
              />
            </TabsContent>
            <TabsContent value="users" className="w-full">
              <UserTab users={users.data} cashBoxes={storeDetail?.data?.pos} />
            </TabsContent>
            <TabsContent value="cashBoxes" className="w-full">
              <CashBoxTab
                cashBoxes={storeDetail?.data?.pos}
                positions={positions.data}
                store_id={storeDetail?.data?.id}
              />
            </TabsContent>
            <TabsContent value="payment" className="w-full">
              <PaymentTab />
            </TabsContent>
            <TabsContent value="accounting" className="w-full">
              <AccountingTab store_id={storeDetail?.data?.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditBranch;

export async function Action({ request }) {
  // const { level } = useParams();

  const data = await request.formData();
  switch (data.get("type_option")) {
    case "update_principalBranchTab":
      await updatePrincipalBranchTab(data);
      break;
    case "generalBranchTab":
      if (!!data.get("info_id")) {
        await updateGeneralBranchTab(data);
      } else {
        await createGeneralBranchTab(data);
      }
      break;
    case "userBranchTab":
      await createUsersBranchTab(data);
      break;
    case "createCashBoxBranchTab":
      await createCashBoxesBranchTab(data);
      break;
    case "updateCashBoxBranchTab":
      await updateCashBoxesBranchTab(data);
      break;
    case "destroyCashBoxBranchTab":
      await destroyCashBoxesBranchTab(data);
      break;
  }
  return "1";
  // return redirect(`/accounting/${level}`);
}
