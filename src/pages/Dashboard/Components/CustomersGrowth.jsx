import React from "react";
import { BarChartMulti } from "./BarChartMulti";
import { LineChartPorc } from "./LineChartPorc";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dataCustomerPorcen = [
  { name: "Jan", number: 3 },
  { name: "Feb", number: -3 },
  { name: "Mar", number: 8 },
];

const customerMonth = [
  { month: "Jan", data1: "45", data2: "38" },
  { month: "Feb", data1: "60", data2: "45" },
  { month: "Mar", data1: "56", data2: "78" },
];

function CustomersGrowth() {
  return (
    <div className="flex h-full rounded-xl p-1">
      {/* <img src="/img/logos/dashboard.png" alt="" /> */}
      <div className="flex w-2/5 flex-col justify-between border-r-[2px] border-[#D7D7D7] p-2">
        <div className="flex justify-between gap-x-2">
          <div>
            <p className="text-xs font-light text-grisText">New Customers</p>
            <p className="text-xl font-medium text-grisText">124</p>
          </div>
          <div>
            <Select className="border border-[#D7D7D7] p-0">
              <SelectTrigger
                aria-label="Select a value"
                className="border-b-[2px] border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit p-0"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-xl text-red-300">
                <SelectItem
                  value="quarter"
                  className="rounded-lg text-[10px] text-red-300"
                >
                  <label className="text-[10px] font-light text-primarioBotones">
                    Quarter
                  </label>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <LineChartPorc
            chartData={dataCustomerPorcen}
            chartConfig={{
              number: {
                label: "Month-",
                color: "hsl(223.17, 100%, 67.84%)",
              },
            }}
            dataKeyX={"name"}
            dataKeyLabel={"number"}
            dataKeyVar={"number"}
          />
        </div>
        <div className="flex gap-x-2">
          <div>
            <p className="text-xs font-light text-grisText">
              Customers growth for this month
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <div className="h-1 w-5 bg-[#44444F] rounded-lg	"></div>
              <p className="text-xs font-light text-grisText">2023</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-1 w-5 bg-[#5B89FF] rounded-lg	"></div>
              <p className="text-xs font-light text-grisText">2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-3/5">
        <div className="w-full">
          <BarChartMulti
            chartData={customerMonth}
            chartConfig={{
              data1: {
                label: "Data1-",
                color: "hsl(223.17, 100%, 67.84%)",
              },
              data2: {
                label: "Data2-",
                color: "hsl(240, 7.48%, 28.82%)",
              },
            }}
            dataKeyX={"month"}
            dataKeys={[
              { dataKey: "data1", fill: "var(--color-data1)" },
              { dataKey: "data2", fill: "var(--color-data2)" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default CustomersGrowth;
