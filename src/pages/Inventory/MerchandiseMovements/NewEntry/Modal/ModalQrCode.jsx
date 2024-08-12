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
      <DialogContent className="flex max-w-[260px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-md font-robot font-medium">
            Código QR/Barras
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-xs font-medium text-grisSubText">
          <Input
            className="w-full rounded-3xl border border-[#696974] bg-inherit text-center text-sm font-medium text-grisText placeholder:text-center placeholder:text-grisText"
            name="code"
            // value={row.amount}
            placeholder="CÓDIGO"
            type="text"
          />
        </DialogDescription>

        <DialogFooter>
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
