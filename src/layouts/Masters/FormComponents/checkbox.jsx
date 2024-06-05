import * as React from "react";
import { Input } from "@/components/ui/input";

function CheckboxRouter({ name, label }) {
  return (
    <div className="flex">
      <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
        <Input className="peer hidden" name={name} type="checkbox" />
        <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
      </label>
      <span className="ml-4 font-roboto text-sm text-grisSubText">{label}</span>
    </div>
  );
}

export default CheckboxRouter;
