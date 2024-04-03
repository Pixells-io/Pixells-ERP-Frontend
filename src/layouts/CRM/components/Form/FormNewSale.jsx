import React from "react";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

function FormNewSale() {
  return (
    <div className="w-full flex justify-start gap-6 p-0 text-gris2 group hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg">
      <IonIcon icon={add} size="large"></IonIcon>
      <p className="text-base font-medium text-gris2 group-hover:text-blue-500 mr-2">
        New Sale
      </p>
    </div>
  );
}

export default FormNewSale;
