import React, { useEffect, useState } from "react";
import {
  useParams,
  useLoaderData,
  useOutletContext,
  useLocation,
  useNavigation,
  Form,
  useSubmit,
  redirect,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NewStepService from "./components/Forms/NewStepService";
import {
  addCommentClient,
  deleteStepProcess,
  editStepProcess,
  moveProgressColumn,
  progressStepAdvance,
  requireDocument,
  saveNewServiceStep,
} from "./util";

import { createPusherClient } from "@/lib/pusher";
import { getServiceSteps } from "@/lib/actions";

import Customer from "./components/Customer";
import FormStepCustom from "./components/Forms/FormStepCustom";
import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import StepOptions from "./components/StepOptions";

function StepsProgress() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const location = useLocation();
  const { id } = useParams();
  const { services, steps, users } = useLoaderData();

  const [urlId, setUrlId] = useState(id);
  const [initialData, setInitialData] = useState(steps);
  const [dataPusher, setDataPusher] = useState(initialData);

  const [modalProcess, setModalProcess] = useState(false);
  const [leadAssigned, setLeadAssigned] = useState("");
  const [customerInfo, setCustomerInfo] = useState({});
  const [order, setOrder] = useState("");
  const [fields, setFields] = useState([]);
  const [currentStep, setCurrentStep] = useState({});
  const [nextStepName, setNextStepName] = useState("");
  const [editStepName, setEditStepName] = useState(false);

  const [modal, setModal] = useState(false);
  const [stepInfo, setStepInfo] = useState({});

  const pusherClient = createPusherClient();

  useEffect(() => {
    setUrlId(id);
    pusherClient.subscribe(`private-get-process.${urlId}`);

    pusherClient.bind("fill-process", ({ service }) => {
      console.log("cvghj");
      getProcesServiceFunction(service);
    });

    async function getProcesServiceFunction(id) {
      let newData = await getServiceSteps(id);
      setDataPusher(newData);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-process.${urlId}`);
    };
  }, [location, urlId]);

  useEffect(() => {
    async function getSteps() {
      let newData = await getServiceSteps(id);
      setDataPusher(newData);
    }

    getSteps();
  }, [id]);

  const startDrag = (evt, item, order, step) => {
    //evt.dataTransfer.setData("lead", item);
    setCustomerInfo(item);
    setOrder(order);
    setCurrentStep(step);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list, fields, step) => {
    setNextStepName(step?.step?.name);
    setFields(fields);
    openCorrectModal(list, customerInfo, order);
  };

  function openCorrectModal(column_id, customer, order) {
    //The column is the correct

    if (Number(order) + 1 == column_id) {
      //Set the information
      setLeadAssigned(customer.assigned);
      //Open the modal
      setModalProcess(true);
    }
  }

  function onEnterForm(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      // setEditStepName("");
    }
  }

  return (
    <div className="flex h-full overflow-auto">
      <div className="flex h-full gap-2 overflow-auto">
        <FormStepCustom
          fields={fields}
          modal={modalProcess}
          setModal={setModalProcess}
          users={users}
          navigation={navigation}
          assigned={leadAssigned}
          customer={customerInfo}
          step={currentStep}
          nextName={nextStepName}
        />

        <StepOptions open={modal} setOpen={setModal} step={stepInfo} />

        <div className="flex h-full gap-2">
          {dataPusher?.data.map((step, i) => (
            <div
              key={i}
              className="flex h-full w-[200px] shrink-0 flex-col gap-2"
              onDragOver={(evt) => draggingOver(evt)}
              onDrop={(evt) =>
                onDrop(evt, step?.step?.order, step?.fields, step)
              }
            >
              <div className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 border-primario bg-[#E8E8E8] pb-3 pt-1">
                <div className="flex w-full items-center justify-between px-2">
                  {editStepName == false ? (
                    <p
                      className={
                        "flex w-full justify-center truncate text-base text-grisText " +
                        (step?.step.name !== "Start" && "pl-4")
                      }
                    >
                      {step?.step.name}
                    </p>
                  ) : (
                    <div className="">
                      <Form
                        onSubmit={onEnterForm}
                        id="edit-form-step-name"
                        action={`/crm/progress/${id}`}
                        method="post"
                      >
                        <input
                          type="text"
                          name="name"
                          className="flex w-28 px-2"
                          defaultValue={step?.step.name}
                        />
                        <input
                          type="hidden"
                          hidden
                          readOnly
                          value={step?.step.id}
                          name="step_id"
                        />
                        <input
                          type="hidden"
                          hidden
                          readOnly
                          value="edit-step"
                          name="action"
                        />
                      </Form>
                    </div>
                  )}
                  {step?.step.name !== "Start" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IonIcon
                          icon={ellipsisVertical}
                          className="flex size-4 text-grisSubText"
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setEditStepName(!editStepName)}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setModal(true);
                            setStepInfo(step?.step);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
                <div className="w-fit rounded-2xl border-[1px] border-grisHeading px-3">
                  <p className="text-xs font-semibold text-grisHeading">
                    {step?.customers?.length}
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-col gap-2 overflow-auto rounded-lg bg-blancoBox p-2">
                <ul className="flex h-full flex-col gap-2">
                  {step?.customers.map((customer, i) => (
                    <li
                      key={i}
                      draggable="true"
                      className="flex w-full shrink-0 cursor-grab flex-col active:cursor-grabbing"
                      onDragStart={(evt) =>
                        startDrag(evt, customer, step?.step.order, step)
                      }
                    >
                      <Customer
                        key={customer.id}
                        customer={customer}
                        stepId={step.id}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewStepService
        serviceId={id}
        service={services?.data?.filter((service, i) => service.id == id)}
      />
    </div>
  );
}
export default StepsProgress;

export async function Action({ params, request }) {
  const serviceId = params.id;
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "new_step":
      return await saveNewServiceStep(serviceId, data);

    case "advance_step":
      return await progressStepAdvance(data);

    case "move_column":
      return await moveProgressColumn(data);

    case "require_document":
      return await requireDocument(data);

    case "delete-step":
      await deleteStepProcess(data);
      return redirect(`/crm/progress/${params.id}`);

    case "edit-step":
      await editStepProcess(data);
      return redirect(`/crm/progress/${params.id}`);

    case "add-comment-client":
      await addCommentClient(data);
      return redirect(`/crm/progress/${params.id}`);
  }
}
