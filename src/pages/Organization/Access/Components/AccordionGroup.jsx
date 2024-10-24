import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { chevronForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import CheckboxAccordion from "./CheckboxAccordion";
import { Checkbox } from "@/components/ui/checkbox";

const HEADERS = [
  { name: "PUESTO", cols: "2", text: "start" },
  { name: "VER", cols: "1", text: "start" },
  { name: "EDITAR", cols: "1", text: "start" },
  { name: "CREAR", cols: "1", text: "start" },
  { name: "ELIMINAR", cols: "1", text: "start" },
  { name: "PORCENTAJE DE ACCESO", cols: "4", text: "end" },
];

const permissions = [
  { name: "Read", value: 1 },
  { name: "Edit", value: 2 },
  { name: "Create", value: 3 },
  { name: "Delete", value: 4 },
];

function ProjectTab({ tasks, module_id, onPositionSelect, selectedPositions }) {
  const [openItems, setOpenItems] = useState([]);
  const [permissionStates, setPermissionStates] = useState({});
  const [permissionCounts, setPermissionCounts] = useState({});

  useEffect(() => {
    const allItemValues = tasks?.map((area) => `item-${area.id}`);
    setOpenItems(allItemValues);
  }, [tasks]);

  useEffect(() => {
    const newCounts = {};
    Object.entries(permissionStates).forEach(([positionId, permissions]) => {
      newCounts[positionId] = Object.values(permissions).filter(Boolean).length;
    });
    setPermissionCounts(newCounts);
  }, [permissionStates]);

  const updatePermissionState = (positionId, permision, isChecked) => {
    setPermissionStates((prev) => ({
      ...prev,
      [positionId]: {
        ...prev[positionId],
        [permision]: isChecked,
      },
    }));
  };

  const handlePositionCheckbox = (position) => (checked, event) => {
    if (event) {
      event.stopPropagation();
    }
    onPositionSelect(position, checked);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="grid h-12 grid-cols-12 items-center border-b">
        {HEADERS.map((header, i) => (
          <div
            key={i}
            className={`col-span-${header.cols || "1"} ${i === 0 && "pl-7"} text-${header.text}`}
          >
            <p
              style={{ color: "#44444F" }}
              className="font-poppins text-[12px] text-sm font-medium"
            >
              {header.name}
            </p>
          </div>
        ))}
      </div>
      <Accordion
        type="multiple"
        className="w-full"
        value={openItems}
        onValueChange={setOpenItems}
      
      >
        {tasks.map((areas) => (
          <AccordionItem
            value={`item-${areas.id}`}
            key={`item-${areas.id}`}
           
            className="border-none"
          >
            <AccordionTrigger className="h-12 w-full items-center border-b border-grisHeading text-xs font-normal text-grisHeading">
              <div className="flex items-center gap-x-2 px-4">
                <IonIcon
                  icon={chevronForwardOutline}
                  size="large"
                  className="h-5 w-5 shrink-0 text-grisHeading"
                />
                {areas.nombre}
              </div>
            </AccordionTrigger>
            <AccordionContent >
              <div>
                {areas.positions.map((position) => (
                  <div
                    key={position.id}
                    className="grid h-12 w-full grid-cols-12 items-center border-b"
                  >
                    <div 
                      className="col-span-2 flex items-center text-xs font-normal text-grisHeading"
                      onClick={(e) => e.stopPropagation()} // Prevenir propagación en el contenedor del checkbox
                    >
                      <div className="ml-4 mr-4">
                        <Checkbox 
                          checked={selectedPositions.includes(position.id)}
                          onCheckedChange={handlePositionCheckbox(position.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <span className="text-left">{position.position_name}</span>
                    </div>

                    {permissions.map((permiso) => (
                      <div
                        key={permiso.value}
                        className="flex items-start justify-start"
                      >
                        <CheckboxAccordion
                          position={position.id}
                          permision={permiso.value}
                          module={module_id}
                          onPermissionChange={(isChecked) =>
                            updatePermissionState(
                              position.id,
                              permiso.value,
                              isChecked,
                            )
                          }
                        />
                      </div>
                    ))}
                    <div className="col-span-4 pr-12 text-end text-[14px] text-[#44444F]">
                      {permissionCounts[position.id]
                        ? (permissionCounts[position.id] / 4) * 100
                        : 0}
                      %
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ProjectTab;