import React, { useState, useEffect } from "react";
import {
  NavLink,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, informationCircle } from "ionicons/icons";

import {
  editRealDateCapacitation,
  removeDocumentExam,
  saveNewTraining,
  storeDocumentExam,
} from "../utils";
import { getTrainings } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";

import NewTrainingModal from "../Inductions/components/NewTrainingModal";
import DocumentsCapacitation from "./components/DocumentsCapacitation";
import NavigationHeader from "@/components/navigation-header";
import DatePickerDevOrg from "./components/DatePickerDevOrg";

import { format } from "date-fns";

function MainCapacitations() {
  const navigation = useNavigation();

  const [modalCreateTrainings, setModalCreateTrainings] = useState(false);

  const { areas, positions, users, trainings, permissions } = useLoaderData();

  //PERMISSIONS
  const [create, setCreate] = useState(true); //3

  //CHANGE PERMISSIONS
  useEffect(() => {
    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreate(false);
    }
  });

  const [initialData, setInitialData] = useState(trainings.data);
  const [capacitacionPusher, setCapacitacionListPusher] = useState(initialData);

  async function getCapacitacionsDataFunction() {
    let newData = await getTrainings();

    setCapacitacionListPusher(newData.data);
  }

  const pusherClient = createPusherClient();

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

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

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
            Capacitación
          </p>
          {create == true ? (
            <IonIcon
              icon={addCircleOutline}
              size="large"
              className="mt-5 text-primarioBotones"
              onClick={() => setModalCreateTrainings(true)}
            ></IonIcon>
          ) : (
            false
          )}
        </div>

        <NewTrainingModal
          modal={modalCreateTrainings}
          setModal={setModalCreateTrainings}
          areas={areas.data}
          positions={positions.data}
          users={users.data}
        />

        <div className="overflow-auto rounded-lg bg-blancoBg pt-2">
          <div className="flex flex-col justify-center overflow-auto">
            <div className="grid w-full grid-cols-11 px-4 py-2 text-center">
              <div className="col-span-2 pl-4 text-left">
                <p className="text-sm font-semibold text-grisText">NAME</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">TYPE</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">FORM</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">PLACE</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">FORMADOR</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">
                  FECHA TENTATIVA
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">REAL DATE</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">DOCS</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">TEST</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">HISTORY</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-center">
              {capacitacionPusher?.map((row, i) => (
                <div
                  key={i}
                  className="grid w-full grid-cols-11 items-center border-t py-4"
                >
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
                  <div className="">
                    {/* <p className="text-xs text-grisHeading">{row.real_date}</p> */}
                    <DatePickerDevOrg
                      name="real_date"
                      dataDate={row.real_date}
                      capacitation_id={row.id}
                    />
                  </div>
                  <div className="flex items-center justify-center pt-2">
                    <DocumentsCapacitation
                      rel_id={row.id}
                      documents={row.archives}
                    />
                  </div>
                  {row.examen === false ? (
                    <NavLink
                      to={`/org-development/capacitation/create/${row?.id}`}
                      className="flex items-center justify-center"
                    >
                      <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                        Exámen
                      </p>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`/org-development/exam/${row?.examen_id}`}
                      className="flex items-center justify-center"
                    >
                      <p className="w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]">
                        Exámen
                      </p>
                    </NavLink>
                  )}

                  <NavLink
                    to={`/org-development/capacitation/${row?.id}`}
                    className="flex items-center justify-center"
                  >
                    <IonIcon
                      icon={informationCircle}
                      className="h-6 w-6 text-grisText"
                    ></IonIcon>
                  </NavLink>
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

    case "4":
      await editRealDateCapacitation(data);
      return redirect("/org-development/capacitation");

    default:
      return redirect("/org-development/capacitation");
  }
}
