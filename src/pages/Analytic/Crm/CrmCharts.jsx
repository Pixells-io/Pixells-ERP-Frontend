import React from "react";
import { Button } from "@/components/ui/button";
import PieChartComp from "@/components/charts/PieChartComp";
import { BarChartHorComp } from "@/components/charts/BarChartHorComp";
import { BarChartComp } from "@/components/charts/BarChartComp";
import { AreaChartComp } from "@/components/charts/AreaChartComp";

//chart

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

function CrmCharts() {
  return (
    <div className="overflow-auto">

    <div className="grid grid-cols-12 grid-flow-col">
      <div className="col-span-12 pt-12 md:pt-0 md:col-span-12 xl:col-span-10 grid grid-cols-12 gap-x-8 gap-y-4">
        <div className="col-span-12 sm:col-span-12 xl:col-span-6 rounded-3xl	bg-red-400">
          <BarChartHorComp />
        </div>
        <div className="col-span-12 sm:col-span-12 xl:col-span-6">
          <BarChartComp />
        </div>
        <div className="col-span-12 sm:col-span-12 xl:col-span-6">
          <PieChartComp
            chartData={chartData}
            chartConfig={chartConfig}
            centerTitle={"Visitor"}
            title={"Pie Chart - Donut with Text"}
            subtitle={"January - June 2024"}
            footerTitle={"Trending up by 5.2% this month"}
            footerSubTitle={"Showing total visitors for the last 6 months"}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 xl:col-span-6">
          <PieChartComp
            chartData={chartData}
            chartConfig={chartConfig}
            centerTitle={"Visitor"}
            title={"Pie Chart - Donut with Text"}
            subtitle={"January - June 2024"}
            footerTitle={"Trending up by 5.2% this month"}
            footerSubTitle={"Showing total visitors for the last 6 months"}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 xl:col-span-12">
          <AreaChartComp />
        </div>
      </div>
      <div className="col-span-12  md:col-span-12 xl:col-span-2 flex justify-center">
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

export default CrmCharts;
