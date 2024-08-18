import React, { useState, useEffect } from "react";
import {
  NavLink,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";

import { createPusherClient } from "@/lib/pusher";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, informationCircle } from "ionicons/icons";

import NewEvaluationModal from "../Inductions/components/NewEvaluationModal";
import { storeNewEvaluation } from "../utils";
import NavigationHeader from "@/components/navigation-header";

function MainEvaluations() {
  const navigation = useNavigation();

  const [modalCreateTrainings, setModalCreateTrainings] = useState(false);

  const { data } = useLoaderData();

  // const [initialData, setInitialData] = useState(trainings.data);
  // const [capacitacionPusher, setCapacitacionListPusher] = useState(initialData);

  // async function getCapacitacionsDataFunction() {
  //   let newData = await getTrainings();

  //   setCapacitacionListPusher(newData.data);
  // }

  // const pusherClient = createPusherClient();

  // useEffect(() => {
  //   if (navigation.state === "idle") {
  //     setModalCreateTrainings(false);
  //   }

  //   pusherClient.subscribe("private-get-trainings");

  //   pusherClient.bind("fill-trainings-list", ({ message }) => {
  //     getCapacitacionsDataFunction();
  //   });

  //   return () => {
  //     pusherClient.unsubscribe("private-get-trainings");
  //   };
  // }, [navigation.state]);

  return (
    <div className="flex w-full">
      <NewEvaluationModal
        modal={modalCreateTrainings}
        setModal={setModalCreateTrainings}
      />
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

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

        <div className="h-full overflow-scroll rounded-lg bg-blancoBg pt-2">
          <div className="flex flex-col justify-center">
            <div className="grid w-full grid-cols-5 px-4 py-2 text-center">
              <div className="col-span-2 pl-4 text-left">
                <p className="text-sm font-semibold text-grisText">NOMBRE</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">TIPO</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">
                  EVALUACION
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-grisText">HISTORIAL</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-center">
              {data?.map((row, i) => (
                <div key={i} className="grid w-full grid-cols-5 border-t py-4">
                  <div className="col-span-2 pl-4 text-left">
                    <p className="text-xs text-grisHeading">{row.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row.type}</p>
                  </div>

                  {/* <div className="flex items-center justify-center">
                    <NavLink
                      to={`/org-development/evaluation/create/${row?.id}`}
                    >
                      <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                        Exámen
                      </p>
                    </NavLink>
                  </div> */}
                  {row?.exam === false ? (
                    <div className="flex items-center justify-center">
                      <NavLink
                        to={`/org-development/evaluation/create/${row?.id}`}
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
                    <NavLink to={`/org-development/evaluation/${data?.id}`}>
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

export default MainEvaluations;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await storeNewEvaluation(data);

  return redirect("/org-development/evaluation");
}
