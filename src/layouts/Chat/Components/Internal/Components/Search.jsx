import React, { useRef }from "react";
import Select from 'react-select';
import { Form } from "react-router-dom";

function Search(users) {

    const selectUser = [];

    arrayFillUser(users, selectUser);

    function arrayFillUser(data, array) {

        let dataParse = data.users;

        dataParse.forEach(element => {
            array.push({
                value: '1/'+element.id,
                label: element.name+' '+element.last_name
            });
        });
    }

  return (
    <Form
    id="search-chat"
    action="/chat"
    method="POST"
    >
        <input type="hidden" value={1} name="function" />
        <Select
            options={selectUser}
            placeholder="SEARCH"
            name="chat"
            className="rounded-2xl"
        />
        <button form="search-chat">Hol</button>
    </Form>
  );
}

export default Search;


