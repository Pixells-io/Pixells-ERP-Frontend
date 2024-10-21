import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AssignedMenu({ users }) {
  const [modal, setModal] = useState(false);
  const params = useParams();
  const navigation = useNavigation();

  const [assigned, setAssigned] = useState({});

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  function removeAssigned(user) {
    setAssigned(user);
    setModal(true);
  }

  return (
    <>
      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
          <DialogHeader className="pt-2">
            <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
              Borrar Asignado
            </DialogTitle>
          </DialogHeader>
          <Form
            id="form-remove-assigned-activity"
            className="flex h-full w-full flex-col gap-3 px-8"
            action={`/project-manager/${params.id}/projects/${params.projectId}`}
            method="post"
          >
            <input type="hidden" value={assigned.id_reg} name="assigned_id" />
            <input type="hidden" value="remove-assigned" name="action" />
            <span className="font-roboto text-[#A6A6A6]">
              Esta acción no se puede deshacer. Esto eliminará permanentemente
              (de la tarea) a {assigned.name}.
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
        <DropdownMenuTrigger>
          <div className="ml-1 flex items-center">
            <span className="text-xs font-normal text-grisHeading">
              +{users.length - 3}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {users?.map((user, i) => (
            <DropdownMenuItem
              className="flex items-center gap-1"
              key={i}
              onClick={() => removeAssigned(user)}
            >
              <Avatar className="flex h-6 w-6" key={i}>
                <AvatarImage src={user?.img} />
                <AvatarFallback>??</AvatarFallback>
              </Avatar>
              {user.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AssignedMenu;
