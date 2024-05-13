import React from "react";
import { redirect } from "react-router-dom";

import { saveNewImage } from "./utils";
import TestImage from "./User/components/TestImage";

function Sopas() {
  return (
    <div>
      <div>
        <TestImage />
      </div>
    </div>
  );
}

export default Sopas;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewImage(data);

  return redirect("/organization/sopas");
}
