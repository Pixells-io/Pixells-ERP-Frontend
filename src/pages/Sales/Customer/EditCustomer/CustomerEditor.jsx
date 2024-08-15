import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  const initialValues = {
    clientNumber: "23123",
    clientType: "international",
    socialNumber: "we231221d12",
    rfc: "AU0X0X0X0X",
    clientGroup: "group2",
    currency: "usd",
    CFDI: "cfdi2",
  };

  const contactForm = {
    comentarios: "Faltan algunos datos",
    activo: true,
    inactivo: false,
    desde: "2024-03-22",
    hasta: "2024-02-06",
    calle: "Periferico Sur",
    colonia: "Buena vista",
    estado: "Ciudad de México",
    encargadoCompras: "juan",
    numeroInterno: "2",
    codigoPostal: "08912",
    pais: "México",
    numeroExterior: "3",
    ciudad: "Distrito Federal",
  };

  const facturacion = {
    regimenFiscal: "Sin obligaciones fiscales",
    metodoPago: "Efectivo",
    formaPago: "Efectivo",
    usoCFDI: "ewefewf",
    email: "ejemplo@mail.com",
  };

  const condiciones = {
    condiciones: "option1",
    interesesPorRetraso: "option2",
    diasDeCredito: "option2",
    limiteDeCredito: "option1",
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
            <div>Shopping - General</div>
          </div>
        </div>

        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COMPRAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando Cliente: {id}{" "}
          </p>
          <div className="flex items-end justify-end">
            <Link to="/sales">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={closeCircle}
                  size="large"
                  className="bg-trasparent p-1 text-gris2"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}
        <div className="w-full space-y-4 overflow-auto">
          <InputsGroup initialValues={initialValues} />
          <FormGroup
            contactForm={contactForm}
            facturacion={facturacion}
            condiciones={condiciones}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
