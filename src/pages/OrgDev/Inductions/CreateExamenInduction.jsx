import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import ExamForm from "./components/ExamForm";
import { redirect, useParams } from "react-router-dom";
import { newInductionExam } from "../utils";

const PEOPLE = [
  {
    name: "Rodrigo Gómez",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Clarissa Reynold’s",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Alberto Lenus",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Ana Lenovsky",
    position: "Gerente de Administración",
    status: "Result",
  },
];

function CreateExamenInduction() {
  const { id: inductionId } = useParams();
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">org-dev</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              DESARROLLO ORGANIZACIONAL
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            {/* <div className="text-xs">
          {leads?.data.length == 0 ? "0" : leads?.data.length}{" "}
          {leads?.data.length == 1 ? "lead" : "leads"}
        </div>
        <div className="text-2xl">&bull;</div>
        <div className="text-xs">
          {loaderClients?.data.length == 0
            ? "0"
            : loaderClients?.data.length}{" "}
          {loaderClients?.data.length == 1 ? "client" : "clients"}
        </div> */}
          </div>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Inducciones
          </p>
        </div>

        <div className="h-full overflow-auto rounded-lg bg-blancoBg pt-2">
          <div className="py-6">
            <ExamForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateExamenInduction;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await newInductionExam(data);

  return redirect("/org-development/induction");
}
