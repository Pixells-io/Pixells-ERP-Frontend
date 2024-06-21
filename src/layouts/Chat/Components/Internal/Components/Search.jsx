import React from "react";
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

  //Submit Form

  return (
    <Form
      id="form-search-chat"
      className="w-full"
      action="/chat"
      method="post"
      // onChange={(e) => submit(e.currentTarget)}
    >
      <input type="hidden" name="type_of_function" />
      <Select
        options={selectUser}
        placeholder="SEARCH"
        name="chat"
        className="rounded-2xl"
        onChange={(e) =>
          submit(e.currentTarget, { method: "post", action: "/chat" })
        }
      />
    </Form>
  );
}

export default Search;

/*export async function searchChat(e) {
  const info = {
    chat: e.value,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/search`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  e.value = "";
}*/
