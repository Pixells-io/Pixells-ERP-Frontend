import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { chevronForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const HEADERS = [
  { name: "PUESTO", cols: "2", text: "start" },
  { name: "VER", cols: "1", text: "start" },
  { name: "EDITAR", cols: "1", text: "start" },
  { name: "CREAR", cols: "1", text: "start" },
  { name: "ELIMINAR", cols: "1", text: "start" },
  { name: "PORCENTAJE DE ACCESO", cols: "4", text: "end" },
  
];

const OPTIONS = {
  projects: [
    {
      id: 1,
      name: "Sin Proyecto",
      data: [
        {
          id: 1,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 4,
          expiration: "15 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pablo",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pedro",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "1",
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
        {
          id: 2,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 1,
          expiration: "16 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "2",
          created: {
            id: 2,
            name: "Raul",
            img: "https://github.com/shadcn.png",
          },
          status: "2",
        },
      ],
    },
    {
      id: 2,
      name: "Proyecto Z",
      data: [
        {
          id: 1,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 2,
          expiration: "15 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pablo",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "3",
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
        {
          id: 2,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 8,
          expiration: "16 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "1",
          created: {
            id: 2,
            name: "Raul",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
      ],
    },
    {
      id: 3,
      name: "Plan Z",
      data: [
        {
          id: 1,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          expiration: "15 feb 2024",
          repeat: 2,
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "3",
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
        {
          id: 2,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 1,
          expiration: "16 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pablo",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "1",
          created: {
            id: 2,
            name: "Raul",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
      ],
    },
  ],
};

function ProjectTab({ tasks }) {
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    const allItemValues = OPTIONS?.projects?.map(
      (project, index) => `item-${project.id}`,
    );
    setOpenItems(allItemValues);
  }, [OPTIONS]);



  return (
    <div className="flex flex-col">
      <div className="grid h-12 grid-cols-12 items-center border-b">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={`col-span-${header?.cols || "1"} ${i == 0 && "pl-7"} text-${header.text}`}
          >
            <p className="text-sm font-semibold text-gris2">{header.name}</p>
          </div>
        ))}
      </div>
      <Accordion
        type="multiple"
        className="w-full"
        value={openItems}
        onValueChange={(e) => setOpenItems(e)}
      >
        {tasks?.map((areas, i) => (
          <AccordionItem
            value={"item-" + areas?.id}
            key={"item-" + i}
            className="border-none"
          >
            <AccordionTrigger className="h-12 w-full items-center border-b border-grisHeading text-xs font-normal text-grisHeading">
              <div className="flex items-center gap-x-2">
                <IonIcon
                  icon={chevronForwardOutline}
                  size="large"
                  className={`h-5 w-5 shrink-0 cursor-pointer text-grisHeading transition-transform duration-300 group-data-[state=open]:rotate-90`}
                />
                {areas?.nombre}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {areas?.positions.map((position, i) => (
                <div
                  key={i}
                  className="grid h-12 w-full grid-cols-12 items-center border-b"
                >
                  <div
                    className={
                      "pl-6 col-span-2 text-xs font-normal text-grisHeading"
                    }
                  >
                    <div className="flex items-center gap-x-2">
                      <div>
                        <span>{position.position_name}</span>
                      </div>
                      
                    </div>
                  </div>
                  
                
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ProjectTab;
