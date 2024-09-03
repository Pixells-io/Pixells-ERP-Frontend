import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { saveNewConfigure } from "../utils";
import FormGroup from "../Components/FormGroup";
import { useActionData } from "react-router-dom";

// Variable global para el grupo de IDs
let group = [];

const WLSlots = () => {
  const [localGroup, setLocalGroup] = useState([]);
  const actionData = useActionData();

  useEffect(() => {
    if (actionData && actionData.data) {
      const newGroup = actionData.data.map(item => item.id);
      group = newGroup; 
      setLocalGroup(newGroup); 
    }
  }, [actionData]);

  useEffect(() => {
    setLocalGroup(group);
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
              />
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
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
            Configuración Subniveles
          </p>
        </div>
        {/*content */}
        <div className="overflow-auto">
          <FormGroup ids={localGroup} />
        </div>
      </div>
    </div>
  );
};

export default WLSlots;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveNewConfigure(formData);
  if (response && response.data) {
    group = response.data.map(item => item.id); 
  }
  return response;
}
