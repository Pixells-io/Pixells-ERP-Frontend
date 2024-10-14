import React, { useState } from "react";
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
import { arrowForward } from "ionicons/icons";
import { Link } from "react-router-dom";
import PaymentDataTable from "./PaymentData";
const CircularProgressBar = ({ value }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-[60px] w-[60px]">
      <svg className="h-full w-full -rotate-90 transform">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 224, 224, 1)" />
            <stop offset={`${value}%`} stopColor="rgba(62, 197, 255, 1)" />
          </linearGradient>
          <filter id="inset-shadow">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="1" result="offset-blur" />
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
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="30"
          cy="30"
        />
        <circle
          className="text-blue-500"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#gradient1)"
          fill="transparent"
          r={radius}
          cx="30"
          cy="30"
          filter="url(#inset-shadow)"
        />
      </svg>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
        <span className="text-sm">{value}%</span>
      </div>
    </div>
  );
};

const CircularProgressBar2 = ({ value }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-[60px] w-[60px]">
      <svg className="h-full w-full -rotate-90 transform">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 121, 171, 1)" />
            <stop offset={`${value}%`} stopColor="rgba(220, 28, 59, 1)" />
          </linearGradient>
          <filter id="drop-shadow">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            <feFlood
              floodColor="rgba(0, 0, 0, 0.1)"
              floodOpacity="1"
              result="color"
            />
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
          className="text-[#D7586B40]"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="30"
          cy="30"
        />
        <circle
          className="text-red"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#gradient2)"
          fill="transparent"
          r={radius}
          cx="30"
          cy="30"
          filter="url(#drop-shadow)"
        />
      </svg>

      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
        <span className="text-sm">{value}%</span>
      </div>
    </div>
  );
};
const ReceiptAnalyticsTable = ({ deliveryData }) => {
  const [selectedPaymentData, setSelectedPaymentData] = useState(null);

  const paymentData = [
    {
      item: 'Naranja',
      cantidadPedida: 28,
      cantidadRecibida: 26,
      unidad: 'CAJA',
      montoRecibido: '$400,000',
      backOrder: 'BO-1978',
      quienRecibio: '',
      fechaRecibo: '04-06-2024',
      documentoId: '1'
    },
    {
      item: 'Lima',
      cantidadPedida: 28,
      cantidadRecibida: 26,
      unidad: 'CAJA',
      montoRecibido: '$400,000',
      backOrder: '',
      quienRecibio: '',
      fechaRecibo: '04-06-2024',
      documentoId: '1'
    },
  ];

  const handlerShowPayment = (index) => {
    setSelectedPaymentData(paymentData[index]);
  };
  const handleReady = () => {
    setSelectedPaymentData(null); 
  };
  return (
    <div className="flex h-full flex-col rounded-xl bg-white">
      {selectedPaymentData ? (
        <PaymentDataTable paymentData={[selectedPaymentData]} onReady={handleReady}/>
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              RESUMEN DE PEDIDO
            </span>
          </div>

          <div className="flex justify-start">
            <div className="flex items-start justify-evenly space-x-12 p-6">
              <div className="flex justify-start">
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-4">
                  <CircularProgressBar2 value={96} />
                <div className="flex flex-col">
                  <span className="text-base font-bold">56</span>
                  <span className="text-sm">/75 art.</span>
                </div>
              </div>
              <Button className="mt-2 h-[31px] border-[0.5px] gap-3 border-[#D7D7D7] bg-[#F5F5F5] font-roboto text-xs text-[#44444F] hover:bg-[#F5F5F5]">
                Ver Estadísticas Completas
                <IonIcon icon={arrowForward} size="small"></IonIcon>
              </Button>
            </div>
          </div>
          <div className="mb-2 flex justify-end gap-4">
            <CircularProgressBar value={85} />
            <div className="flex flex-col">
              <span className="text-base font-bold">64</span>
              <span className="text-sm">/100 pedidos</span>
              <span className="text-xs">Entregadas en Tiempo</span>
            </div>
              </div>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="mx-2 flex-1 overflow-auto p-6">
            <div className="overflow-x-auto">
              <Table className="w-full border-collapse">
                <TableHeader>
                  <TableRow className="border-b border-[#44444F]">
                    <TableHead className="font-poppins text-xs text-[#44444F]">Entrega</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">Folio</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">SKU.Recibidos</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">Productos Total</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">Ubicación</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">Quién Recibió</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">Fecha de Recibido</TableHead>
                    <TableHead className="font-poppins text-xs text-[#44444F]">Documento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveryData.map((delivery, index) => (
                    <TableRow key={index}>
                      <TableCell>{delivery.entrega}</TableCell>
                      <TableCell>{delivery.folio}</TableCell>
                      <TableCell>{delivery.skuRecibidos}</TableCell>
                      <TableCell>{delivery.productosTotal}</TableCell>
                      <TableCell>{delivery.ubicacion}</TableCell>
                      <TableCell>{delivery.quienRecibio}</TableCell>
                      <TableCell>{delivery.fechaRecibido}</TableCell>
                      <TableCell
                        className={"font-roboto text-sm text-[#5B89FF]"}
                        onClick={() => handlerShowPayment(index)}
                      >
                        Ver Documento
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Footer */}
          <div className="flex w-full items-center justify-between px-6 py-4">
            <label className="text-xs font-light text-[#8F8F8F]">Actualizado 07 septiembre 2024</label>
            <Button
              className="h-[31px] rounded-xl bg-[#E0E0E0] px-6 py-4 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
              variant="outline"
            >
              Listo
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReceiptAnalyticsTable;

