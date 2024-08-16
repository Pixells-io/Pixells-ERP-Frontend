import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import { attachOutline, listCircleOutline, timeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function ProjectCard(project) {
  const data = project.project;
  const { id } = useParams();

  return (
    <NavLink
      to={`/project-manager/${id}/projects/${data?.id}`}
      className="flex h-[160px] w-[280px] shrink-0 flex-col justify-center gap-2 rounded-2xl border border-grisDisabled px-4 py-1"
    >
      <div className="flex items-center justify-between">
        <p className="font-poppins text-[15px] font-semibold">
          {data?.phases} Fases &bull; {data?.activities} Actividades
        </p>
      </div>
      <div className="flex items-center gap-2 text-grisText">
        <IonIcon icon={listCircleOutline} className="h-5 w-5"></IonIcon>
        <p className="text-[12px] font-normal"> {data?.title} </p>
      </div>
      <div className="flex items-center gap-4 text-grisText">
        <div className="flex">
          <IonIcon icon={attachOutline} className="h-5 w-5"></IonIcon>
          <p className="text-[12px]"> {data?.documents} </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#D7586B1F] px-4 py-1 text-[#D7586B]">
          <IonIcon icon={timeOutline} className="h-5 w-5"></IonIcon>
          <p className="text-[12px] text-[#D7586B]"> {data?.latest} </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
          {data?.percent}%
        </p>
        <Progress value={data?.percent} className="h-1" />
      </div>
      <div className="flex items-center gap-2 overflow-auto">
        {data?.users.map((img, i) => (
          <Avatar className="h-6 w-6" key={i}>
            <AvatarImage src={img?.img} alt={img.title} />
          </Avatar>
        ))}
      </div>
    </NavLink>
  );
}

export default ProjectCard;
