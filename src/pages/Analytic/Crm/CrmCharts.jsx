import React from "react";
import { Button } from "@/components/ui/button";
import PieChartComp from "@/components/charts/PieChartComp";
import { BarChartHorComp } from "@/components/charts/BarChartHorComp";
import { BarChartComp } from "@/components/charts/BarChartComp";
import { AreaChartComp } from "@/components/charts/AreaChartComp";

//chart

const chartDataPie = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
const chartConfigPie = {
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

const chartDataArea = [
  { date: "2024-04-01", desktop: 222 },
  { date: "2024-04-02", desktop: 97 },
  { date: "2024-04-03", desktop: 167 },
  { date: "2024-04-04", desktop: 242 },
  { date: "2024-04-05", desktop: 373 },
  { date: "2024-04-06", desktop: 301 },
  { date: "2024-04-07", desktop: 245 },
  { date: "2024-04-08", desktop: 409 },
  { date: "2024-04-09", desktop: 59 },
  { date: "2024-04-10", desktop: 261 },
  { date: "2024-04-11", desktop: 327 },
  { date: "2024-04-12", desktop: 292 },
  { date: "2024-04-13", desktop: 342 },
  { date: "2024-04-14", desktop: 137 },
  { date: "2024-04-15", desktop: 120 },
  { date: "2024-04-16", desktop: 138 },
  { date: "2024-04-17", desktop: 446 },
  { date: "2024-04-18", desktop: 364 },
  { date: "2024-04-19", desktop: 243 },
  { date: "2024-04-20", desktop: 89 },
  { date: "2024-04-21", desktop: 137 },
  { date: "2024-04-22", desktop: 224 },
  { date: "2024-04-23", desktop: 138 },
  { date: "2024-04-24", desktop: 387 },
  { date: "2024-04-25", desktop: 215 },
  { date: "2024-04-26", desktop: 75 },
  { date: "2024-04-27", desktop: 383 },
  { date: "2024-04-28", desktop: 122 },
  { date: "2024-04-29", desktop: 315 },
  { date: "2024-04-30", desktop: 454 },
  { date: "2024-05-01", desktop: 165 },
  { date: "2024-05-02", desktop: 293 },
  { date: "2024-05-03", desktop: 247 },
  { date: "2024-05-04", desktop: 385 },
  { date: "2024-05-05", desktop: 481 },
  { date: "2024-05-06", desktop: 498 },
  { date: "2024-05-07", desktop: 388 },
  { date: "2024-05-08", desktop: 149 },
  { date: "2024-05-09", desktop: 227 },
  { date: "2024-05-10", desktop: 293 },
  { date: "2024-05-11", desktop: 335 },
  { date: "2024-05-12", desktop: 197 },
  { date: "2024-05-13", desktop: 197 },
  { date: "2024-05-14", desktop: 448 },
  { date: "2024-05-15", desktop: 473 },
  { date: "2024-05-16", desktop: 338 },
  { date: "2024-05-17", desktop: 499 },
  { date: "2024-05-18", desktop: 315 },
  { date: "2024-05-19", desktop: 235 },
  { date: "2024-05-20", desktop: 177 },
  { date: "2024-05-21", desktop: 82 },
  { date: "2024-05-22", desktop: 81 },
  { date: "2024-05-23", desktop: 252 },
  { date: "2024-05-24", desktop: 294 },
  { date: "2024-05-25", desktop: 201 },
  { date: "2024-05-26", desktop: 213 },
  { date: "2024-05-27", desktop: 420 },
  { date: "2024-05-28", desktop: 233 },
  { date: "2024-05-29", desktop: 78 },
  { date: "2024-05-30", desktop: 340 },
  { date: "2024-05-31", desktop: 178 },
  { date: "2024-06-01", desktop: 178 },
  { date: "2024-06-02", desktop: 470 },
  { date: "2024-06-03", desktop: 103 },
  { date: "2024-06-04", desktop: 439 },
  { date: "2024-06-05", desktop: 88 },
  { date: "2024-06-06", desktop: 294 },
  { date: "2024-06-07", desktop: 323 },
  { date: "2024-06-08", desktop: 385 },
  { date: "2024-06-09", desktop: 438 },
  { date: "2024-06-10", desktop: 155 },
  { date: "2024-06-11", desktop: 92 },
  { date: "2024-06-12", desktop: 492 },
  { date: "2024-06-13", desktop: 81 },
  { date: "2024-06-14", desktop: 426 },
  { date: "2024-06-15", desktop: 307 },
  { date: "2024-06-16", desktop: 371 },
  { date: "2024-06-17", desktop: 475 },
  { date: "2024-06-18", desktop: 107 },
  { date: "2024-06-19", desktop: 341 },
  { date: "2024-06-20", desktop: 408 },
  { date: "2024-06-21", desktop: 169 },
  { date: "2024-06-22", desktop: 317 },
  { date: "2024-06-23", desktop: 480 },
  { date: "2024-06-24", desktop: 132 },
  { date: "2024-06-25", desktop: 141 },
  { date: "2024-06-26", desktop: 434 },
  { date: "2024-06-27", desktop: 448 },
  { date: "2024-06-28", desktop: 149 },
  { date: "2024-06-29", desktop: 103 },
  { date: "2024-06-30", desktop: 446 },
];

const chartConfigArea = {
  desktop: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
};

function CrmCharts({ data }) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartHorComp
              chartData={data.services_sales}
              chartConfig={chartConfigBarHor}
              title={"Top 5 Services"}
              subtitle={"puede agregar subTitle"}
              dataKeyX={"number"}
              dataKeyY={"name"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartComp
              chartData={chartDataBarHor}
              chartConfig={chartConfigBarHor}
              title={"Top 5 Categories"}
              subtitle={"puede agregar subtitle"}
              dataKeyX={"month"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <PieChartComp
              chartData={chartDataPie}
              chartConfig={chartConfigPie}
              centerTitle={"Ammount"}
              title={"Top 5 Clients per Sales amount"}
              subtitle={"puede agregar subtitle"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <PieChartComp
              chartData={chartDataPie}
              chartConfig={chartConfigPie}
              centerTitle={"Type"}
              title={"Type more used, individual o business"}
              subtitle={"puede agregar subtitle"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-12">
            <AreaChartComp
              chartData={data.month_array}
              chartConfig={chartConfigArea}
              title={"Annual Sales"}
              subtitle={"Sales of this year"}
              dataKey={"desktop"}
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

export default CrmCharts;
