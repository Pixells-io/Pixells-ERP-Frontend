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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormInput from "@/pages/CRM/Progress/components/Forms/FormInput";
// import ColorPicker from "@/components/ColorPicker";

function FormService({ csrf, submitting }) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

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
          <DialogTitle>Create service</DialogTitle>
          <DialogDescription>
            Create a service by giving it a name, description and type. Pick a
            color and an icon.
          </DialogDescription>
        </DialogHeader>
        <Form
          id="service-form"
          className="flex flex-col gap-2"
          action="/sales/progress"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div>
                <FormInput name="name" type="text" placeholder="Service Name" />
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
                <Label className="ml-3 font-roboto font-light text-grisHeading">
                  Select Color
                </Label>
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
              <Input
                className="hidden"
                name="action"
                value="service"
                readOnly
              />
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="service-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormService;
