import React, { useState } from "react";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import CreateContractBox from "./components/CreateContractBox";
import { saveNewContract } from "./utils";
import NavigationHeader from "@/components/navigation-header";

function NewContract() {
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              CREAR CONTRATO
            </h2>
          </div>
        </div>
        <CreateContractBox data={data} />
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
