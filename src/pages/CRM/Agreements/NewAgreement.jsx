import React, { useState } from "react";

import { add, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewAgreements() {
  let [value, setValue] = useState("");

  function addVariable() {
    let varValue = null;
    switch (1) {
      case 1:
        varValue = "{person_name}";
        break;
      case 2:
        varValue = "{service_name}";
        break;
      case 3:
        varValue = "{date}";
        break;
      case 4:
        varValue = "<img>";
        break;

      default:
        break;
    }
    const actualValue = value.toString();
    console.log(value + varValue);
    setValue(actualValue + varValue);
  }

  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">agreements</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              AGREEMENTS CONSOLE
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">6 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">36 templates</div>
          </div>
        </div>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <button onClick={addVariable}>Hola</button>
        </div>
      </div>
    </div>
  );
}

export default NewAgreements;
