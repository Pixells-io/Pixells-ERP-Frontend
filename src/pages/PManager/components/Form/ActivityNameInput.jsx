import React, { useState } from "react";
import { Form, useParams, useSubmit } from "react-router-dom";

function ActivityNameInPut({ activity_id, defaultName }) {
  const submit = useSubmit();
  const { id, projectId } = useParams();
  const [activityInput, setActivityInput] = useState(defaultName);
  // console.log(phase_id);

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
    }
  }
  return (
    <div className="flex h-12 w-full items-center justify-center px-4">
      <div className="flex">
        <Form
          onKeyDown={onInputEnter}
          method="post"
          action={`/project-manager/${id}/projects/${projectId}`}
          id="activity-name-form"
          name="activity-name"
        >
          <input
            type="text"
            name="name"
            className="focus:border-grisSubTextText flex w-full rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-4"
            value={activityInput}
            onChange={(e) => setActivityInput(e.target.value)}
          />
          <input
            name="activity_id"
            className="hidden"
            value={activity_id}
            hidden
            readOnly
          />
          <input
            name="action"
            className="hidden"
            value="edit"
            hidden
            readOnly
          />
        </Form>
      </div>
    </div>
  );
}

export default ActivityNameInPut;
