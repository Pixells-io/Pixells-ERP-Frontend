import React, { useEffect, useState } from "react";
import InfoPayment from "./InfoPayment";
import {
  calculateDiscounts,
  calculateSubTotal,
  calculateTaxes,
  calculateTotal,
} from "../Table/Utils";
/**
 * Component for total, comments and taxes
 *
 */
const Total = ({ tableData, comment, isShipping, shipping }) => {
  const [totalShipping, setTotalShipping] = useState(shipping || "0.00");

  useEffect(() => {
    if(!isShipping){
      setTotalShipping("0.00");
    }
  }, [isShipping]);

  return (
    <div className="flex flex-row justify-between rounded-xl px-4 py-6">
      <div className="w-50">
        <textarea
          placeholder={"Observaciones"}
          className="h-fit min-h-[100px] w-[300px] resize-none rounded-lg border border-[#E5E5E5] px-3 py-2 text-xs"
          name="comments"
          defaultValue={comment}
        ></textarea>
      </div>
      <div className="w-33">
        <InfoPayment
          totalAmount={tableData
            .reduce((a, c) => a + calculateSubTotal(c), 0)
            .toFixed(2)}
          titleTotalAmount="Subtotal"
          balance={tableData
            .reduce((a, c) => a + calculateTaxes(c), 0)
            .toFixed(2)}
          titleBalance={`Impuesto (IVA ${100}%)`}
          isDisBalance={false}
          total={(
            tableData.reduce((a, c) => a + calculateTotal(c), 0) + Number(totalShipping)
          ).toFixed(2)}
          titleTotal="TOTAL"
          titleDiscount="DESCUENTO"
          totalDiscount={tableData.reduce(
            (a, c) => a + calculateDiscounts(c),
            0,
          )}
          isShipping={isShipping}
          totalShipping={totalShipping}
          setTotalShipping={setTotalShipping}
        />
      </div>
    </div>
  );
};

export default Total;
