import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import FormInputs from "../../components/DataInput";
import TableForm from "../../components/Tabs/DataTableForm";
import DataSection from "../../components/DataSection";
import ConfirmationButtons from "../../components/ConfirmationButton";
import { Button } from "@/components/ui/button";

const CreateAccount = () => {
  const [debitTotal, setDebitTotal] = useState(0);
  const [creditTotal, setCreditTotal] = useState(0);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
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
            <div>Accounting - policy</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
        </div>

        <div className="flex gap-x-12">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Asiento contable
          </p>
          <Button
            type="button"
            className=" font-medium	font-poppins text-xs text-[#44444F] bg-inherit rounded-md border-2 border-[#696974] border-dotted hover:bg-inherit h-9 px-8"
          >
            Asociar XML
          </Button>{" "}
        </div>

        {/* form new account */}
        <form id="fileinfo" className="flex h-full flex-col overflow-auto">
          <FormInputs />
          <div className="overflow-container flex-1">
            <TableForm
              className="block overflow-auto"
              setDebitTotal={setDebitTotal}
              setCreditTotal={setCreditTotal}
            />
          </div>
          <DataSection debitTotal={debitTotal} creditTotal={creditTotal} />
        </form>
        <ConfirmationButtons />
      </div>
    </div>
  );
};

export default CreateAccount;
