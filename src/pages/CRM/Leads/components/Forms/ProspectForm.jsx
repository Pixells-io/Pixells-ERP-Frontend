import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

import UserSelect from "@/components/UserSelect";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DropzoneFile from "@/components/dropzone-files";
import DatePicker from "@/components/date-picker";

const channelArray = [
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
  {
    label: "WhatsApp",
    value: "WhatsApp",
  },
  {
    label: "Google",
    value: "Google",
  },
  {
    label: "Recomendation",
    value: "Recomendation",
  },
  {
    label: "Face to Face",
    value: "Face to Face",
  },
];

function ProspectForm({ modal, setModal, leadId, users, leadAssigned }) {
  const [date, setDate] = useState();
  const navigation = useNavigation();
  // console.log(leadAssigned);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ prospect: false });
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <div className="flex rounded-t-lg border-b p-6">
          <DialogHeader>
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              <span className="font-normal">New Lead </span>
              &gt; Prospect Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="prospect-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
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
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <SelectRouter
                  name="type"
                  placeholder="Channel of meet"
                  options={channelArray}
                />
              </div>

              <DatePicker name="date" />

              <div>
                <InputRouter
                  name="comment"
                  type="text"
                  placeholder="Type your message here."
                />
              </div>
              <div>
                <DropzoneFile name="file" label="Select a document" />
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
                value="prospect"
                readOnly
                hidden
              />
            </div>
          </div>
          <div className="flex justify-between pb-4">
            <div className="flex items-center gap-3">
              <div className="flex w-16 flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={leadAssigned?.url} />
                  <AvatarFallback>
                    {leadAssigned?.name?.search("\b[a-zA-Z]")}
                  </AvatarFallback>
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
                <UserSelect users={users} leadAssigned={leadAssigned} />
                <p className="text-[10px] text-grisText">Assign To</p>
              </div>
            </div>

            <Button
              form="prospect-leads-form"
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

export default ProspectForm;

{
  /* <div className="flex items-center gap-2">
<div className="flex flex-col items-center gap-2">
  <Avatar className="h-6 w-6">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
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
  <Avatar className="h-6 w-6">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <p className="text-[10px] text-grisText">Assign To</p>
</div>
</div> */
}
