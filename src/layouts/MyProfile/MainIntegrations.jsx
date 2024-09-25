import React, { useEffect, useState } from "react";
import {
  accessibilityOutline,
  cogOutline,
  keyOutline,
  logoFacebook,
  logoGoogle,
  logoMicrosoft,
  logoWhatsapp,
  notificationsOutline,
} from "ionicons/icons";
import { Form, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import ModalDestroyGoogleKeys from "./ModalDestroyGoogleKeys";

function MainIntegrations() {
  const location = useLocation();

  const { profile, permission, azureUser, permissionAzure } = useLoaderData();
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const [oneA, setOneA] = useState(false);
  const [twoA, setTwoA] = useState(false);
  const [threeA, setThreeA] = useState(false);
  const [fourA, setFourA] = useState(false);
  const [fiveA, setFiveA] = useState(false);

  const [modalDestroy, setModalDestroy] = useState(false);
  const [modalDestroyA, setModalDestroyA] = useState(false);

  function changeCheked(number) {
    switch (number) {
      case 1:
        setOne(!one);
        break;
      case 2:
        setTwo(!two);
        break;
      case 3:
        setThree(!three);
        break;
      case 4:
        setFour(!four);
        break;
      case 5:
        setFive(!five);
        break;
    }
  }

  function changeChekedA(number) {
    switch (number) {
      case 1:
        setOneA(!oneA);
        break;
      case 2:
        setTwoA(!twoA);
        break;
      case 3:
        setThreeA(!threeA);
        break;
      case 4:
        setFourA(!fourA);
        break;
      case 5:
        setFiveA(!fiveA);
        break;
    }
  }

  useEffect(() => {
    for (let index = 0; index < permission.data.length; index++) {
      const element = permission.data[index];
      switch (element.permission) {
        case "1":
          setOne(true);
          break;
        case "2":
          setTwo(true);
          break;
        case "3":
          setThree(true);
          break;
        case "4":
          setFour(true);
          break;
        case "5":
          setFive(true);
          break;
      }
    }

    for (let index = 0; index < permissionAzure.data.length; index++) {
      const element = permissionAzure.data[index];
      switch (element.permission) {
        case "1":
          setOneA(true);
          break;
        case "2":
          setTwoA(true);
          break;
        case "3":
          setThreeA(true);
          break;
        case "4":
          setFourA(true);
          break;
        case "5":
          setFiveA(true);
          break;
      }
    }
  }, []);

  return (
    <div className="flex w-full">
      <ModalDestroyGoogleKeys modal={modalDestroy} setModal={setModalDestroy} />
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
            <IonIcon icon={cogOutline} className="text-3xl"></IonIcon>
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
        <div className="flex h-full gap-10 overflow-auto rounded-xl bg-white p-7">
          <Tabs defaultValue="google" className="h-full w-full overflow-auto">
            <TabsList className="mb-3 w-full bg-transparent">
              <div className="flex w-full">
                <div className="w-4/5">
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="google"
                  >
                    Google
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="meta"
                  >
                    Meta
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="outlook"
                  >
                    Outlook
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent value="google">
              {profile.data.emailAddress != null ? (
                <Form action="/my-profile" method="post">
                  <input type="hidden" name="type_function" value={3} />
                  <input type="text" />
                  <div className="w-full">
                    {/* IF AUTENTICATED */}
                    <div className="flex gap-16">
                      <div>
                        <span className="font-roboto font-medium text-grisHeading">
                          Calendar
                        </span>
                        <div className="mt-6 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {one === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                name="1"
                                onClick={() => changeCheked(1)}
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(1)}
                                name="1"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Agendar reuniones
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {two === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(2)}
                                name="2"
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(2)}
                                name="2"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Agendar Tareas
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {three === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(3)}
                                name="3"
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(3)}
                                name="3"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Agendar Actividades
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="font-roboto font-medium text-grisHeading">
                          Gmail
                        </span>
                        <div className="mt-6 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {four === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(4)}
                                name="4"
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(4)}
                                name="4"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Enviar correos automaticos
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {five === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(5)}
                                name="5"
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeCheked(5)}
                                name="5"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Gestion del correo en el modulo de Email
                          </span>
                        </div>
                      </div>
                      <div>
                        <Button
                          type="button"
                          className="mt-2 justify-normal gap-4 rounded-lg border border-primarioBotones bg-transparent px-6 py-2 text-center font-roboto text-xs font-semibold text-primarioBotones hover:bg-primarioBotones hover:text-white"
                          onClick={() => setModalDestroy(true)}
                        >
                          <IonIcon
                            icon={logoGoogle}
                            className="text-lg"
                          ></IonIcon>
                          {profile.data.emailAddress}
                        </Button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="mt-8 justify-normal gap-4 rounded-lg border bg-primarioBotones px-6 py-2 text-center font-roboto text-xs font-semibold text-white hover:bg-blue-600 hover:text-white"
                    >
                      Actualizar
                    </Button>
                  </div>
                </Form>
              ) : (
                <Form
                  className="flex h-full w-full flex-col gap-3 px-6 pt-2"
                  action="/my-profile"
                  method="post"
                >
                  {/* NOT AUTENTICATED */}
                  <input type="hidden" name="type_function" value={2} />
                  <Button
                    type="submit"
                    className="mt-2 w-48 justify-normal gap-4 rounded-lg border border-primarioBotones bg-transparent px-6 py-2 text-center font-roboto text-xs font-semibold text-primarioBotones hover:bg-primarioBotones hover:text-white"
                  >
                    <IonIcon icon={logoGoogle} className="text-lg"></IonIcon>
                    Ingresa con Google
                  </Button>
                </Form>
              )}
            </TabsContent>
            <TabsContent value="meta">
              <Form
                className="flex h-full w-full flex-col gap-3 px-6 pt-2"
                action="/my-profile"
                method="post"
              >
                {/* NOT AUTENTICATED */}
                <input type="hidden" name="type_function" value={7} />
                <Button
                  type="submit"
                  className="mt-2 w-48 justify-normal gap-4 rounded-lg border border-primarioBotones bg-transparent px-6 py-2 text-center font-roboto text-xs font-semibold text-primarioBotones hover:bg-primarioBotones hover:text-white"
                >
                  <IonIcon icon={logoWhatsapp} className="text-lg"></IonIcon>
                  Configura Whatsapp
                </Button>
              </Form>
            </TabsContent>
            <TabsContent value="outlook">
              {azureUser.data != null ? (
                <Form action="/my-profile" method="post">
                  <input type="hidden" name="type_function" value={6} />
                  <input type="text" />
                  <div className="w-full">
                    {/* IF AUTENTICATED */}
                    <div className="flex gap-16">
                      <div>
                        <span className="font-roboto font-medium text-grisHeading">
                          Calendar
                        </span>
                        <div className="mt-6 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {oneA === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                name="1"
                                onClick={() => changeChekedA(1)}
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(1)}
                                name="1"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Agendar reuniones
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {twoA === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(2)}
                                name="2"
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(2)}
                                name="2"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Agendar Tareas
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {threeA === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(3)}
                                name="3"
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(3)}
                                name="3"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Agendar Actividades
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="font-roboto font-medium text-grisHeading">
                          Outlook
                        </span>
                        <div className="mt-6 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {fourA === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(4)}
                                name="4"
                                checked
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(4)}
                                name="4"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Enviar correos automaticos
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
                            {fiveA === true ? (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(5)}
                                name="5"
                              />
                            ) : (
                              <input
                                type="checkbox"
                                className="peer hidden"
                                onClick={() => changeChekedA(5)}
                                name="5"
                              />
                            )}
                            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
                          </label>
                          <span className="font-roboto text-sm font-normal text-grisSubText">
                            Gestion del correo en el modulo de Email
                          </span>
                        </div>
                      </div>
                      <div>
                        <Button
                          type="button"
                          className="mt-2 justify-normal gap-4 rounded-lg border border-primarioBotones bg-transparent px-6 py-2 text-center font-roboto text-xs font-semibold text-primarioBotones hover:bg-primarioBotones hover:text-white"
                          onClick={() => setModalDestroyA(true)}
                        >
                          <IonIcon
                            icon={logoMicrosoft}
                            className="text-lg"
                          ></IonIcon>
                          {azureUser.data}
                        </Button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="mt-8 justify-normal gap-4 rounded-lg border bg-primarioBotones px-6 py-2 text-center font-roboto text-xs font-semibold text-white hover:bg-blue-600 hover:text-white"
                    >
                      Actualizar
                    </Button>
                  </div>
                </Form>
              ) : (
                <Form
                  className="flex h-full w-full flex-col gap-3 px-6 pt-2"
                  action="/my-profile"
                  method="post"
                >
                  {/* NOT AUTENTICATED */}
                  <input type="hidden" name="type_function" value={5} />
                  <Button
                    type="submit"
                    className="mt-2 w-48 justify-normal gap-4 rounded-lg border border-primarioBotones bg-transparent px-6 py-2 text-center font-roboto text-xs font-semibold text-primarioBotones hover:bg-primarioBotones hover:text-white"
                  >
                    <IonIcon icon={logoMicrosoft} className="text-lg"></IonIcon>
                    Ingresa con Outlook
                  </Button>
                </Form>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default MainIntegrations;

export async function action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "create-area":
      await saveNewArea(data);
      redirect("/organization");

    case "edit-area":
      await editArea(data);
      redirect("/organization");
  }

  return redirect("/organization");
}
