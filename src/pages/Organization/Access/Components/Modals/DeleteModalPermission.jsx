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

function DeleteModalPermission({
  selectedPositions,
  currentModule,
  setSelectedPositions,
}) {
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
      setSelectedPositions([]);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger 
        disabled={selectedPositions.length === 0}
        className="flex items-center" asChild
      >
        <Button
          type="button"
          className={`flex h-[30px] items-center justify-center rounded-xl px-3 ${
            selectedPositions.length === 0 
              ? 'bg-[#E8E8E8] text-black hover:bg-[#E8E8E8]' 
              : 'bg-[#44444F] text-white hover:bg-[#44444F]'
          }`}
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
                <h3 className="font-poppins text-[13px] font-light text-grisHeading text-white">
                  {currentModule.name}{" "}
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={"/organization/access"}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            name="module_id"
            value={currentModule.id}
            readOnly
          />
          <input
            type="hidden"
            name="positions[]"
            value={JSON.stringify(selectedPositions)}
            readOnly
          />
          <span className="my-4 font-roboto text-xs font-light text-grisDisabled">
            Estas intentando restablecer los permisos de los usuarios de "
            {currentModule.name}", ¿Estás Seguro?{" "}
          </span>
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="h-fit w-fit rounded-xl bg-inherit px-0 font-roboto text-xs font-light text-white hover:bg-inherit"
                onClick={() => {
                  setSelectedPositions([]); 
                  setModal(false); 
                }}
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
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModalPermission;
