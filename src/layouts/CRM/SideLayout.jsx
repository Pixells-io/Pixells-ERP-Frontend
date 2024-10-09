import React, { useEffect, useState } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  redirect,
} from "react-router-dom";

import TopMenuCRM from "./components/TopMenuCRM";
import MenuCRM from "./components/MenuCRM";

import FormNewLead from "./components/Form/FormNewLead";
import {
  destroyLead,
  functionCreateNewSaleProcess,
  functionDestroyNewSaleProcess,
  functionEditSaleProcess,
  functionSaveNewLead,
} from "@/pages/CRM/utils";

function SideLayout() {
  const { process, permissions } = useLoaderData();
  const navigation = useNavigation();
  const [create, setCreate] = useState(true);
  //Info State
  const [processInfo, setProcessInfo] = useState(process.data);

  useEffect(() => {
    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreate(false);
    }
  });

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

          {create == true ? (
            <div className="flex flex-col gap-4">
              <FormNewLead navigation={navigation} process={processInfo} />
            </div>
          ) : null}

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
  const action = data.get("action");

  switch (action) {
    case "create-sale-process":
      await functionCreateNewSaleProcess(data);
      return redirect("/crm");
      break;

    case "edit-sale-process":
      await functionEditSaleProcess(data);
      return redirect("/crm");
      break;

    case "delete-sale-process":
      await functionDestroyNewSaleProcess(data);
      return redirect("/crm");
      break;

    case "save-lead":
      await functionSaveNewLead(data);
      return redirect("/crm");
      break;

    case "delete-lead":
      await destroyLead(data);
      return redirect("/crm");
      break;

    default:
      break;
  }
}
