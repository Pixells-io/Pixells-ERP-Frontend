import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "react-router-dom";

const FIELD_NUMBER = [
  { type: "1", value: "text" },
  { type: "2", value: "email" },
  { type: "3", value: "file" },
  { type: "4", value: "date" },
  { type: "5", value: "select" },
  { type: "6", value: "number" },
];

function FormStepCustom({ fields, modal, setModal }) {
  // console.log(fields);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <Form>
            <div className="flex flex-col">
              {fields?.map((field, i) => {
                return (
                  <input
                    required={Number(field.nullable) === 0 ? true : false}
                    placeholder={field.visible_name}
                    name={field.name}
                    type={
                      FIELD_NUMBER.find(
                        (number) => number.type == field.rendering
                      ).value
                    }
                  />
                );
              })}
            </div>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default FormStepCustom;
