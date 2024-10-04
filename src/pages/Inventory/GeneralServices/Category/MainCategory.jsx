import React, { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  addOutline,
  barChart,
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  trashOutline,
} from "ionicons/icons";
import {
  addCategoryService,
  destroyCategory,
  destroyServiceCategory,
  editCategory} from "../utils"
import EditCategoryForm from "../Components/Modals/EditCategoryForm";
import CategoryAddServicesForm from "../Components/Modals/CategoryAddServicesForm";
import CategoryDeleteServiceForm from "../Components/Modals/CategoryDeleteServiceForm";
import FormDeleteCategory from "../Components/Modals/FormDeleteCategory";
import NavigationHeader from "@/components/navigation-header";

function EditCategory() {
  const { data } = useLoaderData();
  const [modal, setModal] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalDestroyService, setModalDestroyService] = useState(false);
  const [serviceId, setServiceId] = useState(false);
  const [modalDestroyCategory, setModalDestroyCategory] = useState(false);

  function openServiceModal(id) {
    setServiceId(id);
    setModalDestroyService(true);
  }

  return (
    <>
      <EditCategoryForm
        modal={modal}
        setModal={setModal}
        id={data?.id}
        name={data?.name}
        description={data?.description}
      />
      <CategoryAddServicesForm
        modal={modalAdd}
        setModal={setModalAdd}
        id={data?.id}
        services={data?.services_out}
      />
      <CategoryDeleteServiceForm
        modal={modalDestroyService}
        setModal={setModalDestroyService}
        id={data?.id}
        idService={serviceId}
      />
      <FormDeleteCategory
        modal={modalDestroyCategory}
        setModal={setModalDestroyCategory}
        id={data?.id}
      />
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
          <NavigationHeader />

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                CATEGORIES
              </h2>
            </div>
          </div>

          {/* top content sub */}
          <div className="flex items-center gap-32 pl-3 pt-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                {data?.name}
              </h2>
              <span className="text-xs font-medium text-grisText">
                Information
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex h-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-5 rounded-lg bg-blancoForms p-4">
                <div className="flex gap-4">
                  <p className="text-sm font-medium text-grisText">
                    Category Information
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
                    {data?.name}
                  </span>
                </div>

                <div>
                  <p className="text-[12px] font-medium text-grisText">
                    Description
                  </p>
                  <span className="text-[12px] text-grisSubText">
                    {data?.description}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg bg-blancoForms p-4">
                <div className="flex gap-4">
                  <p className="text-sm font-medium text-grisText">SERVICES</p>
                  <button onClick={() => setModalAdd(true)}>
                    <IonIcon icon={addOutline} className="h-5 w-5"></IonIcon>
                  </button>
                </div>

                <div className="flex flex-col gap-2 pl-2">
                  <p className="text-[12px] font-medium text-grisText">
                    Services Info
                  </p>
                  {data?.services_in?.map((user, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <span className="text-[12px] text-grisSubText">
                        {user.name}
                      </span>
                      <button onClick={() => openServiceModal(user.id)}>
                        <IonIcon
                          icon={trashOutline}
                          className="text-gris2"
                        ></IonIcon>
                      </button>
                    </div>
                  ))}
                </div>
                <div>
                  <button
                    className="rounded-3xl border border-[#D7586B] px-4 py-2 font-roboto text-sm font-light text-[#D7586B] hover:bg-[#D7586B] hover:text-white"
                    onClick={() => setModalDestroyCategory(true)}
                  >
                    Delete Category
                  </button>
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
              <IonIcon
                icon={ellipsisHorizontal}
                className="text-gris2"
                size="large"
              ></IonIcon>
            </div>
            <div className="text-xl font-bold text-blue-500">
              ${data?.month_sales}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col text-gris2">
                <span className="text-sm font-semibold">SALES</span>
                <span className="text-xs">This Month</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gris2">
                <div className="rounded-xl bg-[#00A25940] px-2 font-bold text-green-600">
                  +100%
                </div>
                <span className="text-[8px]">vs last month</span>
              </div>
            </div>
          </div>
          <div className="flex w-52 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
            <div className="flex justify-between">
              <IonIcon
                icon={barChart}
                size="large"
                className="text-gris2"
              ></IonIcon>
              <IonIcon
                icon={ellipsisHorizontal}
                className="text-gris2"
                size="large"
              ></IonIcon>
            </div>
            <div className="text-xl font-bold text-blue-500">
              ${data?.life_sales}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col text-gris2">
                <span className="text-sm font-semibold">SALES</span>
                <span className="text-xs">All</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gris2">
                <div className="rounded-xl bg-[#00A25940] px-2 font-bold text-green-600">
                  +100%
                </div>
                <span className="text-[8px]">vs last month</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 self-start">
            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-2xl font-bold text-grisText">
                  {data?.created}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-grisText">Created</p>
                <p className="text-[10px] font-medium text-grisSubText">
                  Days ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D7586B40]">
                <p className="text-2xl font-bold text-[#D7586B]">
                  {data?.updated}
                </p>
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

export default EditCategory;

export async function Action({ params, request }) {
  const data = await request.formData();

  switch (data.get("type_of_function")) {
    case "1":
      //edit
      await editCategory(data);
      break;
    case "2":
      //Add Service
      await addCategoryService(data);
      break;
    case "3":
      //Destroy Service
      await destroyServiceCategory(data);
      break;
    case "4":
      //Destroy Category
      await destroyCategory(data);
      return redirect("/inventory/general-services");
      break;
  }
  return "1";
}
