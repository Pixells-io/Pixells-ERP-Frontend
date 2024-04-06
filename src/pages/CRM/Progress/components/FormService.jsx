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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormInput from "@/pages/CRM/Progress/components/Forms/FormInput";
// import ColorPicker from "@/components/ColorPicker";

function FormService({ csrf, submitting }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Plus size={32} className="text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create service</DialogTitle>
          <DialogDescription>
            Create a service by giving it a name, description and type. Pick a
            color and an icon.
          </DialogDescription>
        </DialogHeader>
        <Form
          id="service-form"
          className="flex flex-col gap-2"
          // action="http://127.0.0.1:8000/test/progress"
          action="/crm/progress"
          method="post"
        >
        <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
          <div className="flex flex-col font-light gap-4 pb-4">
            <div>
              <FormInput
                name="name"
                type="text"
                placeholder="Service Name"
              />
            </div>
            <div>
              <FormInput
                name="description"
                type="text"
                placeholder="Description"
              />
            </div>
            <div>
              <FormInput
                name="type"
                type="number"
                placeholder="Select a Type"
              />
            </div>
            <div>
              <Label className="font-roboto text-grisHeading font-light ml-3">Select Color</Label>
              <FormInput
                name="color"
                type="color"
                placeholder="Select a color"
              />
            </div>
            <div className="hidden">
              <Label htmlFor="csrf"></Label>
              <Input id="csfr" name="csrf" defaultValue={csrf} />
            </div>
            <Input className="hidden" name="action" value="service" readOnly />
          </div>
        </div>

        </Form>
        <DialogFooter>
          <Button form="service-form" className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones" disabled={submitting}>
            {submitting ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormService;
