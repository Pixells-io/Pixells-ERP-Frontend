import React, { useState, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import CapacutationCard from "./components/CapacutationCard";

import { useLoaderData } from "react-router-dom";
import { getMyTrainings } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";
import NavigationHeader from "@/components/navigation-header";

function MainMyCapacitations() {
  const { data } = useLoaderData();

  const [initialData, setInitialData] = useState(data);
  const [capacitacionPusher, setMyCapacitacionListPusher] =
    useState(initialData);

  async function getMyCapacitacionDataFunction() {
    let newData = await getMyTrainings();

    setMyCapacitacionListPusher(newData.data);
  }

  const pusherClient = createPusherClient();

  useEffect(() => {
    pusherClient.subscribe("private-get-trainings");

    pusherClient.bind("fill-trainings-list", ({ message }) => {
      getMyCapacitacionDataFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-trainings");
    };
  });

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
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]"></div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Mis Formaciones
          </p>
        </div>

        <div className="h-full overflow-auto rounded-lg bg-blancoBg p-2">
          <div className="flex flex-wrap justify-center">
            {capacitacionPusher?.map((card, i) => (
              <CapacutationCard card={card} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMyCapacitations;
