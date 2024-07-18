import React, { useEffect, useState } from "react";
import Customer from "./Customer";
import FormStepCustom from "./Forms/FormStepCustom";
import { Form, useNavigation, useParams } from "react-router-dom";

function Step({ stepInfo, services, users }) {
  const params = useParams();
  const { customers, fields, step } = stepInfo;
  const [modal, setModal] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const startDrag = (evt, item) => {
    //evt.dataTransfer.setData("lead", item);
    setLeadInformation(item);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    //const lead = evt.dataTransfer.getData("lead");
    openCorrectModal(list, leadInformation);
  };

  function openCorrectModal(column_id, lead) {
    //The column is the correct
    const next_column = lead.step_id + 1;

    console.log(next_column, column_id);

    if (next_column === column_id) {
      //Set the information
      setLeadAssigned(lead.assigned);
      setLeadId(lead.id);

      //Open the menu
      switch (next_column) {
        case 1:
          setModal({
            ...modal,
            prospect: true,
          });
          break;

        case 2:
          setModal({
            ...modal,
            potential: true,
          });
          break;

        case 3:
          setModal({
            ...modal,
            followup: true,
          });
          break;

        case 4:
          setModal({
            ...modal,
            proposal: true,
          });
          break;

        case 5:
          setModal({
            ...modal,
            closing: true,
          });
          break;

        case 6:
          setModal({
            ...modal,
            pay: true,
          });
          break;

        case 7:
          setModal({
            ...modal,
            kickoff: true,
          });
          break;
      }
    }
  }

  return (
    <div className="flex h-full gap-2 overflow-auto">
      <div className="flex gap-2">
        {/* header */}
        <div
          key={step.id}
          className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 bg-[#E8E8E8] pb-3 pt-1"
          style={{ borderColor: services.color }}
          onDragOver={(evt) => draggingOver(evt)}
          onDrop={(evt) => onDrop(evt, step.id)}
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
        <div className="flex h-full flex-col gap-2 overflow-scroll rounded-lg bg-blancoBox p-2">
          <ul className="flex h-full flex-col gap-2">
            {customers?.map((customer, i) => (
              <li
                draggable="true"
                className="flex w-full shrink-0 cursor-grab flex-col active:cursor-grabbing"
                onDragStart={(evt) => startDrag(evt, customer)}
                key={customer.id}
              >
                <Customer key={customer.id} customer={customer} stepId={step} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Step;

{
  /* <FormStepCustom
  modal={modal}
  setModal={setModal}
  service={services}
  fields={fields}
  step={step}
  users={users}
  customerId={customerId}
  navigation={navigation}
/> */
}
