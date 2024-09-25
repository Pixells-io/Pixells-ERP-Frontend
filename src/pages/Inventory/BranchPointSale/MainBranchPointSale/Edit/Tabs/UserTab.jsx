import InputForm from "@/components/InputForm/InputForm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Form, useParams } from "react-router-dom";
import ModalAddUser from "../Modals/ModalAddUser";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";

const UserTab = ({ users }) => {
  const { id } = useParams();
  const [usersSelect, setUsersSelect] = useState([]);

  const deleteUser = (index) => {
    const newUsers = usersSelect.filter((item, i) => index !== i);
    setUsersSelect([...newUsers]);
  };

  const addDate = (dateI, dateF, i) => {
    const auxUser = usersSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          dateStartPeriod: dateI,
          dateFinishPeriod: dateF,
        };
      } else {
        return u;
      }
    });
    setUsersSelect(auxUser);
  };

  const clearPeriod = (i) => {
    const auxUser = usersSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          dateStartPeriod: "",
          dateFinishPeriod: "",
        };
      } else {
        return u;
      }
    });
    setUsersSelect(auxUser);
  };

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${id}`}
      method="post"
    >
      <div className="overflow-auto">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          USUARIOS
        </h2>
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="store_id"
          // value={store.id}
          value={id}
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value="create_generalBranchTab"
        />

        <div className="mt-2 flex w-fit items-center gap-x-2">
          <ModalAddUser users={users} setUsersSelect={setUsersSelect} />
        </div>

        {usersSelect.map((userSelect, index) => (
          <div className="mt-4" key={index}>
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              USUARIO {index + 1}
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3 flex items-center gap-x-2">
                <Avatar className="size-8">
                  <AvatarImage src={userSelect.user_image} />
                </Avatar>
                <label className="text-xs font-normal text-grisText">
                  {userSelect.name} {userSelect.last_name}
                </label>
              </div>
              <div className="col-span-3">
                <InputForm
                  name="position"
                  type="text"
                  placeholder={"Posición"}
                  disabled={true}
                  value={userSelect.position}
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="password"
                  type="password"
                  placeholder={"Contraseña Inicial"}
                />
              </div>
              <div className="col-span-3">
                <p className="mb-1 text-[10px] font-normal text-grisText">
                  Caja Principal
                </p>
                <Select name="inventory_id" required={true}>
                  <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {[].map((cashBox) => (
                      <SelectItem key={cashBox.id} value={String(cashBox.id)}>
                        {cashBox.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-12 flex flex-col gap-y-2">
                <div className="flex w-full justify-between py-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      type="hidden"
                      hidden
                      name="status"
                      className="hidden"
                      // value={checkedInputStatus}
                      readOnly
                    />
                    <Switch
                      className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                      // checked={checkedInputStatus == "1"}
                      // onCheckedChange={(e) => setCheckedInputStatus(e ? "1" : "0")}
                    />
                    <label className="font-roboto text-xs font-normal text-grisText">
                      Activo
                    </label>
                    {!!userSelect.dateStartPeriod &&
                    !!userSelect.dateFinishPeriod ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="dateStart"
                            className="hidden"
                            value={format(userSelect.dateStartPeriod, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(userSelect.dateStartPeriod, "PP")}
                          </label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="dateFinish"
                            className="hidden"
                            value={format(userSelect.dateFinishPeriod, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(userSelect.dateFinishPeriod, "PP")}
                          </label>
                        </div>
                        <Button
                          type="button"
                          className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                          onClick={() => clearPeriod(index)}
                        >
                          Restablecer
                        </Button>
                      </div>
                    ) : (
                      <label className="font-roboto text-xs font-light text-grisSubText">
                        (Sin periodo de tiempo)
                      </label>
                    )}
                  </div>
                  <div>
                    <ModalPeriod setFunctionParent={addDate} index={index} />
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Button
                    type="button"
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-[#44444F] bg-inherit px-0 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                    onClick={() => deleteUser(index)}
                  >
                    <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex w-full flex-1 items-end">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
            Guardar
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default UserTab;
