import React, { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import {
  addOutline,
  barChart,
  chevronBack,
  chevronForward,
  closeOutline,
  ellipsisHorizontal,
  informationCircle,
} from "ionicons/icons";
import EditServiceForm from "./components/Forms/EditServicesForm";
import {
  createServiceProcess,
  destroyProcess,
  destroyService,
  editService,
  saveInterview,
} from "./utils";
import ServiceProcessForm from "./components/Forms/ServiceProcessForm";
import DestroyProcessForm from "./components/Forms/DestroyProcessForm";
import DestroyServiceForm from "./components/Forms/DestroyServiceForm";
import ModalCreateInterview from "./components/Forms/ModalCreateInterview";
import ModalShowInterview from "./components/Forms/ModalShowInterview";
import NavigationHeader from "@/components/navigation-header";

function MainService() {
  const { data } = useLoaderData();
  const [modal, setModal] = useState(false);
  const [modalProcess, setModalProcess] = useState(false);
  const [modalProcessDestroy, setModalProcessDestroy] = useState(false);
  const [processId, setProcessId] = useState(false);
  const [modalServiceDestroy, setModalServiceDestroy] = useState(false);
  const [modalCreateInterview, setModalCreateInterview] = useState(false);
  const [modalShowInterview, setModalShowInterview] = useState(false);
  const [idInterview, setIdInterview] = useState(false);
  const [nameInterview, setNameInterview] = useState(false);
  const [questionsInterview, setQuestionsInterview] = useState([]);

  function setProcessIdFunction(id) {
    setProcessId(id);
    setModalProcessDestroy(true);
  }

  function openShowInterview(id, name, questions) {
    setIdInterview(id);
    setNameInterview(name);
    setQuestionsInterview(questions);
    setModalShowInterview(true);
  }

  return (
    <>
      <ModalShowInterview
        modal={modalShowInterview}
        setModal={setModalShowInterview}
        id={idInterview}
        name={nameInterview}
        questions={questionsInterview}
      />
      <EditServiceForm
        modal={modal}
        setModal={setModal}
        id={data?.id}
        name={data?.name}
        description={data?.description}
        price={data?.price}
        positions={data?.positions_array}
        position_placeholder={data?.position}
      />
      <ServiceProcessForm
        modal={modalProcess}
        setModal={setModalProcess}
        id={data?.id}
      />
      <DestroyProcessForm
        modal={modalProcessDestroy}
        setModal={setModalProcessDestroy}
        id={data?.id}
        idProcess={processId}
      />
      <DestroyServiceForm
        modal={modalServiceDestroy}
        setModal={setModalServiceDestroy}
        id={data?.id}
      />
      <ModalCreateInterview
        modal={modalCreateInterview}
        setModal={setModalCreateInterview}
        serviceId={data?.id}
      />

      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
          <NavigationHeader />

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                SERVICES
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
                    Service Information
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

                <div>
                  <p className="text-[12px] font-medium text-grisText">Price</p>
                  <span className="text-[12px] text-grisSubText">
                    ${data?.price}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg bg-blancoForms p-4">
                <p className="text-sm font-medium text-grisText">
                  Responable Information
                </p>

                <div className="flex flex-col gap-2 pl-2">
                  <div>
                    <p className="text-[12px] font-medium text-grisText">
                      Manager
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-grisSubText">
                      {data?.position}{" "}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pl-2">
                  <p className="text-[12px] font-medium text-grisText">
                    More Participants
                  </p>
                  {data?.users.map((user, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.user_image} />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                      <span className="text-[12px] text-grisSubText">
                        {user.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <button
                    className="rounded-3xl border border-[#D7586B] px-4 py-2 font-roboto text-sm font-light text-[#D7586B] hover:bg-[#D7586B] hover:text-white"
                    onClick={() => setModalServiceDestroy(true)}
                  >
                    Delete Service
                  </button>
                </div>
              </div>

              <div className="rounded-lg bg-blancoForms p-4">
                <div className="flex gap-4">
                  <p className="font-roboto text-sm font-medium text-grisText">
                    Process
                  </p>
                  <button onClick={() => setModalProcess(true)}>
                    <IonIcon icon={addOutline} className="h-5 w-5"></IonIcon>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {data?.process.map((process, i) => (
                    <div className="my-2 rounded-2xl bg-blancoBox" key={i}>
                      <div className="mb-2 flex gap-4 rounded-t-2xl bg-blancoBox2 pt-2">
                        <span className="ml-14 font-roboto text-sm text-grisText">
                          STEP {i + 1}
                        </span>
                        <button
                          onClick={() => setProcessIdFunction(process?.id)}
                        >
                          <IonIcon
                            icon={closeOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                        </button>
                      </div>
                      <div className="mx2 my-2 text-ellipsis text-center">
                        <span className="line-clamp-1 text-ellipsis font-roboto text-sm font-normal text-grisText">
                          {process.title}
                        </span>
                      </div>
                      <div className="mx-2 my-2 text-ellipsis text-center">
                        <span className="line-clamp-1 text-ellipsis font-roboto text-sm font-normal text-grisText">
                          {process.action}
                        </span>
                      </div>
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
              ${data?.total_sales}
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
          <div className="flex w-52 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <p className="text-[22px] font-semibold text-grisHeading">
                  INTERVIEWS
                </p>
                <button onClick={() => setModalCreateInterview(true)}>
                  <IonIcon icon={addOutline} className="h-5 w-5"></IonIcon>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 overflow-y-scroll">
              {data?.interviews.map((interview, i) => (
                <div className="flex w-full justify-between" key={i}>
                  <div className="col-span-3 flex items-center gap-2">
                    <div>
                      <p className="truncate font-medium text-grisHeading">
                        {interview.title}
                      </p>
                      <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                        Created &bull; {interview.created}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-fit gap-2 self-end">
                    <div className="col-span-1 flex h-fit pb-1 pl-2">
                      <button
                        type="button"
                        className="flex rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
                        onClick={() =>
                          openShowInterview(
                            interview.id,
                            interview.title,
                            interview.questions,
                          )
                        }
                      >
                        Show
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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

export default MainService;

export async function Action({ params, request }) {
  const data = await request.formData();

  switch (data.get("type_of_function")) {
    case "1":
      //edit
      await editService(data);
      break;
    case "2":
      //destroy step
      await destroyProcess(data);
      break;
    case "3":
      //add step
      await createServiceProcess(data);
      break;
    case "4":
      //destroy service
      await destroyService(data);
      return redirect("/crm/services");
      break;
    case "5":
      //save interview
      await saveInterview(data);
      break;
  }

  // return redirect(`/chat/${params.id}`);
  return "1";
}
