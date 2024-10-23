import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  person,
  bagCheck,
  ticket,
  clipboard,
  addCircle,
  arrowRedoCircle,
  documentText,
  appsSharp,
} from "ionicons/icons";

const MENU_ITEMS = [
  {
    path: "/sales",
    name: "Clientes",
    subname: "General",
    icon: person,
    subRoutes: ["/sales/customer/"],
  },
  {
    path: "/sales/invoices",
    name: "Facturas",
    subname: "de Venta",
    icon: bagCheck,
    subRoutes: ["/sales/invoices/"],
  },

  {
    path: "/sales/tickets",
    name: "Ventas",
    subname: "Ticket/Remisión",
    icon: addCircle,
    subRoutes: ["/sales/tickets/"],
  },
  {
    path: "/sales/orders",
    name: "Pedidos",
    subname: "de Clientes",
    icon: arrowRedoCircle,
    subRoutes: ["/sales/orders/"],
  },
  {
    path: "/sales/quotes",
    name: "Cotizaciones",
    subname: "General",
    icon: clipboard,
    subRoutes: ["/sales/quotes/"],
  },
  {
    path: "/sales/progress",
    name: "Seguimiento ",
    subname: "De Servicios",
    icon: appsSharp,
    subRoutes: ["/sales/progress"],
  },
  {
    path: "/sales/agreements",
    name: "Contratos",
    subname: "De Servicios",
    icon: documentText,
    subRoutes: ["/sales/agreements"],
  },
];

const MenuSales = () => {
  const location = useLocation();

  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.subRoutes.some((route) => location.pathname.startsWith(route)))
      return true;
    return false;
  };

  return (
    <div className="flex w-full flex-col gap-4 pt-6">
      {MENU_ITEMS?.map((item, i) => (
        <NavLink
          key={i}
          to={`${item.path}`}
          className={
            isActive(item)
              ? "w-[219px] rounded-[6px] bg-[#E8E8E8] px-4 text-primario"
              : "w-full hover:w-[219px] hover:h-[43px] px-4 text-[#696974] hover:rounded-[6px] hover:bg-[#EAEAEA]"
          }
        >
          <div className="flex items-center gap-6">
            <IonIcon icon={item.icon} size="large"></IonIcon>
            <div>
              <p className="text-[16px] font-medium">{item.name}</p>
              <p className="text-[10px] font-medium text-[#44444F]">
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
