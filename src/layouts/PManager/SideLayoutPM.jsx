import React, { useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IonIcon } from "@ionic/react";
import { add, addCircleOutline, chevronDown, flag } from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import SelectRouter from "../Masters/FormComponents/select";
import NewWorkspaceModal from "@/pages/PManager/components2/Modals/NewWorkspaceModal";
import {
  destroyWorkspace,
  editWorkspace,
  newObjective,
  newWorkspace,
} from "./utils";
import NewObjectiveModal from "@/pages/PManager/components2/Modals/NewObjectiveModal";

function SideLayoutPM() {
  const data = useLoaderData();
  const [workspaces, setWorkspaces] = useState(data.workspaces.data);
  const [objectivesYears, setBbjectivesYears] = useState([]);
  const [objectivesIndividual, setObjectivesIndividual] = useState([]);
  const [objectivesTeam, setObjectivesTeam] = useState([]);

  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const optionsWorkspace = workspaces.map((workspace) => ({
    label: workspace.name,
    value: workspace.id,
  }));

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
            <NewWorkspaceModal />
          </div>

          <div className="flex flex-col gap-2">
            <SelectRouter
              options={optionsWorkspace}
              onChange={(e) =>
                setSelectedWorkspace({ name: e.label, id: e.value })
              }
            />
            {/* <SelectRouter /> */}
          </div>
          {selectedWorkspace && (
            <div className="ga-2 flex w-full flex-col">
              <div className="flex w-full items-center justify-between">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-none">
                    <div className="flex w-full items-center justify-between">
                      <AccordionTrigger className="flex w-full items-center justify-normal gap-4 py-2">
                        <IonIcon
                          icon={chevronDown}
                          size="size-6"
                          className="text-grisSubText"
                        />
                        <p className="text-sm text-grisSubText">Individual</p>
                      </AccordionTrigger>
                      <NewObjectiveModal workspace_id={selectedWorkspace.id} />
                    </div>
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
                      <p className="text-sm text-grisSubText">En Equipo</p>
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
                      <p className="text-sm text-grisSubText">
                        Espacio “{selectedWorkspace.name}”
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutPM;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");
  console.log(action);
  switch (action) {
    case "create-workspace":
      await newWorkspace(data);
      return redirect("/project-manager2");

    case "edit-workspace":
      await editWorkspace(data);
      return redirect("/project-manager2");

    case "delete-workspace":
      await destroyWorkspace(data);
      return redirect("/project-manager2");

    case "create-objective":
      await newObjective(data);
      return redirect("/project-manager2");

    case "edit-objective":
      await editWorkspace(data);
      return redirect("/project-manager2");

    case "delete-objective":
      await destroyWorkspace(data);
      return redirect("/project-manager2");

    default:
      return redirect("/project-manager2");
  }
}
