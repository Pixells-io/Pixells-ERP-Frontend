import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import FormLocation from "../Components/FormLocation";
import { useLoaderData,redirect } from "react-router-dom";
import { getsubLocation } from "../utils";
import { createPusherClient } from "@/lib/pusher";

const CreateLocation = () => {
  const { data } = useLoaderData();
  const [configInfo, setConfigInfo] = useState(data);

  const pusherClient = createPusherClient();

  async function getSubLocationFunction() {
    let newData = await getsubLocation();
    setConfigInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-sub-ubications");

    pusherClient.bind("fill-sub-ubications", ({ message }) => {
      getSubLocationFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-sub-ubications");
    };
  }, []);

  
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nueva Localización
          </p>
        </div>
        {/*content */}

        <FormLocation/>
      </div>
    </div>
  );
};

export default CreateLocation;
