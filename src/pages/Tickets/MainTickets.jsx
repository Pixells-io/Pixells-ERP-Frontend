import React, { useState } from "react";
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
  const { areas, users } = useLoaderData();

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

  const myTickets = [];
  const assignedTickets = [];
  const inProcess = [];

  return (
    <div className="flex w-full">
      <FormCreateTickets
        areas={areasOptions}
        users={usersOptions}
        modal={modal}
        setModal={setModal}
      />
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-xl text-[#44444F]">
              TICKETS
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
            <div className="text-xs">4 service</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">9 costumers</div>
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
        <div className="bg-white rounded-xl p-7">
          <div className="flex">
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="bg-transparent w-full mb-3">
                <div className="flex w-full">
                  <div className="w-4/5">
                    <TabsTrigger
                      className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
                      value="users"
                    >
                      MY TICKETS
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
                      value="positions"
                    >
                      ASSIGNED
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
                      value="areas"
                    >
                      IN PROCESS
                    </TabsTrigger>
                  </div>
                </div>
              </TabsList>
              <TabsContent value="users">
                <TicketsTable tickets={myTickets} />
              </TabsContent>
              <TabsContent value="positions">
                <TicketsTable tickets={assignedTickets} />
              </TabsContent>
              <TabsContent value="areas">
                <TicketsTable tickets={inProcess} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTickets;
