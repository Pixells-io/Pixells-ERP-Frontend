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
                  label: "Activities-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"Activities Created"}
              subtitle={"Number of activities created per user"}
              dataKeyX={"name"}
              dataKeyLabel={"number"}
              dataKeyVar={"number"}
              footerTitle={""}
              footerSubTitle={""}
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
              title={"Activities Completed"}
              subtitle={"Number of activities completed per user"}
              dataKeyX={"name"}
              dataKeyY={"number"}
              footerTitle={""}
              footerSubTitle={""}
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
              title={"Task and Projects Per Strategic Objective"}
              subtitle={"Task and projects in the Strategic Objective"}
              dataKeyX={"name"}
              dataKeyY={"number"}
              footerTitle={""}
              footerSubTitle={""}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartHorComp
              chartData={orderDesktopAndLimit(data.priority, 5)}
              chartConfig={{
                desktop: {
                  label: "Activities-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"Top Priority"}
              subtitle={"Activities generated with an specific priority"}
              dataKeyX={"desktop"}
              dataKeyY={"name"}
              footerTitle={""}
              footerSubTitle={""}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <AverageTimeCard
              title={"Average Time Completed Task"}
              subtitle={"Days to complete an activity"}
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
