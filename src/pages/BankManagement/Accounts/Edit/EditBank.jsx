import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import React from "react";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { editBank } from "../../utils";

function EditBank() {
  const navigation = useNavigation();
  const { data } = useLoaderData();

  return (
    <div className="flex w-full">
      <Form
        className="flex h-full w-full flex-col gap-3 px-6"
        action={`/bank-management/edit-bank/${data.id}`}
        method="post"
      >
        <input type="hidden" hidden name="id" value={data.id} />
        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <h2 className="mb-4 font-poppins text-sm font-semibold text-grisHeading">
            Editar Banco Propio
          </h2>
          <div className="flex w-full flex-col gap-8 font-light">
            <div className="flex flex-col gap-3">
              <div className="text-sm font-normal text-[#696974]">
                Información Inicial
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                  <div className="w-full pt-4">
                    <SelectField
                      name="country"
                      options={[
                        { label: "México", value: "MX" },
                        { label: "EUA", value: "EUA" },
                      ]}
                      defaultVal={data.country}
                      placeholder="País"
                    />
                  </div>
                  <InputRouter
                    name="bank_key"
                    type="text"
                    placeholder="Clave del Banco"
                    defaultVal={data.bank_key}
                  />
                </div>
                <div className="pl-2 text-xs text-grisSubText">
                  Banco Nacional del México
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-sm font-normal text-[#696974]">
                Datos del Banco Propio
              </div>
              <SelectField
                name="type"
                options={[
                  { label: "Sociedad 1", value: "soc1" },
                  { label: "Sociedad 2", value: "soc2" },
                ]}
                placeholder="Sociedad"
                defaultVal={data.type}
              />
              <div className="flex gap-6">
                <InputRouter
                  name="bank_id"
                  type="text"
                  placeholder="ID del Banco"
                  defaultVal={data.bank_id}
                />
                <InputRouter
                  name="name"
                  type="text"
                  placeholder="Nombre del Banco Propio"
                  defaultVal={data.name}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-sm font-normal text-[#696974]">
                Comunicación
              </div>
              <div className="grid grid-cols-2 gap-6">
                <InputRouter
                  name="phone"
                  type="text"
                  placeholder="Teléfono"
                  defaultVal={data.phone}
                />
                <InputRouter
                  name="mail"
                  type="email"
                  placeholder="Correo"
                  defaultVal={data.mail}
                />
                <InputRouter
                  name="street"
                  type="text"
                  placeholder="Calle"
                  defaultVal={data.street}
                />
                <div className="flex gap-x-2">
                  <InputRouter
                    name="int"
                    type="number"
                    placeholder="Int"
                    defaultVal={data.int}
                  />
                  <InputRouter
                    name="ext"
                    type="number"
                    placeholder="Ext"
                    defaultVal={data.ext}
                  />
                </div>
                <InputRouter
                  name="cologne"
                  type="text"
                  placeholder="Colonia"
                  defaultVal={data.cologne}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Save"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default EditBank;

export async function Action({ request }) {
  const data = await request.formData();
  await editBank(data);

  return 1;
}
