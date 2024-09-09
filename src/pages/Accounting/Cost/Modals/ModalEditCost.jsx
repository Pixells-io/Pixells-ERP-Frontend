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
import { create, informationCircle } from "ionicons/icons";
import { Textarea } from "@/components/ui/textarea";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Form, useNavigation } from "react-router-dom";

const ModalEditCost = ({ costCenter }) => {
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
      clearData();
    }
  }, [navigation.state]);

  const clearData = () => {
    setIsEdit(false);
  };

  return (
    <Dialog
      open={modal}
      onOpenChange={(v) => {
        setModal(v);
        clearData();
      }}
    >
      <DialogTrigger asChild>
        <IonIcon
          icon={informationCircle}
          size="large"
          className="h-5 w-5 cursor-pointer"
        />
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
            value={"update_costCenter"}
            readOnly
          />
          <input
            type="hidden"
            hidden
            name="cost_center_id"
            className="hidden"
            value={costCenter?.id}
            readOnly
          />
          <div className="flex flex-row space-y-1">
            <div>
              <Label
                htmlFor="code"
                className="font-roboto text-sm font-light text-grisText"
              >
                Código
              </Label>
              <InputRouter
                id="code"
                name="code"
                type="text"
                defaultVal={costCenter?.code}
                required={true}
                disabled={!isEdit}
              />
            </div>
            <div className="flex flex-1 items-center justify-end">
              <IonIcon
                icon={create}
                size="large"
                className={`h-7 w-7 cursor-pointer ${isEdit ? "text-primarioBotones" : "text-grisText"}`}
                onClick={() => setIsEdit(!isEdit)}
              />
            </div>
          </div>
          <br />
          <div className="flex flex-col space-y-1">
            <Label
              htmlFor="name"
              className="font-roboto text-sm font-light text-grisText"
            >
              Nombre
            </Label>
            <InputRouter
              id="name"
              name="name"
              type="text"
              defaultVal={costCenter?.name}
              required={true}
              disabled={!isEdit}
            />
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
              required={true}
              disabled={!isEdit}
              defaultValue={costCenter?.description}
              className="rounded-lg border-none bg-grisBg focus-visible:ring-primarioBotones"
            />
          </div>

          <div className="mt-4 flex justify-end">
            {isEdit && (
              <Button
                type="submit"
                className="rounded-2xl bg-primarioBotones px-8"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Save"}
              </Button>
            )}
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditCost;
