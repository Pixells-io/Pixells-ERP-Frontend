import React, { useState } from "react";
import Customer from "./Customer";
import FormStepCustom from "./Forms/FormStepCustom";

function Step({ stepInfo, services }) {
  const { customers, fields, step } = stepInfo;
  const [modal, setModal] = useState(false);
  return (
    <>
      <FormStepCustom
        service={services}
        fields={fields}
        step={step}
        modal={modal}
        setModal={setModal}
      />
      <div className="flex flex-col gap-2 w-[200px] h-full shrink-0">
        <div className="flex flex-col items-center justify-center bg-[#E8E8E8] border-t-2 border-[#00A259] rounded-lg gap-2 h-16">
          <div>
            <p className="text-base text-grisText">{step?.name}</p>
          </div>
          <div className="border-[1px] border-grisHeading rounded-2xl w-fit px-3">
            <p className="font-semibold text-xs text-grisHeading">
              {customers?.length}
            </p>
          </div>
        </div>

        <div
          className="bg-blancoBox p-2 rounded-lg flex flex-col gap-2 h-full"
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // console.log(event.target);
            // console.log("ondrop");
            setModal(true);
          }}
        >
          <ul className="flex flex-col gap-2">
            {/* <customer /> */}
            <Customer />
            {customers?.map((customer, i) => (
              <Customer key={i} customer={customer} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Step;
