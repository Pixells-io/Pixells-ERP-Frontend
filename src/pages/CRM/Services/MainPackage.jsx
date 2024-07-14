import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  addOutline,
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
} from "ionicons/icons";

import ServiceBlock from "./components/ServiceBlock";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditPackageForm from "./components/Forms/EditPackageForm";
import { editPackage } from "./utils";
import ModalAddServicesMembership from "./components/Forms/ModalAddServicesMembership";
function MainPackage() {
  const { data } = useLoaderData();
  const [modal, setModal] = useState(false);
  const [modalServices, setModalServices] = useState(false);

  console.log(data);

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
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
          <div className="flex items-center gap-4">
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
            <div>crm</div>
          </div>

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                MEMBERSHIP
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
                Membership Name
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex h-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-5 rounded-lg bg-blancoForms p-4">
                <div className="flex gap-4">
                  <p className="text-sm font-medium text-grisText">
                    Membership Information
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
                    <span key={i} className="text-[12px] text-grisSubText">
                      {service.name}
                    </span>
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
          <ServiceBlock />
          <ServiceBlock />

          <div className="flex flex-col gap-4 self-start">
            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-2xl font-bold text-grisText">05</p>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-grisText">Created</p>
                <p className="text-[10px] font-medium text-grisSubText">
                  Days ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox">
                <Avatar className="h-full w-full rounded-lg">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-grisText">
                  Created by
                </p>
                <p className="text-[10px] font-medium text-grisSubText">
                  Don Fomularo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D7586B40]">
                <p className="text-2xl font-bold text-[#D7586B]">05</p>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-grisText">Updated</p>
                <p className="text-[10px] font-medium text-grisSubText">
                  Days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPackage;

export async function Action({ params, request }) {
  const data = await request.formData();

  switch (data.get("type_of_function")) {
    case "1":
      //edit
      editPackage(data);
      break;
  }
  return "1";
}
