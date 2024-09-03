import React from "react";
import { IonIcon } from "@ionic/react";
import { saveSlots } from "../utils";
import { chevronBack, chevronForward } from "ionicons/icons";
import { redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormSlots from "../Components/FormSlots";

const WLConfig = () => {
  const {id} =useParams()

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
            Configuración Subnivel: {id}
          </p>
        </div>
        {/*content */}
        <div className="overflow-auto">
          <FormSlots variable={id} />
        </div>
      </div>
    </div>
  );
};

export default WLConfig;


export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveSlots(formData);
  return redirect("/inventory/warehouse-locations");
}
