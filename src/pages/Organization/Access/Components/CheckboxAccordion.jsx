import * as React from "react";
import { savePermission } from "../../utils";
import { permissionValidate } from "@/lib/actions";

function CheckboxAccordion({ position, permision, module, onPermissionChange }) {
  const [permission, setPermission] = React.useState(false);

  React.useEffect(() => {
    async function setPermissionFunction() {
      let data = await permissionValidate(position, permision, module);
      setPermission(data.data.exist);
      // Inicializar el conteo cuando se carga el componente
      if (data.data.exist) {
        onPermissionChange(true);
      }
    }

    setPermissionFunction();
  }, []);
  
  async function changeStatus() {
    await savePermission(position, permision, module);
    let data = await permissionValidate(position, permision, module);
    setPermission(data.data.exist);
    // Notificar al componente padre del cambio
    onPermissionChange(data.data.exist);
  }

  return (
    <div className="flex">
      <label className="before:content[''] after:content['' relative flex h-4 w-4 cursor-pointer items-center justify-center overflow-hidden rounded border border-primario bg-white duration-300 before:absolute before:right-0 before:h-3 before:w-3 before:rounded-full before:blur-sm after:absolute after:bottom-0.5 after:left-0.5 after:z-10 after:h-2 after:w-2 after:rounded-full after:blur-sm">
        <input
          type="checkbox"
          className="peer hidden"
          checked={permission}
          onChange={() => changeStatus()}
        />
        <div className="absolute inset-0 z-20 m-auto h-2.5 w-2.5 scale-0 rounded bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
      </label>
    </div>
  );
}

export default CheckboxAccordion;