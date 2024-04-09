import React from "react";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function FormNewSale() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-6 p-0 text-gris2 group hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg"
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="text-base font-medium text-gris2 group-hover:text-blue-500 mr-2">
            New Sale
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-auto h-[650px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Client</DialogTitle>
        </DialogHeader>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewSale;
