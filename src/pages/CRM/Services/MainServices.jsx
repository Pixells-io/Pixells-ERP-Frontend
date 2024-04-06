import React from "react";

import { NavLink, useLocation, Outlet } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  ellipsisVertical,
  globeOutline,
} from "ionicons/icons";
import ServicesBlocks from "./components/ServicesBlocks";
import DataTable from "@/components/DataTable";
import NewServiceForm from "./components/Form/NewServiceForm";

function MainServices() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
            <div className="flex gap-2  text-gris2">
                <div className="w-12 h-12">
                    <IonIcon icon={chevronBack} size="large" className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                </div>
                <div className="w-12 h-12">
                    <IonIcon icon={chevronForward} size="large"  className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                </div>
            </div>
            <div className="font-roboto text-sm text-grisText">services</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              SERVICES
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">4 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">9 costumers</div>
          </div>
        </div>

        <ServicesBlocks />

        <NewServiceForm />

        <DataTable />

        <Outlet />
      </div>
    </div>
  );
}

export default MainServices;
