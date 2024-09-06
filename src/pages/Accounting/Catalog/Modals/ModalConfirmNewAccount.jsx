import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { calculatorOutline, closeCircle } from "ionicons/icons";

function ModalConfirmNewAccount({
  modal,
  setModal,
  newAccount,
  setSelectNewAccount,
  level,
}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
      clearData();
    }
  }, [navigation.state]);

  const clearData = () => {
    setSelectNewAccount({ level: "", name: "" });
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={calculatorOutline} className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading">
                  Crear Nueva Cuenta Contable
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading">
                  "{newAccount?.name}"
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/accounting/${level}`}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            readOnly
            value={"save_accountingAccount"}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="accounting_account"
            readOnly
            value={newAccount?.level}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="name"
            readOnly
            value={newAccount?.name}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="level"
            readOnly
            value={newAccount?.level}
          />
          <span className="my-4 font-roboto text-xs font-light text-grisSubText">
            You are trying to create the account "{newAccount?.level}
            {newAccount?.name}", are you sure?
          </span>

          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-fit px-0 h-fit rounded-xl bg-inherit font-roboto text-xs font-light text-[#44444F] hover:bg-inherit"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="h-8 w-24 rounded-xl bg-primarioBotones font-roboto text-xs font-normal hover:bg-primarioBotones"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Aceptar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalConfirmNewAccount;
