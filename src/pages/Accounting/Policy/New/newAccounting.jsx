import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import FormInputs from "../../components/DataInput";
import TableForm from "../../components/Tabs/DataTableForm";
import DataSection from "../../components/DataSection";
import ConfirmationButtons from "../../components/ConfirmationButton";

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
            <div>
            Accounting - policy
            </div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Asiento contable
          </p>
        </div>

        {/* form new account */}
        <form id="fileinfo" className="flex h-full overflow-auto flex-col">
          <FormInputs />
          <div className="flex-1 overflow-container">
            <TableForm className="overflow-auto block"
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
