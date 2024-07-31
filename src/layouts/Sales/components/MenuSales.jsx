import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  bagCheck,cube,fileTray,arrowForwardCircle,clipboard,statsChart
} from "ionicons/icons";

const MENU_ITEMS = [
  { path: "/sales", name: "Facturas", subname: "de Venta", icon: bagCheck },
  { path: "/sales/tickets", name: "Ticket/Remisión", subname: "De Venta", icon: cube },
  { path: "/sales/quotes", name: "Cotizaciones", subname: "General", icon: cube },
 
];

const MenuSales = () => {
  const location = useLocation();
  return (
    <div className="flex w-full flex-col gap-4">
        {MENU_ITEMS?.map((item, i) => (
        <NavLink
          key={i}
            to={`${item.path}`}
            className={
              item.path === "/sales"
                ? ({ isActive }) =>
                    isActive && location.pathname === "/sales"
                      ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                      : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
                : ({ isActive }) =>
                    isActive
              ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
              : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
          }
        >
          <div className="flex items-center gap-6">
              <IonIcon icon={item.icon} size="large"></IonIcon>
  
            <div>
              <p className="text-base font-medium">{item.name}</p>
              <p className="text-[10px] font-medium text-grisSubText">
                {item.subname}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuSales;
