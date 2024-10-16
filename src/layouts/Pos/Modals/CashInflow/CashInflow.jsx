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
import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";

function CashInflow({}) {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger
        className={
          "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
        }
      >
        <div className="w-full whitespace-nowrap">
          <p className="font-roboto text-xs font-medium">ENTRADA EFECTIVO</p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-auto px-0 pb-[50px] pt-0 sm:max-w-[542px]">
        <DialogHeader className="border-b">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Entrada
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>
        <Form
          id="own-bank-form"
          className="flex h-full w-full flex-col gap-3 px-6 pb-4"
          action="/bank-management"
          method="post"
        >
          <h2 className="text-roboto text-lg font-extrabold text-[#00A259]">
            ENTRADA DE EFECTIVO
          </h2>
          <div className="flex flex-col gap-y-4">
            <div className="grid w-full grid-cols-12 justify-between gap-x-6">
              <div className="col-span-3">
                <InputForm
                  name={"amount"}
                  type={"number"}
                  placeholder={"Cantidad"}
                />
              </div>
              <div className="col-span-6">
                <InputForm
                  name={"concept"}
                  type={"text"}
                  placeholder={"Concepto"}
                />
              </div>
              <div className="col-span-3 flex w-full items-end justify-end">
                <Button className="h-[32px] rounded-3xl bg-primarioBotones">
                  Agregar
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-grisDisabled px-3 pt-3">
              <div className="grid grid-cols-12 border-b border-grisHeading pb-2">
                <div className="text-roboto col-span-2 text-xs font-normal text-grisText">
                  Fecha
                </div>
                <div className="text-roboto col-span-2 text-xs font-normal text-grisText">
                  Hora
                </div>
                <div className="text-roboto col-span-5 text-xs font-normal text-grisText">
                  Concepto
                </div>
                <div className="text-roboto col-span-3 text-xs font-normal text-grisText">
                  Cantidad
                </div>
              </div>
              <div className="relative grid grid-cols-12 border-b border-grisDisabled py-3 last:border-b-0 hover:bg-grisBg">
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  12 ago 24
                </div>
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  09:40
                </div>
                <div className="text-roboto col-span-5 text-[11px] font-light text-grisHeading">
                  Ejemplo de concepto y medida
                </div>
                <div className="text-roboto col-span-3 flex items-center justify-between text-[11px] font-light text-grisHeading">
                  <label>$250.00</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IonIcon
                        icon={ellipsisVertical}
                        className="h-4 w-4 cursor-pointer text-grisDisabled"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-2xl px-0 py-5">
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <span className="absolute inset-0 top-1/2 border-t border-black right-[5%]"></span>
                </div>
              <div className="grid grid-cols-12 border-b border-grisDisabled py-3 last:border-b-0 hover:bg-grisBg">
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  12 ago 24
                </div>
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  09:40
                </div>
                <div className="text-roboto col-span-5 text-[11px] font-light text-grisHeading">
                  Ejemplo de concepto y medida
                </div>
                <div className="text-roboto col-span-3 flex items-center justify-between text-[11px] font-light text-grisHeading">
                  <label>$250.00</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IonIcon
                        icon={ellipsisVertical}
                        className="h-4 w-4 cursor-pointer text-grisDisabled"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-2xl px-0 py-5">
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-grisDisabled py-3 last:border-b-0 hover:bg-grisBg">
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  12 ago 24
                </div>
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  09:40
                </div>
                <div className="text-roboto col-span-5 text-[11px] font-light text-grisHeading">
                  Ejemplo de concepto y medida
                </div>
                <div className="text-roboto col-span-3 flex items-center justify-between text-[11px] font-light text-grisHeading">
                  <label>$250.00</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IonIcon
                        icon={ellipsisVertical}
                        className="h-4 w-4 cursor-pointer text-grisDisabled"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-2xl px-0 py-5">
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-grisDisabled py-3 last:border-b-0 hover:bg-grisBg">
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  12 ago 24
                </div>
                <div className="text-roboto col-span-2 text-[11px] font-light text-grisHeading">
                  09:40
                </div>
                <div className="text-roboto col-span-5 text-[11px] font-light text-grisHeading">
                  Ejemplo de concepto y medida
                </div>
                <div className="text-roboto col-span-3 flex items-center justify-between text-[11px] font-light text-grisHeading">
                  <label>$250.00</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IonIcon
                        icon={ellipsisVertical}
                        className="h-4 w-4 cursor-pointer text-grisDisabled"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-2xl px-0 py-5">
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                        Cancelar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CashInflow;
