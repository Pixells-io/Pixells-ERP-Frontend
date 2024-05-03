import React, { useState } from "react";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Form, useLoaderData } from "react-router-dom";
import CreateContractBox from "./components/CreateContractBox";
import { saveNewContract } from "./utils";

function NewContract() {
  const { agreement, personsContracts } = useLoaderData();

  let data = agreement.data;

  const userArray = [];

  userArratFill(personsContracts, userArray);

  function userArratFill(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.name,
        value: element.id,
      });
    });
  }

  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">agreements</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              NEW CONTRACT
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">6 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">36 templates</div>
          </div>
        </div>
        <CreateContractBox data={data} users={userArray} />
      </div>
    </div>
  );
}

export default NewContract;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewContract(data);

  return redirect("/crm/agreements");
}
