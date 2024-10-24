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
import { lockOpen } from "ionicons/icons";
import { permissionValidate } from "@/lib/actions";
import { savePermission } from "@/pages/Organization/utils";

function DeleteModalPermission({}) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      clearData();
      setModal(false);
    }
  }, [navigation.state]);

  const clearData = () => {
    if (modal) {
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger className="flex items-center">
        <Button
          type="button"
          className="flex h-[30px] items-center justify-center rounded-xl bg-[#44444F] px-3 hover:bg-[#44444F]"
        >
          <span className="text-xs font-medium">Restablecer</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4 border-0 bg-[#242424]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={lockOpen} className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading text-white">
                  Restablecer Permisos
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading text-white"></h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>

        <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
          ¿Estás seguro de restablecer los permisos?
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
              Restablecer
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModalPermission;
