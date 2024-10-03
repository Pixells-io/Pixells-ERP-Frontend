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
import { storefront, trashOutline } from "ionicons/icons";

function ModalDeleteUser({ service_id,user_id, user_name }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger className="flex h-[24px] min-w-[73px] items-center gap-x-0.5 rounded-xl border border-[#44444F] bg-inherit px-0 px-1.5 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2">
        <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
        Eliminar
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4 border-0 bg-[#242424]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={storefront} className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading text-white">
                  Eliminar Caja
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading text-white">
                  "{user_name}"
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          method="post"
          action={"/inventory/general-services/service/edit/" + service_id}
          className="flex flex-col gap-4"

        >
          <input type="hidden" hidden name="service_user" value={user_id} readOnly />
          <input
            type="hidden"
            hidden
            name="type_option"
            value={"destroyServiceUser"}
            readOnly
          />
          <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
            You are trying to delete the User "{user_name}", are you sure?
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

export default ModalDeleteUser;
