import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { addCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import FormCreateTickets from "./Components/FromCreateTickets";
import NavigationHeader from "@/components/navigation-header";
import TicketsTable from "./Components/TicketsTable";

function MainTickets() {
  const [modal, setModal] = useState(false);
  const {
    areas,
    users,
    myTickets,
    assignedTickets,
    processTickets,
    permissions,
  } = useLoaderData();

  //PERMISSIONS
  const [edit, setEdit] = useState(true); //2
  const [create, setCreate] = useState(true); //3
  const [destroy, setDestroy] = useState(true); //4

  //CHANGE PERMISSIONS
  useEffect(() => {
    const editQuery = permissions.data.filter(
      (item) => item.permision_capability == "2",
    );

    if (editQuery.length == 0) {
      setEdit(false);
    }

    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreate(false);
    }

    const destroyQuery = permissions.data.filter(
      (item) => item.permision_capability == "4",
    );

    if (destroyQuery.length == 0) {
      setDestroy(false);
    }
  });

  const areasOptions = [];
  const usersOptions = [];

  arrayFillAreas(areas, areasOptions);
  arrayFillUsers(users, usersOptions);

  function arrayFillAreas(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.nombre,
        value: element.id,
        placeholder: "0",
      });
    });
  }

  function arrayFillUsers(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label:
          element.name +
          " " +
          element.last_name +
          " " +
          element.second_last_name,
        value: element.id,
        placeholder: "0",
      });
    });
  }

  return (
    <div className="flex w-full">
      <FormCreateTickets
        areas={areasOptions}
        users={usersOptions}
        modal={modal}
        setModal={setModal}
      />
      <div className="ml-4 flex h-full w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              TICKETS
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            {/* <div className="text-xs">4 created</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">9 assigned</div> */}
          </div>
        </div>
        <div>
          {create == true ? (
            <IonIcon
              icon={addCircleOutline}
              size="large"
              className="text-blue-500"
              onClick={() => setModal(true)}
            ></IonIcon>
          ) : (
            false
          )}
        </div>

        {/*component accion*/}
        <div className="h-full overflow-auto rounded-xl bg-white p-7">
          <div className="flex h-full">
            <Tabs defaultValue="users" className="h-full w-full">
              <TabsList className="mb-3 w-full bg-transparent">
                <div className="flex w-full">
                  <div className="w-4/5">
                    <TabsTrigger
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value="users"
                    >
                      MY TICKETS
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value="positions"
                    >
                      ASSIGNED
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value="areas"
                    >
                      IN PROGRESS
                    </TabsTrigger>
                  </div>
                </div>
              </TabsList>
              <TabsContent value="users" className="">
                <TicketsTable
                  tickets={myTickets.data}
                  edit={edit}
                  destroy={destroy}
                />
              </TabsContent>
              <TabsContent value="positions">
                <TicketsTable
                  tickets={assignedTickets.data}
                  edit={edit}
                  destroy={destroy}
                />
              </TabsContent>
              <TabsContent value="areas">
                <TicketsTable
                  tickets={processTickets.data}
                  edit={edit}
                  destroy={destroy}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTickets;
