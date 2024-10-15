import React from "react";
import { Component } from "../Charts/BarChart";
import ClientPipelineTable from "../Table/NextClientsDashboard";
import BankTable from "../Table/BanksDashboard";
import StatusCard from "../Components/StatusCard";

const BillingSummary = () => {
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
    { title: "Banamex", year: 2024 },
    { title: "Bancomer", year: 2024 },
    { title: "Santander", year: 2024 },
    { title: "BanRegio", year: 2024 },
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
  return (
    <div className="flex h-full flex-col rounded-[10px] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE COBROS
        </span>
      </div>

      {/* Body */}
      <div className="mx-2 flex-1 overflow-auto p-6">
        <div className="flex flex-col">
          <h3 className="font-poppins text-lg font-semibold text-[#44444F]">
            Cobrado
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
          <BankTable data={banks} />

          <div className="mb-6 overflow-x-auto">
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {banksData.map(({ title, year }) => (
                <StatusCard key={title} title={title} years={year} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="flex h-[54px] w-full items-center justify-between border-t p-4">
        <label className="text-xs font-light text-[#8F8F8F]">
          Actualizado 07 septiembre 2024
        </label>

        <Button
          className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] px-6 py-4 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
          variant="outline"
        >
          Listo
        </Button>
      </div> */}
    </div>
  );
};

export default BillingSummary;
