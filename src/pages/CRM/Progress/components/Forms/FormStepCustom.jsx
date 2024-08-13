import React, { useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

import UserSelect from "@/components/UserSelect";
import DropzoneFile from "@/components/dropzone-files";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const FIELD_NUMBER = [
  { type: "1", value: "text" },
  { type: "2", value: "email" },
  { type: "3", value: "file" },
  { type: "4", value: "date" },
  { type: "5", value: "select" },
  { type: "6", value: "number" },
  { type: "7", value: "document" },
];

function FormStepCustom({
  fields,
  modal,
  setModal,
  step,
  users,
  navigation,
  assigned,
  customer,
  nextName,
}) {
  const params = useParams();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="p-0">
        <div className="flex rounded-t-lg border-b p-6">
          <DialogHeader>
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              <span className="font-light">{step?.step?.name} </span> &gt;{" "}
              <span>{nextName}</span>
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
          action={`/crm/progress/${params?.id}`}
          method="post"
          className="flex flex-col gap-2 px-8"
          encType="multipart/form-data"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4">
              {fields?.map((field, i) => {
                return (
                  <div className="flex flex-col" key={i}>
                    {field?.rendering == 3 ? (
                      <DropzoneFile
                        name={field?.name}
                        label={field?.visible_name}
                      />
                    ) : (
                      <InputRouter
                        className="rounded-none border-0 border-b border-grisSubText bg-transparent p-3 !ring-0 !ring-offset-0 placeholder:text-[10px] placeholder:font-light placeholder:text-grisSubText focus:border-b focus:border-primarioBotones"
                        required={
                          Number(field?.nullable) === 0 ? "true" : "false"
                        }
                        placeholder={field?.visible_name}
                        name={field?.name}
                        type={
                          FIELD_NUMBER.find(
                            (number) => number?.type == field?.rendering,
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
              value={customer?.customer_id}
              readOnly
            />
            <input
              className="hidden"
              name="next_step"
              value={step?.id}
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
              <div className="flex w-16 flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={assigned?.image} />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-grisText">Assigned</p>
              </div>
              <div className="flex self-start pt-2">
                <IonIcon
                  icon={chevronForward}
                  className="h-6 w-6 text-grisText"
                ></IonIcon>
              </div>
              <div className="flex w-16 flex-col items-center gap-2">
                <UserSelect users={users} leadAssigned={assigned} />
                <p className="text-[10px] text-grisText">Assign To</p>
              </div>
            </div>
            <Button
              disabled={navigation?.state === "submitting"}
              type="submit"
              className="bg-primarioBotones"
            >
              {navigation?.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormStepCustom;
