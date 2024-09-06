import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useSubmit } from "react-router-dom";

import Select from "react-select";

function Search(search) {
  const submit = useSubmit();

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
      <div className="flex items-center rounded-3xl px-3 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.15)]">
        <IonIcon
          icon={searchOutline}
          className="h-6 w-6 text-grisText"
        ></IonIcon>
        <Select
          options={search.users}
          value={inputSearch}
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
            return option.data.label
              .toLowerCase()
              .includes(value.toLowerCase());
          }}
          onChange={(e) => onInputEnter(e)}
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
    </div>
  );
}

export default Search;
