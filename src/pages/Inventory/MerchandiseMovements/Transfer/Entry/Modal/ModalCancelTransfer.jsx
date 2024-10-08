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
import { closeCircleOutline } from "ionicons/icons";

function ModalCancelTransfer({ transfer_id }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger disabled={navigation.state === "submitting"} className="">
        <IonIcon icon={closeCircleOutline} className="h-5 w-5 text-[#44444f]" />
      </DialogTrigger>
      <DialogContent className="overflow-auto border-none bg-black p-0 px-8 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="py-4 font-poppins font-semibold text-white">
            Cancelar Transferencia
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/inventory/merchandise-movements`}
          method="post"
          className="flex flex-col gap-3"
        >
          <input
            type="hidden"
            hidden
            name="transfer_id"
            value={transfer_id}
            readOnly
          />
          <input
            type="hidden"
            hidden
            name="type_option"
            value={"cancel_transfer"}
            readOnly
          />
          <span className="font-roboto text-[#A6A6A6]">
            Estas tratando de cancelar la transferencia #{transfer_id}, estas
            seguro?
          </span>
          <DialogFooter className="pb-6 pt-6">
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="justify-normal rounded-lg bg-[#343434] px-6 py-2 font-roboto text-xs font-semibold text-white"
                onClick={() => setModal(false)}
              >
                Cerrar
              </Button>
              <Button
                type="submit"
                className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Cancelar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCancelTransfer;
