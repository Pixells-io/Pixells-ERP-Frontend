import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CrmCharts from "./Crm/CrmCharts";
import TicketCharts from "./Ticket/TicketCharts";

function MainAnalytic() {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
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
              ANALYTICS GENERAL
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]"></div>
        </div>

        <div className="mx-16 flex h-full flex-col overflow-auto">
          <Tabs defaultValue="crm" className="rounded-lg bg-inherit pt-2">
            <TabsList className="flex w-fit gap-x-8 rounded-none bg-inherit">
              <TabsTrigger
                value="crm"
                className="rounded-3xl border-[1px] border-[#696974] px-4 text-xs font-medium text-grisText data-[state=active]:border-[#D7D7D7] data-[state=active]:bg-[#D7D7D7] data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              >
                CRM
              </TabsTrigger>
              <TabsTrigger
                value="tickets"
                className="rounded-3xl border-[1px] border-[#696974] px-4 text-xs font-medium text-grisText data-[state=active]:border-[#D7D7D7] data-[state=active]:bg-[#D7D7D7] data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              >
                Tickets
              </TabsTrigger>
              <TabsTrigger
                value="projectsManager"
                className="rounded-3xl border-[1px] border-[#696974] px-4 text-xs font-medium text-grisText data-[state=active]:border-[#D7D7D7] data-[state=active]:bg-[#D7D7D7] data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              >
                Project Manager
              </TabsTrigger>
            </TabsList>
            <TabsContent value="crm" className="p-2">
              <CrmCharts />
            </TabsContent>
            <TabsContent className="p-2" value="tickets">
                <TicketCharts />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default MainAnalytic;
