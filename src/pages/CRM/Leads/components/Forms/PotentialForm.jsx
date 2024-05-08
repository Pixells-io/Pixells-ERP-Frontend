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

function PotentialForm({ modal, setModal, leadId, users }) {
  const [payment, setPayment] = useState("");
  const [ammount, setAmmount] = useState("");
  const navigation = useNavigation();

  useEffect(() => {}, []);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="bg-gris flex p-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="font-poppins font-semibold text-sm text-grisHeading">
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
          <div className="flex flex-col gap-4 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <Select
                  name="payment_recurrency"
                  value={payment}
                  onValueChange={setPayment}
                >
                  <SelectTrigger className="border-0 border-b-2 rounded-none aria-[expanded=true]:border-b-2 aria-[expanded=true]:border-primario focus:border-primario !ring-0 !ring-offset-0 p-4 text-gris2">
                    <SelectValue placeholder="Payment recurrency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Anual</SelectItem>
                    <SelectItem value="2">Mensual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {payment === "1" ? (
                <div>
                  <Select name="total_ammount">
                    <SelectTrigger className="border-0 border-b-2 rounded-none aria-[expanded=true]:border-b-2 aria-[expanded=true]:border-primario focus:border-primario !ring-0 !ring-offset-0 p-4 text-gris2">
                      <SelectValue
                        placeholder="Total ammount"
                        defaultValue="3"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">$1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div>
                  <Select name="total_ammount">
                    <SelectTrigger className="border-0 border-b-2 rounded-none aria-[expanded=true]:border-b-2 aria-[expanded=true]:border-primario focus:border-primario !ring-0 !ring-offset-0 p-4 text-gris2">
                      <SelectValue placeholder="Total ammount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">$200 - $499</SelectItem>
                      <SelectItem value="2">$500 - $999</SelectItem>
                    </SelectContent>
                  </Select>
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
            form="potencial-leads-form"
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

export default PotentialForm;

// payment_recurrency select -> anual o mensual
// ammount select -> $200 a $499, $500 a $999 y $1000+
// services select -> servicios
