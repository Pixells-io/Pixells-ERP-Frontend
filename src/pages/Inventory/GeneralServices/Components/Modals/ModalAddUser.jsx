import React, { useState, useEffect } from "react";
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
import { Form, useNavigation } from "react-router-dom";
import SelectSearch from "@/components/SelectSearch/SelectSearch";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function ModalAddUser({ users, onAddUsers, service_id }) {
  const [modal, setModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const navigation = useNavigation();

  const clearData = () => {
    setSelectedUsers([]);
    setModal(false);
  };

  const handleAddUsers = () => {
    onAddUsers(selectedUsers);
    clearData();
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
          onChange={(e) => setSelectedUsers(e)}
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
        <Form action={"/inventory/general-services/service/edit/" + service_id} method="POST">
          <input
            type="hidden"
            name="type_option"
            value={"create_userform"}
          />
          <input
            type="hidden"
            name="info_id"
            value={service_id}
          />
          {/* Cambiar este input para que se envíe como un array */}
          {selectedUsers.map((user) => (
            <input
              key={user.id}
              type="hidden"
              name="users[]"
              value={user.id}
            />
          ))}
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
                type="submit"
                className="h-8 w-24 rounded-xl bg-primarioBotones font-roboto text-xs font-normal hover:bg-primarioBotones"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "submitting..." : "Aceptar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalAddUser;
