import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, closeCircle } from "ionicons/icons";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormGroup = ({ ids }) => {
  const [sublevels, setSublevels] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const initialSublevels = ids.reduce((acc, id) => {
      acc[id] = [{ id: 1, code: "", name: "", variable_id: id }];
      return acc;
    }, {});
    setSublevels(initialSublevels);
  }, [ids]);

  const handleInputChange = (id, sublevelId, field, value) => {
    setSublevels(prev => ({
      ...prev,
      [id]: prev[id].map(sublevel =>
        sublevel.id === sublevelId ? { ...sublevel, [field]: value } : sublevel
      ),
    }));
  };

  const handleAddSublevel = (id) => {
    setSublevels(prev => {
      const newId = Math.max(...prev[id].map(s => s.id), 0) + 1;
      return {
        ...prev,
        [id]: [...prev[id], { id: newId, code: "", name: "", variable_id: id }],
      };
    });
  };

  const handleRemoveSublevel = (id, sublevelId) => {
    setSublevels(prev => ({
      ...prev,
      [id]: prev[id].length > 1 ? prev[id].filter(sublevel => sublevel.id !== sublevelId) : prev[id],
    }));
  };

  return (
    <Form method="post" action="/inventory/warehouse-locations" className="w-full overflow-hidden">
      <div className="w-full">
        {ids.map((id) => (
          <div key={id} className="mb-4">
            <div className="w-full rounded-[10px] bg-white p-4">
              <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
                {`Formulario ${id}`}
              </h2>
              {/* Campo oculto para variable_id */}
              <input type="hidden" name={`variable_id_${id}`} value={id} />
              {sublevels[id]?.map((sublevel) => (
                <div key={sublevel.id} className="grid grid-cols-12 gap-4 mb-4">
                  <div className="col-span-5">
                    <Input
                      name={`code_${id}[]`}
                      type="text"
                      value={sublevel.code}
                      onChange={(e) => handleInputChange(id, sublevel.id, "code", e.target.value)}
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                    />
                  </div>
                  <div className="col-span-5">
                    <Input
                      name={`name_${id}[]`}
                      type="text"
                      value={sublevel.name}
                      onChange={(e) => handleInputChange(id, sublevel.id, "name", e.target.value)}
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                    />
                  </div>
                  <div className="col-span-2 flex items-center justify-evenly gap-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                      onClick={() => handleRemoveSublevel(id, sublevel.id)}
                      disabled={sublevels[id]?.length === 1}
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
              <Button
                variant="ghost"
                className="mt-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
                onClick={() => handleAddSublevel(id)}
                type="button"
              >
                <IonIcon
                  icon={addCircle}
                  className="hover:text-primarioBotones-dark active:text-primarioBotones-darker h-5 w-5 text-primarioBotones transition-colors duration-300"
                />
              </Button>
            </div>
          </div>
        ))}
      </div>
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
  );
};

export default FormGroup;
