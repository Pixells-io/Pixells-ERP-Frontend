import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, closeCircle } from "ionicons/icons";
import { useFetcher, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FormGroup = ({ variables }) => {
  const [formData, setFormData] = useState([]);
  const fetcher = useFetcher();
  const navigate = useNavigate();

  useEffect(() => {
    if (variables && variables.length > 0) {
      setFormData(
        variables.map((variable) => ({
          id: variable,
          sublevels: [{ id: 1, code: "", name: "", variable_id: variable }],
        }))
      );
    }
  }, [variables]);

  const handleInputChange = (formIndex, sublevelId, field, value) => {
    setFormData((prevData) =>
      prevData.map((form, index) =>
        index === formIndex
          ? {
              ...form,
              sublevels: form.sublevels.map((sublevel) =>
                sublevel.id === sublevelId
                  ? { ...sublevel, [field]: value }
                  : sublevel
              ),
            }
          : form
      )
    );
  };

  const handleAddSublevel = (formIndex) => {
    setFormData((prevData) =>
      prevData.map((form, index) =>
        index === formIndex
          ? {
              ...form,
              sublevels: [
                ...form.sublevels,
                {
                  id: Math.max(...form.sublevels.map((s) => s.id), 0) + 1,
                  code: "",
                  name: "",
                  variable_id: form.id,
                },
              ],
            }
          : form
      )
    );
  };

  const handleRemoveSublevel = (formIndex, sublevelId) => {
    setFormData((prevData) =>
      prevData.map((form, index) =>
        index === formIndex
          ? {
              ...form,
              sublevels:
                form.sublevels.length > 1
                  ? form.sublevels.filter(
                      (sublevel) => sublevel.id !== sublevelId
                    )
                  : form.sublevels,
            }
          : form
      )
    );
  };

  const handleSubmit = async (event, formIndex) => {
    event.preventDefault();
    const form = formData[formIndex];
    const formDataToSend = new FormData();

    form.sublevels.forEach((sublevel) => {
      formDataToSend.append("code[]", sublevel.code);
      formDataToSend.append("name[]", sublevel.name);
    });
    formDataToSend.append("variable_id", form.id);

    await fetcher.submit(formDataToSend, {
      method: "post",
      action: "/inventory/warehouse-locations",
    });

    if (formIndex === formData.length - 1) {
      navigate("/inventory/warehouse-locations");
    }
  };

  if (formData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full overflow-auto">
      <Tabs defaultValue={`form-${formData[0].id}`} className="w-full">
        <TabsList className="flex flex-wrap gap-3 justify-start bg-transparent mb-4">
          {formData.map((form) => (
            <TabsTrigger
              key={form.id}
              value={`form-${form.id}`}
              className="px-4 py-1 data-[state=active]:bg-primario data-[state=active]:text-white bg-blancoBox2 text-grisHeading hover:bg-gray-300 rounded-full transition-colors text-center flex items-center justify-center text-[14px] font-roboto"
            >
              Form {form.id}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {formData.map((form, formIndex) => (
          <TabsContent key={form.id} value={`form-${form.id}`}>
            <form onSubmit={(e) => handleSubmit(e, formIndex)} id={`form-config-slots-${form.id}`}>
              <div className="w-full bg-white rounded-[10px] p-4">
                <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">
                  FORM FOR VARIABLE ID: {form.id}
                </h2>
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
                  {form.sublevels.map((sublevel) => (
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
                              formIndex,
                              sublevel.id,
                              "code",
                              e.target.value
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
                              formIndex,
                              sublevel.id,
                              "name",
                              e.target.value
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
                            handleRemoveSublevel(formIndex, sublevel.id)
                          }
                          disabled={form.sublevels.length === 1}
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
                  onClick={() => handleAddSublevel(formIndex)}
                  type="button"
                >
                  <IonIcon
                    icon={addCircle}
                    className="hover:text-primarioBotones-dark active:text-primarioBotones-darker h-5 w-5 text-primarioBotones transition-colors duration-300"
                  />
                </Button>
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  className="h-9 rounded-full bg-blue-500 px-8 text-xs font-semibold text-white hover:bg-blue-600"
                  disabled={fetcher.state === "submitting"}
                >
                  {fetcher.state === "submitting" ? "Submitting..." : "Crear"}
                </Button>
              </div>
            </form>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FormGroup;