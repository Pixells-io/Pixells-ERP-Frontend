import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons"; 

import { TrendingUp } from "lucide-react";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const createGradient = (id, colors) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    {colors.map((color, index) => (
      <stop
        key={index}
        offset={`${(index / (colors.length - 1)) * 100}%`}
        stopColor={color}
      />
    ))}
  </linearGradient>
);

const MetricCard = ({ percentage, value, total, label, gradientColors, id, backgroundColor }) => {
  const chartData = [{ value: percentage, fill: `url(#gradient-${id})` }];

  const chartConfig = {
    value: { label: label },
  };

  return (
    <Card className="flex flex-col w-[250px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-sm font-medium">
          {value}/{total} {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={110}
          >
            <defs>
              {createGradient(`gradient-${id}`, gradientColors)}
            </defs>
            <PolarGrid gridType="circle" radialLines={false} stroke="none" />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
            <RadialBar
              dataKey="value"
              background={{ fill: backgroundColor }}
              cornerRadius={10}
            />
            <Label
              content={({ viewBox }) => (
                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                  <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                    {percentage}%
                  </tspan>
                </text>
              )}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <button className="text-sm text-muted-foreground flex items-center">
          Ver estadística completa
          <TrendingUp className="ml-1 h-4 w-4" />
        </button>
      </CardFooter>
    </Card>
  );
};

export function DashboardMetrics() {
  return (
    <div className="flex space-x-4">
      <MetricCard
        percentage={57}
        value={56}
        total={75}
        label="art."
        gradientColors={['#DC1C3B', '#FF79AB', '#DC1C3B', '#FF79AB']}
        id="red"
        backgroundColor="#D7586B40"
      />
      <MetricCard
        percentage={64}
        value={64}
        total={100}
        label="pedidos Entregados en tiempo"
        gradientColors={['#3EC5FF', '#00E0E0', '#3EC5FF', '#00E0E0']}
        id="blue"
        backgroundColor="#5B89FF40"
      />
    </div>
  );
}

const ReceiptAnalyticsTable = () => {

  return (
    <div className="flex flex-col h-full bg-white rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE PEDIDO
        </span>
      </div>
      
      {/* Scrollable Body */}
      <div className="flex-1 overflow-auto mx-2 p-6">
      
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b border-[#44444F]">
                  <TableHead className="font-poppins text-[#44444F] text-xs">Entrega</TableHead>
                  <TableHead className="font-poppins text-[#44444F] text-xs">Folio</TableHead>
                  <TableHead className="font-poppins text-[#44444F] text-xs">SKU.Recibidos</TableHead>
                  <TableHead className="font-poppins text-[#44444F] text-xs">Productos Total</TableHead>
                  <TableHead className="font-poppins text-[#44444F] text-xs">Ubicación</TableHead>
                  <TableHead className="font-poppins text-[#44444F] text-xs">Quién Recibio</TableHead>
                  <TableHead className="font-poppins text-[#44444F] text-xs">Fecha de Recibido</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                
                <TableRow>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
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
        <Button className="h-[31px] rounded-xl px-6 py-4 bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]" variant="outline">Listo</Button>
      </div>
    </div>
  );
};

export default ReceiptAnalyticsTable;