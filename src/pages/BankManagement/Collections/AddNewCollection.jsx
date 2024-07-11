import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
  closeCircle,
} from "ionicons/icons";
import OnlyDataTable from "./Table/OnlyDataTable";
import { AddCollectionsColumns } from "./Table/AddCollectionColumns";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Checkbox } from "@/components/ui/checkbox";
import InfoPaymentAndCollection from "../Components/InfoPaymentAndCollection";
import FormPaymentMethods from "./Modal/FormPaymentMethods";
import StatusInformation from "../Components/StatusInformation/StatusInformation";
import NoDocument from "../Components/NoDocument";
import ModalConfirmation from "../Components/ModalConfirmation";

function AddNewCollection() {
  const [modalPaymentMethods, setModalPaymentMethods] = useState(false);
  const [status, setStatus] = useState(1);
  const [modalConfirmation, setModalConfirmation] = useState(false);

  //datos de prueba --------------------------

  const dateNow = new Date().toLocaleDateString("es-ES");

  const data = [
    {
      id: "1",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300,000",
      discount: "0.00",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
    {
      id: "2",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300,000",
      discount: "0.00",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
    {
      id: "3",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300,000",
      discount: "0.00",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
  ];

  //-------------------------------------------

  const openModalPaymentMethods = (value) => {
    setModalPaymentMethods(true);
  };

  const InProgressValue = (data) => {
    setModalPaymentMethods(false);
    setStatus(2);
    console.log(data);
  };

  const saveValue = () => {
    setModalConfirmation(false);
    setStatus(3);
  };

  return (
    <div className="flex w-full">
      <FormPaymentMethods
        modal={modalPaymentMethods}
        setModal={setModalPaymentMethods}
        functionModal={InProgressValue}
      />
      <ModalConfirmation 
        title={"Confirmación"}
        description={"Una ves realizada esta acción, el documento no podrá modificarse"}
        modal={modalConfirmation}
        setModal={setModalConfirmation}
        modalFunction={saveValue}
      />
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-scroll rounded-lg bg-gris px-8 py-4">
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

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Nuevo Registro de Cobro
          </p>

          <div className="flex items-center justify-end gap-5">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={copy}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={print}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={create}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
            </div>

            <div className="flex w-2/5 items-center gap-2">
              <NoDocument />
            </div>
          </div>
            <div className="flex items-end justify-center">
              <Link to={"/bank-management/collection/"}>
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                ></IonIcon>
              </Link>
            </div>
        </div>

        <div className="flex justify-between rounded-xl bg-blancoBg px-8 py-3">
          <div className="flex gap-2">
            <InputRouter name="date" type="text" placeholder={dateNow} />
            <SelectRouter name="client" options={[]} placeholder="Cliente" />

            <InputRouter
              name="register_accountName"
              type="text"
              placeholder="Entradas de diario"
            />
          </div>
          <div className="flex w-1/3 items-center justify-center gap-2">
            <label
              htmlFor="complementPayment"
              className="text-xs text-[#8f8f8f]"
            >
              Complemento de pago
            </label>
            <Checkbox
              id="complementPayment"
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
        </div>
        <OnlyDataTable
          data={data}
          columns={AddCollectionsColumns}
          titleButton={"Agregar Método"}
          functionButton={openModalPaymentMethods}
        />

        <div className="flex flex-row justify-between rounded-xl bg-blancoBg px-4 py-6">
          <div className="w-1/2">
            <textarea
              placeholder="Observaciones"
              className="h-full w-1/2 resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
              name="template"
            ></textarea>
          </div>
          <div className="w-1/3">
            <InfoPaymentAndCollection
              totalAmount={"6000.00"}
              titleTotalAmount={"Importe Total Vencido"}
              balance={"960.00"}
              titleBalance={"Saldo Pendiente"}
              isDisBalance={false}
              total={"6,360.00"}
              titleTotal={"TOTAL COBRADO"}
            />
          </div>
        </div>

        <StatusInformation
          status={status}
          saveDraft={""}
          applyFunction={() => setModalConfirmation(true)}
        />
      </div>
    </div>
  );
}

export default AddNewCollection;
