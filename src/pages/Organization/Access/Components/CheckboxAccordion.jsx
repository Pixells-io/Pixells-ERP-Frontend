import * as React from "react";
import { Input } from "@/components/ui/input";
import { savePermission } from "../../utils";
import { permissionValidate } from "@/lib/actions";

function CheckboxAccordion({ position, permision, module }) {
  const [permission, setPermission] = React.useState(false);

  React.useEffect(() => {
    //Buscar y validar cuando esta checkeada o no
    async function setPermissionFunction() {
      let data = await permissionValidate(position, permision, module);
      setPermission(data.data.exist);
    }

    setPermissionFunction();
  }, []);

  //Funcion onchange
  async function changeStatus() {
    await savePermission(position, permision, module);
    let data = await permissionValidate(position, permision, module);
    setPermission(data.data.exist);
  }

  return (
    <div className="flex">
      <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
        <input
          type="checkbox"
          className="peer hidden"
          checked={permission}
          onChange={() => changeStatus()}
        />
        <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
      </label>
    </div>
  );
}

export default CheckboxAccordion;
