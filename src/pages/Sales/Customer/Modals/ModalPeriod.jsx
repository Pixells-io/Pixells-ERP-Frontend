import React, { useState } from "react";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

function ModalPeriod({ setFunctionParent, index, disabled }) {
  const [modal, setModal] = useState(false);

  const [openStart, setOpenStart] = useState(false);
  const [openFinish, setOpenFinish] = useState(false);
  const [dateStart, setDateStart] = useState("".replace(/-/g, "/"));
  const [dateFinish, setDateFinish] = useState("".replace(/-/g, "/"));

  const selectDateStart = (e) => {
    setDateStart(e);
    setOpenStart(false);
  };

  const selectDateFinish = (e) => {
    setDateFinish(e);
    setOpenFinish(false);
  };

  const accept = () => {
    if (!dateStart || !dateFinish) return;
    setFunctionParent(dateStart, dateFinish, index);
    clearData();
  };

  const clearData = () => {
    setOpenStart(false);
    setOpenFinish(false);
    setDateStart("".replace(/-/g, "/"));
    setDateFinish("".replace(/-/g, "/"));
    setModal(false);
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger disabled={disabled} className="flex h-[24px] items-center gap-x-1 rounded-xl bg-blancoBox2 px-2 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2">
        <IonIcon className="h-5 w-5" icon={add}></IonIcon>
        Periodo
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Seleccionar Periodo</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>

        <div className="my-4 flex gap-x-12">
          <div className="w-full">
            <p className="mb-1 text-[10px] font-normal text-grisText">Inicio</p>
            <Popover open={openStart} onOpenChange={setOpenStart}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-between rounded-[10px] border border-grisDisabled bg-inherit px-1 font-roboto text-xs font-light text-[#44444F] focus-visible:ring-primarioBotones",
                    !dateStart && "text-muted-foreground",
                  )}
                >
                  <div className="w-full">
                    {dateStart ? (
                      format(dateStart, "PP")
                    ) : (
                      <span>MM/DD/YYYY</span>
                    )}
                  </div>
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateStart}
                  onSelect={(e) => selectDateStart(e)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-full">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Finalización
            </p>
            <Popover open={openFinish} onOpenChange={setOpenFinish}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-between rounded-[10px] border border-grisDisabled bg-inherit px-1 font-roboto text-xs font-light text-[#44444F] focus-visible:ring-primarioBotones",
                    !dateFinish && "text-muted-foreground",
                  )}
                >
                  <div className="w-full">
                    {dateFinish ? (
                      format(dateFinish, "PP")
                    ) : (
                      <span>MM/DD/YYYY</span>
                    )}
                  </div>
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateFinish}
                  onSelect={(e) => selectDateFinish(e)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

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
              type="button"
              className="h-8 w-24 rounded-xl bg-primarioBotones font-roboto text-xs font-normal hover:bg-primarioBotones"
              onClick={() => accept()}
            >
              Aceptar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalPeriod;
