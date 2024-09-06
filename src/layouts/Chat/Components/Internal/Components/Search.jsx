import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
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
      <div className="flex items-center rounded-3xl px-3 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.15)]">
        <IonIcon
          icon={searchOutline}
          className="h-6 w-6 text-grisText"
        ></IonIcon>
        <Select
          options={search.users}
          placeholder="BUSCAR"
          name="chat"
          className="w-[10px] flex-1 rounded-2xl"
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
            return (
              option.data.label
                .toLowerCase()
                .includes(value.toLowerCase())
            );
          }}
          onChange={() => onInputEnter()}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: "0px",
              boxShadow: "none",
              background: "none",
            }),
          }}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
        />
      </div>

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
