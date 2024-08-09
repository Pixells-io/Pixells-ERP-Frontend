import React, { useRef, useState } from "react";
import { Form, useParams, useSubmit } from "react-router-dom";

function ActivityNameInPut({ activity_id, defaultName, status }) {
  const submit = useSubmit();
  const inputRef = useRef(null);
  const { id, projectId } = useParams();
  const [activityInput, setActivityInput] = useState(defaultName);

  function onInputEnter(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      inputRef.current.blur();
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
          {status === 1 ? (
            <input
              title={activityInput}
              type="text"
              name="name"
              className="focus:border-grisSubTextText flex w-full rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText line-through caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-4"
              value={activityInput}
              onChange={(e) => setActivityInput(e.target.value)}
              ref={inputRef}
            />
          ) : (
            <input
              type="text"
              name="name"
              title={activityInput}
              className="focus:border-grisSubTextText flex w-full rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-4"
              value={activityInput}
              onChange={(e) => setActivityInput(e.target.value)}
              ref={inputRef}
            />
          )}
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
