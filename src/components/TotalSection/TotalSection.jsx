import React from "react";
import InfoPayment from "./InfoPayment";
import { calculateImpuesto,calculateTotal } from "./utils";

const Total = ({ subtotal, taxRate = 0.16, observationPlaceholder = "Observaciones" }) => {
  const impuesto = calculateImpuesto(subtotal, taxRate);
  const total = calculateTotal(subtotal, impuesto);

  return (
    <div className="flex flex-row justify-between rounded-xl bg-blancoBg px-4 py-6">
      <div className="w-50">
        <textarea
          placeholder={observationPlaceholder}
          className="h-full w-[300px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
          name="template"
        ></textarea>
      </div>
      <div className="w-33">
        <InfoPayment
          totalAmount={subtotal.toFixed(2)}
          titleTotalAmount="Subtotal"
          balance={impuesto.toFixed(2)}
          titleBalance={`Impuesto (IVA ${taxRate * 100}%)`}
          isDisBalance={false}
          total={total.toFixed(2)}
          titleTotal="TOTAL"
        />
      </div>
    </div>
  );
};

export default Total;
