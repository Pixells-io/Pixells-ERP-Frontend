import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
const CircularProgressBar = ({ value }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-40 w-40">
      <svg className="h-full w-full -rotate-90 transform">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 224, 224, 1)" />
            <stop offset="100%" stopColor="rgba(62, 197, 255, 1)" />
          </linearGradient>
          <filter id="inset-shadow">
            <feOffset dx="0" dy="4" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            <feFlood floodColor="black" floodOpacity="0.15" result="color" />
            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>
        <circle
          className="text-[#5B89FF40]"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
        />
        <circle
          className="text-blue-500"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#gradient1)"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
          filter="url(#inset-shadow)"
        />
      </svg>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
        <span className="text-xl">{value}%</span>
      </div>
    </div>
  );
};

const CircularProgressBar2 = ({ value }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-40 w-40">
      <svg className="h-full w-full -rotate-90 transform">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 121, 171, 1)" />
            <stop offset="100%" stopColor="rgba(220, 28, 59, 1)" />
          </linearGradient>
          <filter id="drop-shadow">
            <feOffset dx="0" dy="4" />
            <feGaussianBlur stdDeviation="4" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="rgba(0, 0, 0, 0.1)" floodOpacity="1" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>
        <circle
          className="text-[#D7586B40]"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
        />
        <circle
          className="text-red"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#gradient2)"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
          filter="url(#drop-shadow)"
        />
      </svg>
      {/* Arrow */}
      <IonIcon
              icon={chevronForward}
              size="large"
              className="bg-blancoBox p-1"
            ></IonIcon>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
        <span className="text-xl">{value}%</span>
      </div>
    </div>
  );
};

const ReceiptAnalyticsTable = () => {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE PEDIDO
        </span>
      </div>

      <div className="flex justify-evenly">
      <CircularProgressBar2 value={60} />
        <CircularProgressBar value={50} />
        
      </div>

      {/* Scrollable Body */}
      <div className="mx-2 flex-1 overflow-auto p-6">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Entrega
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Folio
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  SKU.Recibidos
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Productos Total
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Ubicación
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Quién Recibió
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Fecha de Recibido
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Entrega 1</TableCell>
                <TableCell>P-1978</TableCell>
                <TableCell>28</TableCell>
                <TableCell>359.00</TableCell>
                <TableCell>IVA 16%</TableCell>
                <TableCell>4</TableCell>
                <TableCell>L</TableCell>
                <TableCell>04-06-2024</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Entrega 2</TableCell>
                <TableCell>BO-1978</TableCell>
                <TableCell>28</TableCell>
                <TableCell>359.00</TableCell>
                <TableCell>IVA 16%</TableCell>
                <TableCell>4</TableCell>
                <TableCell>L</TableCell>
                <TableCell>04-06-2024</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-full items-center justify-between px-6 py-4">
        <label className="text-xs font-light text-[#8F8F8F]">
          Actualizado 07 septiembre 2024
        </label>
        <Button
          className="h-[31px] rounded-xl bg-[#E0E0E0] px-6 py-4 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
          variant="outline"
        >
          Listo
        </Button>
      </div>
    </div>
  );
};

export default ReceiptAnalyticsTable;