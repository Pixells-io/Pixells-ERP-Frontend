import React from "react";
import {
  Outlet,
} from "react-router-dom";

import MenuSales from "./components/MenuSales";
import TopMenu from "../Masters/Menus/TopMenu";


 /*Style to options */
 function WrappedSidebar({ children }) {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-[280px] shrink-0 flex-col rounded-tl-xl border-r border-[#D7D7D7] bg-[#FBFBFB] p-4">
        {children}
      </div>
      <Outlet />
    </div>
  );
}
const SideLayoutSale = () => {
  return (
    <WrappedSidebar>
        {/* top block */}
        <div className="px-4">
        <TopMenu main={"/sales"} />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-2 px-4 pt-16">
      <p className="font-poppins text-[18px] font-semibold text-[#44444F]">
          Menu
        </p>
      </div>
          <MenuSales />
      </WrappedSidebar>
  );
};

export default SideLayoutSale;


