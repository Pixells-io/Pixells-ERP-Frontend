import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  checkmarkCircleOutline,
  closeCircle,
  create,
} from "ionicons/icons";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ModalDeleteAttributeSlot from "./Modals/ModalDeleteAttributeSlot";

const FormProduct = ({ attribute_id, attribute_name, slots }) => {
  const [sublevels, setSublevels] = useState([]);
  const navigation = useNavigation();
  const [AttributeSlotId, setAttributeSlotId] = useState(0);
  const [modalDeleteSlot, setModalDeleteSlot] = useState(false);
  const [slotsInfo, setSlotsInfo] = useState(slots);
  const [slotName, setSlotName] = useState("");

  useEffect(() => {
    setSlotsInfo(slots);
  }, [slots]);

  const [indexEnabled, setIndexEnabled] = useState(null);

  useEffect(() => {
    if (navigation.state === "idle") {
      setSublevels([]);
      setIndexEnabled(null);
    }
  }, [navigation.state]);

  const handleNameChange = (idAux, name, value) => {
    setSublevels(
      sublevels.map((sublevel) =>
        sublevel.idAux === idAux ? { ...sublevel, [name]: value } : sublevel,
      ),
    );
  };

  const handleNameChangeBd = (id, name, value) => {
    setSlotsInfo(
      slotsInfo.map((slot) =>
        slot.id === id ? { ...slot, [name]: value } : slot,
      ),
    );
  };

  const handleAddSublevel = () => {
    const newId = Math.max(...sublevels.map((s) => s.idAux), 0) + 1;
    setSublevels([...sublevels, { idAux: newId || 1, code: "", name: "" }]);
  };

  const handleRemoveSublevel = (idAux) => {
    if (sublevels.length > 0) {
      setSublevels(sublevels.filter((sublevel) => sublevel.idAux !== idAux));
    }
  };

  const handleOpenModalDelete = (attribuSlot, slot_name) => {
    setAttributeSlotId(attribuSlot);
    setSlotName(slot_name);
    setModalDeleteSlot(true);
  };

  return (
    <div className="flex h-full w-full flex-col gap-y-8">
      {/* Modals */}
      <ModalDeleteAttributeSlot
        attribute_id={attribute_id}
        slot_id={AttributeSlotId}
        modal={modalDeleteSlot}
        setModal={setModalDeleteSlot}
        slot_name={slotName}
      />
      <h2 className="text-md font-poppins font-medium text-[#44444F]">
        {attribute_name}
      </h2>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <label className="flex font-roboto text-[14px] text-gris2">
                Código
              </label>
            </div>
            <div className="col-span-4">
              <label className="flex font-roboto text-[14px] text-gris2">
                Nombre o Descripción
              </label>
            </div>
            <div className="col-span-4">
              <label className="flex font-roboto text-[14px] text-gris2">
                Artículos
              </label>
            </div>
            {/* update slots */}
            <div className="col-span-12 flex flex-col gap-y-4">
              {slotsInfo.map((slot, index) => (
                <Form
                  key={index}
                  className="grid w-full grid-cols-12 gap-4"
                  action="/inventory"
                  method="POST"
                >
                  <input
                    type="hidden"
                    hidden
                    readOnly
                    className="hidden"
                    name="type_option"
                    value={"update_attributeSlot"}
                  />
                  <input
                    type="hidden"
                    hidden
                    readOnly
                    className="hidden"
                    name="slot_id"
                    value={slot.id}
                  />
                  <div className="col-span-4">
                    <Input
                      name="code"
                      type="text"
                      value={slot.code}
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      disabled={indexEnabled != index}
                      required={true}
                      onChange={(e) =>
                        handleNameChangeBd(slot.id, "code", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-span-4">
                    <Input
                      name="name"
                      type="text"
                      value={slot.name}
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      disabled={indexEnabled != index}
                      required={true}
                      onChange={(e) =>
                        handleNameChangeBd(slot.id, "name", e.target.value)
                      }
                    />
                  </div>

                  <div className="col-span-4 grid grid-cols-12 gap-x-2">
                    <div className="col-span-8">
                      <Input
                        name="article"
                        type="text"
                        disabled={true}
                        readOnly
                        placeholder="0"
                        className="flex-grow rounded-xl border border-[#D7D7D7] text-center font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      />
                    </div>
                    <div className="col-span-4 flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        type="button"
                        className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                        onClick={() =>
                          handleOpenModalDelete(slot.id, slot.name)
                        }
                        disabled={sublevels.length > 0}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size="small"
                          className="cursor-pointer text-grisDisabled"
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        type="button"
                        className={`rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones`}
                        onClick={() => {
                          setIndexEnabled(indexEnabled == null ? index : null);
                        }}
                        disabled={sublevels.length > 0}
                      >
                        <IonIcon
                          icon={create}
                          size="small"
                          className={`cursor-pointer text-grisText ${indexEnabled == index && "text-primarioBotones"}`}
                        />
                      </Button>
                      {indexEnabled == index && (
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="rounded-full p-1 text-[#00A259] hover:text-[#00A259] focus-visible:ring-primarioBotones"
                          disabled={
                            navigation.state === "submitting" ||
                            sublevels.length > 0
                          }
                        >
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            size="small"
                            className="cursor-pointer"
                          />
                        </Button>
                      )}
                    </div>
                  </div>
                </Form>
              ))}
            </div>
            {/* add slots */}
            <Form
              id="form-product-attributes"
              action="/inventory"
              method="POST"
              className="col-span-12 flex flex-col gap-y-4"
            >
              <input
                type="hidden"
                hidden
                readOnly
                className="hidden"
                name="type_option"
                value={"save_attributeSlots"}
              />
              <input
                type="hidden"
                hidden
                readOnly
                className="hidden"
                name="attribute_id"
                value={attribute_id}
              />
              {sublevels.map((sublevel, index) => (
                <div key={index} className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <Input
                      name="code[]"
                      type="text"
                      value={sublevel.code}
                      onChange={(e) =>
                        handleNameChange(sublevel.idAux, "code", e.target.value)
                      }
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      required={true}
                    />
                  </div>
                  <div className="col-span-4">
                    <Input
                      name="name[]"
                      type="text"
                      value={sublevel.name}
                      onChange={(e) =>
                        handleNameChange(sublevel.idAux, "name", e.target.value)
                      }
                      placeholder="Agrega"
                      className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      required={true}
                    />
                  </div>

                  <div className="col-span-4 grid grid-cols-12 gap-x-2">
                    <div className="col-span-8">
                      <Input
                        name="article[]"
                        type="text"
                        disabled={true}
                        readOnly
                        placeholder="0"
                        className="flex-grow rounded-xl border border-[#D7D7D7] text-center font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
                      />
                    </div>
                    <div className="cols-span-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        type="button"
                        className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                        onClick={() => handleRemoveSublevel(sublevel.idAux)}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size="small"
                          className="cursor-pointer text-grisDisabled"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Form>
          </div>

          <Button
            variant="ghost"
            className="mt-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            onClick={handleAddSublevel}
            type="button"
            disabled={modalDeleteSlot || indexEnabled != null}
          >
            <IonIcon
              icon={addCircle}
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker h-5 w-5 text-primarioBotones transition-colors duration-300"
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-end">
        <Button
          form="form-product-attributes"
          type="submit"
          className="h-9 rounded-full bg-blue-500 px-8 text-xs font-semibold text-white hover:bg-blue-600"
          disabled={
            navigation.state === "submitting" ||
            modalDeleteSlot ||
            indexEnabled != null
          }
        >
          {navigation.state === "submitting" ? "Submitting..." : "Crear"}
        </Button>
      </div>
    </div>
  );
};

export default FormProduct;
