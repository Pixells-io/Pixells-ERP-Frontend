import React from "react";

function SaleInformation({ information }) {
  return (
    <div className="grid w-full grid-cols-12 gap-y-3 py-3 pr-7">
      <div className="col-span-8">
        <p className="text-md font-roboto font-normal text-[#44444F]">
          Subtotal ({information.totalArticles}{" "}
          {information.totalArticles == "1" ? "artículo" : "artículos"})
        </p>
      </div>
      <div className="col-span-4">
        <p className="text-md text-end font-roboto font-normal text-[#44444F]">
          ${information.subTotal}
        </p>
      </div>
      <div className="col-span-8">
        <p className="text-md font-roboto font-normal text-[#44444F]">
          Impuesto
        </p>
      </div>
      <div className="col-span-4">
        <p className="text-md text-end font-roboto font-normal text-[#44444F]">
          $0.00
        </p>
      </div>
      <div className="col-span-12 border"></div>
      <div className="col-span-8">
        <p className="font-roboto text-lg font-semibold text-[#44444F]">
          TOTAL
        </p>
      </div>
      <div className="col-span-4">
        <p className="text-end font-roboto text-lg font-semibold text-[#44444F]">
          ${information.total}
        </p>
      </div>
    </div>
  );
}

export default SaleInformation;
