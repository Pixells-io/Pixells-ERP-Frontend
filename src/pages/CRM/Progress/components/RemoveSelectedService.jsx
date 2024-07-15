import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";

function RemoveSelectedService({ serviceId, name }) {
  const [modal, setModal] = useState(false);
  const params = useParams();
  const navigation = useNavigation();

  // useEffect(() => {
  //  if (navigation.state === "idle") {
  //    setModal(false);
  //   }
  //  }, [navigation.state]);

  function deleteService() {
    setModal(true);
  }

  return (
    <>
      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
          <DialogHeader className="pt-2">
            <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
              Remove Service from Selection - <br /> {name}
            </DialogTitle>
          </DialogHeader>
          <Form
            id="form-delete-serviceshow"
            className="flex h-full w-full flex-col gap-3 px-8"
            action={`/crm/progress/`}
            method="post"
          >
            <input type="hidden" value={serviceId} name="service_id" />
            <input type="hidden" value="remove-service" name="action" />
            <span className="font-roboto text-[#A6A6A6]">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </span>
            <DialogFooter className="flex gap-4 py-6">
              <Button
                type="submit"
                className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
              >
                Delete
              </Button>
              <Button
                type="button"
                onClick={() => setModal(false)}
                className="justify-normal rounded-lg bg-grisText px-6 py-2 font-roboto text-xs font-semibold text-white"
              >
                Cancel
              </Button>
            </DialogFooter>
          </Form>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <IonIcon
            icon={ellipsisVertical}
            className="size-4 text-grisDisabled"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => deleteService()}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default RemoveSelectedService;
