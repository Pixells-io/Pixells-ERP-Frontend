import React from "react";
import { SearchAction } from "@/layouts/Chat/utils";

function MainChat() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        <h1>Hi</h1>
      </div>
    </div>
  );
}

export default MainChat;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await SearchAction(data);

  console.log(validation);

  return validation;
}
