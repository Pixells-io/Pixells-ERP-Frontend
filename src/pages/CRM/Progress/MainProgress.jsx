import React, { useState } from "react";
import {
  useLoaderData,
  useRouteLoaderData,
  useActionData,
  useNavigation,
  redirect,
  Outlet,
  NavLink,
} from "react-router-dom";

import { MoreVertical } from "lucide-react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, globeOutline } from "ionicons/icons";

import FormService from "./components/FormService";
import { saveService } from "./util";

const SERVICE = [
  { name: "Immigration", icon: "Globe", colorIcon: "#00A259" },
  { name: "Entity", icon: "Building2", colorIcon: "#D7586B" },
  { name: "Bookkeeping", icon: "Newspaper", colorIcon: "#FAA364" },
  { name: "Audits", icon: "Files", colorIcon: "#A058CE" },
];

const FILTERS = [
  { name: "Date" },
  { name: "Customer" },
  { name: "Activity" },
  { name: "User" },
];

function Main() {
  const services = useLoaderData();
  const [selectedServices, setSelectedServices] = useState();
  // console.log(services.data);
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
          <div className="font-roboto text-sm text-grisText">organization</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-xl text-[#44444F]">
              PROGRESS DASHBOARD
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
            <div className="text-xs">
              {" "}
              {services.data?.length}{" "}
              {services.data?.length > 1 ? "services" : "service"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">0 clients</div>
          </div>
        </div>

        {/* services */}
        <div className="flex gap-4">
          <div className="flex gap-4 overflow-scroll">
            {services.data.map((service, i) => (
              <NavLink
                key={i}
                to={`/crm/progress/${service.id}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center space-evenly gap-4 bg-grisHeading rounded-full p-2 shrink-0 font-poppins font-bold`
                    : `flex items-center space-evenly gap-4 bg-[#8F8F8F] rounded-full p-2 shrink-0 font-poppins font-normal`
                }
              >
                <div className="flex ml-2">
                  <IonIcon
                    icon={globeOutline}
                    className="w-6 h-6"
                    style={{ color: `${service.color}` }}
                  ></IonIcon>
                </div>
                <div className="flex items-center gap-4">
                  <p style={{ color: `${service.color}` }}>&bull;</p>
                  <p className="text-white uppercase text-sm">{service.name}</p>
                </div>
                <div className="text-white">
                  <MoreVertical size={16} />
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex ">
            <div className="text-4xl text-primario">+</div>
            {/* <FormService submitting={navigation.state === "submitting"} /> */}
          </div>
        </div>

        <Outlet context={{ services }} />
      </div>
    </div>
  );
}

export default Main;

export async function Action({ request }) {
  const data = await request.formData();
  console.log(data);

  const validation = await saveService(data);
  console.log(validation);

  if (validation) {
    return validation;
  }
  return redirect("/crm/progress");
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
