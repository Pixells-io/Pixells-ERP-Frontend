import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
} from "ionicons/icons";
import Inputs from "../components/InputGroup";
import FormGroup from "../components/FormGroup";

const CreateArticle = () => {


  return (
    <div className="flex w-full">
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
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        {/* Top content */}
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-0 flex flex-col space-y-2 font-roboto text-[#8F8F8F] lg:ml-16 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Artículo
          </p>
        </div>
        {/* Content */}
        
        <div className="overflow-auto w-full space-y-4">
          <Inputs />
          <FormGroup/>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;

