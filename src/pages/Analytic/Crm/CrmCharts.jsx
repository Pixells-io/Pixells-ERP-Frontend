import React from "react";
import { Button } from "@/components/ui/button";
import PieChartComp from "@/components/charts/PieChartComp";
import { BarChartHorComp } from "@/components/charts/BarChartHorComp";
import { BarChartComp } from "@/components/charts/BarChartComp";
import { AreaChartComp } from "@/components/charts/AreaChartComp";
import { BarChartInterComp } from "@/components/charts/BarChartInterComp";

//chart

const chartConfigPie = {
  Individual: {
    label: "Individual",
    color: "hsl(var(--chart-2))",
  },
  Business: {
    label: "Business",
    color: "hsl(var(--chart-1))",
  },
};

const chartConfigArea = {
  desktop: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
};

const orderNumberAndLimit = (data = [], limit = 0) => {
  return data.sort((a, b) => b.number - a.number).slice(0, limit);
};

function CrmCharts({ data }) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-4 pt-12 md:col-span-12 md:pt-0 xl:col-span-10">
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <BarChartHorComp
              chartData={orderNumberAndLimit(data.services_sales, 5)}
              chartConfig={{
                number: {
                  label: "Service-",
                  color: "hsl(var(--chart-1))",
                },
              }}
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
              chartData={orderNumberAndLimit(data.categories_sales, 5)}
              chartConfig={{
                number: {
                  label: "Categories-",
                  color: "hsl(var(--chart-2))",
                },
              }}
              title={"Top 5 Categories"}
              subtitle={"puede agregar subtitle"}
              dataKeyX={"name"}
              dataKeyY={"number"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-12">
            <BarChartInterComp
              chartData={data.month_array}
              chartConfig={{
                views: {
                  label: "Number",
                },
                number: {
                  label: "Number",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"titulo 1"}
              subtitle={"subtitle 2"}
              dataKey={"month"}
              keys={["number"]}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <BarChartHorComp
              chartData={orderNumberAndLimit(data.client_sales, 5)}
              chartConfig={{
                number: {
                  label: "Service-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"Top 5 Services"}
              subtitle={"puede agregar subTitle"}
              dataKeyX={"number"}
              dataKeyY={"name"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 xl:col-span-6">
            <PieChartComp
              chartData={data.type.map((item) => ({
                ...item,
                fill: "var(--color-" + item.name + ")",
              }))}
              chartConfig={chartConfigPie}
              dataKeyLabel={"name"}
              dataKeyCant={"number"}
              total={data.type.reduce((acc, curr) => acc + curr.number, 0)}
              centerTitle={"Ammount"}
              title={"Top 5 Clients per Sales amount"}
              subtitle={"puede agregar subtitle"}
              footerTitle={"puede agregar footerTitle"}
              footerSubTitle={"puede agregar footerSubTitle"}
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
