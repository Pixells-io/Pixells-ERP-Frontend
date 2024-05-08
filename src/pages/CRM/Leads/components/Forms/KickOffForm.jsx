import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import FormInput from "./Inputs/FormInput";
import UserSelect from "@/components/UserSelect";

import { getLeadInfo } from "../../utils";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

function KickOffForm({ modal, setModal, leadId, users }) {
  const navigation = useNavigation();
  const [leadInfo, setLeadInfo] = useState("");
  const [formData, setFormData] = useState({
    business_name: "",
    business_phone: "",
    contact_name: "",
    contact_middle_name: "",
    contact_last_name: "",
    contact_phone: "",
    contact_email: "",
  });

  useEffect(() => {
    async function getData() {
      const res = await getLeadInfo(leadId);
      setFormData(res?.extra_information);
    }
    getData();
  }, [leadId]);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ kickoff: false });
    }
  }, [navigation.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="bg-gris flex p-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="font-poppins font-semibold text-sm text-grisHeading">
              <span className="font-normal">Pay Form </span>
              &gt; On Boarding Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="onboarding-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-2 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-5 pb-1">
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Business Name
                </span>
                <FormInput
                  value={formData?.business_name}
                  onChange={handleInputChange}
                  type="text"
                  name="business_name"
                  placeholder="Business Name"
                  className="flex border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b-2 rounded-none bg-transparent !ring-0 !ring-offset-0"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Business Phone
                </span>
                <FormInput
                  name="business_phone"
                  value={formData?.business_phone}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Business Phone"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Name
                </span>
                <FormInput
                  value={formData?.contact_name}
                  onChange={handleInputChange}
                  name="contact_name"
                  type="text"
                  placeholder="Contact Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Middle Name
                </span>
                <FormInput
                  value={formData?.contact_middle_name}
                  onChange={handleInputChange}
                  name="contact_middle_name"
                  type="text"
                  placeholder="Contact Middle Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Last Name
                </span>
                <FormInput
                  value={formData?.contact_last_name}
                  onChange={handleInputChange}
                  name="contact_last_name"
                  type="text"
                  placeholder="Contact Last Name"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Contact Phone
                </span>
                <FormInput
                  value={formData?.contact_phone}
                  onChange={handleInputChange}
                  name="contact_phone"
                  type="text"
                  placeholder="Contact Phone"
                />
              </div>
              <div>
                <span className="text-sm text-grisSubText font-medium">
                  Email
                </span>
                <FormInput
                  value={formData?.contact_email}
                  onChange={handleInputChange}
                  name="contact_email"
                  type="text"
                  placeholder="Contact Email"
                />
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
                value="onboarding"
                readOnly
                hidden
              />
            </div>
          </div>
        </Form>
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
            form="onboarding-leads-form"
            disabled={navigation.state === "submitting"}
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default KickOffForm;
