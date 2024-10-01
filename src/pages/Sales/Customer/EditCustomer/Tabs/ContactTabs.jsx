import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { add, trashOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalPeriod from "../../Modals/ModalPeriod";
import { format } from "date-fns";

const ContactTabs = ({ data }) => {
  const navigation = useNavigation();
  const [contactNew, setContactNew] = useState({
    name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    position: "",
    active: "1",
    start: "",
    end: "",
  });

  const [isAddContact, setIsAddContact] = useState(false);

  const handleInputNewChange = (value, name) => {
    setContactNew({ ...contactNew, [name]: value });
  };

  const addDateNewContact = (dateI, dateF) => {
    setContactNew({ ...cashBoxNew, start: dateI, end: dateF });
  };

  const clearPeriodNewContact = () => {
    setContactNew({ ...cashBoxNew, start: "", end: "" });
  };

  const clearData = () => {
    setContactNew({
      name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone: "",
      position: "",
      active: "1",
      start: "",
      end: "",
    });
    setIsAddContact(false);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      clearData();
    }
  }, [navigation.state]);

  return (
    <div className="flex h-full w-full flex-col overflow-auto py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          CONTACTOS
        </h2>
        <div className="mt-2 flex w-fit items-center gap-x-2">
          <Button
            onClick={() => setIsAddContact(true)}
            className="flex h-[24px] items-center gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2"
            disabled={isAddContact}
          >
            <IonIcon className="h-5 w-5" icon={add}></IonIcon>
            Agregar
          </Button>
        </div>

        {/* New component */}
        {isAddContact && (
          <Form
            className="mt-4"
            action={`/sales/customer/edit/${data?.id}`}
            method="post"
            id="create-form-cashbox"
          >
            <input
              type="hidden"
              hidden
              name="client_transactional_id"
              value={data?.id}
            />
            <input type="hidden" hidden name="type" value={"contact"} />
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              CONTACTO NUEVO
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <InputForm
                  name="name"
                  type="text"
                  placeholder={"Nombre"}
                  disabled={false}
                  value={contactNew?.name}
                  onChange={(e) => handleInputNewChange(e.target.value, "name")}
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="middle_name"
                  type="text"
                  placeholder={"Apellido Paterno"}
                  disabled={false}
                  value={contactNew?.middle_name}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "middle_name")
                  }
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="last_name"
                  type="text"
                  placeholder={"Apellido Materno"}
                  disabled={false}
                  value={contactNew?.last_name}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "last_name")
                  }
                />
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-3">
                <InputForm
                  name="email"
                  type="text"
                  placeholder={"E-Mail"}
                  disabled={false}
                  value={contactNew?.email}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "email")
                  }
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="phone"
                  type="text"
                  placeholder={"Teléfono"}
                  disabled={false}
                  value={contactNew?.phone}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "phone")
                  }
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="position"
                  type="text"
                  placeholder={"Posición"}
                  disabled={false}
                  value={contactNew?.position}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "position")
                  }
                />
              </div>
            </div>
            <div className="col-span-12 flex flex-col gap-y-2">
              <div className="flex w-full justify-between py-2">
                <div className="flex items-center gap-x-3">
                  <Switch
                    className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                    name="active"
                    checked={contactNew?.active == "1"}
                    onCheckedChange={(e) =>
                      handleInputNewChange(e ? "1" : "0", "active")
                    }
                    disabled={true}
                  />
                  <label className="font-roboto text-xs font-normal text-grisText">
                    Activo
                  </label>
                  {!!contactNew.start && !!contactNew.end ? (
                    <div className="flex items-center gap-x-2">
                      <div className="rounded-[8px] bg-gris px-2 py-1">
                        <input
                          type="hidden"
                          hidden
                          name="start"
                          className="hidden"
                          value={format(contactNew?.start, "PP")}
                        />
                        <label className="text-xs font-light text-[#44444F]">
                          {format(contactNew?.start, "PP")}
                        </label>
                      </div>
                      <div className="rounded-[8px] bg-gris px-2 py-1">
                        <input
                          type="hidden"
                          hidden
                          name="end"
                          className="hidden"
                          value={format(contactNew?.end, "PP")}
                        />
                        <label className="text-xs font-light text-[#44444F]">
                          {format(contactNew?.end, "PP")}
                        </label>
                      </div>
                    </div>
                  ) : (
                    <label className="font-roboto text-xs font-light text-grisSubText">
                      (Sin periodo de tiempo)
                    </label>
                  )}
                </div>
                <div>
                  {!!contactNew?.start && !!contactNew?.end ? (
                    <Button
                      type="button"
                      className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                      onClick={() => clearPeriodNewContact()}
                    >
                      Restablecer
                    </Button>
                  ) : (
                    <ModalPeriod
                      setFunctionParent={addDateNewContact}
                      index={0}
                      disabled={true}
                    />
                  )}
                </div>
              </div>
              <div className="grid w-full grid-cols-12 gap-x-8 gap-y-2">
                <div className="col-span-6 flex items-center gap-x-3">
                  <Switch
                    className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                    name="principal"
                    checked={contactNew?.principal == "1"}
                    onCheckedChange={(e) =>
                      handleInputNewChange(e ? "1" : "0", "principal")
                    }
                    disabled={true}
                  />
                  <label className="font-roboto text-xs font-normal text-grisText">
                    Contacto Principal
                  </label>
                </div>
                <div className="col-span-6 flex justify-end">
                  <Button
                    type="button"
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-[#44444F] bg-inherit px-0 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                    onClick={() => clearData()}
                  >
                    <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}

        {/* Show list cashBox */}
        {/* <FormUpdateCashBox
          cashBoxes={cashBoxes}
          positions={positions}
          store_id={store_id}
        /> */}
      </div>

      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full items-center justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          {isAddContact && (
            <Button
              className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
              disabled={navigation.state === "submitting"}
              form="create-form-cashbox"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactTabs;
