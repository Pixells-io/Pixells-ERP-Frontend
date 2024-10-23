import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { savePermission } from "../../utils";
import { permissionValidate } from "@/lib/actions";

function CheckboxAccordion({ position, permision, module, onPermissionChange }) {
  const [permission, setPermission] = React.useState(false);

  React.useEffect(() => {
    async function setPermissionFunction() {
      let data = await permissionValidate(position, permision, module);
      setPermission(data.data.exist);
      if (data.data.exist) {
        onPermissionChange(true);
      }
    }

    setPermissionFunction();
  }, []);
  
  async function changeStatus(checked) {
    await savePermission(position, permision, module);
    let data = await permissionValidate(position, permision, module);
    setPermission(data.data.exist);
    onPermissionChange(data.data.exist);
  }

  return (
    <div className="flex items-center">
      <Checkbox
        checked={permission}
        onCheckedChange={changeStatus}
        className="data-[state=checked]:bg-primario data-[state=checked]:border-primario border-primario"
      />
    </div>
  );
}

export default CheckboxAccordion;