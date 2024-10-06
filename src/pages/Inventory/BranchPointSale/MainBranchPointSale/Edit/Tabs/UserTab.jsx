import InputForm from "@/components/InputForm/InputForm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalAddUser from "../Modals/ModalAddUser";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";
import ModalDeleteUser from "../Modals/ModalDeleteUser";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import Switch from "@/components/SwitchPropio/Switch";

const UserTab = ({ users, cashBoxes, store_id, usersRegister }) => {
  const navigation = useNavigation();
  const [usersSelect, setUsersSelect] = useState(usersRegister);
  const [selectEditUser, setSelectEditUser] = useState(null);

  const addDate = (dateI, dateF, i) => {
    const auxUser = usersSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          start: dateI,
          end: dateF,
        };
      } else {
        return u;
      }
    });
    setUsersSelect(auxUser);
    setSelectEditUser(i);
  };

  const clearPeriod = (i) => {
    const auxUser = usersSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          start: "",
          end: "",
        };
      } else {
        return u;
      }
    });
    setUsersSelect(auxUser);
    setSelectEditUser(i);
  };

  const handleInputChange = (value, name, i) => {
    console.log(value);
    console.log(name);
    console.log(i);
    const aux = usersSelect.map((prevFormData, index) => {
      if (index == i) {
        return { ...prevFormData, [name]: value };
      } else {
        return {
          ...prevFormData,
        };
      }
    });

    setUsersSelect([...aux]);
    setSelectEditUser(i);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      setSelectEditUser(null);
    }
  }, [navigation.state]);

  useEffect(() => {
    changeValueUserList();
  }, [usersRegister]);

  const changeValueUserList = () => {
    setUsersSelect(usersRegister);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-auto py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          USUARIOS
        </h2>

        <div className="mt-2 flex w-fit items-center gap-x-2">
          <ModalAddUser users={users} store_id={store_id} />
        </div>

        {usersSelect.map((userSelect, index) => (
          <Form
            className="mt-4"
            key={index}
            action={`/inventory/branch-points-sale/edit/${store_id}`}
            method="post"
          >
            <input
              type="text"
              className="hidden"
              hidden
              readOnly
              name="store_user_id"
              value={userSelect?.id}
            />
            <input
              type="text"
              className="hidden"
              hidden
              readOnly
              name="type_option"
              value="updateUserBranchTab"
            />
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              USUARIO {index + 1}
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3 flex items-center gap-x-2">
                <Avatar className="size-8">
                  <AvatarImage src={userSelect?.user_image} />
                </Avatar>
                <label className="text-xs font-normal text-grisText">
                  {userSelect?.user?.label}
                </label>
              </div>
              <div className="col-span-3">
                <InputForm
                  name="position"
                  type="text"
                  placeholder={"Posición"}
                  disabled={true}
                  value={userSelect?.position}
                />
              </div>
              <div className="col-span-2">
                <InputForm
                  name="pos_password"
                  type="password"
                  placeholder={"Contraseña Inicial"}
                  value={userSelect?.pos_password}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "pos_password", index)
                  }
                />
              </div>
              <div className="col-span-2">
                <SelectRouter
                  value={
                    cashBoxes.find(
                      (cashBox) =>
                        cashBox.id == userSelect?.principal_pos_id?.value,
                    ) || null
                  }
                  name={"principal_pos_id"}
                  options={cashBoxes}
                  placeholder="Caja Principal"
                  required={true}
                  onChange={(e) =>
                    handleInputChange(
                      { value: e.id },
                      "principal_pos_id",
                      index,
                    )
                  }
                  getOptionValue={(e) => e.id}
                  getOptionLabel={(e) => e.name}
                />
              </div>
              <div className="col-span-2 flex items-end justify-end">
                {index == selectEditUser && (
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
                      name="active"
                      checked={userSelect?.active == "1"}
                      onCheckedChange={(e) =>
                        handleInputChange(e ? "1" : "0", "active", index)
                      }
                    />
                    <label className="font-roboto text-xs font-normal text-grisText">
                      Activo
                    </label>
                    {!!userSelect.start && !!userSelect.end ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="start"
                            className="hidden"
                            value={format(userSelect.start, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(userSelect.start, "PP")}
                          </label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="end"
                            className="hidden"
                            value={format(userSelect.end, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(userSelect.end, "PP")}
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
                    {!!userSelect.start && !!userSelect.end ? (
                      <Button
                        type="button"
                        className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                        onClick={() => clearPeriod(index)}
                      >
                        Restablecer
                      </Button>
                    ) : (
                      <ModalPeriod setFunctionParent={addDate} index={index} />
                    )}
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <ModalDeleteUser
                    store_id={store_id}
                    store_user_id={userSelect?.id}
                    user_name={userSelect?.user?.label}
                  />
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
          {/* <Button
            form="create-form-user"
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default UserTab;
