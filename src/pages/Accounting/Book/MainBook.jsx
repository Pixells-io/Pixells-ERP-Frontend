import React from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, cloudDownloadOutline, gridOutline, list } from "ionicons/icons";

import TableBook from "../components/Tabs/DataTableBook";
import PeriodSelect from "../components/PeriodSelect";

const MainBook = () => {
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
            <div>Accounting - policy</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-poppins text-xl font-bold text-[#44444F]">
              Libro Diario
            </p>
          </div>
          <div className="flex-1 flex justify-end gap-x-2">
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#E8E8E8]"
        >
          <IonIcon
            icon={cloudDownloadOutline}
            className="h-5 w-5 cursor-pointer text-[#44444F]"
          ></IonIcon>
        </div>
      </div>
        </div>

        {/*content */}
        <div className="bg-white p-7 overflow-auto">
          <PeriodSelect />
          <div className="overflow-auto mt-6">
            <TableBook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBook;
