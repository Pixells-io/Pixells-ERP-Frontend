import React from "react";
import { Button } from "@/components/ui/button";
import { LineChartComp } from "@/components/charts/LineChartComp";
import { BarChartComp } from "@/components/charts/BarChartComp";
import AverageTimeCard from "../Components/AverageTimeCard";
import { BarChartHorComp } from "@/components/charts/BarChartHorComp";

const chartDataBarHor = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfigBarHor = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const chartDataLine = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfigLine = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

function ProjectManagerCharts() {
  return (
    <div className="overflow-auto">
      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <LineChartComp
              chartData={chartDataLine}
              chartConfig={chartConfigLine}
              title={"More Activities Created"}
              subtitle={"January - June 2024"}
              dataKeyX={"month"}
              dataKeyLabel={"desktop"}
              footerTitle={"Trending up by 5.2% this month"}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartComp
              chartData={chartDataBarHor}
              chartConfig={chartConfigBarHor}
              title={"More Activities Completed"}
              subtitle={"January - June 2024"}
              dataKeyX={"month"}
              footerTitle={"Trending up by 5.2% this month "}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />{" "}
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartComp
              chartData={chartDataBarHor}
              chartConfig={chartConfigBarHor}
              title={"Average Time Completed Task"}
              subtitle={"January - June 2024"}
              dataKeyX={"month"}
              footerTitle={"Trending up by 5.2% this month "}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />{" "}
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartHorComp
              chartData={chartDataBarHor}
              chartConfig={chartConfigBarHor}
              title={"Top Priority"}
              subtitle={"January - June 2024"}
              dataKeyX={"desktop"}
              dataKeyY={"month"}
              footerTitle={"Trending up by 5.2% this month "}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <AverageTimeCard title={"Strategic Objective W/M Activities"} hours={"200"} />
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

export default ProjectManagerCharts;
