import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
} from "ionicons/icons";
import CardCarousel from "./components/CardCarousel";
import SelectsQuote from "./components/SelectGroup";
import QuoteList from "./components/QuoteList";
const MainQuotes = () => {
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
            <div>Invoice - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COTIZACIONES
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nueva Cotización
          </p>
          <div className="flex gap-4 pl-4 pt-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
              <IonIcon
                icon={copy}
                size="small"
                className="cursor-pointer text-[#696974]"
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
              <IonIcon
                icon={print}
                size="small"
                className="cursor-pointer text-[#696974]"
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
              <IonIcon
                icon={create}
                size="small"
                className="cursor-pointer text-[#696974]"
              />
            </div>
            <CardCarousel />
          </div>
        </div>
        {/*content */}
        <div className="flex h-full overflow-auto flex-col space-y-6">
          <SelectsQuote />
          <QuoteList/>
        </div>
      </div>
    </div>
  );
};

export default MainQuotes;
