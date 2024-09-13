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
import { calculatorOutline } from "ionicons/icons";

function ModalConfirmQuote({ id, name }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <Button
          type="button"
          className="rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
        >
          Aceptar Cotización
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={calculatorOutline} className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading">
                  Confirmar Cotización
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading">
                  "{name}"
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/shopping/quotes-orders/edit/${id}`}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            readOnly
            value={"accept_quote"}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="quote_id"
            readOnly
            value={id}
          />
          <span className="my-4 font-roboto text-xs font-light text-grisSubText">
            This confirm the quote "{name}" will create a purchase order, are
            you sure?
          </span>

          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="h-fit w-fit rounded-xl bg-inherit px-0 font-roboto text-xs font-light text-[#44444F] hover:bg-inherit"
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

export default ModalConfirmQuote;
