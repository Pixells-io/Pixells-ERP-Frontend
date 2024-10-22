import React, { useState, useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ModalAddBusiness({ modal, setModal, business }) {
  const navigation = useNavigation();

  const [businessArray, setBusinessArray] = useState([]);
  const [businessName, setBussinesName] = useState(false);
  const [businessId, setBusinessId] = useState(false);

  useEffect(() => {
    setBusinessArray([]);
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  if (business.data != undefined) {
    arrayFill(business?.data, businessArray);

    function arrayFill(data, array) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        array.push({
          label: element.name,
          value: element.id,
        });
      }
    }
  }

  function changeValue(e) {
    setBusinessId(e.value);
    setBussinesName(e.label);
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Agregar Negocios</DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form-edit"
          className="flex flex-col gap-8 px-6"
          action={`/my-profile`}
          method="post"
        >
          <input type="hidden" hidden readOnly name="type_function" value={9} />
          <input name="name" type="hidden" value={businessName} />
          <input name="id" type="hidden" value={businessId} />
          <SelectRouter
            options={businessArray}
            onChange={(e) => changeValue(e)}
          />
          <DialogFooter className="px-8 py-4">
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalAddBusiness;
