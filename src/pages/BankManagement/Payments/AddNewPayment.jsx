import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
  closeCircle,
} from "ionicons/icons";
import OnlyDataTable from "../Components/Table/OnlyDataTable";
import { AddPaymentsColumns } from "./Table/AddPaymentsColumns";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Checkbox } from "@/components/ui/checkbox";
import InfoPaymentAndCollection from "../Components/InfoPaymentAndCollection";
import FormPaymentMethods from "./Modal/FormPaymentMethods";
import StatusInformation from "../Components/StatusInformation/StatusInformation";
import ModalConfirmation from "../Components/ModalConfirmation";
import TableForm from "../Components/Table/TableForm";

function AddNewPayment() {
  const navigate = useNavigate();

  const [modalPaymentMethods, setModalPaymentMethods] = useState(false);
  const [status, setStatus] = useState("draft");
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [rowRetenciones, setRowRetenciones] = useState([]);
  const [dataSelectTable, setDataSelectTable] = useState([]);

  //datos de prueba --------------------------

  const dateNow = new Date().toLocaleDateString("es-ES");

  const [data, setData] = useState([
    {
      id: "1",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300000",
      discount: "0.00",
      pendingPayment: "0",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
    {
      id: "2",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300000",
      discount: "0.00",
      pendingPayment: "0",
      observations: "Atrasado con el pago",
      total: "2000.00",
      isSelected: "0",
    },
    {
      id: "3",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300000",
      discount: "0.00",
      pendingPayment: "0",
      observations: "Atrasado con el pago",
      total: "2000.00",
      isSelected: "0",
    },
  ]);

  //-------------------------------------------

  const openModalPaymentMethods = (value) => {
    setModalPaymentMethods(true);
    setDataSelectTable(value);
    console.log(value);
  };

  const InProgressValue = (value) => {
    setModalPaymentMethods(false);
    setStatus("inProgress");
    const auxData = data.map((item) => {
      const foundData = dataSelectTable.find((ds) => ds.id == item.id);
      return foundData ? { ...item, isSelected: "1" } : item;
    });

    setData(auxData);

    console.log(auxData);
  };

  const saveValue = () => {
    setModalConfirmation(false);
    navigate(`/bank-management/payment/record/1`);
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
        description={
          "Una ves realizada esta acción, el documento no podrá modificarse"
        }
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
            Nuevo Registro de Pago
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
          </div>
          <div className="flex items-end justify-center">
            <Link to={"/bank-management/payment/"}>
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
            <p className="flex items-center justify-center rounded-lg bg-[#F4F4F4] px-4 text-xs font-normal text-grisSubText">
              {dateNow}
            </p>
            <SelectRouter
              name="supplier"
              options={[]}
              placeholder="Proveedor"
            />
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
          columns={AddPaymentsColumns}
          titleButton={"Agregar Método"}
          functionButton={openModalPaymentMethods}
        />

        <div className="rounded-xl bg-blancoBg px-4 py-4">
          <h3 className="text-md mb-2 font-poppins font-medium text-grisHeading">
            Retenciones
          </h3>
          <TableForm
            rows={rowRetenciones}
            setRows={setRowRetenciones}
            columns={[
              {
                key: "retentionType",
                class: "w-48",
                label: "Tipo de Retención",
                placeholder: "Select",
                typeColumn: "select",
                options: [
                  {
                    value: "10",
                    label: "IVA-(10%)",
                  },
                  {
                    value: "20",
                    label: "IVA-(20%)",
                  },
                  {
                    value: "30",
                    label: "IVA-(30%)",
                  },
                  {
                    value: "40",
                    label: "IVA-(40%)",
                  },
                  {
                    value: "50",
                    label: "IVA-(50%)",
                  },
                  {
                    value: "60",
                    label: "IVA-(60%)",
                  },
                  {
                    value: "70",
                    label: "IVA-(70%)",
                  },
                  {
                    value: "80",
                    label: "IVA-(80%)",
                  },
                  {
                    value: "90",
                    label: "IVA-(90%)",
                  },
                ],
              },
              {
                key: "value",
                class: "w-48",
                label: "Valor",
                placeholder: "",
                typeColumn: "input",
                type: "number",
              },
            ]}
          />
        </div>

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
              total={"6360.00"}
              titleTotal={"TOTAL PAGADO"}
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

export default AddNewPayment;
