import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const DataSection = ({ debitTotal, creditTotal }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const result = debitTotal - creditTotal;
    setTotal(result);
  }, [debitTotal, creditTotal]);

  return (
    <section className="overflow-80 flex mt-2 mb-2 justify-end items-center rounded-xl border-black-200 bg-white p-7">
      <div className="flex flex-col">
        <div className="mt-2 flex space-x-3">
          <p className="mt-2 mr-4 font-roboto">TOTAL: </p>
          <Input
            name="debitTotal"
            className="h-8 w-20 ml-4 rounded-full font-roboto"
            value={"$ " + debitTotal}
            readOnly
          />
          <Input
            name="creditTotal"
            className="h-8 w-20 rounded-full font-roboto"
            value={"$ " + creditTotal}
            readOnly
          />
        </div>
        <div className="mt-2 flex justify-stretch">
          <p
            className={`mt-2 mr-4 ${
              total < 0 ? "text-rose-500" : "text-black-200"
            } font-roboto`}
          >
            DIFERENCIA:{" "}
          </p>
          <Input
            name="diferencia"
            className={`h-8 w-20 rounded-full ${
              total < 0
                ? "bg-white-200 border-rose-500 text-rose-500"
                : "bg-white-200"
            } font-roboto`}
            value={"$ " + total}
            readOnly
          />
        </div>
      </div>
    </section>
  );
};

export default DataSection;
