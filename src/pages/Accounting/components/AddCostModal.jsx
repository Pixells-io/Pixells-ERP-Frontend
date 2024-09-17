import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { add, addCircleOutline } from "ionicons/icons";
import { Textarea } from "@/components/ui/textarea";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Form, useNavigation } from "react-router-dom";

const AddCostForm = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger asChild>
        <Button
          type={"button"}
          className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
        >
          <IonIcon icon={add} className="h-4 w-4" />
          <span className="text-xs font-medium">
            Nuevo
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="-mx-6 border-b pb-4 pl-2">
          <DialogHeader className="pl-2">
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              Agregar nuevo Centro de Costos
            </DialogTitle>
          </DialogHeader>
        </div>
        <DialogDescription className="hidden"></DialogDescription>
        <Form action={`/accounting/cost`} method="post">
          <input
            type="hidden"
            hidden
            name="type_option"
            className="hidden"
            value={"save_costCenter"}
            readOnly
          />
          <div className="flex flex-col space-y-1">
            <Label
              htmlFor="code"
              className="font-roboto text-sm font-light text-grisText"
            >
              Código
            </Label>
            <InputRouter id="code" name="code" type="text" required={true} />
          </div>
          <br />
          <div className="flex flex-col space-y-1">
            <Label
              htmlFor="name"
              className="font-roboto text-sm font-light text-grisText"
            >
              Nombre
            </Label>
            <InputRouter id="name" name="name" type="text" required={true} />
          </div>
          <br />
          <div className="flex flex-col space-y-1">
            <Label
              htmlFor="description"
              className="font-roboto text-sm font-light text-grisText"
            >
              Descripción
            </Label>
            <Textarea
              rows={4}
              id="description"
              name="description"
              className="rounded-lg border-none bg-grisBg focus-visible:ring-primarioBotones"
              required={true}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              type="submit"
              className="rounded-2xl bg-primarioBotones px-8"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCostForm;
