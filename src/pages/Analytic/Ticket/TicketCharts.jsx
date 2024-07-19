import React from "react";
import { Button } from "@/components/ui/button";
import { BarChartMultiComp } from "@/components/charts/BarChartMultiComp";
import AverageTimeCard from "../Components/AverageTimeCard";

const chartDataMulti = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfigMulti = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const dataKey = [
  { dataKey: "desktop", fill: "var(--color-desktop)" },
  { dataKey: "mobile", fill: "var(--color-mobile)" },
];

function TicketCharts({ data }) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-10 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartMultiComp
              chartData={chartDataMulti}
              chartConfig={chartConfigMulti}
              title={"Creados"}
              subtitle={"puede agregar subtitle"}
              dataKeys={dataKey}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartMultiComp
              chartData={chartDataMulti}
              chartConfig={chartConfigMulti}
              title={"Asignados"}
              subtitle={"puede agregar subtitle"}
              dataKeys={dataKey}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 rounded-xl drop-shadow sm:col-span-12 xl:col-span-6">
            <AverageTimeCard
              title={"Average Time"}
              days={data.tickets_resolve_days}
            />
          </div>
        </div>
        <div className="col-span-12 flex justify-center md:col-span-12 xl:col-span-2">
          <Button
            variant="outline"
            className="h-6 rounded-3xl border-[1px] border-[#696974] bg-inherit text-xs font-medium text-grisText"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TicketCharts;
