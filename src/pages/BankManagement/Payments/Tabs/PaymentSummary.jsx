import React from "react";
import { Component } from "../Components/Charts/Barchart";
import ClientPipelineTable from "../Components/Tables/NextClientsTable";
import BankDataTable from "../Components/Tables/BanksDataTable";
import StatusCard from "../Components/StatusCard";

const PaymentSummary = () => {
  const data = [
    {
      cliente: "San Lupe de SA de CV",
      cantidad: "$280,000.00",
      fecha: "14 oct 24",
      estatus: "Programado",
    },
    {
      cliente: "San Carlos SA de CV",
      cantidad: "$100,000.00",
      fecha: "19 oct 24",
      estatus: "Programado",
    },
  ];

  const banks = [
    {
      cliente: "Banamex",
      cantidad: "$280,000.00",
      fecha: "14 oct 24",
      estatus: "",
    },
    {
      cliente: "Bancomer",
      cantidad: "$100,000.00",
      fecha: "19 oct 24",
      estatus: "",
    },
  ];

  const banksData = [
    { title: "Banamex" },
    { title: "Bancomer" },
    { title: "Santander" },
    { title: "BanRegio" },
    { title: "Banamex" },
    { title: "Bancomer" },
    { title: "Santander" },
    { title: "BanRegio" },
  ];

  const months = [
    { month: "Enero", desktop: 186000 },
    { month: "Febrero", desktop: 305000 },
    { month: "Marzo", desktop: 237000 },
    { month: "Abril", desktop: 173000 },
    { month: "Mayo", desktop: 209000 },
    { month: "Junio", desktop: 214000 },
    { month: "Julio", desktop: 214000 },
    { month: "Agosto", desktop: 214000 },
    { month: "Septiembre", desktop: 222000 },
    { month: "Octubre", desktop: 203000 },
    { month: "Noviembre", desktop: 254000 },
    { month: "Diciembre", desktop: 254000 },
  ];

  // Función para obtener los meses anteriores hasta enero
  const getPreviousMonths = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const previousMonths = [];
    for (let i = currentMonth - 1; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), i, 1);
      previousMonths.push(date.toLocaleString("es-ES", { month: "long" }));
    }
    return previousMonths;
  };

  const previousMonths = getPreviousMonths();
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-full flex-col rounded-[10px] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE PAGOS
        </span>
      </div>

      {/* Body */}
      <div className="mx-2 flex-1 overflow-auto p-6">
        <div className="flex flex-col">
          <h3 className="font-poppins text-lg font-semibold text-[#44444F]">
            Pagado
          </h3>
          <div className="mb-2 flex items-center justify-start">
            <span className="font-poppins text-lg text-[#696974]">
              $175,000.00
            </span>
            <h3 className="ml-2 font-poppins text-lg font-semibold text-[#44444F]">
              este mes
            </h3>
          </div>

          <div className="mt-6">
            <Component chartData={months} />
          </div>
          <h2 className="pt-12 text-left font-poppins text-sm font-medium">
            PROXIMOS
          </h2>
          <ClientPipelineTable data={data} />
          <h2 className="text-left font-poppins text-sm font-medium">BANCOS</h2>
          <BankDataTable data={banks} />
          <div className="flex h-[30px] w-[70px] items-center justify-center rounded-[20px] border border-[#D7D7D7] text-center font-roboto text-xs text-[#8F8F8F]">
            {currentYear}
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 p-4 max-w-[500px]">
              {previousMonths.map((month, index) => (
                <div
                  key={`${month}-${index}`}
                  className="min-w-[150px]  flex-shrink-0"
                >
                  <StatusCard month={month} years={currentYear} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
