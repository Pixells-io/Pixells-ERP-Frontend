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
  setComments,
}) {
  //status 1 = Draft
  //status 2 = In progress
  //status 3 = Done
  //imgUser = url de la imagen persona
  //comments = aparece el comentario cuando es status 3
  //approvedBy = nombre persona aprobo, aparece status 3.
  //date = aparece la fecha aprobado, aparece status 3.
  //setComment = manejo del valor de comentarios.

  const [additionalComments, setAdditionalComments] = useState("");

  const handleChange = (event) => {
    setAdditionalComments(event.target.value);
    setComments(event.target.value);
  };

  return (
    <div className="grid grid-cols-12 gap-8 py-2">
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
              className="h-[50px] w-full resize-none rounded-lg border-2 border-dashed border-grisDisabled bg-inherit px-3 py-2 text-xs"
              name="template"
              value={additionalComments}
              onChange={handleChange}
            ></textarea>
          )}
        </div>
      </div>

      <div className="col-span-12 flex items-center gap-x-8 pl-8 md:col-span-6 xl:col-span-5">
        <div className="flex justify-center">
          {status == "draft" ? (
            <StatusDraft />
          ) : status == "inProgress" ? (
            <StatusInProgress />
          ) : (
            status == "done" && <StatusDone />
          )}
        </div>
        <div>
          <label className="rounded-xl bg-blancoBox px-2 py-1 text-center text-xs font-semibold text-grisSubText">
            {status == "draft" || status == "inProgress"
              ? "Pending Aproval"
              : status == "done" && approvedBy}
          </label>
        </div>

        <div className="flex justify-center">
          <label className="rounded-xl bg-blancoBox px-2 py-1 text-center text-xs font-semibold text-grisSubText">
            {status == "draft" || status == "inProgress"
              ? "Pending Date"
              : status == "done" && date}
          </label>
        </div>
      </div>

      {(status == "draft" || status == "inProgress") && (
        <div className="col-span-12 xl:col-span-3">
          {(status == "draft" || status == "inProgress") && (
            <div className="flex h-full items-center justify-center gap-2">
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StatusInformation;
