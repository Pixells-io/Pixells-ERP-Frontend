import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralForm from "./Forms/GeneralForm";
import DataTable from "./Table/AccountTable";

const FormGroup = ({ formData, handleInputChange }) => {
 /* const sampleData = [
    { nombre: 'Cuenta A', codigoCuenta: '001', nombreCuenta: 'Cuenta de Ejemplo A' },
    { nombre: 'Cuenta B', codigoCuenta: '002', nombreCuenta: 'Cuenta de Ejemplo B' },
    { nombre: 'Cuenta C', codigoCuenta: '003', nombreCuenta: 'Cuenta de Ejemplo C' },
    { nombre: 'Cuenta D', codigoCuenta: '004', nombreCuenta: 'Cuenta de Ejemplo D' },
    { nombre: 'Cuenta E', codigoCuenta: '005', nombreCuenta: 'Cuenta de Ejemplo E' },
    { nombre: 'Cuenta F', codigoCuenta: '006', nombreCuenta: 'Cuenta de Ejemplo F' },
    { nombre: 'Cuenta G', codigoCuenta: '007', nombreCuenta: 'Cuenta de Ejemplo G' },
    { nombre: 'Cuenta H', codigoCuenta: '008', nombreCuenta: 'Cuenta de Ejemplo H' },
    { nombre: 'Cuenta I', codigoCuenta: '009', nombreCuenta: 'Cuenta de Ejemplo I' },
    { nombre: 'Cuenta J', codigoCuenta: '010', nombreCuenta: 'Cuenta de Ejemplo J' },
    { nombre: 'Cuenta K', codigoCuenta: '011', nombreCuenta: 'Cuenta de Ejemplo K' }
  ];
*/
  const [generalData, setGeneralData] = useState({
    street: "",
    ext: "",
    int: "",
    cp: "",
    city: "",
    colony: "",
    state: "",
    country: ""
  });
  return (
    <div className="w-full overflow-auto">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="flex flex-wrap gap-3 justify-start bg-transparent mb-4">
          {[
            { value: "general", label: "General" },
          
          ].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="px-4 py-1 data-[state=active]:bg-primario data-[state=active]:text-white bg-blancoBox2 text-grisHeading hover:bg-gray-300 rounded-full transition-colors text-center flex items-center justify-center text-[14px] font-roboto"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full bg-white rounded-[10px] p-4">
          <TabsContent value="general">
            <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">GENERAL</h2>
            <GeneralForm formData={formData} handleInputChange={handleInputChange} />
          </TabsContent>
         {/* <TabsContent value="account">
            <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">ASOCIAR CUENTAS CONTABLES</h2>
            
            <DataTable data={sampleData}>
            
          </TabsContent>*/}
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;