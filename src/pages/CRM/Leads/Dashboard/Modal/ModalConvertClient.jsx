import React, { useEffect, useState } from "react";
import { Form, redirect, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ModalConvertClient({ modal, setModal, lead_id, lead_name, url }) {
  const params = useParams();

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-[400px] overflow-auto p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Convertir a Cliente
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-edit-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`${url} ${params.id}`}
          method="POST"
          encType="multipart/form-data"
        >
          <div className="flex w-full max-w-[400px] flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input
                type="text"
                name="action"
                value="convert-client"
                hidden
                readOnly
              />
              <input
                type="text"
                name="lead_id"
                value={lead_id}
                hidden
                readOnly
              />
              <span>
                Estas tratando de convertir {lead_name} a cliente, ¿Estas
                Seguro?
              </span>
            </div>
          </div>

          <DialogFooter className="px-10 pb-6">
            <Button
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
              type="submit"
              onClick={() => setModal(false)}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalConvertClient;
