import React, { useRef } from "react";
import { Form, useSubmit } from "react-router-dom";

import Select from "react-select";

function Search(users) {
  const submit = useSubmit();
  const selectUser = [];

  arrayFillUser(users, selectUser);

  function arrayFillUser(data, array) {
    let dataParse = data.users;

    dataParse.forEach((element) => {
      array.push({
        value: "1/" + element.id,
        label: element.name + " " + element.last_name,
      });
    });
  }

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
      <input type="hidden" name="type_of_function" value="1" />
      <Select
        options={selectUser}
        placeholder="SEARCH"
        name="chat"
        className="rounded-2xl"
        onChange={() => onInputEnter()}
      />
    </Form>
  );
}

export default Search;
