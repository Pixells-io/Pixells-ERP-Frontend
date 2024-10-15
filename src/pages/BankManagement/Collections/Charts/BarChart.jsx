import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";



const chartConfig = {
  desktop: {
    label: "Ventas",
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


  //Grafica Personalizada
  const CustomBar = (props) => {
    const { x, y, width, height, fill, payload } = props;
    const isCurrentMonth = payload.month === currentMonth;
    const isFutureMonth = chartData.indexOf(payload) > currentMonthIndex;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={isCurrentMonth || isFutureMonth ? "transparent" : fill}
          stroke={isCurrentMonth ? "#DC1C3B" : (isFutureMonth ? "#D7D7D7" : "none")}
          strokeWidth={isCurrentMonth ? 1 : (isFutureMonth ? 1 : 0)}
          rx={4}
          ry={4}
        />
      </g>
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
    return `${tickItem / 1000}k`;
  };

  return (
    <ChartContainer config={chartConfig} className="flex h-[184px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tick={<CustomXAxisTick />}
        />
        <YAxis
          tickFormatter={formatYAxis}
          axisLine={false}
          tickLine={false}
          ticks={[100000, 150000, 200000, 250000, 300000]}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          shape={<CustomBar />}
        />
      </BarChart>
    </ChartContainer>
  );
}