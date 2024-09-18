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
import { trashOutline } from "ionicons/icons";

function DeletePriceListDialog({ id, name, modal, setModal }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex max-w-[400px] flex-col gap-4 border-0 bg-[#242424]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon
                  icon={trashOutline}
                  className="h-8 w-8 text-white"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-white">
                  Eliminar Lista de Precios
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-white">
                  "{name}"
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/inventory/prices-lists/details/${id}`}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            name="price_list_id"
            value={id}
            readOnly
          />
          <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
            Está intentando eliminar la lista de precios "{name}". ¿Está seguro?
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
                  ? "Eliminando..."
                  : "Eliminar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default DeletePriceListDialog;