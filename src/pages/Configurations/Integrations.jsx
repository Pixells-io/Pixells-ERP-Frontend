import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import DataTable from "./components/Table/DataTable";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import NavigationHeader from "@/components/navigation-header";
import { saveEmbeddingDocument } from "./utils";
import { redirect } from "react-router-dom";
import OpenAiCard from "./Components/OpenAI";

// import Table from "@/components/DataTable";
// import TableClients from "./components/Table/TableClients";

function IntegrationPanel() {
  return (
    <div className="flex h-full w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              INTEGRATIONS
            </h2>
          </div>
        </div>

        <Tabs
          defaultValue="calendar"
          className="h-full w-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="calendar"
              className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              OPEN AI
            </TabsTrigger>
            <TabsTrigger
              value="whatsapp"
              className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              Whatsapp
            </TabsTrigger>
          </TabsList>
          <TabsContent value="calendar" className="w-full p-2">
            <OpenAiCard />
          </TabsContent>
          <TabsContent className="p-2" value="whatsapp"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default IntegrationPanel;

export async function Action({ request }) {
  const data = await request.formData();

  const response = await saveEmbeddingDocument(data);

  return redirect("/configuration/integrations");
}
