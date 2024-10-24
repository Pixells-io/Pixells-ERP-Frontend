import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { redirect, useLoaderData } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import ProjectTab from "./Components/AccordionGroup";
import DeleteModalPermission from "./Components/Modals/DeleteModalPermission";
import { restorePermission } from "./utils";

function MainAccess() {
  const { users, areas } = useLoaderData();
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [currentModule, setCurrentModule] = useState({
    name: "Organization",
    id: 1,
    org_m: "1",
    tran_m: "0",
  });

  const modulos = [
    { name: "Organization", id: 1, org_m: "1", tran_m: "0" },
    { name: "Project Manager", id: 2, org_m: "1", tran_m: "0" },
    { name: "CRM", id: 3, org_m: "1", tran_m: "0" },
    { name: "Chat", id: 4, org_m: "1", tran_m: "0" },
    { name: "Analitycs", id: 5, org_m: "1", tran_m: "0" },
    { name: "Desarrollo Org.", id: 6, org_m: "1", tran_m: "0" },
    { name: "Tickets", id: 7, org_m: "1", tran_m: "0" },
    { name: "Bank Management", id: 9, org_m: "0", tran_m: "1" },
    { name: "Accounting", id: 10, org_m: "0", tran_m: "1" },
    { name: "Inventory", id: 11, org_m: "0", tran_m: "1" },
    { name: "Sales", id: 12, org_m: "0", tran_m: "1" },
    { name: "Shopping", id: 13, org_m: "0", tran_m: "1" },
    { name: "Transformation", id: 14, org_m: "0", tran_m: "1" },
    { name: "Pos", id: 15, org_m: "0", tran_m: "1" },
  ];

  const handleTabChange = (moduleName) => {
    const module = modulos.find((m) => m.name === moduleName);
    if (module) {
      setCurrentModule(module);
      setSelectedPositions([]);
    }
  };

  const handlePositionSelection = (positionId, isSelected) => {
    setSelectedPositions((prev) => {
      if (isSelected && !prev.includes(positionId)) {
        return [...prev, positionId];
      } else if (!isSelected) {
        return prev.filter((id) => id !== positionId);
      }
      return prev;
    });
  };

  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-hidden bg-[#FBFBFB] px-14 py-3">
      <NavigationHeader />

      <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">ORGANIZACIÓN</h2>
      </div>

      <div>
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Control de Acceso
        </span>
      </div>

      <Tabs
        defaultValue={"Organization"}
        value={currentModule.name}
        onValueChange={handleTabChange}
        className="flex flex-col overflow-auto rounded-lg"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="relative w-full max-w-[950px] overflow-x-auto">
            <TabsList className="inline-flex w-full min-w-max space-x-2 rounded-none bg-transparent px-0">
              {modulos.map((area) => (
                <TabsTrigger
                  key={area.id}
                  className="h-[30px] shrink-0 rounded-xl px-4 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
                  value={area.name}
                  disabled={
                    currentModule.name !== area.name &&
                    selectedPositions.length > 0
                  }
                >
                  {area.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="flex shrink-0 items-center gap-x-4">
            <div className="flex items-center justify-center">
              <IonIcon
                icon={searchOutline}
                className="h-6 w-6 text-[#CCCCCC]"
              />
            </div>

            <DeleteModalPermission
              selectedPositions={selectedPositions}
              currentModule={currentModule}
              setSelectedPositions={setSelectedPositions}
            />
          </div>
        </div>

        <div className="mt-4">
          {modulos.map((area) => (
            <TabsContent key={area.id} value={area.name}>
              <ProjectTab
                tasks={areas.data}
                module_id={area.id}
                onPositionSelect={handlePositionSelection}
                selectedPositions={selectedPositions}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default MainAccess;

export async function Action({ request }) {
  const data = await request.formData();
  const response = await restorePermission(data);
  return redirect("/organization/access");
}
