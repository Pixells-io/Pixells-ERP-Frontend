import React, { useEffect, useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UserSelect from "@/components/UserSelect";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const paymentArray = [
  { label: "Anual", value: "1" },
  { label: "Mensual", value: "2" },
];

const ammountArrayOne = [
  { label: "$200", value: "1" },
  { label: "$500 - $999", value: "2" },
];

const ammountArrayTwo = [{ label: "$1000+", value: "3" }];

function PotentialForm({ modal, setModal, leadId, users, leadAssigned }) {
  const [payment, setPayment] = useState("");
  // const [ammount, setAmmount] = useState("");
  const navigation = useNavigation();

  // useEffect(() => {}, []);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <div className="flex rounded-t-lg bg-gris p-6">
          <DialogHeader>
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              <span className="font-normal">Prospect Form </span>
              &gt; Potencial Grade Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="potencial-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <SelectRouter
                  name="payment_recurrency"
                  placeholder="Payment recurrency"
                  options={paymentArray}
                  onChange={(e) => setPayment(e.value)}
                />
              </div>
              {payment === "1" ? (
                <div>
                  <SelectRouter
                    name="total_ammount"
                    placeholder="Total ammount"
                    options={ammountArrayTwo}
                  />
                </div>
              ) : (
                <div>
                  <SelectRouter
                    name="total_ammount"
                    placeholder="Total ammount"
                    options={ammountArrayOne}
                  />
                </div>
              )}
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
                value="potencial"
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
              form="potencial-leads-form"
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

export default PotentialForm;
