import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectShareSettings from "@/layouts/Masters/FormComponents/SelectShareSettings";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import {
  chevronForwardOutline,
  globeOutline,
  lockClosedOutline,
} from "ionicons/icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ShareSettins({}) {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);

  const users = [
    {
      id: 1,
      name: "Antonio Castro",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Agustin Hdez",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Diego Guzmán",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Luis",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const creator = {
    id: 1,
    name: "Agustin Hdez",
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const anotherUsers = [
    {
      id: 3,
      name: "Diego Guzmán",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Agustin Hdez",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Luis",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        setStep(1);
      }}
    >
      <DialogTrigger
        className={
          "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
        }
      >
        <div className="w-full whitespace-nowrap">
          <p className="font-roboto text-xs font-medium">ENTRADA EFECTIVO</p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-auto rounded-[0px] px-0 pb-[50px] pt-0 sm:max-w-[450px]">
        <DialogHeader className="border-b">
          <DialogTitle className="px-4 py-3 font-poppins text-xs font-semibold text-grisHeading">
            {step == 1
              ? "Compartir este objetivo"
              : "Configuración para Compartir"}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>

        <div
          className={`flex flex-col gap-y-4 ${step == 1 ? "block" : "hidden"}`}
        >
          {/* add */}
          <Form method="post" className="px-4">
            <Select defaultValue="users" name="actions" required>
              <SelectTrigger className="h-[32px] w-full rounded-xl border border-[#5B89FF] bg-inherit p-0 px-1 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
                <SelectItem
                  value="users"
                  className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                >
                  Usuario
                </SelectItem>
                <SelectItem
                  value="puesto"
                  className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                >
                  Puesto
                </SelectItem>
                <SelectItem
                  value="area"
                  className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                >
                  Area
                </SelectItem>
              </SelectContent>
            </Select>
          </Form>

          <Form className="flex h-full w-full flex-col px-4" method="post">
            <div className="flex items-center gap-x-4">
              <SelectShareSettings
                className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
                name={"users"}
                options={users}
                getOptionLabel={(option) => (
                  <div className="flex items-center gap-x-2">
                    <Avatar className="size-6">
                      <AvatarImage src={option?.img} />
                    </Avatar>
                    <p className="font-roboto text-xs font-normal text-grisHeading">
                      {option?.name}
                    </p>
                  </div>
                )}
                isMulti={true}
                isClearable={false}
                getOptionValue={(option) => option.id}
                filterOption={(option, value) => {
                  return option.data.name
                    .toLowerCase()
                    .includes(value.toLowerCase());
                }}
              />
              <Button className="h-[32px] w-[58px] rounded-xl bg-primarioBotones font-roboto text-[11px] font-medium text-white">
                Invitar
              </Button>
            </div>
          </Form>
          {/* steps */}
          <div className="flex flex-col gap-y-4">
            <h2 className="px-4 font-roboto text-xs font-medium text-[#ABABAB]">
              Usuarios con acceso
            </h2>
            <div className="flex cursor-pointer items-center justify-between px-4 py-1 hover:bg-hoverModal">
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
                className="rounded-full px-2 text-grisHeading hover:bg-[#CCCCCC]"
                onClick={() => setStep(2)}
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
            {anotherUsers.map((u, index) => (
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
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col gap-y-4 ${step == 2 ? "block" : "hidden"}`}
        >
          {/* add */}
          <div className="flex flex-col gap-y-4 px-4">
            <h2 className="font-roboto text-xs font-medium text-grisHeading">
              Acceso Permitido
            </h2>
            <Select defaultValue="invited" name="actions" required>
              <SelectTrigger className="h-[32px] w-full rounded-xl border border-[#5B89FF] bg-inherit p-0 px-3 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent className="px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
                <SelectItem
                  value="invited"
                  className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                >
                  <div className="flex items-center gap-x-2">
                    <IonIcon src={lockClosedOutline} />
                    <span>Solo los invitados</span>
                  </div>
                </SelectItem>
                <SelectItem
                  value="puesto"
                  className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                >
                  <div className="flex items-center gap-x-2">
                    <IonIcon src={globeOutline} />
                    <span>Todos</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <h3 className="px-4 font-roboto text-xs font-normal text-[#CCCCCC]">
              Solo la gente seleccionada tiene acceso{" "}
            </h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ShareSettins;
