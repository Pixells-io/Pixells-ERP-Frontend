import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import StatusDraft from "./StatusDraft";
import StatusInProgress from "./StatusInProgress";
import StatusDone from "./StatusDone";

function StatusInformation({ status, saveDraft, applyFunction }) {
  //status 1 = Draft
  //status 2 = In progress
  //status 3 = Done

  return (
    <div className="grid grid-cols-12 gap-8 py-8">
      <div className="col-span-12 flex items-center justify-between pl-8 md:col-span-6 xl:col-span-5">
        <div>
          <p className="text-center text-sm font-medium text-grisText">
            Estatus
          </p>
          <div className="mt-2 flex justify-center">
            {
              status == "draft" ? <StatusDraft /> :
              status == "inProgress" ? <StatusInProgress /> :
              status == "done" && <StatusDone />
            }
             
          </div>
        </div>
        <div>
          <p className="text-center text-sm font-medium text-grisText">
            Aprobado por
          </p>
          <div className="mt-2 flex justify-center">
            <label className="rounded-xl bg-blancoBox px-2 py-1 text-center text-xs font-semibold text-grisSubText">
              {status == "draft" || status == "inProgress"
                ? "Pending Aproval"
                : status == "done" && "Agustin Hernandez"}
            </label>
          </div>
        </div>
        <div>
          <p className="text-center text-sm font-medium text-grisText">
            Fecha y hora de aplicación
          </p>
          <div className="mt-2 flex justify-center">
            <label className="rounded-xl bg-blancoBox px-2 py-1 text-center text-xs font-semibold text-grisSubText">
              {status == "draft" || status == "inProgress"
                ? "Pending Date"
                : status == "done" && "27 Jun 2024"}
            </label>
          </div>
        </div>
      </div>

      <div
        className={`col-span-12 md:col-span-6 ${status == "done" ? "xl:col-span-7" : "xl:col-span-4"}`}
      >
        <div className="flex gap-3 text-[#696974]">
          <Avatar className="size-12">
            <AvatarImage
              src={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            />
          </Avatar>
          {status == "done" ? (
            <label
              className="h-[80px] w-full resize-none rounded-lg px-3 py-2 text-[10px]"
              name="template"
            >
              Todo en orden se pago de forma correcta el documento y estamos
              listos para lo que sigue
            </label>
          ) : (
            <textarea
              placeholder="Comentarios adicionales"
              className="h-[80px] w-full resize-none rounded-lg border-2 border-dashed border-grisDisabled px-3 py-2 text-xs"
              name="template"
            ></textarea>
          )}
        </div>
      </div>
      {(status == "draft" || status == "inProgress") && (
        <div className="col-span-12 xl:col-span-3">
          {(status == "draft" || status == "inProgress") && (
            <div className="flex h-full items-center gap-2">
              <Button
                variant="outline"
                className="rounded-lg border-2 border-primarioBotones text-xs text-primarioBotones hover:text-primarioBotones"
              >
                Guardar Borrador
              </Button>
              <Button
                onClick={() => applyFunction()}
                className={`rounded-lg px-10 text-xs ${status == "inProgress" && "bg-primarioBotones hover:bg-primarioBotones"}`}
                disabled={status == "draft"}
              >
                Aplicar
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StatusInformation;
