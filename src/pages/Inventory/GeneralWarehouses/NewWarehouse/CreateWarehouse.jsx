import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Form, redirect } from "react-router-dom";
import Inputs from "../Components/SelectGroup";
import FormGroup from "../Components/FormGroup";
import { saveNewWarehouse } from "../utils";

const CreateWH = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    street: "",
    ext: "",
    int: "",
    cp: "",
    city: "",
    colony: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Almacén
          </p>
        </div>
        {/*content */}

        <Form
          id="form-warehouses"
          action="/inventory/general-warehouses/create"
          method="post"
        >
          <div className="space-y-4">
            <Inputs formData={formData} handleInputChange={handleInputChange} />
            <FormGroup
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
          {/* Campos ocultos para enviar todos los datos del formulario */}
          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 font-roboto text-white shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateWH;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await  saveNewWarehouse(formData);
  return redirect("/inventory/general-warehouses");
}
