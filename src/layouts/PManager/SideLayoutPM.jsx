import React from "react";
import { Outlet } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronDown, flag } from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import SelectRouter from "../Masters/FormComponents/select";

function SideLayoutPM() {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-[280px] shrink-0 flex-col rounded-tl-xl border-r border-[#D7D7D7] bg-[#FBFBFB] p-4">
        <div className="px-4">
          <TopMenuCRM />
        </div>

        <div className="flex flex-col gap-2 px-4 pt-16">
          <div className="flex items-center justify-between">
            <p className="font-poppins text-lg font-semibold text-grisHeading">
              Espacio de Trabajo
            </p>
            <IonIcon
              icon={addCircleOutline}
              className="size-5 align-middle text-primarioBotones"
            />
          </div>

          <div className="flex flex-col gap-2">
            <SelectRouter />
            <SelectRouter />
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex items-center justify-normal gap-4 py-2">
                  <IonIcon
                    icon={chevronDown}
                    size="size-6"
                    className="text-grisSubText"
                  />
                  <p className="text-sm text-grisSubText">Individual</p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex items-center justify-normal gap-4 py-2">
                  <IonIcon
                    icon={chevronDown}
                    size="size-6"
                    className="text-grisSubText"
                  />
                  <p className="text-sm text-grisSubText"> En Equipo</p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex items-center justify-normal gap-4 py-2">
                  <IonIcon
                    icon={chevronDown}
                    size="size-6"
                    className="text-grisSubText"
                  />
                  <p className="text-sm text-grisSubText">Espacio “Pixells”</p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutPM;
