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
import { trash } from "ionicons/icons";

function ModalDeleteAccount({ account_id, account_name }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger
        disabled={navigation.state === "submitting"}
        className="flex items-center"
      >
        <IonIcon icon={trash} className="h-5 w-5 text-[#696974]"></IonIcon>
      </DialogTrigger>
      <DialogContent className="overflow-auto border-none bg-black p-0 px-8 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="py-4 font-poppins font-semibold text-white">
            Delete Cuenta - {account_name}
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/bank-management`}
          method="post"
          className="flex flex-col gap-3"
        >
          <input type="hidden" hidden name="account_id" value={account_id} readOnly />
          <input
            type="hidden"
            hidden
            name="type_option"
            value={"destroy_account"}
            readOnly
          />
          <span className="font-roboto text-[#A6A6A6]">
            You are trying to delete the account {account_name}, are you sure?
          </span>
          <DialogFooter className="pb-6 pt-6">
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="justify-normal rounded-lg bg-[#343434] px-6 py-2 font-roboto text-xs font-semibold text-white"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Borrar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDeleteAccount;
