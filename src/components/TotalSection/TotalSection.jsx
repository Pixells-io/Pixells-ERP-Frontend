import React from "react";
import InfoPayment from "./InfoPayment";
import { calculateSubTotal, calculateTaxes, calculateTotal } from "../table/Quote/Utils";
/**
 * Component for total, comments and taxes
 * 
 */
const Total = ({ tableData }) => {

  return (
    <div className="flex flex-row justify-between rounded-xl bg-blancoBg px-4 py-6">
      <div className="w-50">
        <textarea
          placeholder={"Observaciones"}
          className="h-full w-[300px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
          name="comments"
        ></textarea>
      </div>
      <div className="w-33">
        <InfoPayment
          totalAmount={
            tableData.reduce(
            (a, c) => a + calculateSubTotal(c),
            0,
          ).toFixed(2)}
          titleTotalAmount="Subtotal"
          balance={
            tableData.reduce(
            (a, c) => a + calculateTaxes(c),
            0,
          ).toFixed(2)}
          titleBalance={`Impuesto (IVA ${100}%)`}
          isDisBalance={false}
          total={
            tableData.reduce(
            (a, c) => a + calculateTotal(c),
            0,
          ).toFixed(2)}
          titleTotal="TOTAL"
        />
      </div>
    </div>
  );
};

export default Total;
