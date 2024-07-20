import React,{useMemo} from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, print, copy, closeCircle } from "ionicons/icons";
import InfoTable from "../../components/Tabs/InfoTable";
import { useNavigate } from "react-router-dom"; 
import DataTableDetails from "../../components/Tabs/DataTableDetails";

const AccountDetail = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/accounting/policy");
  };
//ARRAYS
const dataDetails = [
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  {
    cuenta: "AC",
    cliente: "Empresa A",
    documento: "56273",
    descripcion: "Venta de productos",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  
];

const dataMovements = [
  {
    cuenta: "AC",
    cliente: "Empresa A",
    codigo: "001",
    costos: "Ventas",
    debito: "1000",
    credito: "0"
  },
  // ... more data
];

const columnsDetails = useMemo(
  () => [
    { accessorKey: "cuenta", header: "Cuenta contable" },
    { accessorKey: "cliente", header: "Cliente/Proveedor" },
    { accessorKey: "documento", header: "No. de documento" },
    { accessorKey: "descripcion", header: "Descripción" },
    { accessorKey: "costos", header: "Centro de costos" },
    { accessorKey: "debito", header: "Débito" },
    { accessorKey: "credito", header: "Crédito" },
  ],
  []
);

const columnsMovements = useMemo(
  () => [
    { accessorKey: "cuenta", header: "Cuenta contable" },
    { accessorKey: "cliente", header: "Cliente/Proveedor" },
    { accessorKey: "codigo", header: "Código" },
    { accessorKey: "costos", header: "Centro de costos" },
    { accessorKey: "debito", header: "Débito" },
    { accessorKey: "credito", header: "Crédito" },
  ],
  []
);



  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4 overflow-hidden">
        {/* navigation inside */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-gris2">
              <div className="h-12 w-12">
                <IonIcon
                  icon={chevronBack}
                  size="large"
                  className="rounded-3xl bg-blancoBox p-1"
                />
              </div>
              <div className="h-12 w-12">
                <IonIcon
                  icon={chevronForward}
                  size="large"
                  className="rounded-3xl bg-blancoBox p-1"
                />
              </div>
            </div>
            <div className="font-roboto text-sm text-grisText">
              <div>Accounting - policy</div>
            </div>
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400">
            <IonIcon
              icon={closeCircle}
              size="small"
              className="text-grisText"
              onClick={handleClose}
            />
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
        </div>
        
        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Asiento contable
          </p>
        </div>
       {/*Content of the page */}
        <div className="mb-2 rounded-xl bg-white p-7 overflow-auto relative">
          <div className="absolute top-4 right-16 flex space-x-3">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400">
              <IonIcon
                icon={copy}
                size="small"
                className="text-grisText"
              />
            </div>
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400">
              <IonIcon
                icon={print}
                size="small"
                className="text-grisText"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full lg:w-1/2 mb-4">
              <InfoTable />
            </div>
           <br/>
            {/*Container datatable about account*/}
            <div className="w-full">
            <DataTableDetails
              data={dataDetails} 
              columns={columnsDetails} 
              title="Movimientos" 
            />
            </div>
            <br/>
            <DataTableDetails
              data={dataMovements} 
              columns={columnsMovements} 
              title="Asiento Contable PAC-AC-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;