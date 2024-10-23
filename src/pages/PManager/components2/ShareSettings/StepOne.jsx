import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import SelectShareSettings from "@/layouts/Masters/FormComponents/SelectShareSettings";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronForwardOutline, lockClosedOutline } from "ionicons/icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function StepOne({ step, setStep, users, positions, areas, creator, id }) {
  const [selectedValue, setSelectedValue] = useState(1);
  const [optionsSelected, setOptionsSelected] = useState(users);

  useEffect(() => {
    switch (Number(selectedValue)) {
      case 1:
        return setOptionsSelected(users);
      case 2:
        return setOptionsSelected(positions);
      case 3:
        return setOptionsSelected(areas);
      default:
        return [];
    }
  }, [selectedValue]);

  const handleSelectChange = (value) => {
    setSelectedValue(Number(value));
  };
  return (
    <div className={`flex flex-col gap-y-4 ${step == 1 ? "block" : "hidden"}`}>
      {/* add */}
      <div className="flex h-full w-full flex-col px-4">
        <Form
          id="shareSettings"
          className="flex"
          action={`/project-manager2/${id}`}
          method="post"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="action"
            value="share-objective"
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="objetive_id"
            value={id}
          />
          <Select
            defaultValue="1"
            name="type_share"
            required
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="h-[32px] max-w-[78px] rounded-[10px] border border-[#5B89FF] bg-inherit p-0 px-1 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
              <SelectItem
                value="1"
                className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
              >
                Usuarios
              </SelectItem>
              <SelectItem
                value="2"
                className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
              >
                Puestos
              </SelectItem>
              <SelectItem
                value="3"
                className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
              >
                Areas
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="ml-2 flex w-full gap-x-4">
            <SelectShareSettings
              className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
              name="rel_id"
              options={optionsSelected}
              getOptionLabel={(option) => (
                <div className="flex items-center gap-x-2">
                  <Avatar className="size-6">
                    <AvatarImage src={option?.user_image} />
                  </Avatar>
                  <p className="font-roboto text-xs font-normal text-grisHeading">
                    {option?.name && option?.name}
                    {option?.position_name && option?.position_name}
                    {option?.nombre && option?.nombre}
                  </p>
                </div>
              )}
              isMulti={true}
              isClearable={false}
              getOptionValue={(option) => option.id}
              filterOption={(option, value) => {
                switch (Number(selectedValue)) {
                  case 1:
                    return option.data.name
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  case 2:
                    return option.data.position_name
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  case 3:
                    return option.data.nombre
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  default:
                    return;
                }
              }}
            />
            <Button
              type="submit"
              className="h-[32px] w-[58px] rounded-xl bg-primarioBotones font-roboto text-[11px] font-medium text-white"
            >
              Invitar
            </Button>
          </div>
        </Form>
      </div>
      {/* steps */}
      <div className="flex flex-col gap-y-4">
        <h2 className="px-4 font-roboto text-xs font-medium text-[#ABABAB]">
          Usuarios con acceso
        </h2>
        <div
          className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-hoverModal"
          onClick={() => setStep(2)}
        >
          <div className="flex items-center gap-x-4">
            <IonIcon
              icon={lockClosedOutline}
              size="small"
              className="text-grisHeading"
            />
            <p className="font-roboto text-xs font-normal text-grisHeading">
              Solo los invitados
            </p>
          </div>
          <IonIcon
            icon={chevronForwardOutline}
            size="small"
            className="rounded-full px-2 text-grisHeading"
          />
        </div>
      </div>
      {/* users add */}
      <div className="flex flex-col gap-y-4 px-4">
        {/* creator */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <Avatar className="size-6">
              <AvatarImage src={creator?.img} />
            </Avatar>
            <p className="font-roboto text-xs font-normal text-grisHeading">
              {creator?.name}
            </p>
            <span className="font-roboto text-xs font-normal tracking-widest text-grisDisabled">
              (tú)
            </span>
          </div>
          <p className="font-roboto text-xs font-normal text-grisHeading">
            Creador
          </p>
        </div>
        {/* another users */}
        {/* {anotherUsers.map((u, index) => (
          <div className="flex justify-between" key={index}>
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage src={u?.img} />
              </Avatar>
              <p className="font-roboto text-xs font-normal text-grisHeading">
                {u?.name}
              </p>
            </div>
            <Form method="post">
              <Select defaultValue="view" name="actions" required>
                <SelectTrigger className="h-[26px] w-full min-w-[92px] rounded-md border-none bg-hoverModal p-0 px-1 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue placeholder={"Acción"} className="" />
                </SelectTrigger>
                <SelectContent className="w-[167px] rounded-3xl px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
                  <SelectItem
                    value="view"
                    className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                  >
                    Puede ver
                  </SelectItem>
                  <SelectItem
                    value="edit"
                    className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                  >
                    Puede editar
                  </SelectItem>
                  <SelectItem
                    value="total"
                    className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                  >
                    Acceso Total
                  </SelectItem>
                  <SelectItem
                    value="delete"
                    className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                  >
                    Eliminar
                  </SelectItem>
                </SelectContent>
              </Select>
            </Form>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default StepOne;
