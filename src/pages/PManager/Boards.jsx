import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { createPusherClient } from "@/lib/pusher";
import { getGoalsMaster } from "@/lib/actions";

import Board from "./Board";
import GoalDestroy from "./components/GoalDestroy";
import GoalEdit from "./components/GoalEdit";

function Boards() {
  const location = useLocation();
  const { id } = useParams();
  const { goals, users, goalsMaster, permissions } = useLoaderData();
  const [urlId, setUrlId] = useState(id);
  const [PMdata, setPMdata] = useState(goalsMaster?.data);
  const [open, setOpen] = useState(false);
  const [goalSelected, setGoalSelected] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  const tabDefault = goals?.data[0]?.name;

  //PERMISSIONS
  const [editP, setEditP] = useState(true); //2
  const [createP, setCreateP] = useState(true); //3
  const [destroyP, setDestroyP] = useState(true); //4

  //CHANGE PERMISSIONS
  useEffect(() => {
    const editQuery = permissions.data.filter(
      (item) => item.permision_capability == "2",
    );

    if (editQuery.length == 0) {
      setEditP(false);
    }

    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreateP(false);
    }

    const destroyQuery = permissions.data.filter(
      (item) => item.permision_capability == "4",
    );

    if (destroyQuery.length == 0) {
      setDestroyP(false);
    }
  });

  const pusherClient = createPusherClient();

  useEffect(() => {
    setUrlId(id);

    pusherClient.subscribe(`private-pm-get-objetive.${urlId}`);

    pusherClient.bind("fill-pm-objetive", ({ objetive }) => {
      getPMinfoFuncion(objetive);
    });

    async function getPMinfoFuncion(id) {
      const newData = await getGoalsMaster(id);
      setPMdata(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-pm-get-objetive.${urlId}`);
    };
  }, [location, urlId]);

  useEffect(() => {
    async function getGoals() {
      let newData = await getGoalsMaster(id);
      setPMdata(newData.data);
    }

    getGoals();
  }, [id]);

  return (
    <Tabs
      defaultValue={tabDefault}
      className="w-full overflow-scroll rounded-xl bg-blancoBg"
    >
      <GoalDestroy
        modal={open}
        setModal={setOpen}
        goalId={goalSelected?.id}
        name={goalSelected?.name}
      />
      <GoalEdit
        modal={openEdit}
        setModal={setOpenEdit}
        goalId={goalSelected?.id}
        name={goalSelected?.name}
      />
      <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
        {PMdata?.map(({ goal }, i) => (
          <TabsTrigger
            key={i}
            value={goal?.name}
            className="rounded-none border-b text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
          >
            <ContextMenu>
              <ContextMenuTrigger>{goal?.name}</ContextMenuTrigger>
              <ContextMenuContent>
                {editP == true ? (
                  <ContextMenuItem
                    onClick={() => {
                      setGoalSelected(goal);
                      setOpenEdit(true);
                    }}
                  >
                    Edit
                  </ContextMenuItem>
                ) : (
                  false
                )}
                {destroyP == true ? (
                  <ContextMenuItem
                    onClick={() => {
                      setGoalSelected(goal);
                      setOpen(true);
                    }}
                  >
                    Delete
                  </ContextMenuItem>
                ) : (
                  false
                )}
              </ContextMenuContent>
            </ContextMenu>
          </TabsTrigger>
        ))}
      </TabsList>
      {PMdata?.map(({ fces, goal }, i) => (
        <div key={i} className="flex w-full">
          <TabsContent value={goal.name} className="w-full">
            <Board
              goal={goal}
              users={users.data}
              csfs={fces}
              create={createP}
              edit={editP}
              destroy={destroyP}
            />
          </TabsContent>
        </div>
      ))}
    </Tabs>
  );
}

export default Boards;
