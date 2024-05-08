import React, { useState, useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
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
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus size={32} className="text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Step</DialogTitle>
          <DialogDescription>
            Create a Step by giving it a name, description and type... PONER
            NOMBRE DEL SERVICIO AQUI
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
              <SelectTrigger className="border-0 border-b border-grisSubText focus:border-blue-500   bg-[#F6F6F6] !ring-0 !ring-offset-0 p-4 text-gris2">
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

            <Input className="hidden" name="action" value="new_step" readOnly />
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="service-step-form"
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewStepService;

//1=Send Email  2=Qualify  3=Folow-up  4=Payment  5=Shipping  6=Close-up  7=Generic  8=Interview
