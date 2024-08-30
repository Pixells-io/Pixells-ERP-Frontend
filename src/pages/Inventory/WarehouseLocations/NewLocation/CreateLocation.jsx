import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import FormLocation from "../Components/FormLocation";
import {Form} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { saveNewUbication } from "../utils";

const CreateLocation = () => {
  const [formData, setFormData] = useState({
    inventory_id: "",
    subLocation: "",
    activo: false,
    inactivo: false,
    disponible: false,
    cantidadMinima: "",
    cantidadMaxima: "",
    pesoMaximo: "",
    slots: [],
  });


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
            Nueva Localización
          </p>
        </div>
        {/*content */}

        <FormLocation formData={formData} setFormData={setFormData} />
        <Form
          action="/inventory/warehouse-locations/create"
          method="post"
        >
          <input
            type="hidden"
            name="inventory_id"
            value={formData.inventory_id}
          />
          <input type="hidden" name="name" value={formData.subLocation} />
          <input type="hidden" name="active" value={formData.activo ? "1" : "0"} />

          <input
            type="hidden"
            name="sales_available"
            value={formData.disponible}
          />
          <input
            type="hidden"
            name="min_quantity"
            value={formData.cantidadMinima}
          />
          <input
            type="hidden"
            name="max_quantity"
            value={formData.cantidadMaxima}
          />
          <input type="hidden" name="max_weight" value={formData.pesoMaximo} />

          {/* Render slot inputs dynamically as arrays */}
          {formData.slots.map((slot, index) => (
            <div key={index}>
              <input type="hidden" name={`var_id[]`} value={slot.id} />
              <input type="hidden" name={`from[]`} value={slot.from} />
              <input type="hidden" name={`to[]`} value={slot.to} />
            </div>
          ))}

          <div className="flex justify-end p-4">
            <Button
              type="submit"
              className="rounded-full bg-primarioBotones px-8 py-3 hover:bg-none"
            >
              Crear
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateLocation;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveNewUbication(formData);
  console.log(response)
  return "0";
}
