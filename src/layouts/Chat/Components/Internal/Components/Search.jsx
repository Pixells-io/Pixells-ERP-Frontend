import React from "react";
import Select from 'react-select'

function Search() {
    const options = [
        {
            value: 'Chat 1',
            label: '1/1'
        },
        {
            value: 'Group 1',
            label: '2/1'
        }   
    ]
  return (
    <Select
        options={options}
        placeholder="SEARCH"
        name="chat"
        className="rounded-2xl"
    />
  );
}

export default Search;


