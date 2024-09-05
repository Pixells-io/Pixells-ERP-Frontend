import React from "react";
import {
  accessibilityOutline,
  addCircleOutline,
  chevronBack,
  chevronForward,
  keyOutline,
  laptopOutline,
  logoGoogle,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { Form, NavLink, useLoaderData, useLocation } from "react-router-dom";
import InputRouter from "../Masters/FormComponents/input";
import NavigationHeader from "@/components/navigation-header";
function MainSecurity() {
  const location = useLocation();

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              SEGURIDAD
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
        <div className="mx-48 flex h-full gap-10 overflow-auto rounded-xl bg-white p-7">
          <Form
            className="flex h-full w-2/4 flex-col gap-3 px-6"
            action="/my-profile"
            method="post"
          >
            <input type="hidden" name="type_function" value={1} />
            <span className="font-roboto text-xs font-light text-grisHeading">
              Contraseña actual
            </span>
            <InputRouter name="current_password" type="password" />
            <span className="font-roboto text-xs font-light text-grisHeading">
              Nueva contraseña
            </span>
            <InputRouter name="new_password" type="password" />
            <span className="font-roboto text-xs font-light text-grisHeading">
              Confirmar nueva contraseña
            </span>
            <InputRouter name="confirm_new_password" type="password" />
            <Button
              type="submit"
              className="mt-2 w-2/4 justify-normal rounded-lg bg-primarioBotones px-6 py-2 text-center font-roboto text-xs font-semibold"
            >
              Actualizar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default MainSecurity;
