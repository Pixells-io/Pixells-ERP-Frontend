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

import UserSelect from "@/components/UserSelect";

import { getLeadInfo } from "../../utils";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function KickOffForm({ modal, setModal, leadId, users, leadAssigned }) {
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
      <DialogContent className="p-0 sm:max-w-[425px]">
        <div className="flex rounded-t-lg border-b p-6">
          <DialogHeader>
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
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
          encType="multipart/form-data"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-2 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-5 pb-1">
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Business Name
                </span>
                <InputRouter
                  value={formData?.business_name}
                  onChange={handleInputChange}
                  type="text"
                  name="business_name"
                  placeholder="Business Name"
                  className="flex rounded-none border-0 border-b border-grisSubText bg-transparent !ring-0 !ring-offset-0 focus:border-b-2 focus:border-primarioBotones"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Business Phone
                </span>
                <InputRouter
                  name="business_phone"
                  value={formData?.business_phone}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Business Phone"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Contact Name
                </span>
                <InputRouter
                  value={formData?.contact_name}
                  onChange={handleInputChange}
                  name="contact_name"
                  type="text"
                  placeholder="Contact Name"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Contact Middle Name
                </span>
                <InputRouter
                  value={formData?.contact_middle_name}
                  onChange={handleInputChange}
                  name="contact_middle_name"
                  type="text"
                  placeholder="Contact Middle Name"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Contact Last Name
                </span>
                <InputRouter
                  value={formData?.contact_last_name}
                  onChange={handleInputChange}
                  name="contact_last_name"
                  type="text"
                  placeholder="Contact Last Name"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Contact Phone
                </span>
                <InputRouter
                  value={formData?.contact_phone}
                  onChange={handleInputChange}
                  name="contact_phone"
                  type="text"
                  placeholder="Contact Phone"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-grisSubText">
                  Email
                </span>
                <InputRouter
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
              form="onboarding-leads-form"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Onboard"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default KickOffForm;
