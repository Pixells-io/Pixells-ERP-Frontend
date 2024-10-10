import React from "react";

const TotalShow = ({ data }) => {
  return (
    <div className="flex flex-row justify-between rounded-xl px-4 py-6">
      <div className="w-50">
        <textarea
          placeholder={"Observaciones"}
          className="h-fit min-h-[100px] w-[300px] resize-none rounded-lg border border-[#E5E5E5] px-3 py-2 text-xs"
          name="comments"
          value={data?.comments}
          onChange={() => {}}
        ></textarea>
      </div>
      <div className="w-33">
        <div className={`flex flex-col gap-4`}>
          <div className="w-full">
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 items-center gap-3">
                <p
                  className={`text-end font-roboto text-[10px] font-normal text-grisText`}
                >
                  Subtotal
                </p>
                <p
                  className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText`}
                >
                  ${data?.subtotal}
                </p>
                <p
                  className={`text-end font-roboto text-[10px] font-normal text-grisText`}
                >
                  DESCUENTO
                </p>
                <p
                  className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText`}
                >
                  ${data?.discount}
                </p>
                <p
                  className={`text-end font-roboto text-[10px] font-normal text-grisText`}
                >
                  Impuesto (IVA ${100}%)
                </p>
                <p
                  className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText`}
                >
                  ${data?.taxes}
                </p>

                <p
                  className={`text-end font-roboto text-[10px] font-normal text-grisText`}
                >
                  Envio
                </p>
                <p
                  className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText`}
                >
                  ${data?.shipping}
                </p>
              </div>
              <div className="grid grid-cols-2 items-center gap-3">
                <label
                  className={`text-end font-roboto text-xs font-medium text-grisText`}
                >
                  TOTAL
                </label>
                <p
                  className={`min-w-20 rounded-lg border border-grisSubText px-3 py-1 text-end font-roboto text-xs font-medium text-grisText`}
                >
                  ${data?.total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalShow;
