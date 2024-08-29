import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, closeCircle } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormGroup = ({ variable }) => {
  const { id } = variable;
  const [sublevels, setSublevels] = useState([
    { id: 1, code: "", name: "", variable_id: variable },
  ]);
  const navigation = useNavigation();

  const handleInputChange = (sublevelId, field, value) => {
    setSublevels(
      sublevels.map((sublevel) =>
        sublevel.id === sublevelId ? { ...sublevel, [field]: value } : sublevel,
      ),
    );
  };

  const handleAddSublevel = () => {
    const newId = Math.max(...sublevels.map((s) => s.id), 0) + 1;
    setSublevels([
      ...sublevels,
      { id: newId, code: "", name: "", variable_id: variable },
    ]);
  };

  const handleRemoveSublevel = (sublevelId) => {
    if (sublevels.length > 1) {
      setSublevels(sublevels.filter((sublevel) => sublevel.id !== sublevelId));
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="area" className="w-full">
        <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
          {[{ value: "area", label: "Ubicaciones" }].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:text-white"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full rounded-[10px] bg-white p-4">
          <TabsContent value="area">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              AREA
            </h2>
            <div className="flex flex-wrap pl-2">
              <div className="flex h-full w-full flex-col gap-y-8">
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <Form
                      id="form-config-slots"
                      action={`/inventory/warehouse-locations/config/${id}`}
                      method="POST"
                    >
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
                                  handleInputChange(
                                    sublevel.id,
                                    "code",
                                    e.target.value,
                                  )
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
                                  handleInputChange(
                                    sublevel.id,
                                    "name",
                                    e.target.value,
                                  )
                                }
                                placeholder="Agrega"
                                className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                              />
                            </div>
                            <div className="col-span-2 flex items-center justify-evenly gap-x-2">
                              <Input
                                name="variable_id"
                                type="number"
                                value={sublevel.variable_id}
                                placeholder="0"
                                className="flex-grow rounded-xl border border-none bg-[#E8E8E8] text-center font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                                readOnly
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                                onClick={() =>
                                  handleRemoveSublevel(sublevel.id)
                                }
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
                          {navigation.state === "submitting"
                            ? "Submitting..."
                            : "Crear"}
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
