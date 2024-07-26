import React from "react";
import {
  Outlet,
} from "react-router-dom";

import TopMenuInventory from "./components/TopMenuSale";
import MenuInventory from "./components/MenuSales";
import MenuSales from "./components/MenuSales";
import TopMenuSale from "./components/TopMenuSale";

const SideLayoutSale = () => {
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-4 py-4">
        <TopMenuSale/>
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4"></div>

          {/* menu bottom */}
          <div className=""></div>
          <MenuSales />
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default SideLayoutSale;

