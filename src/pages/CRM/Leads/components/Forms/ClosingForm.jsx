import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import FormInput from "./Inputs/FormInput";
import FileRouter from "@/layouts/Masters/FormComponents/file";
import FromMultiSelect from "@/layouts/CRM/components/Form/FromMultiSelect";
import UserSelect from "@/components/UserSelect";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import DropzoneFile from "@/components/dropzone-files";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const monthlyArray = [
  { label: "Monthly", value: "0" },
  { label: "Annual", value: "1" },
];

function ClosingForm({ modal, setModal, leadId, services, users }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ prospect: false });
    }
  }, [navigation.state]);

  let options = [];
  services?.data.map((service, i) => {
    let newObj = { value: service.id, label: service.name };
    options.push(newObj);
  });

  return (
    <Dialog open={true} onOpenChange={setModal}>
      <DialogContent className="p-0 sm:max-w-[600px]">
        <div className="flex rounded-t-lg border-b p-6">
          <DialogHeader>
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              <span className="font-normal">Proposal Form </span>
              &gt; Closing Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="closing-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <DropzoneFile
                  name="service_paymnent"
                  label="Payment agreement"
                />
              </div>
              <div>
                <DropzoneFile
                  name="service_agreement"
                  label="Service agreement"
                />
              </div>
              <div>
                <InputRouter
                  name="comments"
                  type="text"
                  placeholder="Comments"
                />
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <div className="flex gap-8">
                  <p>Choose Services</p>
                  <div>+</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex w-full items-center gap-2">
                    <SelectRouter
                      name="services"
                      placeholder="Service 1"
                      // isMulti={true}
                      options={options}
                    />
                    <SelectRouter
                      name="recurrent_pay"
                      placeholder="Recurrency"
                      options={monthlyArray}
                    />
                    <InputRouter placeholder="Ammount" name="ammount" />
                  </div>
                  <div>x</div>
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                name="lead_id"
                value={leadId}
                hidden
                readOnly
              />
              <input
                type="text"
                name="action"
                value="closing"
                readOnly
                hidden
              />
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
                <p className="text-[10px] text-grisText">Assigned</p>
              </div>
              <div className="flex items-center justify-center">
                <IonIcon
                  icon={chevronForward}
                  className="h-6 w-6 text-grisText"
                ></IonIcon>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UserSelect users={users} />
                <p className="text-[10px] text-grisText">Assign To</p>
              </div>
            </div>
            <Button
              form="closing-leads-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ClosingForm;
