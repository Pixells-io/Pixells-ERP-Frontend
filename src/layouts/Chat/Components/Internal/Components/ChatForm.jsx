import React, { useState, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

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



function FormNewChat() {

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className=" text-primario hover:text-primario hover:rounded-lg"
        >
          <IonIcon icon={addCircleOutline} size="large"></IonIcon>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-auto h-[650px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Group</DialogTitle>
        </DialogHeader>

        <DialogFooter>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewChat;
