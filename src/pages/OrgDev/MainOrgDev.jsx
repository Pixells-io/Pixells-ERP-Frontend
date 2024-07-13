import React, { useState, useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";

import { NavLink } from "react-router-dom";

import {
  addCircleOutline,
  chevronBack,
  chevronForward,
  informationCircle,
} from "ionicons/icons";
import NewInductionModal from "./Inductions/components/NewInductionModal";
import { useLoaderData, redirect, useNavigation } from "react-router-dom";
import { saveNewInduction } from "./utils";
import { pusherClient } from "@/lib/pusher";
import { getInductions } from "@/lib/actions";

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

function MainOrgDev() {
  const navigation = useNavigation();

  const { positions, areas, inductions } = useLoaderData();

  const [modalCreateInduccion, setModalCreateInduccion] = useState(false);

  const [initialData, setInitialData] = useState(inductions.data);
  const [inductionsPusher, setInductionsListPusher] = useState(initialData);

  async function getInductionsFunction() {
    let newData = await getInductions();

    setInductionsListPusher(newData.data);
  }

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalCreateInduccion(false);
    }

    pusherClient.subscribe("private-get-inductions");

    pusherClient.bind("fill-inductions-list", ({ message }) => {
      getInductionsFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-inductions");
    };
  }, [navigation.state]);

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
              ORGANIZATION DEVELOPMENT
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
            Inductions
          </p>
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="mt-5 text-primarioBotones"
            onClick={() => setModalCreateInduccion(true)}
          ></IonIcon>
        </div>
        <NewInductionModal
          modal={modalCreateInduccion}
          setModal={setModalCreateInduccion}
          positions={positions.data}
          areas={areas.data}
        />
        <div className="rounded-lg bg-blancoBg pt-2">
          <div className="flex flex-col justify-center">
            <div className="grid w-full grid-cols-8 px-4 py-2 text-center">
              <div className="col-span-2 flex items-center pl-4 text-left">
                <p className="text-sm font-semibold text-grisText">NOMBRE</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-semibold text-grisText">TIPO</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-semibold text-grisText">AREAS</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-semibold text-grisText">
                  RESPONSABLE
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-semibold text-grisText">ARCHIVOS</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-semibold text-grisText">EXAMEN</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-semibold text-grisText">HISTORIAL</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-center">
              {inductionsPusher?.map((row, i) => (
                <div key={i} className="grid w-full grid-cols-8 border-t py-4">
                  <div className="col-span-2 flex items-center pl-4 text-left">
                    <p className="text-xs text-grisHeading">{row.name}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs text-grisHeading">{row.type}</p>
                  </div>
                  <div className="flex items-center pl-4">
                    <p className="text-xs text-grisHeading">{row.area}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs text-grisHeading">
                      {row.responsable}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p
                      className={
                        row.archive
                          ? "w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]"
                          : "w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]"
                      }
                    >
                      Archivos
                    </p>
                  </div>
                  {row.examen === false ? (
                    <div className="flex items-center justify-center">
                      <NavLink
                        to={`/org-development/induction/create/${row?.id}`}
                      >
                        <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                          Exámen
                        </p>
                      </NavLink>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <NavLink to={`/org-development/exam/${row?.examen_id}`}>
                        <p className="w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]">
                          Exámen
                        </p>
                      </NavLink>
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <NavLink to={`/org-development/induction/${row?.id}`}>
                      <IonIcon
                        icon={informationCircle}
                        className="h-6 w-6 text-grisText"
                      ></IonIcon>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainOrgDev;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewInduction(data);

  return redirect("/org-development/induction");
}
