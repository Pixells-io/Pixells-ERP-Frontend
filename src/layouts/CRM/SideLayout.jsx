import React from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  redirect,
} from "react-router-dom";

import TopMenuCRM from "./components/TopMenuCRM";
import MenuCRM from "./components/MenuCRM";

import FormNewLead from "./components/Form/FormNewLead";
import { saveNewLead } from "./utils";

function SideLayout() {
  const services = useLoaderData();
  const navigation = useNavigation();
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4 w-[280px] shrink-0">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4 ">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-8">
          <p className="font-semibold text-lg font-poppins text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <FormNewLead navigation={navigation} services={services} />
          </div>

          <div className="border-b border-gris2 my-4"></div>

          {/* menu bottom */}
          <MenuCRM />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayout;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewLead(data);
  console.log(validation);

  // if (validation) {
  //     return validation;
  // }

  return redirect("/crm");
}
