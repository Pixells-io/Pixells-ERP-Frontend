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
      { path: "/org-development/induction", name: "Creator" },
      {
        path: "/org-development/induction/my-inductions",
        name: "My inductions",
      },
    ],
    name: "Induction",
    subname: "General",
    icon: copy,
  },
  {
    path: "/org-development/capacitation",
    subpath: [
      { path: "/org-development/capacitation", name: "Creator" },
      {
        path: "/org-development/capacitation/my-capacitations",
        name: "My Training",
      },
    ],
    name: "Training",
    subname: "General",
    icon: book,
  },
  /*{
    path: "/org-development/evaluation",
    subpath: [
      { path: "/org-development/evaluation", name: "Creador" },
      {
        path: "/org-development/evaluation/edi",
        name: "EDI por Objetivos",
      },
      {
        path: "/org-development/evaluation/360",
        name: "Evaluación 360°",
      },
    ],
    name: "Evaluación",
    subname: "Del Desempeño",
    icon: pieChart,
  },*/
  /*{
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
  },*/
];

function SideLayoutDevOrg() {
  const location = useLocation();
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-4 py-4">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 overflow-auto rounded-md bg-gris p-4">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex w-full flex-col overflow-scroll">
            {MENU_ITEMS?.map((item, i) => (
              <Accordion type="single" collapsible className="px-2" key={i}>
                <AccordionItem value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="py-2 text-gris2 hover:no-underline">
                    <div className="flex w-full items-center gap-6">
                      {item.path === location.pathname ? (
                        <div className="flex w-full items-center gap-6 rounded-lg bg-[#E8E8E8] px-4 py-1 text-primario">
                          <IonIcon icon={item.icon} size="large"></IonIcon>
                          <div>
                            <p className="text-base font-medium">{item.name}</p>
                            <p className="text-left text-[10px] font-medium">
                              {item.subname}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex w-full items-center gap-6 rounded-lg px-4 py-1 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]">
                          <IonIcon icon={item.icon} size="large"></IonIcon>
                          <div>
                            <p className="text-base font-medium">{item.name}</p>
                            <p className="text-left text-[10px] font-medium text-grisSubText">
                              {item.subname}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-0">
                    {item.subpath.map((link, i) => (
                      <NavLink
                        key={i}
                        to={`${link.path}`}
                        className={
                          link.path === "/org-development"
                            ? ({ isActive }) =>
                                isActive &&
                                location.pathname === "/org-development"
                                  ? "w-full rounded-lg px-4 text-primario"
                                  : "w-full px-4 text-gris2"
                            : ({ isActive }) =>
                                isActive
                                  ? "w-full rounded-lg px-4 text-primario"
                                  : "w-full px-4 text-gris2"
                        }
                      >
                        <div className="flex flex-col gap-4">
                          {location.pathname === link.path ? (
                            <div className="flex items-center gap-1 pl-16">
                              <span className="">&bull;</span>
                              <p className="text-sm font-medium">{link.name}</p>
                            </div>
                          ) : (
                            <div className="pl-[72px] hover:pl-[56px]">
                              <p className="text-sm font-medium hover:w-fit hover:rounded-sm hover:bg-blancoBg hover:px-4">
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
