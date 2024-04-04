import * as React from "react";
import { Input } from "@/components/ui/input";

function CheckboxRouter({ name, label }) {
  return (
    <div className="flex">
      <label class="cursor-pointer duration-300 relative overflow-hidden w-6 h-6 flex justify-center items-center border-primario border rounded-lg bg-white before:absolute before:w-5 before:h-5 before:content[''] before:right-0 before:rounded-full before:blur-sm  after:absolute after:z-10 after:w-3 after:h-3 after:content['' after:left-1 after:bottom-1 after:rounded-full after:blur-sm">
          <Input class="peer  hidden" name={name} type="checkbox" />
          <div class="w-4 h-4  rounded-md opacity-0 peer-checked:opacity-100 bg-gradient-to-tr from-primario via-primario to-primario scale-0 transition-all z-20 duration-300  peer-checked:transition-all rounded-md top-2 left-2 peer-checked:scale-100 peer-checked:duration-300 peer-checked:bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500"></div>
      </label>
      <span
        className="text-sm font-roboto text-grisSubText ml-4"
      >{label}</span>
    </div>
  );
}

export default CheckboxRouter;
