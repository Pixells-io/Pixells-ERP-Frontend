import React, { useEffect, useState } from "react";
import Select from "react-select";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";

function EditProcessSaleModal({
  modal,
  setModal,
  process_id,
  process_name,
  process_description,
}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="text-md px-8 py-4 font-poppins font-semibold text-grisHeading">
            Crear Proceso de Venta
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/crm"
          method="POST"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input type="hidden" name="action" value="edit-sale-process" />
              <input type="hidden" name="sale_process_id" value={process_id} />
              <InputForm
                type="text"
                placeholder="Nombre"
                name="name"
                defaultValue={process_name}
                required={true}
              />
              <InputForm
                type="text"
                placeholder="Descripcion"
                defaultValue={process_description}
                name="description"
              />
            </div>
          </div>
          <DialogFooter className="pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Editar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditProcessSaleModal;
