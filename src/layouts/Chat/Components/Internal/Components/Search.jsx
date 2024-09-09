import SelectSearch from "@/components/SelectSearch/SelectSearch";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React, { useRef, useState } from "react";
import { Form, useSubmit } from "react-router-dom";

function Search(search) {
  const submit = useSubmit();
  const selectUser = [];
  const formRef = useRef(null);

  const [inputSearch, setInputSearch] = useState(null);

  //Submit Form
  function onInputEnter(e) {
    const formData = new FormData();
    formData.append("chat", e.value);
    formData.append("type_of_function", "1");
    // Set timeout
    // setTimeout(() => {
    submit(formData, { action: "/chat", method: "post" });
    // }, 400);
  }

  return (
    <div className="w-full">
      <SelectSearch
        options={search.users}
        value={inputSearch}
        placeholder="BUSCAR"
        name="chat"
        getOptionLabel={(option) => {
          return (
            <div className="flex items-center gap-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={option?.image} />
              </Avatar>
              <h2>{option.label}</h2>
            </div>
          );
        }}
        filterOption={(option, value) => {
          return option.data.label.toLowerCase().includes(value.toLowerCase());
        }}
        onChange={(e) => onInputEnter(e)}
      />

      {/* <SelectRouter
        options={selectUser}
        name="chat"
        className="rounded-2xl"
        onChange={() => onInputEnter()}
      /> */}
    </div>
  );
}

export default Search;
