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
import FormNewSale from "./components/Form/FormNewSale";

import { saveImportClients, saveNewLead } from "./utils";

function SideLayout() {
  const { services, customers } = useLoaderData();
  const navigation = useNavigation();
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-4 py-4">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <FormNewLead navigation={navigation} services={services} />
            {/* <FormNewClient /> */}
            <FormNewSale navigation={navigation} clients={customers} />
          </div>

          <div className="my-4 border-b border-gris2"></div>

          {/* menu bottom */}
          <div className="">
            <MenuCRM />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayout;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("register_type_function")) {
    case "1":
      console.log(data, "sopas");
      await saveNewLead(data);
      break;
    case "2":
      console.log(data, "sopitas");
      await saveImportClients(data);
      break;
  }

  return redirect("/crm");
}
