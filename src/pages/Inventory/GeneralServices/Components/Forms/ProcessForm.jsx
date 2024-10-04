import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { checkmark, add } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";
import ModalPeriod from "../Modals/ModalPeriod";
import ModalDeleteUser from "../Modals/ModalDeleteUser";
import { format } from "date-fns";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const ProcessTab = ({ categories, info }) => {
  const { id } = useParams();
  const navigation = useNavigation();
  const [processes, setProcesses] = useState([]);
  const [selectEditProcess, setSelectEditProcess] = useState(null);

  useEffect(() => {
    if (info.process && Array.isArray(info.process)) {
      const formattedProcesses = info.process.map(process => ({
        ...process,
        active: process.type === 0 ? "0" : "1",
        option: "updated_process",
        category_id: parseInt(process.category)
      }));
      setProcesses(formattedProcesses);
    }
  }, [info.process]);

  const addProcess = () => {
    const newProcess = {
      id: processes.length + 1,
      title: "",
      name: "",
      description: "",
      active: "0",
      start: "",
      end: "",
      category_id: "",
      option: "create_process",
    };
    setProcesses([...processes, newProcess]);
    setSelectEditProcess(processes.length);
  };

  const clearPeriod = (i) => {
    const updatedProcesses = processes.map((p, index) => {
      if (index === i) {
        return { ...p, start: "", end: "" };
      }
      return p;
    });
    setProcesses(updatedProcesses);
    setSelectEditProcess(i);
  };

  const handleInputChange = (value, name, i) => {
    const updatedProcesses = processes.map((prevProcess, index) => {
      if (index === i) {
        return { ...prevProcess, [name]: value };
      }
      return prevProcess;
    });
    setProcesses(updatedProcesses);
    setSelectEditProcess(i);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      setSelectEditProcess(null);
    }
  }, [navigation.state]);

  const formattedCategories = categories.map(category => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <div className="flex h-full w-full flex-col overflow-hidden py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">PROCESOS</h2>

        <div className="mt-2 flex w-fit items-center gap-x-2">
          <Button
            onClick={addProcess}
            className="flex h-[24px] items-center gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2"
          >
            <IonIcon className="h-5 w-5" icon={add}></IonIcon>
            Agregar
          </Button>
        </div>

        {processes.map((process, index) => (
          <Form action={"/inventory/general-services/service/edit/" + id} className="mt-4" key={process.id} method="post">
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">PROCESO {index + 1}</p>
            <input type="text" hidden readOnly name="service_id" value={id} />
            <input type="text" hidden readOnly name="type_option" value={process.option} />
            <input type="text" hidden readOnly name="service_step_id" value={process.id} />
            <input type="text" hidden readOnly name="last_step" value={processes.length} />
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <InputForm
                  name="title"
                  type="text"
                  placeholder="Titulo"
                  value={process.name}
                  onChange={(e) => handleInputChange(e.target.value, "name", index)}
                />
              </div>
              <div className="col-span-3">
                <SelectRouter 
                  name="category_id"
                  options={formattedCategories} 
                  placeholder={"Categoría/Acción"}
                  value={formattedCategories.find(cat => cat.value === process.category_id)}
                  onChange={(selectedOption) => {
                    handleInputChange(selectedOption.value, "category_id", index);
                  }}
                  getOptionValue={(option) => option.value} 
                  getOptionLabel={(option) => option.label} 
                />
              </div>

              <div className="col-span-3">
                <InputForm
                  name="description"
                  type="text"
                  placeholder="Descripcion"
                  value={process.description}
                  onChange={(e) => handleInputChange(e.target.value, "description", index)}
                />
              </div>

              <div className="col-span-3 flex items-end justify-end">
                {index === selectEditProcess && (
                  <Button
                    type="submit"
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-primarioBotones bg-inherit px-1.5 text-[11px] font-medium text-primarioBotones hover:bg-primarioBotones"
                    disabled={navigation.state === "submitting"}
                  >
                    <IonIcon className="h-5 w-5" icon={checkmark}></IonIcon>
                    {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
                  </Button>
                )}
              </div>

              <div className="col-span-12 flex flex-col gap-y-2">
                <div className="flex w-full justify-between py-2">
                  <div className="flex items-center gap-x-3">
                    <Switch
                      className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                      name="active"
                      checked={process.active === "1"}
                      onCheckedChange={(e) => handleInputChange(e ? "1" : "0", "active", index)}
                    />
                    <label className="font-roboto text-xs font-normal text-grisText">Activo</label>
                    {!!process.start && !!process.end ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <label className="text-xs font-light text-[#44444F]">{format(new Date(process.start), "PP")}</label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <label className="text-xs font-light text-[#44444F]">{format(new Date(process.end), "PP")}</label>
                        </div>
                      </div>
                    ) : (
                      <label className="font-roboto text-xs font-light text-grisSubText">(Sin periodo de tiempo)</label>
                    )}
                  </div>
                  <div>
                    {!!process.start && !!process.end ? (
                      <Button
                        type="button"
                        className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                        onClick={() => clearPeriod(index)}
                      >
                        Restablecer
                      </Button>
                    ) : (
                      <ModalPeriod
                        setFunctionParent={(dateI, dateF) => {
                          const updatedProcesses = processes.map((p, idx) =>
                            idx === index ? { ...p, start: dateI, end: dateF } : p,
                          );
                          setProcesses(updatedProcesses);
                        }}
                        index={index}
                      />
                    )}
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <ModalDeleteUser
                    option={"destroyProcessService"}
                    service_id={id}
                    user_id={process.id}
                    user_name={process.name} 
                  />
                </div>
              </div>
            </div>
          </Form>
        ))}

      </div>

      <div className="flex w-full flex-1 items-end px-2">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">Actualizado 07 septiembre 2024</label>
        </div>
        <button className="h-[31px] rounded-xl bg-[#E0E0E0] px-4 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">Guardar</button>
      </div>
    </div>
  );
};

export default ProcessTab;