import React from "react";
import { Button } from "@/components/ui/button";
import { BarChartMultiComp } from "@/components/charts/BarChartMultiComp";
import AverageTimeCard from "./AverageTimeCard";

function TicketCharts() {
  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-12 grid-flow-col">
        <div className="col-span-10 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartMultiComp />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartMultiComp />
          </div>
          <div className="col-span-12 rounded-xl drop-shadow sm:col-span-12 xl:col-span-6">
            <AverageTimeCard hours={200} />
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
