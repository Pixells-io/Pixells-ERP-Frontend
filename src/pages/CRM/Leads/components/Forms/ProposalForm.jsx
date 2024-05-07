import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import FormInput from "./Inputs/FormInput";
import FileRouter from "@/layouts/Masters/FormComponents/file";
import UserSelect from "@/components/UserSelect";

import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

function ProposalForm({ modal, setModal, leadId, users }) {
  const [date, setDate] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal({ prospect: false });
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="bg-gris flex p-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="font-poppins font-semibold text-sm text-grisHeading">
              Follow Up Form &gt; Proposal Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="proposal-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <FormInput
                  name="confirm_email"
                  type="email"
                  placeholder="Confirm Email"
                />
              </div>
              <div>
                <input
                  name="subject"
                  className="hidden"
                  defaultValue={date}
                  readOnly
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "!ring-0 !ring-offset-0 w-full justify-between text-left font-normal border-0 border-b rounded-none aria-[expanded=true]:border-b-2 focus:border-primario focus:border-b-2",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="mr-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <FormInput
                  name="comments"
                  type="text"
                  placeholder="Type your message here."
                />
              </div>
              <div>
                <FileRouter name="document" label="Select a document" />
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
            form="proposal-leads-form"
            disabled={navigation.state === "submitting"}
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProposalForm;
