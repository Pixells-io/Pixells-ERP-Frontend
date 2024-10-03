import React, { useState, useEffect } from "react";
import { Form, useNavigation,useParams } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { format } from "date-fns";
import InputForm from "@/components/InputForm/InputForm";
import ModalAddUser from "../Modals/ModalAddUser";
import ModalPeriod from "../Modals/ModalPeriod";
import ModalDeleteUser from "../Modals/ModalDeleteUser";

const UserTab = ({ users }) => {
  const {id}=useParams();
  const navigation = useNavigation();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [responsibleUser, setResponsibleUser] = useState(null);
  const [selectEditUser, setSelectEditUser] = useState(null);


console.log(selectedUsers)
  const handleAddUsers = (newUsers) => {
    setSelectedUsers((prevUsers) => [
      ...prevUsers,
      ...newUsers.map((user) => ({
        ...user,
        active: "1",
        responsable: "0",
        start: "",
        end: "",
      })),
    ]);
  };

  const handleResponsibleChange = (userId) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        responsable: user.id === userId ? "1" : "0",
      })),
    );
    setResponsibleUser(userId);
  };

  const handleInputChange = (value, name, userId) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, [name]: value } : user,
      ),
    );
    setSelectEditUser(userId);
  };

  const addDate = (dateI, dateF, userId) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, start: dateI, end: dateF } : user,
      ),
    );
    setSelectEditUser(userId);
  };

  const clearPeriod = (userId) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, start: "", end: "" } : user,
      ),
    );
    setSelectEditUser(userId);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      setSelectEditUser(null);
    }
  }, [navigation.state]);

  return (
    <div className="flex h-full w-full flex-col py-4">
      <div className="max-h-screen overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          USUARIOS
        </h2>

        <div className="mt-2 flex w-fit items-center gap-x-2">
          <ModalAddUser users={users} onAddUsers={handleAddUsers} service_id={id} />
        </div>

        {selectedUsers.map((user, index) => (
          <Form className="mt-4" key={user.id} action={"/inventory/general-services/service/edit/"+id} method="post">
            <input
              type="text"
              hidden
              readOnly
              name="service_id"
              value={id}
            />
              <input
              type="text"
              hidden
              readOnly
              name="service_user"
              value={user.id}
            />
              <input
              type="text"
              hidden
              readOnly
              name="responsible"
              value={user.responsable}
            />
            <input
              type="text"
              hidden
              readOnly
              name="type_option"
              value="updateServiceUser"
            />
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              USUARIO {index + 1}
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <InputForm
                  name="position"
                  type="text"
                  placeholder={"Posición"}
                  disabled={true}
                  value={user.position}
                />
              </div>
              <div className="col-span-3 flex items-center gap-x-2">
                <Avatar className="size-8">
                  <AvatarImage src={user.user_image} />
                </Avatar>
                <label className="text-xs font-normal text-grisText">
                  {user.user?.label}
                </label>
                <span className="whitespace-nowrap text-center text-sm text-[#696974]">
                  {user.name + " " + user.last_name}
                </span>
              </div>

              <div className="col-span-6 flex items-end justify-end">
                {selectEditUser === user.id && (
                  <Button
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-primarioBotones bg-inherit px-1.5 text-[11px] font-medium text-primarioBotones hover:bg-primarioBotones"
                    disabled={navigation.state === "submitting"}
                  >
                    <IonIcon className="h-5 w-5" icon={checkmark}></IonIcon>
                    {navigation.state === "submitting"
                      ? "Submitting..."
                      : "Guardar"}
                  </Button>
                )}
              </div>
              <div className="col-span-12 flex flex-col gap-y-2">
                <div className="flex w-full justify-between py-2">
                  <div className="flex items-center gap-x-3">
                    <Switch
                      className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                      name="active"
                      checked={user.active === "1"}
                      onCheckedChange={(e) =>
                        handleInputChange(e ? "1" : "0", "active", user.id)
                      }
                    />
                    <label className="font-roboto text-xs font-normal text-grisText">
                      Activo
                    </label>
                    {!!user.start && !!user.end ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            name="start"
                            value={format(new Date(user.start), "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(new Date(user.start), "PP")}
                          </label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            name="end"
                            value={format(new Date(user.end), "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(new Date(user.end), "PP")}
                          </label>
                        </div>
                      </div>
                    ) : (
                      <label className="font-roboto text-xs font-light text-grisSubText">
                        (Sin periodo de tiempo)
                      </label>
                    )}
                  </div>
                  <div>
                    {!!user.start && !!user.end ? (
                      <Button
                        type="button"
                        className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                        onClick={() => clearPeriod(user.id)}
                      >
                        Restablecer
                      </Button>
                    ) : (
                      <ModalPeriod
                        setFunctionParent={addDate}
                        index={user.id}
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start">
                    <Switch
                      className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                      name="responsable"
                      checked={user.responsable === "1"}
                      onCheckedChange={() => handleResponsibleChange(user.id)}
                    />
                    <label className="ml-3 whitespace-nowrap font-roboto text-xs font-normal text-grisText">
                      Responsable del Servicio
                    </label>
                  </div>
                  <div className="flex w-full justify-end">
                    <ModalDeleteUser
                    service_id={id}
                      user_id={user.id}
                      user_name={user.user?.label}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        ))}
      </div>

      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
        </div>
        <button className="h-[31px] rounded-xl px-4  bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default UserTab;
