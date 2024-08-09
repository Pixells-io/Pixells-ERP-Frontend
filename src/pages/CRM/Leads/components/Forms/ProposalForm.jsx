import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FormInput from "./Inputs/FormInput";
import FileRouter from "@/layouts/Masters/FormComponents/file";
import UserSelect from "@/components/UserSelect";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import DatePicker from "@/components/date-picker";
import DropzoneFile from "@/components/dropzone-files";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function ProposalForm({ modal, setModal, leadId, users, leadAssigned }) {
  const navigation = useNavigation();

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
              <span className="font-normal">Follow Up Form </span>
              &gt; Proposal Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="proposal-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
          encType="multipart/form-data"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <InputRouter
                  name="confirm_email"
                  type="email"
                  placeholder="Confirm Email"
                />
              </div>
              <DatePicker name="subject" />

              <div>
                <InputRouter
                  name="comments"
                  type="text"
                  placeholder="Type your message here."
                />
              </div>
              <div>
                <DropzoneFile name="document" label="Select a document" />
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
                value="proposal"
                readOnly
                hidden
              />
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex w-16 flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={leadAssigned?.image} />
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
              form="proposal-leads-form"
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

export default ProposalForm;
