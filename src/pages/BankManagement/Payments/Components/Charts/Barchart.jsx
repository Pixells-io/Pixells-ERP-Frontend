import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    color: "#dc1c3b",
  },
};

const getCurrentMonth = () => {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return months[new Date().getMonth()];
};

export function Component({chartData}) {
  const currentMonth = getCurrentMonth();
  const currentMonthIndex = chartData.findIndex(data => data.month === currentMonth);

  // Custom Bar Component
  const CustomBar = (props) => {
    const { x, y, width, height, fill, payload } = props;
    const isCurrentMonth = payload.month === currentMonth;
    const isFutureMonth = chartData.indexOf(payload) > currentMonthIndex;

    return (
      <path
        d={`M ${x},${y + height} 
           L ${x},${y + 6} 
           Q ${x},${y} ${x + 6},${y}
           L ${x + width - 6},${y}
           Q ${x + width},${y} ${x + width},${y + 6}
           L ${x + width},${y + height}`}
        fill={isCurrentMonth || isFutureMonth ? "transparent" : fill}
        stroke={isCurrentMonth ? "#DC1C3B" : (isFutureMonth ? "#CCCCCC" : "none")}
        strokeWidth={isCurrentMonth ? 0.5 : (isFutureMonth ? 0.5 : 0)}
      />
    );
  };

  const CustomXAxisTick = (props) => {
    const { x, y, payload } = props;
    const isCurrentMonth = payload.value === currentMonth;

    if (isCurrentMonth) {
      return (
        <g transform={`translate(${x},${y})`}>
          <rect
            x="-20"
            y="0"
            width="40"
            height="20"
            fill="#44444F"
            rx="10"
            ry="10"
          />
          <text
            x="0"
            y="14"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="bold"
            style={{ fill: '#FFFFFF' }}
          >
            {payload.value.slice(0, 3)}
          </text>
        </g>
      );
    }

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x="0"
          y="14"
          textAnchor="middle"
          fill="#666"
          fontSize="12"
        >
          {payload.value.slice(0, 3)}
        </text>
      </g>
    );
  };

  const formatYAxis = (tickItem) => {
    return `${tickItem / 10000}k`;
  };


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      const monthIndex = chartData.findIndex(data => data.month === label);
      let status;
      let color;
  
      if (monthIndex < currentMonthIndex) {
        status = "Pagado";
        color = "#DC1C3B";
      } else if (monthIndex === currentMonthIndex) {
        status = "En Proceso";
        color = "#DC1C3B";
      } else {
        status = "Por Pagar";
        color = "#CCCCCC";
      }
  
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow">
          <p className="font-poppins text-sm font-bold">{label}</p>
          <div className="flex items-center justify-between gap-3">
            <div 
              style={{ 
                backgroundColor: color, 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                marginRight: '6px' 
              }} 
            />
            <p className="text-sm mb-0">{status}</p>
            <p className="font-bold mb-0">${dataPoint.desktop.toLocaleString()}</p>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <ChartContainer config={chartConfig} className="flex h-[184px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={{ stroke: '#CCCCCC', strokeWidth: 1 }}
          tick={<CustomXAxisTick />}
        />
        <YAxis
          tickFormatter={formatYAxis}
          axisLine={false}
          tickLine={false}
          ticks={[100000, 150000, 200000, 250000, 300000]}
        />
       <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          shape={<CustomBar />}
        />
      </BarChart>
    </ChartContainer>
  );
}