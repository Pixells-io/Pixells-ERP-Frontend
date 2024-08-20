import React from "react";

import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { cameraOutline } from "ionicons/icons";

function Options({ option, setOption }) {
  return (
    <div className="flex justify-center gap-x-6">
      <Button
        type="button"
        className={`flex h-24 w-28 flex-col rounded-xl ${option == "camera" && "border border-[#44444F]"} bg-inherit hover:bg-inherit`}
        onClick={() => setOption("camera")}
      >
        <IonIcon
          icon={cameraOutline}
          className="h-12 w-12 text-[#44444F]"
        ></IonIcon>
        <p className="text-md font-roboto font-light text-[#44444F]">CAMARA</p>
      </Button>
      <Button
        type="button"
        className={`flex h-24 w-28 flex-col rounded-xl ${option == "manual" && "border border-[#44444F]"} bg-inherit hover:bg-inherit`}
        onClick={() => setOption("manual")}
      >
        <IonIcon
          icon={cameraOutline}
          className="h-12 w-12 text-[#44444F]"
        ></IonIcon>
        <p className="text-md font-roboto font-light text-[#44444F]">MANUAL</p>
      </Button>
    </div>
  );
}

export default Options;
