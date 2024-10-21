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
    <Form
      onKeyDown={onInputEnter}
      method="post"
      //   action={`/project-manager/${id}/projects/${projectId}`}
      id="activity-name-form"
      name="activity-name"
    >
      <input
        title={activityInput}
        type="text"
        name="name"
        className={`h-fit w-full truncate border-none bg-inherit p-0 text-xs font-normal text-grisHeading placeholder:text-xs placeholder:font-normal placeholder:text-[#CCCCCC] focus-visible:p-1 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${status == 1 && "line-through caret-primario"}`}
        value={activityInput}
        onChange={(e) => setActivityInput(e.target.value)}
        ref={inputRef}
      />

      <input
        name="activity_id"
        className="hidden"
        value={activity_id}
        hidden
        readOnly
      />
      <input name="action" className="hidden" value="edit" hidden readOnly />
    </Form>
  );
}

export default ActivityNameInPut;
