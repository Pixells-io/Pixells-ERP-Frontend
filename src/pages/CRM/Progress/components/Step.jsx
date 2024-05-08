import React, { useEffect, useState } from "react";
import Customer from "./Customer";
import FormStepCustom from "./Forms/FormStepCustom";
import { useNavigation } from "react-router-dom";

function Step({ stepInfo, services, users }) {
  const { customers, fields, step } = stepInfo;
  const [modal, setModal] = useState(false);
  const [acceptDrop, setAcceptDrop] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <>
      <FormStepCustom
        modal={modal}
        setModal={setModal}
        service={services}
        fields={fields}
        step={step}
        users={users}
        customerId={customerId}
        navigation={navigation}
      />
      <div className="flex flex-col gap-2 w-[200px] h-full shrink-0">
        <div
          className="flex flex-col items-center justify-center bg-[#E8E8E8] border-t-2 rounded-lg gap-2 h-16 pb-3 pt-1"
          style={{ borderColor: services.color }}
        >
          <div>
            <p className="text-base text-grisText">
              {step?.name ? step?.name : "Clients"}
            </p>
          </div>
          <div className="border-[1px] border-grisHeading rounded-2xl w-fit px-3">
            <p className="font-semibold text-xs text-grisHeading">
              {customers?.length}
            </p>
          </div>
        </div>

        <div
          className={
            "bg-blancoBox p-2 rounded-lg flex flex-col gap-2 h-full overflow-scroll" +
            (acceptDrop
              ? "outline outline-2 outline-primario border-[3px] border-primario"
              : "")
          }
        >
          <ul
            className="flex flex-col gap-2 h-full"
            id={step.id}
            onDrop={(event) => {
              event.preventDefault();
              event.stopPropagation();
              if (acceptDrop) {
                setModal(true);
                setAcceptDrop(false);
              }
              setAcceptDrop(false);
            }}
            onDragLeave={() => {
              setAcceptDrop(false);
            }}
            onDragOver={(event) => {
              event.preventDefault();
              event.stopPropagation();
              const clientId = event.dataTransfer.getData("text");
              const stepId = event.dataTransfer.getData("step_id");
              const stepOrder = event.dataTransfer.getData("step_order");
              // console.log("stepId ", stepId);
              // console.log("stepOrder ", stepOrder);
              // console.log("step.order ", step.order);
              if (Number(stepOrder) + 1 == Number(step.order)) {
                setCustomerId(clientId);
                setAcceptDrop(true);
              }
            }}
          >
            {/* <Customer /> */}
            {customers?.map((customer, i) => (
              <Customer key={i} customer={customer} stepId={step} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Step;
