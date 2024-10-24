import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IonIcon } from "@ionic/react";
import { discOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";

function DeleteProcessSaleModal({ modal, setModal, process_id, process_name }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
     < DialogContent className="flex max-w-[400px] flex-col gap-4 border-0 bg-[#242424]">
      <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={discOutline} className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading text-white">
                  Eliminar Proceso de Venta
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading text-white">
                  "{process_name}"
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          id="form-destroy-task"
            className="flex flex-col gap-4"
          action={`/crm`}
          method="post"
        >
          <input type="hidden" value={process_id} name="process_sale_id" />
          <input type="hidden" name="action" value="delete-sale-process" />
          <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
            Estas intentando borrar el proceso comercial {process_name}, ¿Estas
            seguro?
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
              >
                Borrar
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteProcessSaleModal;
