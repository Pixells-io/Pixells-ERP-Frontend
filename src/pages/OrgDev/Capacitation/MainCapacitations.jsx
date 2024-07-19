import React, { useState, useEffect } from "react";
import {
  NavLink,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  chevronBack,
  chevronForward,
  informationCircle,
} from "ionicons/icons";

import NewTrainingModal from "../Inductions/components/NewTrainingModal";
import {
  removeDocumentExam,
  saveNewTraining,
  storeDocumentExam,
} from "../utils";
import { getTrainings } from "@/lib/actions";
import { pusherClient } from "@/lib/pusher";
import DocumentsCapacitation from "./components/DocumentsCapacitation";

function MainCapacitations() {
  const navigation = useNavigation();

  const [modalCreateTrainings, setModalCreateTrainings] = useState(false);

  const { areas, positions, users, trainings } = useLoaderData();

  const [initialData, setInitialData] = useState(trainings.data);
  const [capacitacionPusher, setCapacitacionListPusher] = useState(initialData);

  async function getCapacitacionsDataFunction() {
    let newData = await getTrainings();

    setCapacitacionListPusher(newData.data);
  }

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalCreateTrainings(false);
    }

    pusherClient.subscribe("private-get-trainings");

    pusherClient.bind("fill-trainings-list", ({ message }) => {
      getCapacitacionsDataFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-trainings");
    };
  }, [navigation.state]);

  console.log(capacitacionPusher);

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
            Trainings
          </p>
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="mt-5 text-primarioBotones"
            onClick={() => setModalCreateTrainings(true)}
          ></IonIcon>
        </div>

        <NewTrainingModal
          modal={modalCreateTrainings}
          setModal={setModalCreateTrainings}
          areas={areas.data}
          positions={positions.data}
          users={users.data}
        />

        <div className="rounded-lg bg-blancoBg pt-2">
          <div className="flex flex-col justify-center overflow-auto">
            <div className="grid w-full grid-cols-11 px-4 py-2 text-center">
              <div className="col-span-2 pl-4 text-left">
                <p className="text-sm font-semibold text-grisText">NOMBRE</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">TIPO</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">FORMA</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">LUGAR</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">CAPACITOR</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">
                  FECHA TEN.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">
                  FECHA REAL
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">ARCHIVOS</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">EXÁMEN</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">HISTORIAL</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-center">
              {capacitacionPusher?.map((row, i) => (
                <div key={i} className="grid w-full grid-cols-11 border-t py-4">
                  <div className="col-span-2 pl-4 text-left">
                    <p className="text-xs text-grisHeading">{row.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row.class_type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">
                      {row.capacitador}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row.real_date}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <DocumentsCapacitation
                      rel_id={row.id}
                      documents={row.archives}
                    />
                  </div>
                  {row.examen === false ? (
                    <div className="flex items-center justify-center">
                      <NavLink
                        to={`/org-development/capacitation/create/${row?.id}`}
                      >
                        <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                          Exámen
                        </p>
                      </NavLink>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <p className="w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]">
                        Exámen
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <NavLink to={`/org-development/capacitation/${row?.id}`}>
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

export default MainCapacitations;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "1":
      await saveNewTraining(data);
      return redirect("/org-development/capacitation");

    case "2":
      await storeDocumentExam(data);
      return redirect("/org-development/capacitation");

    case "3":
      await removeDocumentExam(data);
      return redirect("/org-development/capacitation");

    default:
      return redirect("/org-development/capacitation");
  }
}
