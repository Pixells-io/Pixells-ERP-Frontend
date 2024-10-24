import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IonIcon } from "@ionic/react";
import { chevronDown, flag } from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import SelectRouter from "../Masters/FormComponents/select";

import NewWorkspaceModal from "@/pages/PManager/components2/Modals/NewWorkspaceModal";
import NewObjectiveModal from "@/pages/PManager/components2/Modals/NewObjectiveModal";

import {
  deleteObjective,
  destroyWorkspace,
  editObjective,
  editWorkspace,
  getObjectivesByWorkspaceId,
  newObjective,
  newWorkspace,
} from "./utils";

function SideLayoutPM() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState(data.workspaces.data);
  const [objectivesIndividual, setObjectivesIndividual] = useState([]);
  const [objectivesTeam, setObjectivesTeam] = useState([]);

  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const [editingObjectiveId, setEditingObjectiveId] = useState(null);
  const [newObjectiveName, setNewObjectiveName] = useState("");
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    objectiveId: null,
  });
  const submit = useSubmit();

  const optionsWorkspace = workspaces.map((workspace) => ({
    label: workspace.name,
    value: workspace.id,
  }));

  useEffect(() => {
    if (selectedWorkspace) {
      getObjectivesByWorkspaceId(selectedWorkspace.id).then(({ data }) => {
        setObjectivesIndividual(data?.individual);
        setObjectivesTeam(data?.team);
      });
    }
  }, [selectedWorkspace]);

  useEffect(() => {
    if (objectivesIndividual.length > 0) {
      navigate(`/project-manager2/${objectivesIndividual[0].id}`);
    }
  }, [objectivesIndividual]);

  useEffect(() => {
    if (objectivesIndividual.length == 0 && objectivesTeam.length > 0) {
      navigate(`/project-manager2/${objectivesTeam[0].id}`);
    }
  }, [objectivesTeam]);

  const handleDoubleClick = (objective) => {
    setEditingObjectiveId(objective.id);
    setNewObjectiveName(objective.name);
  };

  const handleInputChange = (e) => {
    setNewObjectiveName(e.target.value);
  };

  const handleInputBlur = (objective) => {
    submit(
      {
        objective_id: objective.id,
        name: newObjectiveName,
        action: "edit-objective",
      },
      { method: "post", action: "/project-manager2" },
    );
    setEditingObjectiveId(null);
  };

  const handleInputKeyPress = (e, objective) => {
    if (e.key === "Enter") {
      handleInputBlur(objective);
    }
  };

  const handleRightClick = (e, objective) => {
    e.preventDefault();
    setNewObjectiveName(objective.name);
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      objectiveId: objective.id,
    });
  };

  const handleDelete = (objectiveId) => {
    submit(
      { objective_id: objectiveId, action: "delete-objective" },
      { method: "post", action: "/project-manager2" },
    );
    setContextMenu({ visible: false, x: 0, y: 0, objectiveId: null });
  };

  const handleRename = (objective) => {
    setEditingObjectiveId(objective.id);
    setNewObjectiveName(objective.name);
    setContextMenu({ visible: false, x: 0, y: 0, objectiveId: null });
  };

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
                      <NewObjectiveModal
                        workspace_id={selectedWorkspace?.id}
                        type={1}
                      />
                    </div>
                    <AccordionContent className="flex flex-col gap-2">
                      {objectivesIndividual?.map((objective) => (
                        <div key={objective.id}>
                          {editingObjectiveId === objective.id ? (
                            <input
                              type="text"
                              value={newObjectiveName}
                              onChange={handleInputChange}
                              onBlur={() => handleInputBlur(objective)}
                              onKeyDown={(e) =>
                                handleInputKeyPress(e, objective)
                              }
                              className="flex items-center gap-3 rounded-md bg-blancoBox px-4 py-1 text-sm text-gris2"
                            />
                          ) : (
                            <NavLink
                              to={`${objective.id}`}
                              className={({ isActive }) =>
                                isActive
                                  ? "flex items-center gap-3 rounded-md bg-blancoBox px-4 py-1 text-sm text-gris2"
                                  : "flex items-center gap-3 px-4 py-1 text-sm text-gris2 hover:rounded-md hover:bg-blancoBox"
                              }
                              onDoubleClick={() => handleDoubleClick(objective)}
                              onContextMenu={(e) =>
                                handleRightClick(e, objective)
                              }
                            >
                              <IonIcon
                                icon={flag}
                                className="size-4 shrink-0"
                              />
                              {objective.name}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

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
                        <p className="text-sm text-grisSubText">En Equipo</p>
                      </AccordionTrigger>
                      <NewObjectiveModal
                        workspace_id={selectedWorkspace?.id}
                        type={2}
                      />
                    </div>
                    <AccordionContent className="flex flex-col gap-2">
                      {objectivesTeam?.map((objective) => (
                        <div key={objective.id}>
                          {editingObjectiveId === objective.id ? (
                            <input
                              type="text"
                              value={newObjectiveName}
                              onChange={handleInputChange}
                              onBlur={() => handleInputBlur(objective)}
                              onKeyDown={(e) =>
                                handleInputKeyPress(e, objective)
                              }
                              className="flex items-center gap-3 rounded-md bg-blancoBox px-4 py-1 text-sm text-gris2"
                            />
                          ) : (
                            <NavLink
                              to={`${objective.id}`}
                              className={({ isActive }) =>
                                isActive
                                  ? "flex items-center gap-3 rounded-md bg-blancoBox px-4 py-1 text-sm text-gris2"
                                  : "flex items-center gap-3 px-4 py-1 text-sm text-gris2 hover:rounded-md hover:bg-blancoBox"
                              }
                              onDoubleClick={() => handleDoubleClick(objective)}
                              onContextMenu={(e) =>
                                handleRightClick(e, objective)
                              }
                            >
                              <IonIcon
                                icon={flag}
                                className="size-4 shrink-0"
                              />
                              {objective.name}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="py-2</AccordionItem> flex items-center justify-normal gap-4">
                      <IonIcon
                        icon={chevronDown}
                        size="size-6"
                        className="text-grisSubText"
                      />
                      <p className="text-sm text-grisSubText">
                        Espacio “{selectedWorkspace.name}”
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      <NavLink
                        to={`/project-manager2/proyects/${selectedWorkspace.id}`}
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-3 rounded-md bg-blancoBox px-4 py-1 text-sm text-gris2"
                            : "flex items-center gap-3 px-4 py-1 text-sm text-gris2 hover:rounded-md hover:bg-blancoBox"
                        }
                      >
                        <IonIcon icon={flag} className="size-4 shrink-0" />
                        Todos los Proyectos
                      </NavLink>
                      <NavLink
                        to={`/project-manager2/activities/${selectedWorkspace.id}`}
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center gap-3 rounded-md bg-blancoBox px-4 py-1 text-sm text-gris2"
                            : "flex items-center gap-3 px-4 py-1 text-sm text-gris2 hover:rounded-md hover:bg-blancoBox"
                        }
                      >
                        <IonIcon icon={flag} className="size-4 shrink-0" />
                        Todas las Actividades
                      </NavLink>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}
        </div>
        {contextMenu?.visible && (
          <div
            style={{ top: contextMenu.y, left: contextMenu.x }}
            className="fixed z-50"
            onMouseLeave={() =>
              setContextMenu({ visible: false, x: 0, y: 0, objectiveId: null })
            }
          >
            <div className="flex min-w-[8rem] flex-col gap-2 overflow-hidden rounded-md border bg-popover bg-white p-2 text-popover-foreground shadow-md">
              <button
                type="button"
                className="px-2 py-1 text-left text-sm hover:rounded-lg hover:bg-grisDisabled"
                onClick={() => handleDelete(contextMenu?.objectiveId)}
              >
                Delete
              </button>
              <button
                type="button"
                className="px-2 py-1 text-left text-sm hover:rounded-lg hover:bg-grisDisabled"
                onClick={() =>
                  handleRename({
                    id: contextMenu?.objectiveId,
                    name: newObjectiveName,
                  })
                }
              >
                Rename
              </button>
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
}

export default SideLayoutPM;

export async function Action({ params, request }) {
  const data = await request.formData();
  const action = data.get("action");
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
      const info = await editObjective(data);
      return redirect(`/project-manager2/${info.data}`);

    case "delete-objective":
      await deleteObjective(data);
      return redirect("/project-manager2");

    default:
      return redirect("/project-manager2");
  }
}
