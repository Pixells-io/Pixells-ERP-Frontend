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
import { Input } from "@/components/ui/input";

function ModalQrCode({ setModal, modal }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="max-w-[380px] p-0">
        <DialogHeader className="rounded-t-lg border-b bg-blancoForms pt-2">
          <DialogTitle className="px-8 py-2 font-poppins text-sm font-semibold text-grisHeading">
            Código QR/Barras
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex justify-center px-4 py-2">
          <Input
            className="w-full max-w-[180px] rounded-3xl border border-[#696974] bg-inherit text-center text-sm font-medium text-grisText placeholder:text-center placeholder:text-grisText"
            name="code"
            // value={row.amount}
            placeholder="CÓDIGO"
            type="text"
          />
        </DialogDescription>

        <DialogFooter className="p-3">
          <div className="flex w-full justify-center">
            <Button
              type="button"
              className="rounded-lg bg-primarioBotones px-8 font-roboto text-xs font-semibold"
            >
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalQrCode;
