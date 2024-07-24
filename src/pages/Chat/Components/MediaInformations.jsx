import React, { useState } from "react";

function MediaInformations({ data }) {
  const date = new Date(data?.created);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses empiezan desde 0
  const year = date.getFullYear();

  return (
    <div>
      <h1>Participantes</h1>
      {data.participants_array.map((participant, index) => (
        <div
          key={"participants" + index}
          className="flex flex-col gap-2 rounded-t-xl px-6 py-4"
        >
          <div className="flex items-center gap-4">
            <img src={participant.img} className="h-14 w-14 rounded-full" />
            <div>
              <span className="text-xs font-semibold text-grisText">
                {participant.name} {participant.last_name}{" "}
                {participant.second_last_name}
              </span>
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs font-semibold text-grisText">Creado</p>
      <p className="text-xs font-semibold text-grisText">
        {year}/{month}/{day}
      </p>
    </div>
  );
}

export default MediaInformations;
