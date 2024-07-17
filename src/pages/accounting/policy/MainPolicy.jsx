import React from "react";
import { IonIcon } from "@ionic/react";
import { informationCircle, addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { Link} from "react-router-dom";
import DataTable from "../components/Tabs/DataTablePolicy";

const MainPolicy = () => {
  const misDatos = [
    { tipo:'AC-3', numeracion: 1, fecha:'22-04-2023', estado: 'En progreso', xml:'Ninguno',observaciones:'',total:'0.00' },
    { tipo:'AC-5', numeracion: 2, fecha:'18-04-2023', estado: 'Borrador', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-4', numeracion: 3, fecha:'03-03-2023', estado: 'En progreso', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-1', numeracion: 4, fecha:'27-04-2023', estado: 'Finalizado', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-2', numeracion: 5, fecha:'17-08-2024', estado: 'En progreso', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-7', numeracion: 6, fecha:'22-10-2024', estado: 'Borrador', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-9', numeracion: 7, fecha:'03-11-2024', estado: 'Finalizado', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-12', numeracion: 8, fecha:'14-04-2023', estado: 'Finalizado', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-11', numeracion: 9, fecha:'12-12-2023', estado: 'Borrador', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-8', numeracion: 10, fecha:'21-08-2023', estado: 'Borrador', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
    { tipo:'AC-14', numeracion: 11, fecha:'21-08-2023', estado: 'Finalizado', xml:'Ocupado',observaciones:'Abierto',total:'0.00' },
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
            <div>
            Accounting - policy
            </div>
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
