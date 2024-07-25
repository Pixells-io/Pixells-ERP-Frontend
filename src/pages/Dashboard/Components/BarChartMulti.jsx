import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function BarChartMulti({
  chartData,
  chartConfig,
  dataKeyX,
  dataKeys,
}) {
  return (
    <Card className="rounded-none bg-inherit border-none shadow-none">
      <CardContent className="py-2 px-1 ">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dataKeyX}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              orientation="top"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {dataKeys.map((dk, index) => (
            
                <Bar key={index} dataKey={dk.dataKey} fill={dk.fill} radius={4}>
                  <LabelList
                    dataKey={dk.dataKey}
                    position={'insideBottom'}
                    className="fill-[#FBFBFB] text-xs font-light"
                    fontSize={12}
                  />
                </Bar>
            
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
