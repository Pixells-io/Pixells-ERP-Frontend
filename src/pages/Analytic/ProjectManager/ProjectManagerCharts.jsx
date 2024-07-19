import React from "react";
import { Button } from "@/components/ui/button";
import { LineChartComp } from "@/components/charts/LineChartComp";
import { BarChartComp } from "@/components/charts/BarChartComp";
import AverageTimeCard from "../Components/AverageTimeCard";
import { BarChartHorComp } from "@/components/charts/BarChartHorComp";

const orderNumberAndLimit = (data = [], limit = 0) => {
  return data.sort((a, b) => b.number - a.number).slice(0, limit);
};

const orderDesktopAndLimit = (data = [], limit = 0) => {
  return data.sort((a, b) => b.desktop - a.desktop).slice(0, limit);
};

function ProjectManagerCharts({ data }) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <LineChartComp
              chartData={orderNumberAndLimit(data.activity_created, 5)}
              chartConfig={{
                number: {
                  label: "Created-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"More Activities Created"}
              subtitle={"January - June 2024"}
              dataKeyX={"name"}
              dataKeyLabel={"number"}
              dataKeyVar={"number"}
              footerTitle={"Trending up by 5.2% this month"}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartComp
              chartData={orderNumberAndLimit(data.activity_complete, 5)}
              chartConfig={{
                number: {
                  label: "Activities-",
                  color: "hsl(var(--chart-2))",
                },
              }}
              title={"More Activities Completed"}
              subtitle={"January - June 2024"}
              dataKeyX={"name"}
              dataKeyY={"number"}
              footerTitle={"Trending up by 5.2% this month "}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartComp
              chartData={orderNumberAndLimit(data.strategic_objetives_task, 5)}
              chartConfig={{
                number: {
                  label: "Activities-",
                  color: "hsl(var(--chart-2))",
                },
              }}
              title={"Average Time Completed Task"}
              subtitle={"January - June 2024"}
              dataKeyX={"name"}
              dataKeyY={"number"}
              footerTitle={"Trending up by 5.2% this month "}
              footerSubTitle={"Showing total visitors for the last 6 months"}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartHorComp
              chartData={orderDesktopAndLimit(data.priority, 5)}
              chartConfig={{
                desktop: {
                  label: "Priority-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"Top Priority"}
              subtitle={"puede agregar subTitle"}
              dataKeyX={"desktop"}
              dataKeyY={"name"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <AverageTimeCard
              title={"Strategic Objective W/M Activities"}
              days={data.task_resolve_days}
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

export default ProjectManagerCharts;
