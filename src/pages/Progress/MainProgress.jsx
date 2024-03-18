import React from "react";
import {
  useLoaderData,
  useRouteLoaderData,
  useActionData,
  useNavigation,
  redirect,
  Outlet,
  NavLink,
} from "react-router-dom";

import {
  ChevronLeftCircle,
  ChevronRightCircle,
  MoreVertical,
} from "lucide-react";
import IconLucide from "@/components/IconLucide";

import FormService from "./components/FormService";
import { saveService } from "./util";

const service = [
  { name: "Immigration", icon: "Globe", colorIcon: "#00A259" },
  { name: "Entity", icon: "Building2", colorIcon: "#D7586B" },
  { name: "Bookkeeping", icon: "Newspaper", colorIcon: "#FAA364" },
  { name: "Audits", icon: "Files", colorIcon: "#A058CE" },
];

const filters = [
  { name: "Date" },
  { name: "Customer" },
  { name: "Activity" },
  { name: "User" },
];

function Main() {
  const services = useLoaderData();
  // const data = useActionData();
  const navigation = useNavigation();
  // console.log(services);
  return (
    <div className="flex w-full">
      <div className="w-full bg-gris p-4 ml-4 rounded-lg space-y-4 overflow-x-auto">
        {/* navigation inside */}
        <div className="flex">
          <div className="flex">
            <ChevronLeftCircle />
            <ChevronRightCircle />
          </div>
          <div>crm &gt; progress dashboard</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-2xl">
              PROGRESS DASHBOARD
            </h2>
          </div>
          <div className="flex gap-4">
            <div>4 service</div>
            <div>&bull;</div>
            <div>9 costumers</div>
          </div>
        </div>

        {/* services */}
        <div className="flex gap-4">
          <div className="flex gap-4">
            {service.map(({ icon, colorIcon, name }, i) => (
              <NavLink key={i} to={name.toLowerCase()}>
                <div
                  className={`text-[${colorIcon}] flex items-center space-evenly gap-4 bg-[#8F8F8F] rounded-full p-2`}
                >
                  <div className="ml-2">
                    <IconLucide name={icon} size={22} color={colorIcon} />
                  </div>
                  <div className="flex items-center gap-4">
                    <p
                      className={`text-[${colorIcon}]`}
                      style={{ color: `${colorIcon}` }}
                    >
                      &bull;
                    </p>
                    <p className="text-white uppercase text-sm font-bold">
                      {name}
                    </p>
                  </div>
                  <div className="text-white">
                    <MoreVertical size={16} />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex ">
            <FormService submitting={navigation.state === "submitting"} />
          </div>
        </div>

        {/* filters */}
        <div className="flex gap-4">
          {filters.map((item, i) => (
            <div
              key={i}
              className=" border-black border-[1px] rounded-full py-1 px-6"
            >
              <p className="text-[10px] text-grisHeading font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* stages */}
        <Outlet />
      </div>
    </div>
  );
}

export default Main;

export async function Action({ request }) {
  const data = await request.formData();
  // console.log(data);

  const validation = await saveService(data);
  // console.log(validation);

  // if (validation) {
  //     return validation;
  // }

  // return redirect("/crm/progress");
}
