import React from "react";
import { Button } from "@/components/ui/button";
import { BarChartMultiComp } from "@/components/charts/BarChartMultiComp";
import AverageTimeCard from "../Components/AverageTimeCard";

const orderNumberAndLimit = (data = [], limit = 0) => {
  return data.sort((a, b) => b.number - a.number).slice(0, limit);
};

function TicketCharts({ data }) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-10 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartMultiComp
              chartData={orderNumberAndLimit(data.tickets_created, 5)}
              chartConfig={{
                number: {
                  label: "Tickets-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              dataKeyX={"name"}
              title={"Created"}
              subtitle={"Tickets created by user"}
              dataKeys={[{ dataKey: "number", fill: "var(--color-number)" }]}
              footerTitle={""}
              footerSubTitle={""}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartMultiComp
              chartData={orderNumberAndLimit(data.tickets_assigned, 5)}
              chartConfig={{
                number: {
                  label: "Tickets-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              dataKeyX={"name"}
              title={"Assigned"}
              subtitle={"Tickets assigned by user"}
              dataKeys={[{ dataKey: "number", fill: "var(--color-number)" }]}
              footerTitle={""}
              footerSubTitle={""}
            />
          </div>
          <div className="col-span-12 rounded-xl drop-shadow sm:col-span-12 xl:col-span-6">
            <AverageTimeCard
              title={"Average Time"}
              subtitle={"Days to complete tickets"}
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
