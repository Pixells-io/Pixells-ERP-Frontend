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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import FormInput from "./Inputs/FormInput";

function PayForm({ modal, setModal, leadId }) {
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
              Prospect Form &gt; Pay Form
            </DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="pay-leads-form"
          className="flex flex-col gap-2 px-8"
          action="/crm/leads"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto rounded-lg p-4">
            <div className="flex flex-col gap-4 pb-4">
              <div>
                <input
                  name="date_of_pay"
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
                      {date ? format(date, "PPP") : <span>Pay day</span>}
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
                <FormInput name="total" type="text" placeholder="Total here" />
              </div>
              <div>
                <FormInput name="comments" type="text" placeholder="Comments" />
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
              <input type="text" name="action" value="pay" readOnly hidden />
            </div>
          </div>
        </Form>
        <DialogFooter className="p-4">
          <Button
            form="pay-leads-form"
            disabled={navigation.state === "submitting"}
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PayForm;
