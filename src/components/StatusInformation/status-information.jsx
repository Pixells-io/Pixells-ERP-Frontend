import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import StatusDraft from "./StatusDraft";
import StatusInProgress from "./StatusInProgress";
import StatusDone from "./StatusDone";

function StatusInformation({
  status,
  approvedBy,
  imgUser,
  comments,
  date,
  children,
}) {
  //status 1 = Draft
  //status 2 = In progress
  //status 3 = Done
  //imgUser = url de la imagen persona
  //comments = aparece el comentario cuando es status 3
  //approvedBy = nombre persona aprobo, aparece status 3.
  //date = aparece la fecha aprobado, aparece status 3.

  const [additionalComments, setAdditionalComments] = useState("");

  const handleChange = (event) => {
    setAdditionalComments(event.target.value);
  };

  return (
    <div className="grid grid-cols-12 gap-8 py-8">
      <div className="col-span-12 flex items-center justify-between pl-8 md:col-span-6 xl:col-span-5">
        <div>
          <p className="text-center text-sm font-medium text-grisText">
            Estatus
          </p>
          <div className="mt-2 flex justify-center">
            {status == "draft" ? (
              <StatusDraft />
            ) : status == "inProgress" ? (
              <StatusInProgress />
            ) : (
              status == "done" && <StatusDone />
            )}
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
                : status == "done" && approvedBy}
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
                : status == "done" && date}
            </label>
          </div>
        </div>
      </div>

      <div
        className={`col-span-12 md:col-span-6 ${status == "done" ? "xl:col-span-7" : "xl:col-span-4"}`}
      >
        <div className="flex gap-3 text-[#696974]">
          <Avatar className="size-12">
            <AvatarImage src={imgUser} />
          </Avatar>
          {status == "done" ? (
            <label
              className="h-[80px] w-full resize-none rounded-lg px-3 py-2 text-[10px]"
              name="template"
            >
              {comments}
            </label>
          ) : (
            <textarea
              placeholder="Comentarios adicionales"
              className="h-[80px] w-full resize-none rounded-lg border-2 border-dashed border-grisDisabled bg-inherit px-3 py-2 text-xs"
              name="template"
              value={additionalComments}
              onChange={handleChange}
            ></textarea>
          )}
        </div>
      </div>
      {(status == "draft" || status == "inProgress") && (
        <div className="col-span-12 xl:col-span-3">
          {(status == "draft" || status == "inProgress") && (
            <div className="flex h-full items-center justify-end gap-2">
              {
                children
              }
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StatusInformation;
