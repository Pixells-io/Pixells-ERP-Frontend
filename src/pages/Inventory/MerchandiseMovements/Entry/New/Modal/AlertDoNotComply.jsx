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

function AlertDoNotComply({setModal, modal}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
      </DialogTrigger>
      <DialogContent className="flex max-w-[310px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-md font-robot font-medium">Alerta</DialogTitle>
          <DialogDescription className="text-xs text-grisSubText font-medium">Uno o varios artículos no cumplen con la cantidad esperada. ¿Deseas generar un back order?</DialogDescription>
        </DialogHeader>
        <Form
          className="flex flex-col gap-4"
        >
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/3 bg-[#343434] font-roboto text-xs font-semibold"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="w-1/3 border border-[#5B89FF] bg-inherit text-[#5B89FF] font-roboto text-xs font-semibold"
              >
                Solo Recibir
              </Button>
              <Button
                type="button"
                className="w-1/3 bg-primarioBotones font-roboto text-xs font-semibold"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Confirmar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AlertDoNotComply;
