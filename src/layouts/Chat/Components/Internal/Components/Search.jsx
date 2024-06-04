import React, { useRef } from "react";
import Select from "react-select";
import { Form } from "react-router-dom";
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

  return (
    <Select
      options={selectUser}
      placeholder="SEARCH"
      name="chat"
      className="rounded-2xl"
      onChange={searchChat}
    />
  );
}

export default Search;

export async function searchChat(e) {
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
}
