import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function FollowUpForm({ modal, setModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Follow Up Form</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="type" className="">
              Type of Contact
            </Label>
            <Select id="type" name="type">
              <SelectTrigger className="border-0 border-b-2 focus:border-blue-500 rounded-lg bg-[#F6F6F6] !ring-0 !ring-offset-0 p-4 text-gris2">
                <SelectValue placeholder="Type of Cantact" className="w-full" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Call</SelectItem>
                <SelectItem value="2">Face to Face</SelectItem>
                <SelectItem value="3">Email</SelectItem>
                <SelectItem value="4">WhatsApp</SelectItem>
                <SelectItem value="5">Instagram</SelectItem>
                <SelectItem value="6">Facebook</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="date" className="">
              Day of Contact
            </Label>
            <Input id="date" type="date" className="" />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Label htmlFor="message" className="">
              Comment
            </Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="file" className="">
              File
            </Label>
            <Input id="file" type="file" className="" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FollowUpForm;
