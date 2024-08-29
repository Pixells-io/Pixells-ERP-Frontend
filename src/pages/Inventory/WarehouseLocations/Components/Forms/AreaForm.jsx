import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, closeCircle } from "ionicons/icons";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AreaForm = () => {
  const [sublevels, setSublevels] = useState([
    { id: 1, code: "", name: "", variable_id: "0" },
  ]);
  const navigation = useNavigation();

  const handleInputChange = (id, field, value) => {
    setSublevels(
      sublevels.map((sublevel) =>
        sublevel.id === id ? { ...sublevel, [field]: value } : sublevel
      )
    );
  };

  const handleAddSublevel = () => {
    const newId = Math.max(...sublevels.map((s) => s.id), 0) + 1;
    setSublevels([...sublevels, { id: newId, code: "", name: "", variable_id: "0" }]);
  };

  const handleRemoveSublevel = (id) => {
    if (sublevels.length > 1) {
      setSublevels(sublevels.filter((sublevel) => sublevel.id !== id));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Use getAll() for code and name arrays
    const codes = formData.getAll('code[]');
    const names = formData.getAll('name[]');
    
    // Use get() for variable_id as it's the same for all
    const variable_id = formData.get('variable_id');

    // Here you can process the data as needed, e.g., send it to an API
    console.log({ codes, names, variable_id });

    // You can add your submission logic here
  };

  return (
    <div className="flex h-full w-full flex-col gap-y-8">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <Form id="form-product-attributes" action="/inventory/warehouse-locations/config" method="POST">
            <input
              type="hidden"
              name="type_option"
              value="save_attribute"
            />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <label className="flex font-roboto text-[14px] text-gris2">
                  Código
                </label>
              </div>
              <div className="col-span-5">
                <label className="flex font-roboto text-[14px] text-gris2">
                  Nombre o Descripción
                </label>
              </div>
              <div className="col-span-2">
                <label className="flex font-roboto text-[14px] text-gris2">
                  Ubicaciones
                </label>
              </div>
              {sublevels.map((sublevel) => (
                <div
                  key={sublevel.id}
                  className="col-span-12 grid grid-cols-12 gap-4"
                >
                  <div className="col-span-5">
                    <Input
                      name="code[]"
                      type="text"
                      value={sublevel.code}
                      onChange={(e) =>
                        handleInputChange(sublevel.id, 'code', e.target.value)
                      }
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                    />
                  </div>
                  <div className="col-span-5">
                    <Input
                      name="name[]"
                      type="text"
                      value={sublevel.name}
                      onChange={(e) =>
                        handleInputChange(sublevel.id, 'name', e.target.value)
                      }
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                    />
                  </div>
                  <div className="col-span-2 flex items-center justify-evenly gap-x-2">
                    <Input
                      name="variable_id"
                      type="text"
                      value={sublevel.variable_id}
                      onChange={(e) =>
                        handleInputChange(sublevel.id, 'variable_id', e.target.value)
                      }
                      placeholder="0"
                      className="flex-grow rounded-xl border border-none bg-[#E8E8E8] text-center font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      readOnly
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                      onClick={() => handleRemoveSublevel(sublevel.id)}
                      disabled={sublevels.length === 1}
                      type="button"
                    >
                      <IonIcon
                        icon={closeCircle}
                        size="small"
                        className="cursor-pointer text-grisDisabled"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              className="mt-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              onClick={handleAddSublevel}
              type="button"
            >
              <IonIcon
                icon={addCircle}
                className="hover:text-primarioBotones-dark active:text-primarioBotones-darker h-5 w-5 text-primarioBotones transition-colors duration-300"
              />
            </Button>

            <div className="mt-4 flex justify-end">
              <Button
                type="submit"
                className="h-9 rounded-full bg-blue-500 px-8 text-xs font-semibold text-white hover:bg-blue-600"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Crear"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AreaForm;
