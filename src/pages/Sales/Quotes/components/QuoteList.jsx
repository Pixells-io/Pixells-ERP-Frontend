import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import QuoteTable from "./Tabs/QuoteDataTable";

const QuoteList = () => {
  const [selectValues, setSelectValues] = useState({
    select1: "",
    select2: "",
    select3: "",
    select4: "",
  });
  const [readOnlyValue, setReadOnlyValue] = useState("");
  const [total, setTotal] = useState(0); // New state for total

  const handleSelectChange = (value, selectName) => {
    setSelectValues((prev) => ({ ...prev, [selectName]: value }));
  };

  const handleTotalChange = (newTotal) => {
    setTotal(newTotal);
    setReadOnlyValue(newTotal.toFixed(2));
  };

  return (
    <div className="overflow-auto rounded-xl bg-white p-4">
      <div className="justify-between">
        <section className="grid grid-cols-4 items-end gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <Select
              key={num}
              onValueChange={(value) =>
                handleSelectChange(value, `select${num}`)
              }
            >
              <SelectTrigger className="w-1/5">
                <SelectValue placeholder={`Select ${num}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          ))}
        </section>
        <div className="items-end">
          <Input
            className="w-[180px]"
            value={readOnlyValue}
            readOnly
            placeholder="Total"
          />
        </div>
      </div>
      <QuoteTable onTotalChange={handleTotalChange} />
    </div>
  );
};

export default QuoteList;
