import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { person, bagCheck, ticket, clipboard } from "ionicons/icons";

const MENU_ITEMS = [
  { path: "/sales", 
    name: "Clientes", 
    subname: "General", 
    icon: person,
    subRoutes: [
      "/sales/customer/",
    ] },
  {
    path: "/sales/invoices",
    name: "Facturas",
    subname: "de Venta",
    icon: bagCheck,
    subRoutes: [
      "/sales/invoices/",
    ] 
  },

  {
    path: "/sales/tickets",
    name: "Ventas",
    subname: "Ticket/Remisión",
    icon: ticket,
    subRoutes: [
      "/sales/tickets/",
    ] 
  },
  {
    path: "/sales/orders",
    name: "Pedidos",
    subname: "de Clientes",
    icon: ticket,
    subRoutes: [
      "/sales/orders/",
    ] 
  },
  {
    path: "/sales/quotes",
    name: "Cotizaciones",
    subname: "General",
    icon: clipboard,
    subRoutes: [
      "/sales/quotes/",
    ]
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
    <div className="flex w-full flex-col gap-4">
      {MENU_ITEMS?.map((item, i) => (
        <NavLink
          key={i}
          to={`${item.path}`}
          className={
            isActive(item)
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
