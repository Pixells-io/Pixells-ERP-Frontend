import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const EditAttribute = ({ modal, setModal, attribute, setAttribute }) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
      setAttribute({});
    }
  }, [navigation.state]);

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        setAttribute({});
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[550px]">
        <DialogHeader className="border-b border-[#D7D7D7] px-6 pb-4">
          <DialogTitle className="font-poppins text-sm font-semibold text-[#44444F]">
            Editar Atributo de Producto
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>
        <div className="px-6 py-4">
          <Form id="form-edit-attributes" action="/inventory" method="POST">
            <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="type_option"
              value={"edit_attribute"}
            />
            <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="attribute_id"
              value={attribute?.id}
            />
            <div className="mb-2 grid grid-cols-12">
              <div className="col-span-9">
                <p className="flex font-roboto text-[14px] text-gris2">
                  Nombre o Descripción
                </p>
              </div>
              <div className="col-span-3">
                <p className="w-full text-center font-roboto text-[14px] text-gris2">
                  Estatus
                </p>
              </div>
              <div className="col-span-12 mb-4 mt-4 w-full border-b border-[#D7D7D7]"></div>
              <div className="col-span-9 flex items-center gap-x-12">
                <Input
                  name="name"
                  type="text"
                  required={true}
                  defaultValue={attribute?.name}
                  placeholder="Agrega"
                  className="rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                />
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <Checkbox
                  name={`status`}
                  defaultChecked={attribute?.status == "1" ? true : false}
                  className="border-primarioBotones data-[state=checked]:bg-primarioBotones"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Aceptar"}
              </Button>
            </div>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditAttribute;
