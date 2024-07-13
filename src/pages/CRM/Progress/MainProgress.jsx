import React, { useState } from "react";
import { useLoaderData, redirect, Outlet, NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircleOutline,
  globeOutline,
} from "ionicons/icons";

import { removeSelectedService, setSelectedService } from "./util";
import ServiceSelectAdd from "./components/Forms/ServiceSelectAdd";
import FormDeleteSelectedService from "./components/Forms/FormDeleteSelectedService";

const FILTERS = [
  { name: "Date" },
  { name: "Customer" },
  { name: "Activity" },
  { name: "User" },
];

function Main() {
  const { selectedServices, services } = useLoaderData();
  const [modalRemove, setModalRemove] = useState(false);
  const [idSelected, setIdSelected] = useState(false);

  function removeSelectedClick(id) {
    setIdSelected(id);
    setModalRemove(true);
  }

  return (
    <div className="flex w-full overflow-auto">
      <FormDeleteSelectedService
        modal={modalRemove}
        setModal={setModalRemove}
        id={idSelected}
      />
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">organization</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              PROCESS DASHBOARD
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div className="text-xs">
              {services?.data?.length}{" "}
              {services?.data?.length > 1 ? "services" : "service"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">0 clients</div>
          </div>
        </div>

        {/* services */}
        <div className="flex items-center gap-4">
          <div className="flex gap-4 overflow-scroll">
            {selectedServices?.data?.map((service, i) => (
              <NavLink
                key={i}
                to={`/crm/progress/${service?.id}`}
                className={({ isActive }) =>
                  isActive
                    ? `space-evenly flex shrink-0 items-center gap-4 rounded-full bg-grisHeading p-2 font-poppins font-bold`
                    : `space-evenly flex shrink-0 items-center gap-4 rounded-full bg-[#8F8F8F] p-2 font-poppins font-normal`
                }
              >
                <div className="ml-2 flex">
                  <IonIcon
                    icon={globeOutline}
                    className="h-6 w-6"
                    style={{ color: `${service?.color}` }}
                  ></IonIcon>
                </div>
                <div className="flex items-center gap-4">
                  <p style={{ color: `${service?.color}` }}>&bull;</p>
                  <p className="text-sm uppercase text-white">
                    {service?.name}
                  </p>
                </div>
                <div className="mt-1 text-white">
                  <IonIcon
                    icon={closeCircleOutline}
                    className="text-lg"
                    onClick={() => removeSelectedClick(service?.id)}
                  ></IonIcon>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="">
            <ServiceSelectAdd services={services?.data} />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Main;

export async function Action({ params, request }) {
  const paramId = params.id;
  const data = await request.formData();

  switch (data.get("type_function")) {
    case "1":
      //Add Selected Service
      await setSelectedService(data);
      break;
    case "2":
      //Remove selected Service
      await removeSelectedService(paramId, data);
      break;
  }

  return 1;
}

// export async function multiFormAction({ params, request }) {
//   console.log(params);
//   const paramId = params.id;
//   const formData = await request.formData();
//   const action = formData.get("action");

//   switch (action) {
//     case "service":
//       return await saveService(formData);

//     case "step":
//       return await saveNewServiceStep(paramId, formData);

//     default:
//       break;
//   }
// }
