import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { calculatorOutline, trashOutline } from "ionicons/icons";

function ModalDeleteAccount({
  account_id,
  account_name,
  level,
  setSelectAccount,
}) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      clearData();
      setModal(false);
    }
  }, [navigation.state]);

  const clearData = () => {
    if (modal) {
      setSelectAccount(null);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger
        disabled={navigation.state === "submitting"}
        className="flex items-center"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8E8E8]">
          <IonIcon icon={trashOutline} className="h-5 w-5 text-[#44444F]"></IonIcon>
        </div>
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4 border-0 bg-[#242424]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon
                  icon={calculatorOutline}
                  className="h-8 w-8 text-white"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading text-white">
                  Eliminar Cuenta Contable
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading text-white">
                  "{account_name}"
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
            name="account_id"
            value={account_id}
            readOnly
          />
          <input
            type="hidden"
            hidden
            name="type_option"
            value={"destroy_account"}
            readOnly
          />
          <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
            You are trying to delete the account "{account_name}", are you sure?
          </span>
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="h-fit w-fit rounded-xl bg-inherit px-0 font-roboto text-xs font-light text-white hover:bg-inherit"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="h-8 w-24 rounded-xl bg-[#DC1C3B] font-roboto text-xs font-normal text-white hover:bg-[#DC1C3B]"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Eliminar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDeleteAccount;
