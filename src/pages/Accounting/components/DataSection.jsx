import React, { useState, useEffect } from "react";
import InputForm from "@/components/InputForm/InputForm";

const DataSection = ({ debitTotal, creditTotal }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const result = debitTotal - creditTotal;
    setTotal(result);
  }, [debitTotal, creditTotal]);

  return (
    <section className="overflow-80 border-black-200 mb-2 mt-2 flex items-center justify-end rounded-xl">
      <div className="flex flex-col">
        <div className="mt-2 flex space-x-3">
          <p className="mr-4 mt-2 text-xs font-medium text-grisText">TOTAL: </p>
          <InputForm
            name="debitTotal"
            className="ml-4 w-20"
            value={"$ " + debitTotal}
            readOnly
          />
          <InputForm
            name="creditTotal"
            className="w-20"
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
          <InputForm
            name="diferencia"
            className={`w-20 ${
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
