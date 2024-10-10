import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, add, closeCircle } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import ArticleForm from "../Components/ArticleForm";
import BatchForm from "../Components/BatchForm";

const CreateTraceability = () => {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <Tabs
          defaultValue="article"
          className="h-full overflow-hidden rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <p className="mt-1 h-[30px] font-poppins text-xl font-bold text-grisHeading">
              Informes de Trazabilidad
            </p>
            <div className="flex justify-end gap-3">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                <TabsTrigger
                  value="article"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Articulo
                </TabsTrigger>
                <TabsTrigger
                  value="branch"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Lote
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="article" className="h-[calc(100vh-250px)] overflow-hidden">
           <ArticleForm/>
          </TabsContent>
          <TabsContent value="branch" >
           <BatchForm/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateTraceability;
