import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  bagCheck,
  folderOpen,
  cube,
  fileTray,
  arrowForwardCircle,
  clipboard,
  statsChart,
  storefront,
} from "ionicons/icons";

const MENU_ITEMS = [
  {
    path: "/inventory",
    name: "Artículos",
    subname: "General",
    icon: bagCheck,
    subRoutes: ["/inventory/create"],
  },
  {
    path: "/inventory/general-services",
    name: "Servicios",
    subname: "General",
    icon: folderOpen,
    subRoutes: ["/inventory/general-services/"],
  },
  {
    path: "/inventory/general-warehouses",
    name: "Almacenes",
    subname: "Generales",
    icon: cube,
    subRoutes: ["/inventory/general-warehouses/"],
  },
  {
    path: "/inventory/warehouse-locations",
    name: "Ubicaciones",
    subname: "De Almacén",
    icon: fileTray,
    subRoutes: ["/inventory/warehouse-locations/"],
  },
  {
    path: "/inventory/merchandise-movements",
    name: "Movimientos",
    subname: "De Mercancías",
    icon: arrowForwardCircle,
    subRoutes: [
      "/inventory/merchandise-movements/entry/new",
      "/inventory/merchandise-movements/egress/new",
      "/inventory/merchandise-movements/entry/record/",
      "/inventory/merchandise-movements/egress/record/",
    ],
  },
  {
    path: "/inventory/traceability-reports",
    name: "Informes",
    subname: "De Trazabilidad",
    icon: clipboard,
    subRoutes: ["/inventory/traceability-reports/"],
  },
  {
    path: "/inventory/prices-lists",
    name: "Listas",
    subname: "De Precios",
    icon: clipboard,
    subRoutes: ["/inventory/prices-lists/"],
  },
  {
    path: "/inventory/stock-items",
    name: "Stock",
    subname: "De Articulos",
    icon: statsChart,
    subRoutes: ["/inventory/stock-items/"],
  },
  {
    path: "/inventory/branch-points-sale",
    name: "Sucursales",
    subname: "Punto de Venta",
    icon: storefront,
    subRoutes: ["/inventory/branch-points-sale"],
  },
];

const MenuInventory = () => {
  const location = useLocation();

  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (
      item.subRoutes &&
      item.subRoutes.some((route) => location.pathname.startsWith(route))
    )
      return true;
    return false;
  };

  return (
    <div className="flex flex-col gap-4">
      {MENU_ITEMS.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className={
            isActive(item)
              ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
              : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
          }
        >
          <div className="flex items-center gap-6">
            <IonIcon icon={item.icon} size="large" />
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

export default MenuInventory;
