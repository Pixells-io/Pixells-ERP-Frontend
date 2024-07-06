import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { Link} from "react-router-dom";
import DataTable from "../components/DataTablePolicy";

const MainPolicy = () => {
  const misDatos = [
    { tipo:'AC', numeracion: 1, fecha:'27-04-2023', estado: 'Abierto', xml:'Ninguno',observaciones:'',total:'0.00' },
   
  ];
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
            Accounting - policy
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Pólizas de Ajuste Contable
          </p>
        </div>
        <Link to="/accounting/policy/create">
        <IonIcon
          icon={addCircleOutline}
          size="large"
          className="text-blue-500"
        />
      </Link>
        {/*content */}
        <DataTable data={misDatos} />
      </div>
    </div>
  );
};

export default MainPolicy;
