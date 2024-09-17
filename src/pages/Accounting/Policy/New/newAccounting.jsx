import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import FormInputs from "../../components/DataInput";
import TableForm from "../../components/Tabs/DataTableForm";
import DataSection from "../../components/DataSection";
import ConfirmationButtons from "../../components/ConfirmationButton";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";

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

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Asiento contable
          </p>
          <Button
            type="button"
            className="h-9 rounded-md border-2 border-dotted border-[#696974] bg-inherit px-8 font-poppins text-xs font-medium text-[#44444F] hover:bg-inherit"
          >
            Asociar XML
          </Button>
        </div>

        {/* form new account */}
        <form
          id="fileinfo"
          className="flex h-full flex-col overflow-auto bg-white p-7"
        >
          <FormInputs />
          <div className="overflow-auto flex-1">
            <TableForm
              className="block overflow-auto"
              setDebitTotal={setDebitTotal}
              setCreditTotal={setCreditTotal}
            />
          </div>
          <DataSection debitTotal={debitTotal} creditTotal={creditTotal} />
          <StatusInformation
            status={"inProgress"}
            imgUser={
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          >
            <ConfirmationButtons />
          </StatusInformation>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
