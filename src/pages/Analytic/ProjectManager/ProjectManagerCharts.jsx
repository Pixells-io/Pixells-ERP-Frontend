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
                  label: "Actividades-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"Actividades Creadas"}
              subtitle={"Número de actividades creadas por usuario"}
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
                  label: "Actividades-",
                  color: "hsl(var(--chart-2))",
                },
              }}
              title={"Actividades Completadas"}
              subtitle={"Número de actividades realizadas por usuario"}
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
                  label: "Actividades-",
                  color: "hsl(var(--chart-2))",
                },
              }}
              title={"Tareas y Proyectos por Objetivo Estratégico"}
              subtitle={"Tareas y Proyectos del Objetivo Estratégico"}
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
                  label: "Actividades-",
                  color: "hsl(var(--chart-1))",
                },
              }}
              title={"Máxima Prioridad"}
              subtitle={"Actividades generadas con una prioridad específica"}
              dataKeyX={"desktop"}
              dataKeyY={"name"}
              footerTitle={""}
              footerSubTitle={""}
            />
          </div>
          <div className="col-span-12 rounded-3xl sm:col-span-12 xl:col-span-6">
            <AverageTimeCard
              title={"Tiempo Medio de Realización de la Tarea"}
              subtitle={"Días para completar una actividad"}
              days={data.task_resolve_days}
            />
          </div>
        </div>
        <div className="col-span-12 flex justify-center md:col-span-12 xl:col-span-2">
          <Button
            variant="outline"
            className="h-6 rounded-3xl border-[1px] border-[#696974] bg-inherit text-xs font-medium text-grisText"
          >
            Descargar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectManagerCharts;
