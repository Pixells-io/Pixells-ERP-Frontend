import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { create } from "ionicons/icons";

function EditCategory({ modal, setModal, category }) {
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
      clearData();
    }
  }, [navigation.state]);

  const clearData = () => {
    setDisabled(true);
  };

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        clearData();
      }}
    >
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-2 font-poppins text-sm font-semibold text-grisHeading">
            Editar Categoría
          </DialogTitle>
        </DialogHeader>
        <Form
          id="inventory-new-category"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/inventory"
          method="post"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            value={"edit_category"}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="category_id"
            value={category.id}
          />
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12">
              <div className="col-span-4 flex flex-col gap-y-1">
                <label className="font-roboto text-xs font-light text-grisText">
                  Código
                </label>
                <Input
                  type="text"
                  className="w-full rounded-xl border border-[#D7D7D7] font-roboto text-sm font-light text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                  placeholder="Código"
                  name="code"
                  required={true}
                  defaultValue={category.code}
                  disabled={disabled}
                />
              </div>
              <div className="col-span-8 flex items-center justify-end">
                <Button
                  className="w-16"
                  variant="ghost"
                  onClick={() => setDisabled(!disabled)}
                  type="button"
                >
                  <IonIcon
                    icon={create}
                    size="large"
                    className="text-grisText"
                  ></IonIcon>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-8 flex flex-col gap-y-1">
                <label className="font-roboto text-xs font-light text-grisText">
                  Nombre o Descripción
                </label>
                <Input
                  type="text"
                  className="w-full rounded-xl border border-[#D7D7D7] font-roboto text-sm font-light text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                  placeholder="Nombre o Descripción"
                  name="name"
                  required={true}
                  defaultValue={category.name}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </Form>
        <DialogDescription className="hidden"></DialogDescription>
        <DialogFooter className="px-10 pb-6">
          {!disabled && (
            <Button
              form="inventory-new-category"
              className="h-8 justify-normal rounded-3xl bg-primarioBotones px-8 text-xs font-semibold"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Listo"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCategory;
