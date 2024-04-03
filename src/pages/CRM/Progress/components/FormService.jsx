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
          <div>
            <Label htmlFor="name">Service Name</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input id="description" name="description" type="text" />
          </div>
          <div>
            <Label htmlFor="type">Select a Type</Label>
            <Input id="type" name="type" type="number" />
          </div>
          <div>
            <Label htmlFor="color">Select a Color</Label>
            {/* <ColorPicker /> */}
            <Input
              id="color"
              name="color"
              type="color"
              defaultValue="#f9ff9f"
            />
          </div>
          <div className="hidden">
            <Label htmlFor="csrf"></Label>
            <Input id="csfr" name="csrf" defaultValue={csrf} />
          </div>
          <Input className="hidden" name="action" value="service" readOnly />
        </Form>
        <DialogFooter>
          <Button form="service-form" disabled={submitting}>
            {submitting ? "Submitting..." : "Create Service"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormService;
