import React from "react";
import EmailContentRow from "./EmailContentRow";

function EmailContent({ data }) {
  console.log(data, "30");
  return (
    <div className="flex flex-col">
      {data.map((mail, i) => (
        <EmailContentRow mail={mail} />
      ))}
    </div>
  );
}

export default EmailContent;
