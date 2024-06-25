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
  toggle,
  desktop,
  logOut,
  cog,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import Cookies from "js-cookie";
import { getUserByToken, logOutRequest } from "@/lib/actions";
import NotificationChat from "./components/NotificationChat";
import NotificationBell from "./components/NotificationBell";

const MENU = [
  {
    path: "/organization",
    name: "Organization",
    icon: personCircle,
  },
  {
    path: "/project-manager",
    name: "Project Manager",
    icon: flag,
  },
  {
    path: "/crm",
    name: "CRM",
    icon: disc,
  },
  {
    path: "/chat",
    name: "Chat",
    icon: chatbubble,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: barChart,
  },
  {
    path: "/org-development/induction",
    name: "Org Dev",
    icon: people,
  },
  {
    path: "/tickets",
    name: "Ticket",
    icon: ticket,
  },
  {
    path: "/configuration",
    name: "Config",
    icon: cog,
  },
];

function MainLayout() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");
  const { chat, userAuth, notificationsData } = useLoaderData();

  useEffect(() => {
    async function fetchData() {
      const user = await getUserByToken();
      setUser(user.data);
    }
    fetchData();
    if (token == undefined || user.status == 500) return navigate("/login");
  }, []);

  async function logOutFunction() {
    //First send the request
    await logOutRequest();
    //Remove token
    Cookies.remove("token");

    //Redirect to the login
    return navigate("/login");
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
            {MENU.map((item, i) => (
              <DropdownMenuItem key={i} className="focus:bg-transparent">
                <div className="flex flex-col">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "group flex h-16 w-20 flex-col items-center justify-center rounded-2xl bg-primario text-white"
                        : "group flex h-16 w-20 flex-col items-center justify-center rounded-2xl bg-blancoBox text-grisText hover:bg-primario hover:text-white"
                    }
                  >
                    <IonIcon icon={item.icon} className="h-10 w-10"></IonIcon>
                    {location?.pathname === item.path ? (
                      <div className="w-11 truncate text-[10px]">
                        <p className="text-center">{item.name}</p>
                      </div>
                    ) : (
                      <div className="hidden w-11 truncate text-[10px] group-hover:flex">
                        <p className="group-hover:mx-auto group-hover:flex">
                          {item.name}
                        </p>
                      </div>
                    )}
                  </NavLink>
                </div>
              </DropdownMenuItem>
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
                <AvatarImage src={user?.user_image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 bg-blancoBg">
              <DropdownMenuLabel>
                <div className="flex gap-4 p-2">
                  <div>
                    <Avatar>
                      <AvatarImage src={user?.user_image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-grisText">
                      {user?.name}&nbsp;{user?.last_name}&nbsp;
                      {user?.second_last_name}
                    </p>
                    <p className="text-[12px] text-grisSubText">
                      {user?.personal_email}
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-blancoBox" />
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={person} className="h-5 w-5"></IonIcon>
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={notifications} className="h-5 w-5"></IonIcon>
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={grid} className="h-5 w-5"></IonIcon>
                Dashboards
              </DropdownMenuItem>
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={bookmark} className="h-5 w-5"></IonIcon>
                Saved
              </DropdownMenuItem>
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={toggle} className="h-5 w-5"></IonIcon>
                Dark Mode
              </DropdownMenuItem>
              <DropdownMenuItem className="ml-4 flex gap-4 text-grisText">
                <IonIcon icon={desktop} className="h-5 w-5"></IonIcon>
                Downloads
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-blancoBox" />
              <DropdownMenuItem className="ml-4 text-[#D7586B]">
                <button
                  className="flex gap-4"
                  type="button"
                  onClick={logOutFunction}
                >
                  <IonIcon icon={logOut} className="h-5 w-5"></IonIcon>
                  Log Out
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

// {iconosMenu.map((item, i) => (
//   <DropdownMenuItem
//     className="group w-[90px] h-[80px] hover:bg-blue-500 text-gris2 truncate hover:p-0 hover:m-0"
//     key={i}
//   >
//     <div className="relative w-fit flex flex-col mx-auto items-center gap-2 group-hover:text-white">
//       <div className="">
//         <IconLucide name={item.icono} size={32} />
//       </div>
//       <span className="w-[50px] text-white text-center">
//         {item.name}
//       </span>
//       {/* <div className="truncate text-white p-2">
//                                 {item.name}
//                             </div> */}
//     </div>
//   </DropdownMenuItem>
// ))}
