import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { personAdd } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import InputForm from "@/components/InputForm/InputForm";

const businessInputs = [
  {
    name: "business_name",
    type: "text",
    placeholder: "Nombre de la Empresa",
  },
  {
    name: "business_phone",
    type: "text",
    placeholder: "Telefono de la Empresa",
  },
];

const individualInputs = [
  {
    name: "business_name",
    type: "text",
    placeholder: "Nombre de la persona",
  },
  {
    name: "business_phone",
    type: "text",
    placeholder: "Telefono",
  },
];

const contactInputs = [
  {
    name: "contact_name",
    type: "text",
    placeholder: "Nombre(s) del Contacto",
  },
  {
    name: "contact_middle_name",
    type: "text",
    placeholder: "Apellido Paterno del Contacto",
  },
  {
    name: "contact_last_name",
    type: "text",
    placeholder: "Apellido Materno del Contacto",
  },
  {
    name: "contact_phone",
    type: "text",
    placeholder: "Telefono del Contacto",
  },
  {
    name: "contact_email",
    type: "text",
    placeholder: "Email del Contacto",
  },
];

const categoryInputs = [
  {
    name: "channel",
    type: "text",
    placeholder: "Canal",
  },
];

const typeArray = [
  {
    label: "Persona",
    value: "1",
  },
  {
    label: "Empresa",
    value: "2",
  },
];

const channelArray = [
  {
    label: "Recomendacion",
    value: "Recomendacion",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Google",
    value: "Google",
  },
  {
    label: "Expo",
    value: "Expo",
  },
  {
    label: "Presencial",
    value: "Presencial",
  },
  {
    label: "Otro",
    value: "Otro",
  },
];

function FormNewLead({ navigation, process }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  const selectProcess = [];

  arrayFill(process, selectProcess);

  function arrayFill(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.name,
        value: element.id,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="group flex w-full items-center justify-start gap-6 p-0 py-1 pl-4 text-gris2 hover:rounded-lg hover:bg-blue-100 hover:text-blue-500">
        <IonIcon icon={personAdd} size="large"></IonIcon>
        <p className="text-base font-medium text-gris2 group-hover:text-blue-500">
          Nuevo Prospecto
        </p>
      </DialogTrigger>
      <DialogContent className="max-h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">
            Crear Nuevo Prospecto
          </DialogTitle>
        </DialogHeader>
        <Form
          id="lead-form"
          className="flex flex-col gap-8 px-6"
          action="/crm"
          method="post"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <div className="flex px-4 py-2">
            <input
              type="hidden"
              hidden
              readOnly
              name="action"
              value="save-lead"
            />
            <SelectRouter
              name="register_type"
              options={typeArray}
              placeholder="Tipo de Prospecto"
              onChange={(e) => setType(e.value)}
              required={true}
            />
          </div>

          {type == null && (
            <div className="flex flex-col rounded-lg px-4 font-roboto">
              <div className="text-center font-normal text-grisSubText">
                Selecciona el tipo de prospecto
              </div>
            </div>
          )}

          {type == 1 ? (
            <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
              <div className="text-lg font-normal text-[#696974]">
                Informacion Individual
              </div>
              <div className="flex flex-col gap-4 pb-4 font-light">
                {individualInputs?.map((input, i) => (
                  <InputForm
                    key={i}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={true}
                  />
                ))}
              </div>
            </div>
          ) : type == 2 ? (
            <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
              <div className="text-lg font-normal text-[#696974]">
                Informacion del Negocio
              </div>
              <div className="flex flex-col gap-4 pb-4 font-light">
                {businessInputs?.map((input, i) => (
                  <InputForm
                    key={i}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={true}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {type != null ? (
            <>
              <div className="flex flex-col gap-4 rounded-lg px-4 font-roboto">
                <div className="text-lg font-normal text-[#696974]">
                  Informacion de Contacto
                </div>
                <div className="flex flex-col gap-4 pb-4 font-light">
                  {contactInputs?.map((input, i) => (
                    <InputForm
                      key={i}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
                <div className="text-lg font-normal text-[#696974]">
                  Canal de Venta
                </div>
                <div className="flex flex-col gap-4 pb-4 font-light">
                  <SelectRouter
                    name="channel"
                    placeholder="¿Como se obtuvo el prospecto?"
                    options={channelArray}
                    required={true}
                  />
                  <SelectRouter
                    name="type_process_sale"
                    placeholder="Proceso Comercial"
                    options={selectProcess}
                    required={true}
                  />
                </div>
              </div>
            </>
          ) : (
            false
          )}
        </Form>
        <DialogFooter className="px-8 py-4">
          <Button
            form="lead-form"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewLead;
