import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const DataSection = ({ debitTotal, creditTotal }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const result = debitTotal - creditTotal;
    setTotal(result);
  }, [debitTotal, creditTotal]);

  return (
    <section className="overflow-80 border-black-200 mb-2 mt-2 flex items-center justify-end rounded-xl bg-white p-7">
      <div className="flex flex-col">
        <div className="mt-2 flex space-x-3">
          <p className="mr-4 mt-2 text-xs font-medium text-grisText">TOTAL: </p>
          <Input
            name="debitTotal"
            className="ml-4 h-8 w-20 rounded-lg border border-[#8F8F8F] text-xs font-normal text-grisSubText"
            value={"$ " + debitTotal}
            readOnly
          />
          <Input
            name="creditTotal"
            className="h-8 w-20 rounded-lg border border-[#8F8F8F] text-xs font-normal text-grisSubText"
            value={"$ " + creditTotal}
            readOnly
          />
        </div>
        <div className="mt-2 flex justify-stretch">
          <p
            className={`mr-4 mt-2 ${
              total < 0 ? "text-rose-500" : "text-black-200 text-grisText"
            } text-xs font-medium`}
          >
            DIFERENCIA:{" "}
          </p>
          <Input
            name="diferencia"
            className={`h-8 w-20 rounded-lg ${
              total < 0
                ? "bg-white-200 border border-[#8F8F8F] border-rose-500 text-rose-500"
                : "bg-white-200 text-grisSubText"
            } text-xs font-normal`}
            value={"$ " + total}
            readOnly
          />
        </div>
      </div>
    </section>
  );
};

export default DataSection;
