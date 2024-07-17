import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

import SelectRouter from "@/layouts/Masters/FormComponents/select";

function FormNewSale({ clients }) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen({ prospect: false });
    }
  }, [navigation.state]);

  let options = [];
  clients?.data.map((service, i) => {
    let newObj = { value: service.id, label: service.business_name };
    options.push(newObj);
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="group flex w-full justify-start gap-6 p-0 pl-4 text-gris2 hover:rounded-lg hover:bg-blue-100 hover:text-blue-500"
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="mr-2 text-base font-medium text-gris2 group-hover:text-blue-500">
            Add On
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>New Sale</DialogTitle>
        </DialogHeader>
        <Form
          id="new-sale-form"
          className="flex flex-col gap-2 px-6"
          action="/crm"
          method="post"
          encType="multipart/form-data"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div>
                <SelectRouter
                  name="client"
                  placeholder="Select Client"
                  options={options}
                />
              </div>
            </div>
            <div>
              <input type="text" name="action" value="add-on" readOnly hidden />
            </div>
          </div>
          <DialogFooter className="px-4 pb-4">
            <Button
              form="new-sale-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewSale;
