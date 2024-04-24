import React from "react";
import { useParams, useLoaderData, useOutletContext } from "react-router-dom";

import NewStepService from "./components/Forms/NewStepService";
import { saveNewServiceStep } from "./util";
import Step from "./components/Step";

function StepsProgress() {
  const { id } = useParams();
  const { data: steps } = useLoaderData();
  const { services } = useOutletContext();
  // console.log(services.data);
  // console.log(steps);
  return (
    <div className="flex shrink-0">
      <div className="flex gap-2 overflow-scroll">
        {steps?.map((step, i) => {
          const service = services?.data.find((service) => service.id == id);
          return (
            <Step
              services={service}
              key={i}
              stepInfo={step}
              fields={step.fields}
            />
          );
        })}
      </div>
      <NewStepService serviceId={id} />
    </div>
  );
}

export default StepsProgress;

export async function Action({ params, request }) {
  const serviceId = params.id;
  const data = await request.formData();
  console.log(data);

  const validation = await saveNewServiceStep(serviceId, data);
  console.log(validation);

  if (validation) {
    return validation;
  }

  return redirect(`/crm/progress/${id}`);
}
