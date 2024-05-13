import React from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import TopMenuCRM from "../CRM/components/TopMenuCRM";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IonIcon } from "@ionic/react";
import { book, copy, pieChart, ribbon } from "ionicons/icons";

const MENU_ITEMS = [
  {
    path: "/org-development/induction",
    subpath: [
      { path: "/org-development/induction", name: "Creador" },
      {
        path: "/org-development/inductions/my-inductions",
        name: "Mis Inducciones",
      },
    ],
    name: "Inducción",
    subname: "General",
    icon: copy,
  },
  {
    path: "/org-development/capacitacion",
    subpath: [
      { path: "/org-development/capacitacion", name: "Creador" },
      {
        path: "/org-development/capacitacon/my-capacitacion",
        name: "Mis Capacitaciones",
      },
    ],
    name: "Capacitación",
    subname: "General",
    icon: book,
  },
  {
    path: "/org-development/evaluacion",
    subpath: [
      { path: "/org-development/evaluacion", name: "Creador" },
      {
        path: "/org-development/evaluacion/edi",
        name: "EDI por Objetivos",
      },
      {
        path: "/org-development/evaluacion/360",
        name: "Evaluación 360°",
      },
    ],
    name: "Evaluación",
    subname: "Del Desempeño",
    icon: pieChart,
  },
  {
    path: "/org-development/compensaciones",
    subpath: [
      { path: "/org-development/compensaciones", name: "Creador" },
      {
        path: "/org-development/compensaciones/my-compensaciones",
        name: "Mis Compensaciónes",
      },
    ],
    name: "Compensaciones",
    subname: "General",
    icon: ribbon,
  },
];

function SideLayoutDevOrg() {
  const location = useLocation();
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4 w-[280px] shrink-0">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-4 py-4 ">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-4 overflow-auto">
          <p className="font-semibold text-lg font-poppins text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-1 w-full overflow-scroll">
            {MENU_ITEMS?.map((item, i) => (
              <Accordion type="single" collapsible className="px-2" key={i}>
                <AccordionItem value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="text-gris2 py-2">
                    <div className="flex items-center gap-6 w-full">
                      {item.path === location.pathname ? (
                        <div className="text-primario bg-[#E8E8E8] gap-6 flex items-center rounded-lg w-full px-4 py-1">
                          <IonIcon icon={item.icon} size="large"></IonIcon>
                          <div>
                            <p className="font-medium text-base ">
                              {item.name}
                            </p>
                            <p className="text-left font-medium text-[10px]">
                              {item.subname}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg gap-6 flex items-center rounded-lg w-full px-4 py-1">
                          <IonIcon icon={item.icon} size="large"></IonIcon>
                          <div>
                            <p className="font-medium text-base ">
                              {item.name}
                            </p>
                            <p className="text-left font-medium text-[10px] text-grisSubText">
                              {item.subname}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-blancoBox py-0 rounded-lg">
                    {item.subpath.map((link, i) => (
                      <NavLink
                        key={i}
                        to={`${link.path}`}
                        className={
                          link.path === "/org-development"
                            ? ({ isActive }) =>
                                isActive &&
                                location.pathname === "/org-development"
                                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
                            : ({ isActive }) =>
                                isActive
                                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
                        }
                      >
                        <div className="flex flex-col gap-4">
                          {location.pathname === link.path ? (
                            <div className="flex pl-16 items-center gap-1">
                              <span className="">&bull;</span>
                              <p className="font-medium text-sm ">
                                {link.name}
                              </p>
                            </div>
                          ) : (
                            <div className="pl-[72px] hover:pl-[56px]">
                              <p className="font-medium text-sm hover:bg-blancoBg hover:w-fit hover:px-4 hover:rounded-sm">
                                {link.name}
                              </p>
                            </div>
                          )}
                        </div>
                      </NavLink>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutDevOrg;
