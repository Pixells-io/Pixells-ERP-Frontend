import React, { useState, useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const CATEGORIES = [
  //1=Send Email  2=Qualify  3=Folow-up  4=Payment  5=Shipping  6=Close-up  7=Generic  8=Interview
  { value: "1", label: "Send Email" },
  { value: "2", label: "Qualify" },
  { value: "3", label: "Follow Up" },
  { value: "4", label: "Payment" },
  { value: "5", label: "Shipping" },
  { value: "6", label: "Closeup" },
  { value: "7", label: "Generic" },
];

function NewStepService({ serviceId, submitting, service }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  // console.log(service);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus size={32} className="text-primarioBotones" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>Create Step &bull; {service[0]?.name}</DialogTitle>
        </DialogHeader>
        <Form
          id="service-step-form"
          className="flex flex-col px-6"
          action={`/crm/progress/${serviceId}`}
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            {/* <FormInput name="order" type="number" placeholder="Step order" /> */}
            <InputRouter name="name" type="string" placeholder="Step name" />
            <InputRouter
              name="description"
              type="string"
              placeholder="Step description"
            />
            <SelectRouter
              name="category"
              placeholder="Category"
              options={CATEGORIES}
            />

            <Input className="hidden" name="action" value="new_step" readOnly />
          </div>
          <div className="flex self-end px-3 py-3">
            <Button
              form="service-step-form"
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Save"}
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default NewStepService;

//1=Send Email  2=Qualify  3=Folow-up  4=Payment  5=Shipping  6=Close-up  7=Generic  8=Interview
