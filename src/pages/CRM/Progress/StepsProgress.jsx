import React, { useEffect, useState } from "react";
import { useParams, useLoaderData, useOutletContext } from "react-router-dom";

import NewStepService from "./components/Forms/NewStepService";
import {
  moveProgressColumn,
  progressStepAdvance,
  saveNewServiceStep,
} from "./util";
import Step from "./components/Step";
import { pusherClient } from "@/lib/pusher";
import { getServiceSteps } from "@/lib/actions";

function StepsProgress() {
  const { id } = useParams();
  const { steps, users } = useLoaderData();
  const { services } = useOutletContext();

  // const [initialData, setInitialData] = useState(steps);
  // const [dataPusher, setDataPusher] = useState(initialData);

  // console.log(dataPusher);

  // useEffect(() => {
  //   async function getChatData(id) {
  //     let newData = await getServiceSteps(id);
  //     setDataPusher(newData);
  //   }

  //   pusherClient.subscribe(`private-get-chat.${steps.data[1].step.service_id}`);

  //   pusherClient.bind("fill-process", ({ service }) => {
  //     /* Set the new chat */
  //     getChatData(id);
  //   });

  //   return () => {
  //     pusherClient.unsubscribe(
  //       `private-get-chat.${steps.data[1].step.service_id}`
  //     );
  //   };
  // }, []);

  return (
    <div className="flex shrink-0">
      <div className="flex gap-2 overflow-scroll">
        {steps.data?.map((step, i) => {
          // console.log(step);
          const service = services?.data.find((service) => service.id == id);
          return (
            <Step
              services={service}
              key={i}
              stepInfo={step}
              fields={step.fields}
              users={users}
            />
          );
        })}
      </div>
      <NewStepService serviceId={id} />
    </div>
  );
}

export default StepsProgress;

// export async function Action({ params, request }) {
//   const serviceId = params.id;
//   const data = await request.formData();
//   console.log(data);

//   const validation = await saveNewServiceStep(serviceId, data);
//   console.log(validation);

//   if (validation) {
//     return validation;
//   }

//   return redirect(`/crm/progress/${id}`);
// }

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

    default:
      break;
  }
}
