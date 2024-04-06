import React, { useState, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import { accessibility } from "ionicons/icons";

import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



function FormNewClient() {

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-6 p-0 text-gris2 group hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg"
        >
          <IonIcon icon={accessibility} size="large"></IonIcon>
          <p className="text-base font-medium text-gris2 group-hover:text-blue-500 mr-2">
            New Client
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-auto h-[650px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Client</DialogTitle>
        </DialogHeader>

        <DialogFooter>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewClient;
