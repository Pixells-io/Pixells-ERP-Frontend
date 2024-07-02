import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectMultiple from "@/components/ui/selectMultiple";

function FormShowMeet({ modal, setModal, info }) {
  const meet = info.data?.meet;
  const users = info.data?.users;

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Show Meet
          </DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <div className="flex w-full flex-col gap-3 pb-4 font-light">
            <InputRouter
              name="name"
              value={meet?.title}
              type="text"
              placeholder="Add Title"
              require={true}
            />
            <div className="flex gap-4">
              <InputRouter
                name="date"
                value={meet?.date}
                type="date"
                placeholder="Add Date"
                require={true}
              />
              <InputRouter
                name="start"
                value={meet?.start}
                type="time"
                placeholder="Start"
                require={true}
              />
              <InputRouter
                name="end"
                value={meet?.end}
                type="time"
                placeholder="End"
                require={true}
              />
            </div>
            <div>
              {users?.map((user, i) => (
                <div className="my-3 flex gap-2 text-[#696974]" key={1}>
                  <div>
                    <img src={user.img} className="h-10 w-10 rounded-full" />
                  </div>
                  <div className="ml-2 mt-2">
                    <span>{user.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <InputRouter
                name="place"
                value={meet?.place}
                type="text"
                placeholder="Add Place"
                require={true}
              />
              <InputRouter
                name="meet_url"
                value={meet?.meet_url}
                type="text"
                placeholder="Meet URL"
                require={true}
              />
            </div>
            <InputRouter
              name="description"
              type="text"
              value={meet?.description}
              placeholder="Add Description"
              require={true}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormShowMeet;
