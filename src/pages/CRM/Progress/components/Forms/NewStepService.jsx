import React from "react";

import { Form } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormInput from "./FormInput";
import { Input } from "@/components/ui/input";

const CATEGORIES = [
  //1=Send Email  2=Qualify  3=Folow-up  4=Payment  5=Shipping  6=Close-up  7=Generic  8=Interview
  { value: "1", name: "Send Email" },
  { value: "2", name: "Qualify" },
  { value: "3", name: "Follow Up" },
  { value: "4", name: "Payment" },
  { value: "5", name: "Shipping" },
  { value: "6", name: "Closeup" },
  { value: "7", name: "Generic" },
  { value: "8", name: "Interview" },
];

function NewStepService({ serviceId, submitting }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus size={32} className="text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Step</DialogTitle>
          <DialogDescription>
            Create a Step by giving it a name, description and type... PONER EL
            NOMNBRE DEL SERVICIO
          </DialogDescription>
        </DialogHeader>
        <Form
          id="service-step-form"
          className=""
          action={`/crm/progress/${serviceId}`}
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <FormInput name="order" type="number" placeholder="Step order" />
            <FormInput name="name" type="string" placeholder="Step name" />
            <FormInput
              name="description"
              type="string"
              placeholder="Step description"
            />
            <Select name="category">
              <SelectTrigger className="border-0 border-b-2 focus:border-blue-500 rounded-lg bg-[#F6F6F6] !ring-0 !ring-offset-0 p-4 text-gris2">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category, i) => (
                  <SelectItem key={i} value={category.value}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* <FormInput name="area" type="string" placeholder="Step name" /> */}
            {/* <FormInput name="type" type="string" placeholder="Step name" /> */}
            <Input className="hidden" name="action" value="step" readOnly />
          </div>
        </Form>
        <DialogFooter>
          <Button form="service-step-form" disabled={submitting}>
            {submitting ? "Submitting..." : "Create Service"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewStepService;

//1=Send Email  2=Qualify  3=Folow-up  4=Payment  5=Shipping  6=Close-up  7=Generic  8=Interview
