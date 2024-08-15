import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useLoaderData,
  Link,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  calendar,
  chatbubble,
  notifications,
  menu,
  flag,
  personCircle,
  disc,
  barChart,
  people,
  ticket,
  person,
  grid,
  bookmark,
  logOut,
  albumsOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import Cookies from "js-cookie";
import { getUserByToken, logOutRequest } from "@/lib/actions";
import NotificationChat from "./components/NotificationChat";
import NotificationBell from "./components/NotificationBell";
import { CrmApiFunction } from "@/pages/Organization/utils";

const MENU = [
  {
    id: "1",
    path: "/organization",
    name: "Organization",
    icon: personCircle,
  },
  {
    id: "2",
    path: "/project-manager",
    name: "Project Manager",
    icon: flag,
  },
  {
    id: "3",
    path: "/crm",
    name: "CRM",
    icon: disc,
  },
  {
    id: "4",
    path: "/chat",
    name: "Chat",
    icon: chatbubble,
  },
  {
    id: "5",
    path: "/analytics",
    name: "Analytics",
    icon: barChart,
  },
  {
    id: "6",
    path: "/org-development/induction",
    name: "Org Dev",
    icon: people,
  },
  {
    id: "7",
    path: "/tickets",
    name: "Ticket",
    icon: ticket,
  },
  {
    id: "8",
    path: "/topics/0",
    name: "Topics",
    icon: albumsOutline,
  },
  /*{
    path: "/configuration",
    name: "Config",
    icon: cog,
  },*/
];

function MainLayout() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");
  const { chat, userAuth, notificationsData, permissions } = useLoaderData();
  const [moduleShow, setModuleShow] = useState(MENU);

  const userData = userAuth.data?.user;

  useEffect(() => {
    async function fetchData() {
      const user = await getUserByToken();
      if (user.code == 400) return navigate("/login");
      setUser(user?.data);
    }
    fetchData();
    if (token == undefined || user.status == 500) return navigate("/login");
  }, [token]);

  async function logOutFunction() {
    //First send the request
    await logOutRequest();
    //Remove token
    Cookies.remove("token");

    //Redirect to the login
    return navigate("/login");
  }

  useEffect(() => {
    const modulos = permissions.data.map((module) =>
      MENU.filter((item) => item.id == module.module_id),
    );
    setModuleShow(modulos);
  }, []);

  async function functionActivateApi() {
    const request = await CrmApiFunction(user.user.email);
    window.location.href = request.data;
  }

  return (
    <div className="flex h-screen min-h-0 flex-col">
      <div className="flex h-[56px] items-center justify-between p-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IonIcon
              icon={menu}
              size="large"
              className="text-grisHeading"
            ></IonIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-4 grid grid-cols-3 gap-4">
            {moduleShow.map((item, i) => (
              <div key={i}>
                {item[0]?.id == "3" ? (
                  <>
                    <DropdownMenuItem key={i} className="focus:bg-transparent">
                      <div className="flex flex-col">
                        <NavLink
                          to={item[0]?.path}
                          className={({ isActive }) =>
                            isActive
                              ? "group flex h-16 w-20 flex-col items-center justify-center rounded-2xl bg-primario text-white"
                              : "group flex h-16 w-20 flex-col items-center justify-center rounded-2xl bg-blancoBox text-grisText hover:bg-primario hover:text-white"
                          }
                        >
                          <IonIcon
                            icon={item[0]?.icon}
                            className="h-10 w-10"
                          ></IonIcon>
                          {location?.pathname === item[0]?.path ? (
                            <div className="w-11 truncate text-[10px]">
                              <p className="text-center">{item[0]?.name}</p>
                            </div>
                          ) : (
                            <div className="hidden w-11 truncate text-[10px] group-hover:flex">
                              <p className="group-hover:mx-auto group-hover:flex">
                                {item[0]?.name}
                              </p>
                            </div>
                          )}
                        </NavLink>
                      </div>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem key={i} className="focus:bg-transparent">
                    <div className="flex flex-col">
                      <NavLink
                        to={item[0]?.path}
                        className={({ isActive }) =>
                          isActive
                            ? "group flex h-16 w-20 flex-col items-center justify-center rounded-2xl bg-primario text-white"
                            : "group flex h-16 w-20 flex-col items-center justify-center rounded-2xl bg-blancoBox text-grisText hover:bg-primario hover:text-white"
                        }
                      >
                        <IonIcon
                          icon={item[0]?.icon}
                          className="h-10 w-10"
                        ></IonIcon>
                        {location?.pathname === item[0]?.path ? (
                          <div className="w-11 truncate text-[10px]">
                            <p className="text-center">{item[0]?.name}</p>
                          </div>
                        ) : (
                          <div className="hidden w-11 truncate text-[10px] group-hover:flex">
                            <p className="group-hover:mx-auto group-hover:flex">
                              {item[0]?.name}
                            </p>
                          </div>
                        )}
                      </NavLink>
                    </div>
                  </DropdownMenuItem>
                )}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* notification center */}
        <div className="flex items-center justify-evenly gap-16">
          <div className="flex gap-6">
            <div></div>
            <div className="flex gap-3">
              <Link to={"/calendar"}>
                <IonIcon
                  icon={calendar}
                  size="large"
                  className="text-primario"
                ></IonIcon>
              </Link>
              <NotificationChat
                notifications={chat?.data}
                user={userAuth?.data}
              />
              <NotificationBell
                notificationsData={notificationsData?.data}
                user={userAuth?.data}
              />
            </div>
          </div>

          {/* Avatar Dropdown */}
          <DropdownMenu className="">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={userData?.user_image} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 bg-blancoBg">
              <DropdownMenuLabel>
                <div className="flex gap-4 p-2">
                  <div>
                    <Avatar>
                      <AvatarImage src={userData?.user_image} />
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-grisText">
                      {userData?.name}&nbsp;{userData?.last_name}&nbsp;
                      {userData?.second_last_name}
                    </p>
                    <p className="text-[12px] text-grisSubText">
                      {userData?.email}
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-blancoBox" />
              <DropdownMenuItem>
                <Link
                  to={"/my-profile"}
                  className="ml-4 flex gap-4 text-grisText"
                >
                  <IonIcon icon={person} className="h-5 w-5"></IonIcon>
                  Mi Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to={"/my-profile/notifications"}
                  className="ml-4 flex gap-4 text-grisText"
                >
                  <IonIcon icon={notifications} className="h-5 w-5"></IonIcon>
                  Notificaciones
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/"} className="ml-4 flex gap-4 text-grisText">
                  <IonIcon icon={grid} className="h-5 w-5"></IonIcon>
                  Dashboards
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={bookmark} className="h-5 w-5"></IonIcon>
                Guardado
              </DropdownMenuItem>
              {/*
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={toggle} className="h-5 w-5"></IonIcon>
                Dark Mode
              </DropdownMenuItem>
              */}
              {/* 
                              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={desktop} className="h-5 w-5"></IonIcon>
                Downloads
              </DropdownMenuItem>
              */}
              <DropdownMenuSeparator className="bg-blancoBox" />
              <DropdownMenuItem className="ml-4 text-[#D7586B]">
                <button
                  className="flex gap-4"
                  type="button"
                  onClick={logOutFunction}
                >
                  <IonIcon icon={logOut} className="h-5 w-5"></IonIcon>
                  Cerrar Sesión
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="h-full min-h-0 flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
