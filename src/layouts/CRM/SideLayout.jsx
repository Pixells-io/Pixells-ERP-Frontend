import React from "react";
import {
  Outlet,
  useRouteLoaderData,
  useLoaderData,
  useNavigation,
  redirect,
} from "react-router-dom";

import TopMenuCRM from "./components/TopMenuCRM";
import MenuCRM from "./components/MenuCRM";

function SideLayout() {
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4 w-[300px]">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-8">
          <p className="font-semibold text-lg">Menu</p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            {/* <FormNewLead
                            csrf={csrf}
                            navigation={navigation}
                            services={services}
                        /> */}
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
