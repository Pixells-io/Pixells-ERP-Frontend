import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import SelectSearch from "@/components/SelectSearch/SelectSearch";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Form, useNavigation } from "react-router-dom";

function ModalAddUser({ users, store_id }) {
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);
  const [userList, setUserList] = useState([]);

  const clearData = () => {
    setUserList([]);
    setModal(false);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      clearData();
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger className="flex h-[24px] items-center gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2">
        <IonIcon className="h-5 w-5" icon={add}></IonIcon>
        Agregar
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Agregar Usuarios</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <SelectSearch
          name="users"
          options={users}
          placeholder="Seleccionar Usuarios"
          isMulti={true}
          onChange={(e) => setUserList(e)}
          getOptionValue={(option) => option.id}
          getOptionLabel={(option) => {
            return (
              <div className="flex items-center gap-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={option?.user_image} />
                </Avatar>
                <h2>
                  {option.name} {option?.last_name}
                </h2>
              </div>
            );
          }}
          filterOption={(option, value) => {
            return (
              option.data.name.toLowerCase().includes(value.toLowerCase()) ||
              option.data.last_name.toLowerCase().includes(value.toLowerCase())
            );
          }}
        />

        <Form
          action={`/inventory/branch-points-sale/edit/${store_id}`}
          method="post"
        >
          <input
            type="text"
            className="hidden"
            hidden
            readOnly
            name="store_id"
            value={store_id}
          />
          <input
            type="text"
            className="hidden"
            hidden
            readOnly
            name="type_option"
            value="createUsersBranchTab"
          />
          <input
            type="text"
            className="hidden"
            hidden
            readOnly
            name="users"
            value={JSON.stringify(userList)}
          />
          <DialogFooter>
            <div className="flex w-full justify-end gap-2">
              <Button
                type="button"
                className="h-8 w-24 rounded-xl bg-[#E0E0E0] font-roboto text-xs font-normal text-[#44444F] hover:bg-[#E0E0E0]"
                onClick={() => clearData()}
              >
                Cancelar
              </Button>
              <Button
                className="h-8 w-24 rounded-xl bg-primarioBotones font-roboto text-xs font-normal hover:bg-primarioBotones"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Aceptar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalAddUser;
