import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import CatalogConsole from "./Components/CatalogConsole";
import AccountFormModal from "./Components/AccountFormModal";
import { Button } from "@/components/ui/button";
import ModalImportAccounts from "./Components/ModalImportAccounts";
import { useLoaderData } from "react-router-dom";

const MainCatalog = () => {
  const [modalImport, setModalImport] = useState(false);
  const [isOpenNewAccount, setIsOpenNewAccount] = useState(false);

  const { data } = useLoaderData();

  return (
    <div className="flex w-full">
      <ModalImportAccounts modal={modalImport} setModal={setModalImport} />
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
          <div className="font-roboto text-sm text-grisText">
            <div>Accounting - policy</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Catálogo de Cuentas
          </p>
        </div>
        <div className="flex items-center gap-x-4 pl-2">
          {isOpenNewAccount && (
            <button type="button">
              <IonIcon
                icon={addCircleOutline}
                size="large"
                className="h-7 w-7 cursor-pointer text-blue-500"
              />
            </button>
          )}
          {/* <AccountFormModal /> */}
          <Button
            className="h-7 rounded-3xl border border-[#44444F] bg-inherit px-4 text-xs font-light text-black hover:bg-inherit"
            onClick={() => setModalImport(true)}
          >
            Importar
          </Button>
        </div>
        {/*CONTENT MENU OF CONSOLE */}
        <CatalogConsole accoutingAccounts={Object.values(data)} setIsOpenNewAccount={setIsOpenNewAccount} />
      </div>
    </div>
  );
};

export default MainCatalog;
