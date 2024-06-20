import React, { useEffect, useState } from "react";
import {
  addCircleOutline,
  chevronBack,
  chevronForward,
  searchOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useLoaderData } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormCreateTickets from "./Components/FromCreateTickets";
import TicketsTable from "./Components/TicketsTable";

function MainTickets() {
  const [modal, setModal] = useState(false);
  const { areas, users, myTickets, assignedTickets, processTickets } =
    useLoaderData();

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
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              TICKETS
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div className="text-xs">4 created</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">9 assigned</div>
          </div>
        </div>
        <div>
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="text-blue-500"
            onClick={() => setModal(true)}
          ></IonIcon>
        </div>
        {/*component accion*/}
        <div className="rounded-xl bg-white p-7">
          <div className="flex">
            <Tabs defaultValue="users" className="w-full">
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
                      IN PROCESS
                    </TabsTrigger>
                  </div>
                </div>
              </TabsList>
              <TabsContent value="users">
                <TicketsTable tickets={myTickets.data} />
              </TabsContent>
              <TabsContent value="positions">
                <TicketsTable tickets={assignedTickets.data} />
              </TabsContent>
              <TabsContent value="areas">
                <TicketsTable tickets={processTickets.data} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTickets;
