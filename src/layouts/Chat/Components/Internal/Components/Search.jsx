import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { Form, useSubmit } from "react-router-dom";

import Select, { components } from "react-select";

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

  const CustomControl = ({ children, ...props }) => (
    <components.Control {...props} className="flex flex-row-reverse items-center">
      {children}
      <IonIcon icon={searchOutline} className="h-6 w-6 text-grisText"></IonIcon>
    </components.Control>
  );

  return (
    <div className="w-full">
      <Select
        options={search.users}
        components={{
          Control: CustomControl,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }} // Usa el componente personalizado
        value={inputSearch}
        placeholder="BUSCAR"
        name="chat"
        isClearable={false}
        className="flex-1 rounded-2xl"
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
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "0px",
            background: "white",
            borderRadius: "20px",
            padding: "0px 10px 0px 10px",
            boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.2)",
          }),
        }}
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
