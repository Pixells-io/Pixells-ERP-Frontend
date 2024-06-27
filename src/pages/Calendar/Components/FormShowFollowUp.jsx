import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function FormShowFollowUp({ modal, setModal, info }) {
  let data = info.data;
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Show Follow Up
          </DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <div className="flex w-full flex-col gap-3 pb-4 font-light">
            <InputRouter
              name="name"
              type="text"
              placeholder="Add Title"
              require={true}
              value={data?.way_of_contact}
            />
            <div className="flex gap-4">
              <InputRouter
                name="date"
                type="date"
                placeholder="Add Date"
                require={true}
                value={data?.date_of_contact}
              />
            </div>
            <InputRouter
              name="place"
              type="text"
              placeholder="Add Place"
              require={true}
              value={data?.client}
            />
            <InputRouter
              name="description"
              type="text"
              placeholder="Add Description"
              require={true}
              value={data?.comments}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormShowFollowUp;
