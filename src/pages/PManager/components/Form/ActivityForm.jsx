import React, { useState } from "react";
import { Form, useParams, useSubmit } from "react-router-dom";

function ActivityForm({ phase_id }) {
  const submit = useSubmit();
  const { id, projectId } = useParams();
  const [activityInput, setActivityInput] = useState("");
  // console.log(phase_id);

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setActivityInput("");
    }
  }

  return (
    <div className="flex h-12 w-full items-center px-4">
      <div className="flex pl-32">
        <Form
          onKeyDown={onInputEnter}
          method="post"
          action={`/project-manager/${id}/projects/${projectId}`}
          id="activity-form"
          name="activity"
        >
          <input
            type="text"
            name="name"
            placeholder="+ ACTIVITY"
            className="flex rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-2 focus:border-primario"
            value={activityInput}
            onChange={(e) => setActivityInput(e.target.value)}
          />
          <input
            name="phase_id"
            className="hidden"
            value={phase_id}
            hidden
            readOnly
          />
          <input
            name="action"
            className="hidden"
            value="activity"
            hidden
            readOnly
          />
        </Form>
      </div>
    </div>
  );
}

export default ActivityForm;
