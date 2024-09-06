import SelectRouter from "@/layouts/Masters/FormComponents/select";
import React, { useRef } from "react";
import { Form, useSubmit } from "react-router-dom";

import Select from "react-select";

function Search(search) {
  const submit = useSubmit();
  const selectUser = [];
  const formRef = useRef(null);

  //Submit Form
  function onInputEnter() {
    //Set timeout
    setTimeout(() => {
      submit(formRef.current);
    }, 400);
  }

  return (
    <Form
      id="form-search-chat"
      className="w-full"
      action="/chat"
      ref={formRef}
      method="post"
    >
      <input type="hidden" name="type_of_function" value="1" hidden readOnly />
      <Select
        options={search.users}
        placeholder="BUSCAR"
        name="chat"
        className="rounded-2xl"
        onChange={() => onInputEnter()}
      />
      {/* <SelectRouter
        options={selectUser}
        name="chat"
        className="rounded-2xl"
        onChange={() => onInputEnter()}
      /> */}
    </Form>
  );
}

export default Search;
