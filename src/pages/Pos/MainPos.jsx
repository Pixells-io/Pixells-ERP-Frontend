import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, list } from "ionicons/icons";
import React, { useState } from "react";

function MainPos() {
  const [tickets, setTickets] = useState([
    {
      products: [],
    },
    {
      products: [],
    },
  ]);

  const addTickets = () => {
    setTickets([...tickets, { products: [] }]);
  };

  return (
    <div className="h-full w-full rounded-lg bg-[#F9F9F9] px-4 py-4">
      {/* add */}
      <div className="grid w-full grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Productos
          </h2>
          <Input
            type={"text"}
            placeholder={"Agregar"}
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"name"}
          />
        </div>
        <div className="col-span-5 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Cliente
          </h2>
          <Input
            type={"text"}
            placeholder={"Agregar"}
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"name"}
          />
        </div>
      </div>

      {/* tickets */}
      <div className="flex items-center">
        <Tabs defaultValue="crm" className="mt-2 rounded-lg bg-inherit">
          <TabsList className="flex w-fit gap-x-3 rounded-none bg-inherit">
            <IonIcon
              onClick={() => addTickets()}
              icon={addCircleOutline}
              className="h-6 w-6 cursor-pointer text-primarioBotones"
            ></IonIcon>
            {tickets.map((ticket, index) => (
              <TabsTrigger
                key={index}
                value={index}
                className="rounded-3xl bg-[#F0F0F0] px-4 py-2 text-xs font-medium text-grisText data-[state=active]:bg-[#44444F] data-[state=active]:text-white data-[state=active]:shadow-[0px_0px_8px_1px_rgba(0,0,0,0.25)]"
              >
                T {index}
              </TabsTrigger>
            ))}
          </TabsList>
          {tickets.map((ticket, index) => (
            <TabsContent key={index} value={index} className="p-2">
              <h2>content {index}</h2>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default MainPos;
