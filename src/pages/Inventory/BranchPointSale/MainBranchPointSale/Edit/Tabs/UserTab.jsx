import InputForm from "@/components/InputForm/InputForm";
import SelectSearch from "@/components/SelectSearch/SelectSearch";
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
import { add, trashOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Form, useParams } from "react-router-dom";

const UserTab = () => {
  const { id } = useParams();

  const [isAdd, setIsAdd] = useState(false);
  const [usersItems, setUsersItems] = useState([]);

  const addUser = () => {

  }

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${id}`}
      method="post"
    >
      <div>
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

        <div className="mt-2 w-fit flex items-center gap-x-2">
        <Button
              type="button"
              onClick={() => setIsAdd(true)}
              className="flex h-[24px] gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2"
            >
              <IonIcon className="h-5 w-5" icon={add}></IonIcon>
              Agregar
            </Button>
          {isAdd && (
            <SelectSearch
              name="users"
              options={[]}
              placeholder="Seleccionar Usuarios"
              isMulti={true}
              getOptionLabel={(option) => {
                return (
                  <div className="flex items-center gap-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={option?.user_image} />
                    </Avatar>
                    <h2>{option.label}</h2>
                  </div>
                );
              }}
              filterOption={(option, value) => {
                return option.data.label
                  .toLowerCase()
                  .includes(value.toLowerCase());
              }}
            />
          )}
        </div>

        <div className="mt-8">
          <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
            USUARIO 1
          </p>
          <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
            <div className="col-span-3 flex items-center gap-x-2">
              <Avatar className="size-8">
                <AvatarImage
                  src={
                    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                />
              </Avatar>
              <label className="text-xs font-normal text-grisText">
                Lucho flores
              </label>
            </div>
            <div className="col-span-3">
              <InputForm
                name="position"
                type="text"
                placeholder={"Posición"}
                disabled={true}
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
                  <label className="font-roboto text-xs font-light text-grisSubText">
                    (Sin periodo de tiempo)
                  </label>
                </div>
                <div>
                  <Button
                    type="button"
                    className="flex h-[24px] gap-x-1 rounded-xl bg-blancoBox2 px-2 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                  >
                    <IonIcon className="h-5 w-5" icon={add}></IonIcon>
                    Periodo
                  </Button>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  type="button"
                  className="flex h-[24px] gap-x-1 rounded-xl border border-[#44444F] bg-inherit px-2 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                >
                  <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        </div>
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
