import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileRouter from "@/layouts/Masters/FormComponents/file";
import UserSelect from "@/components/UserSelect";

const FIELD_NUMBER = [
  { type: "1", value: "text" },
  { type: "2", value: "email" },
  { type: "3", value: "file" },
  { type: "4", value: "date" },
  { type: "5", value: "select" },
  { type: "6", value: "number" },
];

function FormStepCustom({
  fields,
  modal,
  setModal,
  step,
  service,
  users,
  customerId,
  navigation,
}) {
  // console.log(step);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="p-0">
        <div className="bg-gris flex p-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="font-poppins font-semibold text-sm text-grisHeading">
              <span className="font-light">Donde estas </span> &gt; {step?.name}{" "}
              &bull; <span>{service?.name}</span>
            </DialogTitle>
          </DialogHeader>
        </div>
        <DialogDescription className="px-4">
          {/* <span className="flex px-4 rounded-full bg-[#F0F0F0] text-grisSubText text-[10px] font-light w-fit">
            diego@irb.tax
          </span> */}
        </DialogDescription>
        <Form
          id="progress-step-form"
          action={`/crm/progress/${service.id}`}
          method="post"
          className="flex flex-col gap-2 px-8"
        >
          <div className="flex flex-col gap-4 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-4 pb-4">
              {fields?.map((field, i) => {
                return (
                  <div className="flex flex-col" key={i}>
                    {field?.rendering == 3 ? (
                      <FileRouter
                        name={field?.name}
                        label={field?.visible_name}
                      />
                    ) : (
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
                    )}
                  </div>
                );
              })}
            </div>

            <input
              className="hidden"
              name="customer_id"
              value={customerId}
              readOnly
            />
            <input
              className="hidden"
              name="next_step"
              value={step.id}
              readOnly
            />
            <input
              className="hidden"
              name="action"
              value="advance_step"
              readOnly
            />
          </div>
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-grisText">Assigned</p>
              </div>
              <div className="flex justify-center items-center">
                <IonIcon
                  icon={chevronForward}
                  className="w-6 h-6 text-grisText"
                ></IonIcon>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UserSelect users={users} />
                <p className="text-[10px] text-grisText">Assign To</p>
              </div>
            </div>
            <Button
              disabled={navigation.state === "submitting"}
              type="submit"
              className="bg-primarioBotones"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormStepCustom;
