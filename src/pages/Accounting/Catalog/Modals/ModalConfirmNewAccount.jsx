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
            Crear Nueva Cuenta Contable - {newAccount?.name}
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
          <span className="font-roboto text-[#A6A6A6]">
            You are trying to create the account {newAccount?.level}{" "}
            {newAccount?.name}, are you sure?
          </span>

          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="bg-[#343434] font-roboto text-xs font-semibold hover:bg-primarioBotones"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-primarioBotones font-roboto text-xs font-semibold hover:bg-primarioBotones"
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
