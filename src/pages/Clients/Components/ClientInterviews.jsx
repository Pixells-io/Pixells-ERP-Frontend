import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { IonIcon } from "@ionic/react";
import {
  addCircle,
  addOutline,
  chevronBackCircle,
  chevronForwardCircle,
  close,
  searchOutline,
} from "ionicons/icons";
import FormUploadPlatform from "./FormUploadPlatform";
import ModalAnswerInterview from "./ModalAnswerInterview";

function ClientInterviews({ interviews }) {
  const [modal, setModal] = useState(false);
  const [interview, setInterview] = useState(false);

  function setModalOpen(interview) {
    console.log(interview);
    setInterview(interview);
    setModal(true);
  }

  return (
    <div className="mt-2 w-full rounded-xl bg-white px-8 py-8">
      <ModalAnswerInterview
        modal={modal}
        setModal={setModal}
        interview={interview}
      />
      <div className="flex w-full px-3 py-3">
        <div className="w-4/12">
          <span className="font-roboto text-sm font-semibold text-grisText">
            INTERVIEW
          </span>
        </div>
        <div className="w-4/12">
          <span className="font-roboto text-sm font-semibold text-grisText">
            ASSIGNED DATE
          </span>
        </div>
        <div className="w-4/12 text-center">
          <span className="font-roboto text-sm font-semibold text-grisText">
            TO ANSWER
          </span>
        </div>
      </div>
      {interviews?.map((interviews, i) => (
        <div
          className="mt-4 flex w-full rounded-2xl bg-[#E8E8E8] px-3 pt-2"
          key={i}
        >
          <div className="w-4/12">
            <span
              title=""
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {interviews.name}
            </span>
          </div>
          <div className="w-4/12">
            <span
              title=""
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {interviews.date}
            </span>
          </div>
          <div className="w-4/12 text-center">
            <IonIcon
              icon={addOutline}
              className="mt-[-16px] text-2xl text-primario"
              onClick={() => setModalOpen(interviews)}
            ></IonIcon>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClientInterviews;
