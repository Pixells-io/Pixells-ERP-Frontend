import React from "react";
import {
  accessibilityOutline,
  addCircleOutline,
  chevronBack,
  chevronForward,
  keyOutline,
  laptopOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { destroyNotification } from "@/lib/actions";
function MainNotifications() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data } = useLoaderData();

  async function destroyNotificationTwo(noti, url) {
    await destroyNotification(noti);
    return navigate("/" + url);
  }

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              NOTIFICACIONES
            </h2>
          </div>
        </div>
        {/*Cards*/}
        <div className="flex gap-4">
          <NavLink
            to="/my-profile"
            className={
              location.pathname === "/my-profile"
                ? "flex w-1/4 gap-4 rounded-2xl border border-primario bg-white p-6"
                : "flex w-1/4 gap-4 rounded-2xl border border-blancoBox2 bg-white p-6"
            }
          >
            <IonIcon icon={accessibilityOutline} className="text-3xl"></IonIcon>
            <div>
              <span className="font-roboto font-medium text-grisHeading">
                Mi Perfil
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Revisa tu información personal y actualiza tus datos
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/my-profile/security"
            className={
              location.pathname === "/my-profile/security"
                ? "flex w-1/4 gap-4 rounded-2xl border border-primario bg-white p-6"
                : "flex w-1/4 gap-4 rounded-2xl border border-blancoBox2 bg-white p-6"
            }
          >
            <IonIcon icon={keyOutline} className="text-3xl"></IonIcon>
            <div>
              <span className="font-roboto font-medium text-grisHeading">
                Seguridad
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Cambie su contraseña si es necesario. No lo compartas.
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/my-profile/notifications"
            className={
              location.pathname === "/my-profile/notifications"
                ? "flex w-1/4 gap-4 rounded-2xl border border-primario bg-white p-6"
                : "flex w-1/4 gap-4 rounded-2xl border border-blancoBox2 bg-white p-6"
            }
          >
            <IonIcon icon={notificationsOutline} className="text-3xl"></IonIcon>
            <div>
              <span className="font-roboto font-medium text-grisHeading">
                Notificaciones
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Explora las notificaciones que has recibido y ajusta las
                preferencias
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/my-profile/integrations"
            className={
              location.pathname === "/my-profile/integrations"
                ? "flex w-1/4 gap-4 rounded-2xl border border-primario bg-white p-6"
                : "flex w-1/4 gap-4 rounded-2xl border border-blancoBox2 bg-white p-6"
            }
          >
            <IonIcon icon={accessibilityOutline} className="text-3xl"></IonIcon>
            <div>
              <span className="font-roboto font-medium text-grisHeading">
                Integraciones
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Integra tu cuenta a servicios de Google y Meta
              </span>
            </div>
          </NavLink>
          {/*  
          <div
            className={
              location.pathname === "/my-profile"
                ? "flex w-1/4 gap-4 rounded-2xl border border-primario bg-white p-6"
                : "flex w-1/4 gap-4 rounded-2xl border border-blancoBox2 bg-white p-6"
            }
          >
            <IonIcon icon={laptopOutline} className="text-3xl"></IonIcon>
            <div>
              <span className="font-roboto font-medium text-grisHeading">
                Estatus
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Update your status for the day, whether you are in the office,
                at home or traveling
              </span>
            </div>
          </div>
          */}
        </div>

        {/*component accion*/}
        <div className="mx-64 h-full gap-10 overflow-auto rounded-xl bg-white p-7">
          <span className="font-poppins text-base font-bold text-grisHeading">
            Notification History
          </span>
          <div className="mt-5 w-20 rounded-3xl border border-grisHeading pb-[5px] text-center">
            <span className="font-roboto text-xs font-medium text-grisHeading">
              Newest
            </span>
          </div>
          <div className="mt-3 w-full focus:bg-inherit">
            {data?.map((item, i) => (
              <div key={i}>
                {item.count != "0" ? (
                  <div className="flex w-full flex-col gap-1">
                    <Accordion type="single" className="w-full" collapsible>
                      <AccordionItem
                        value={`item-${i}`}
                        className="w-full border-b-0"
                      >
                        <AccordionTrigger className="w-full gap-4 rounded px-2 py-2 hover:bg-[#7794F926] hover:no-underline active:bg-[#7794F926]">
                          <div className="flex w-full items-center gap-2.5 hover:rounded-lg">
                            <div className="w-1/12 text-left">
                              <Avatar>
                                <AvatarImage
                                  className="rounded-full"
                                  src={item.latest.img}
                                  width={40}
                                  height={40}
                                />
                              </Avatar>
                            </div>
                            <div className="w-9/12 text-left">
                              <div className="flex gap-2 text-left">
                                <span className="flex items-center gap-1 overflow-hidden text-xs font-medium text-grisText">
                                  {item.name} &bull;{" "}
                                </span>
                                <span className="text-[10px] text-grisSubText">
                                  {item.latest.created}
                                </span>
                              </div>
                              <span className="w-9 overflow-hidden truncate text-left text-xs font-normal text-grisSubText">
                                {item.latest.message}
                              </span>
                            </div>
                            <div className="flex w-2/12 flex-col items-end">
                              <div className="h-5 w-5 rounded-full bg-[#D7586B]">
                                <span className="mt-[2px] flex justify-center rounded-full text-xs text-white">
                                  {item.count}
                                </span>
                              </div>
                              <span className="text-[10px] text-grisSubText">
                                {item.latest.created}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {item.notifications.map((noti, i) => (
                            <button
                              type="button"
                              key={i}
                              className="flex w-full gap-4 px-2 py-2 hover:rounded-lg hover:bg-[#7794F926]"
                              onClick={() =>
                                destroyNotificationTwo(noti.id, noti.url)
                              }
                            >
                              <div className="mt-2">
                                <Avatar>
                                  <AvatarImage
                                    className="rounded-full"
                                    src={noti.img}
                                    width={40}
                                    height={40}
                                  />
                                </Avatar>
                              </div>
                              <div className="flex w-full flex-col gap-y-1">
                                <div className="flex w-full">
                                  <div className="w-2/4 text-left">
                                    <span className="text-xs font-medium text-grisSubText">
                                      {noti.creator}
                                    </span>
                                  </div>
                                  <div className="w-2/4 text-end">
                                    <span className="text-right text-xs font-medium text-grisSubText">
                                      {noti.created}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex text-left">
                                  <span className="overflow-hidden text-ellipsis text-left text-xs font-normal text-grisSubText">
                                    {noti.message}
                                  </span>
                                </div>
                              </div>
                            </button>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainNotifications;
