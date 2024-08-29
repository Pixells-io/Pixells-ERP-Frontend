import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, closeCircle } from "ionicons/icons";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormProduct = () => {
  const [sublevels, setSublevels] = useState([
    { id: 1, name: "", code: "", viariable_id: "" },
  ]);
  const navigation = useNavigation();

  const handleNameChange = (id, name) => {
    setSublevels(
      sublevels.map((sublevel) =>
        sublevel.id === id ? { ...sublevel, name } : sublevel,
      ),
    );
  };

  const handleAddSublevel = () => {
    const newId = Math.max(...sublevels.map((s) => s.id), 0) + 1;
    setSublevels([...sublevels, { id: newId, status: "0", name: "" }]);
  };

  const handleRemoveSublevel = (id) => {
    if (sublevels.length > 1) {
      setSublevels(sublevels.filter((sublevel) => sublevel.id !== id));
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-y-8">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <Form id="form-product-attributes" action="/inventory" method="POST">
            <input
              type="hidden"
              hidden
              className="hidden"
              name="type_option"
              value={"save_attribute"}
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
                  Artículos
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
                        handleNameChange(sublevel.id, e.target.value)
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
                        handleNameChange(sublevel.id, e.target.value)
                      }
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                    />
                  </div>

                  <div className="col-span-2 flex items-center justify-evenly gap-x-2">
                    <Input
                      name="variable_id"
                      type="text"
                      value={sublevel.viariable_id}
                      onChange={(e) =>
                        handleNameChange(sublevel.id, e.target.value)
                      }
                      placeholder="0"
                      className="flex-grow rounded-xl border border-[#D7D7D7] text-center font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      readOnly
                   />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                      onClick={() => handleRemoveSublevel(sublevel.id)}
                      disabled={sublevels.length === 1}
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
          </Form>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-end">
        <Button
          type="submit"
          className="h-9 rounded-full bg-blue-500 px-8 text-xs font-semibold text-white hover:bg-blue-600"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Submitting..." : "Crear"}
        </Button>
      </div>
    </div>
  );
};

export default FormProduct;