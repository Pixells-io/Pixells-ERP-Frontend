import React from "react";

import { IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { useNavigation } from "react-router-dom";

function StepTwo({ getRootProps, getInputProps }) {
  const navigation = useNavigation();

  return (
    <div>
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
      <Button
        form="form-topic"
        type="submit"
        className="absolute bottom-1 right-4 z-10 bg-primarioBotones"
        disabled={navigation.state === "submitting"}
      >
        {navigation.state === "submitting" ? "Submitting..." : "Omitir"}
      </Button>
    </div>
  );
}

export default StepTwo;
