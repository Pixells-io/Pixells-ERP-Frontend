import React, { useEffect, useState } from "react";
import {
  useParams,
  useLoaderData,
  useOutletContext,
  useLocation,
} from "react-router-dom";

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
  const location = useLocation();
  const { id } = useParams();
  const { steps, users } = useLoaderData();
  const { services } = useOutletContext();

  const [urlId, setUrlId] = useState(id);
  const [initialData, setInitialData] = useState(steps);
  const [dataPusher, setDataPusher] = useState(initialData);

  useEffect(() => {
    setUrlId(id);
    pusherClient.subscribe(`get-process-service.${urlId}`);

    pusherClient.bind("fill-process-service", ({ service }) => {
      getProcesServiceFunction(service);
    });

    async function getProcesServiceFunction(id) {
      let newData = await getServiceSteps(id);
      setDataPusher(newData);
    }

    return () => {
      pusherClient.unsubscribe(`get-process-service.${urlId}`);
    };
  }, [location, urlId]);

  useEffect(() => {
    async function getSteps() {
      let newData = await getServiceSteps(id);
      setDataPusher(newData);
    }

    getSteps();
  }, [id]);

  return (
    <div className="flex shrink-0">
      <div className="flex gap-2 overflow-scroll">
        {dataPusher.data?.map((step, i) => {
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
  }

  return 1;
}
