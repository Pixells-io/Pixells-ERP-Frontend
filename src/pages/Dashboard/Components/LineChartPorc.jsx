import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { IonIcon } from "@ionic/react";
import { arrowUp } from "ionicons/icons";

const renderLastLabel = (props) => {
  const { x, y, number, index, data } = props;

  return null;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-2 py-1">
        <p className="label flex items-center gap-1 text-[12px] font-light text-[#00A259]">
          <IonIcon icon={arrowUp} className="h-4 w-4 rotate-45"></IonIcon>
          {`${payload[0].value}`}%
        </p>
        {/* Puedes añadir más estilos y elementos aquí */}
      </div>
    );
  }

  return null;
};

export function LineChartPorc({
  chartData,
  chartConfig,
  dataKeyX,
  dataKeyLabel,
}) {
  return (
    <Card className="rounded-none border-none bg-inherit p-0 shadow-none">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dataKeyX}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 0)}
            />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Line
              dataKey={dataKeyLabel}
              type="natural"
              stroke={"var(--color-" + dataKeyLabel + ")"}
              strokeWidth={2}
              dot={{
                fill: "var(--color-" + dataKeyLabel + ")",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList dataKey="number" content={renderLastLabel} />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
