import React from "react";
import {
  Outlet,
} from "react-router-dom";

import MenuSales from "./components/MenuSales";
import TopMenu from "../Masters/Menus/TopMenu";

const SideLayoutSale = () => {
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        <TopMenu main={"/sales"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>
          <MenuSales />
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default SideLayoutSale;


