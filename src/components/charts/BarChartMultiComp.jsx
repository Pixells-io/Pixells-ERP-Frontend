import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


export function BarChartMultiComp({
  chartData,
  chartConfig,
  title,
  subtitle,
  dataKeyX,
  dataKeys,
  footerTitle,
  footerSubTitle,
}) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dataKeyX}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {
              dataKeys.map((dk, index) => (
                <Bar key={index} dataKey={dk.dataKey} fill={dk.fill} radius={4} />
              ))
            }
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {footerTitle} {footerTitle !== "" && <TrendingUp className="h-4 w-4" />}
        </div>
        <div className="leading-none text-muted-foreground">
          {footerSubTitle}
        </div>
      </CardFooter>
    </Card>
  );
}