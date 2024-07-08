import React, { useEffect, useState } from "react";
import Customer from "./Customer";
import FormStepCustom from "./Forms/FormStepCustom";
import { Form, useNavigation, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Step({ stepInfo, services, users }) {
  const params = useParams();
  const { customers, fields, step } = stepInfo;
  const [modal, setModal] = useState(false);
  const [acceptDrop, setAcceptDrop] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const navigation = useNavigation();

  const [stepMove, setStepMove] = useState(false);
  const [stepMoveData, setStepMoveData] = useState({
    step_id: "",
    step_index: "",
  });

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  function updateStepMoveInfo(e) {
    setStepMoveData({ ...stepMoveData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Dialog open={stepMove} onOpenChange={setStepMove}>
        <DialogContent className="p-0 sm:max-w-[425px]">
          <DialogHeader className="border-b px-8 py-6">
            <DialogTitle>Move Step Column</DialogTitle>
            <DialogDescription>
              Are you sure you want to move the column?
            </DialogDescription>
          </DialogHeader>
          <Form
            id="progress-step-move"
            action={`/crm/progress/${params.id}`}
            method="post"
            className="flex flex-col gap-4 px-8"
          >
            <input
              name="step_id"
              type="text"
              className="hidden"
              defaultValue={stepMoveData.step_id}
              readOnly
              // onChange={(e) => updateStepMoveInfo(e)}
            />
            <input
              name="step_index"
              type="text"
              className="hidden"
              defaultValue={stepMoveData.step_index}
              readOnly
              // onChange={(e) => updateStepMoveInfo(e)}
            />
            <input
              name="action"
              type="text"
              className="hidden"
              defaultValue="move_column"
              readOnly
            />
            <DialogFooter className="flex pb-4">
              <Button type="button">Cancel</Button>
              <Button type="submit">Move Column</Button>
            </DialogFooter>
          </Form>
        </DialogContent>
      </Dialog>

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

      <div className="flex h-full w-[200px] shrink-0 flex-col gap-2">
        {/* header */}
        <div
          id={step.id}
          className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 bg-[#E8E8E8] pb-3 pt-1"
          style={{ borderColor: services.color }}
          draggable
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const stepId = event.dataTransfer.getData("step_id");
            const stepOrder = step.order;
            // console.log(step.order);
            setStepMoveData({
              step_id: stepId,
              step_index: stepOrder,
            });
            setStepMove(true);

            console.log("on drop");
          }}
          onDragStart={(event) => {
            // console.log("drag start");
            event.dataTransfer.setData("step_id", step.id);
            event.dataTransfer.setData("step_order", step.order);
          }}
          onDragLeave={(event) => {
            // console.log("drag leave");
          }}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // const stepId = event.dataTransfer.getData("step_id");
            // const stepOrder = event.dataTransfer.getData("step_order");
            // console.log("drag over");
          }}
        >
          <div>
            <p className="text-base text-grisText">
              {step?.name ? step?.name : "Clients"}
            </p>
          </div>
          <div className="w-fit rounded-2xl border-[1px] border-grisHeading px-3">
            <p className="text-xs font-semibold text-grisHeading">
              {customers?.length}
            </p>
          </div>
        </div>

        {/* body */}
        <div
          className={
            "flex h-full flex-col gap-2 overflow-scroll rounded-lg bg-blancoBox p-2" +
            (acceptDrop
              ? "border-[3px] border-primario outline outline-2 outline-primario"
              : "")
          }
        >
          <ul
            className="flex h-full flex-col gap-2"
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
