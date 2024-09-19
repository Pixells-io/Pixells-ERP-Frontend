import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Traceability from "../Table/TraceabilityTable";
const TraceabilityDetails = () => {
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
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Trazabilidad
          </p>
          <div className="flex justify-end">
            <Link to="/inventory/merchandise-movements">
              <Button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                />
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}
        <div className="overflow-auto rounded-lg bg-blancoBg">
          <div className="w-full border-b p-4">
            <span className="text-md font-poppins font-bold text-[#44444F]">
              TRAZABILIDAD DE MOVIMIENTOS
            </span>
          </div>
          <div className="p-4">
            <Traceability />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraceabilityDetails;
