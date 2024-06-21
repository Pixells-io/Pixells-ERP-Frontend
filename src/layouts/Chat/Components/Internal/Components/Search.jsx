import React, { useRef } from "react";
import Select from "react-select";
import { Form, useSubmit } from "react-router-dom";
import Cookies from "js-cookie";

function Search(users) {
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
  const submit = useSubmit();

  function onChangeSelect() {
    submit("form-search-chat");
  }

  return (
    <Form
      id="form-search-chat"
      className="w-full"
      action={"/chat"}
      method="post"
      onChange={(e) => submit(e.currentTarget)}
    >
      <input type="hidden" name="type_of_function" />
      <Select
        options={selectUser}
        placeholder="SEARCH"
        name="chat"
        className="rounded-2xl"
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
