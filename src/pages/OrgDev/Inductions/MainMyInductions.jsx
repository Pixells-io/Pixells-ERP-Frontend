import React, { useState, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

import InductionsCard from "./components/InductionsCard";

import { useLoaderData } from "react-router-dom";
import { getMyInductions } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";
import NavigationHeader from "@/components/navigation-header";

function MainMyInductions() {
  const { data } = useLoaderData();

  const [initialData, setInitialData] = useState(data);
  const [myInductionsPusher, setMyInductionsListPusher] = useState(initialData);

  async function getMyInductionsFunction() {
    let newData = await getMyInductions();

    setMyInductionsListPusher(newData.data);
  }

  const pusherClient = createPusherClient();

  useEffect(() => {
    pusherClient.subscribe("private-get-inductions");

    pusherClient.bind("fill-inductions-list", ({ message }) => {
      getMyInductionsFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-inductions");
    };
  });

  console.log(data);

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
            Mis inducciones
          </p>
        </div>

        <div className="h-full overflow-auto rounded-lg bg-blancoBg p-2">
          <div className="flex flex-wrap">
            {myInductionsPusher?.map((card, i) => (
              <InductionsCard card={card} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMyInductions;
