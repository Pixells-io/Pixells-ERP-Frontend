import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { checkmark, trashOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { format } from "date-fns";
import ModalPeriod from "../../Modals/ModalPeriod";
import ModalDeleteContact from "../../Modals/ModalDeleteContacts";

const FormUpdateContact = ({ contacts, client_id }) => {
  const navigation = useNavigation();
  const [contactsSelect, setContactsSelect] = useState(contacts);

  const [selectEditContact, setSelectEditContact] = useState(null);

  const addDate = (dateI, dateF, i) => {
    const cashBoxAux = contactsSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          start: dateI,
          end: dateF,
        };
      } else {
        return u;
      }
    });
    setContactsSelect(cashBoxAux);
    setSelectEditContact(i);
  };

  const clearPeriod = (i) => {
    const auxCashBoxes = contactsSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          start: "",
          end: "",
        };
      } else {
        return u;
      }
    });
    setContactsSelect(auxCashBoxes);
    setSelectEditContact(i);
  };

  const handleInputChange = (value, name, i) => {
    setSelectEditContact(i);
    const aux = contactsSelect.map((prevFormData, index) => {
      if (index == i) {
        return { ...prevFormData, [name]: value };
      } else {
        return {
          ...prevFormData,
        };
      }
    });

    setContactsSelect([...aux]);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      setSelectEditContact(null);
    }
  }, [navigation.state]);

  useEffect(() => {
    changeValueContacts();
  }, [contacts]);

  const changeValueContacts = () => {
    setContactsSelect(contacts);
  };

  return (
    <div>
      {/* Show list contact */}
      {contactsSelect.map((contact, index) => (
        <Form
          key={index}
          className="mt-4"
          action={`/shopping/supplier/edit/${client_id}`}
          method="post"
        >
           <input type="hidden" hidden name="supplier_id" value={client_id} />
          <input type="hidden" hidden name="contact_id" value={contact?.id} />
          <input type="hidden" hidden name="type" value={"contact"} />
          <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
            CONTACTO {index + 1}
          </p>
          <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
            <div className="col-span-3">
              <InputForm
                name="name"
                type="text"
                placeholder={"Nombre"}
                disabled={false}
                value={contact?.name}
                onChange={(e) =>
                  handleInputChange(e.target.value, "name", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="middle_name"
                type="text"
                placeholder={"Apellido Paterno"}
                disabled={false}
                value={contact?.middle_name}
                onChange={(e) =>
                  handleInputChange(e.target.value, "middle_name", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="last_name"
                type="text"
                placeholder={"Apellido Materno"}
                disabled={false}
                value={contact?.last_name}
                onChange={(e) =>
                  handleInputChange(e.target.value, "last_name", index)
                }
              />
            </div>
            <div className="col-span-3 flex items-end justify-end">
              {index == selectEditContact && (
                <Button
                  className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-primarioBotones bg-inherit px-1.5 text-[11px] font-medium text-primarioBotones hover:bg-primarioBotones"
                  disabled={navigation.state === "submitting"}
                >
                  <IonIcon className="h-5 w-5" icon={checkmark}></IonIcon>
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Guardar"}
                </Button>
              )}
            </div>
            <div className="col-span-3">
              <InputForm
                name="email"
                type="text"
                placeholder={"E-Mail"}
                disabled={false}
                value={contact?.email}
                onChange={(e) =>
                  handleInputChange(e.target.value, "email", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="phone"
                type="text"
                placeholder={"Teléfono"}
                disabled={false}
                value={contact?.phone}
                onChange={(e) =>
                  handleInputChange(e.target.value, "phone", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="position"
                type="text"
                placeholder={"Posición"}
                disabled={false}
                value={contact?.position}
                onChange={(e) =>
                  handleInputChange(e.target.value, "position", index)
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
                  checked={contact?.active == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "active", index)
                  }
                  disabled={false}
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>
                {!!contact.start && !!contact.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="start"
                        className="hidden"
                        value={format(contact?.start, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(contact?.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="end"
                        className="hidden"
                        value={format(contact?.end, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(contact?.end, "PP")}
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
                {!!contact?.start && !!contact?.end ? (
                  <Button
                    type="button"
                    className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                    onClick={() => clearPeriod()}
                  >
                    Restablecer
                  </Button>
                ) : (
                  <ModalPeriod
                    setFunctionParent={addDate}
                    index={index}
                    disabled={false}
                  />
                )}
              </div>
            </div>
            <div className="grid w-full grid-cols-12 gap-x-8 gap-y-2">
              <div className="col-span-6 flex items-center gap-x-3">
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  name="principal"
                  checked={contact?.principal == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "principal", index)
                  }
                  disabled={false}
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Contacto Principal
                </label>
              </div>
              <div className="col-span-6 flex justify-end">
                <ModalDeleteContact
                  client_id={client_id}
                  contact_id={contact?.id}
                  contact_name={contact?.name}
                />
              </div>
            </div>
          </div>
        </Form>
      ))}
    </div>
  );
};

export default FormUpdateContact;
