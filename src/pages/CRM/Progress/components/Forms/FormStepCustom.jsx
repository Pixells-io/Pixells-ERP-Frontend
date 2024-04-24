import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FIELD_NUMBER = [
  { type: "1", value: "text" },
  { type: "2", value: "email" },
  { type: "3", value: "file" },
  { type: "4", value: "date" },
  { type: "5", value: "select" },
  { type: "6", value: "number" },
];

function FormStepCustom({ fields, modal, setModal, step, service }) {
  // console.log(service);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="p-0">
        <DialogHeader className="bg-blancoForms h-12 px-4 py-4 flex justify-center rounded-t-xl">
          <DialogTitle className="text-grisHeading font-poppins font-semibold text-sm">
            <span className="font-light">Donde estas</span> &gt; {step?.name}{" "}
            &bull; <span>{service?.name}</span>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="px-4">
          <span className="flex px-4 rounded-full bg-[#F0F0F0] text-grisSubText text-[10px] font-light w-fit">
            diego@irb.tax
          </span>
        </DialogDescription>
        <Form className="px-4 pb-4">
          <div className="flex flex-col gap-4">
            {fields?.map((field, i) => {
              return (
                <input
                  className="placeholder:text-[10px] placeholder:font-light placeholder:text-grisSubText p-3 border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b rounded-none bg-transparent !ring-0 !ring-offset-0"
                  required={Number(field?.nullable) === 0 ? true : false}
                  placeholder={field?.visible_name}
                  name={field?.name}
                  type={
                    FIELD_NUMBER.find(
                      (number) => number?.type == field?.rendering
                    ).value
                  }
                />
              );
            })}
          </div>
        </Form>
        <DialogFooter className="p-4">
          <Button type="submit" className="bg-primarioBotones">
            Send Email
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormStepCustom;
