import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import ExamForm from "./components/ExamForm";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import { newInductionExam, storeNewEvaluationExam } from "../utils";

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

const MainEvalCreate = () => {
  const { data } = useLoaderData();
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
        <div className="flex gap-8">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Evaluación
          </p>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            &bull;
          </p>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            {data.name}
          </p>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            &bull;
          </p>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            {data.type}
          </p>
        </div>

        <div className="h-full overflow-auto rounded-lg bg-blancoBg pt-2">
          <div className="py-6">
            <ExamForm />
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div className="ml-4 flex w-[280px] shrink-0 flex-col gap-6 rounded-lg bg-gris px-8 py-4">
        <div className="flex justify-center">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Accesos Rápidos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PEOPLE.map((item, i) => (
            <div key={i} className="flex">
              <div className="flex w-1/3 flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Avatar className="h-full w-full rounded-lg">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {item.status == "Pending" ? (
                  <span className="w-fit rounded-full bg-[#FAA36440] px-2 py-[2px] text-[11px] text-[#FAA364]">
                    {item.status}
                  </span>
                ) : (
                  <span className="w-fit rounded-full bg-[#7794F940] px-2 py-[2px] text-[11px] text-[#7794F9]">
                    {item.status}
                  </span>
                )}
              </div>
              <div>
                <p className="text-base font-medium text-grisText">
                  {item.name}
                </p>
                <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                  {item.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainEvalCreate;

export async function Action({ request }) {
  const data = await request.formData();

  console.log(data);

  const validation = await storeNewEvaluationExam(data);

  return new Response("ok");
}

// return redirect("/org-development/induction");
