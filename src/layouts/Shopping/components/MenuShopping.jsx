import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  bagCheck,
  cube,
} from "ionicons/icons";

const MENU_ITEMS = [
  { 
    path: "/shopping", 
    name: "Proveedores", 
    subname: "General", 
    icon: bagCheck,
    subRoutes: ["/shopping/supplier/create"]
  },
  { 
    path: "/shopping/request-orders", 
    name: "Pedidos", 
    subname: "General", 
    icon: cube,
    subRoutes: [
      "/shopping/request-orders/create",
      "/shopping/document/pedido"
    ]
  },
  { 
    path: "/shopping/purchase", 
    name: "Ordenes", 
    subname: "De Compra", 
    icon: cube,
    subRoutes: ["/shopping/purchase/create",
      "/shopping/document/orden"
    ]
  },
  { 
    path: "/shopping/quotes-orders", 
    name: "Cotizaciones", 
    subname: "De Compra", 
    icon: cube,
    subRoutes: ["/shopping/quotes-orders/create",
      "/shopping/document/cotizacion"
    ]
  },
  
];

const MenuShopping = () => {
  const location = useLocation();

  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.subRoutes.some(route => location.pathname.startsWith(route))) return true;
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

export default MenuShopping;