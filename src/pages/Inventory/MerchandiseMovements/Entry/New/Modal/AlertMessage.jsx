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

function AlertMessage({setModal, modal}) {
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
      <DialogContent className="flex max-w-[260px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-md font-robot font-medium">Alerta</DialogTitle>
          <DialogDescription className="text-xs text-grisSubText font-medium">La cantidad supera el nivel máximo para el artículo “xxxxx”. ¿Deseas continuar?</DialogDescription>
        </DialogHeader>
        <Form
          className="flex flex-col gap-4"
        >
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="w-1/2 bg-primarioBotones font-roboto text-xs font-semibold"
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

export default AlertMessage;
