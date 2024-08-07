import React from "react";

import { IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";

function StepTwo({ getRootProps, getInputProps }) {

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center gap-y-4"
    >
      <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-[#5B89FF] bg-[#5B89FF]/[0.12] px-4 py-2">
        <input id="filesTopic" name="filesTopic[]" {...getInputProps()} />
        <IonIcon
          icon={addOutline}
          size="large"
          className="text-primarioBotones"
        ></IonIcon>
      </div>
      <label className="text-xs font-light text-primarioBotones">
        Selecciona o Arrastra
      </label>
    </div>
  );
}

export default StepTwo;
