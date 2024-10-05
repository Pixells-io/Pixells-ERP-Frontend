import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  addOutline,
  barChart,
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  trashOutline,
} from "ionicons/icons";



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditPackageForm from "../Components/Modals/EditPackageForm";
import {
  addPackageService,
  destroySelectedServices,
  editPackage,
} from "../utils"
import ModalAddServicesMembership from "../Components/Modals/ModalAddServicesMembership";
import ModalDestroyServicePackage from "../Components/Modals/ModalDestroyServicePackage";
import NavigationHeader from "@/components/navigation-header";


function EditCombo() {
  const { data } = useLoaderData();
  const [modal, setModal] = useState(false);
  const [modalServices, setModalServices] = useState(false);
  const [modalServicesDelete, setModalServicesDelete] = useState(false);
  const [serviceId, setServiceId] = useState(false);

  function openModalDestroyService(id) {
    setServiceId(id);
    setModalServicesDelete(true);
  }

  return (
    <>
      <EditPackageForm
        modal={modal}
        setModal={setModal}
        id={data[0].id}
        name={data[0].name}
        description={data[0].description}
        price={data[0].price}
      />
      <ModalAddServicesMembership
        modal={modalServices}
        setModal={setModalServices}
        id={data[0].id}
        services={data[0].services_all}
      />
      <ModalDestroyServicePackage
        modal={modalServicesDelete}
        setModal={setModalServicesDelete}
        id={serviceId}
      />
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
          <NavigationHeader />

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                COMBOS
              </h2>
            </div>
          </div>

          {/* top content sub */}
          <div className="flex items-center gap-32 pl-3 pt-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                {data[0].name}
              </h2>
              <span className="text-xs font-medium text-grisText">
                NOMBRE DEL COMBO
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex h-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-5 rounded-lg bg-blancoForms p-4">
                <div className="flex gap-4">
                  <p className="text-sm font-medium text-grisText">
                    Informacion del combo
                  </p>
                  <div className="flex gap-2 text-[#696974]">
                    <button onClick={() => setModal(true)}>
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="h-5 w-5"
                      ></IonIcon>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-[12px] font-medium text-grisText">Name</p>
                  <span className="text-[12px] text-grisSubText">
                    {data[0].name}
                  </span>
                </div>

                <div>
                  <p className="text-[12px] font-medium text-grisText">
                    Description
                  </p>
                  <span className="text-[12px] text-grisSubText">
                    {data[0].description}
                  </span>
                </div>

                <div>
                  <p className="text-[12px] font-medium text-grisText">Price</p>
                  <span className="text-[12px] text-grisSubText">
                    {data[0].price}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <p className="text-[12px] font-medium text-grisText">
                      Services
                    </p>
                    <button onClick={() => setModalServices(true)}>
                      <IonIcon icon={addOutline} className="h-5 w-5"></IonIcon>
                    </button>
                  </div>
                  {data[0].services_selected?.map((service, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <span className="text-[12px] text-grisSubText">
                        {service.name}
                      </span>
                      <button
                        onClick={() => openModalDestroyService(service.id)}
                      >
                        <IonIcon
                          icon={trashOutline}
                          className="text-gris2"
                        ></IonIcon>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right sidebar */}
      <div className="ml-4 flex w-[240px] shrink-0 flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        <div className="flex flex-col items-center gap-4">
          <p className="self-start font-poppins text-lg font-semibold">
            Indicators
          </p>
          <div className="flex w-52 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
            <div className="flex justify-between">
              <IonIcon
                icon={barChart}
                size="large"
                className="text-gris2"
              ></IonIcon>
            </div>
            <div className="text-xl font-bold text-blue-500">
              $ {data[0].ammount}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col text-gris2">
                <span className="text-sm font-semibold">SALES</span>
                <span className="text-xs">This Month</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gris2">
                <div className="rounded-xl bg-[#00A25940] px-2 font-bold text-green-600">
                  +20%
                </div>
                <span className="text-[8px]">vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCombo;

export async function Action({ params, request }) {
  const data = await request.formData();

  switch (data.get("type_of_function")) {
    case "1":
      //edit
      editPackage(data);
      break;
    case "2":
      //add services
      addPackageService(data);
      break;
    case "3":
      //add services
      destroySelectedServices(data);
      break;
  }
  return "1";
}
