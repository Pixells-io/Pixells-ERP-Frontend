import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useLoaderData,
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
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Cookies from "js-cookie";
import { getUserByToken } from "@/lib/actions";
import NotificationChat from "./components/NotificationChat";
import NotificationBell from "./components/NotificationBell";

const MENU = [
  {
    path: "/organization",
    name: "organization",
    icon: personCircle,
  },
  {
    path: "/project-manager",
    name: "project manager",
    icon: flag,
  },
  {
    path: "/crm",
    name: "CRM",
    icon: disc,
  },
  {
    path: "/chat",
    name: "chat",
    icon: chatbubble,
  },
  {
    path: "/analytics",
    name: "analytics",
    icon: barChart,
  },
  {
    path: "/org-development",
    name: "org dev",
    icon: people,
  },
  {
    path: "/tickets",
    name: "ticket",
    icon: ticket,
  },
];

function MainLayout() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");
  const { chat, userAuth } = useLoaderData();

  useEffect(() => {
    async function fetchData() {
      const user = await getUserByToken();
      setUser(user);
    }
    fetchData();
    if (token == undefined || user.status == 500) return navigate("/login");
  }, []);

  return (
    <div className="flex flex-col h-screen min-h-0">
      <div className="flex justify-between items-center p-3 h-[56px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IonIcon
              icon={menu}
              size="large"
              className="text-grisHeading"
            ></IonIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="grid grid-cols-3 ml-4 gap-4 ">
            {MENU.map((item, i) => (
              <DropdownMenuItem key={i} className="focus:bg-transparent">
                <div className="flex flex-col">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "flex flex-col items-center justify-center w-20 h-16 group bg-primario rounded-2xl text-white"
                        : "flex flex-col items-center justify-center w-20 h-16 group bg-blancoBox rounded-2xl text-grisText hover:bg-primario hover:text-white"
                    }
                  >
                    <IonIcon icon={item.icon} className="w-10 h-10"></IonIcon>
                    {location?.pathname === item.path ? (
                      <div className="text-[10px] w-11 truncate">
                        <p className="text-center">{item.name}</p>
                      </div>
                    ) : (
                      <div className="hidden group-hover:flex text-[10px] w-11 truncate ">
                        <p className="group-hover:flex group-hover:mx-auto">
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
        <div className="flex justify-evenly items-center gap-16">
          <div className="flex gap-6">
            <div></div>
            {userAuth.data.id !== null ? (
              <div className="flex gap-3">
                <IonIcon
                  icon={calendar}
                  size="large"
                  className="text-primario"
                ></IonIcon>
                <NotificationChat
                  notifications={chat.data}
                  user={userAuth.data}
                />
                <NotificationBell />
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Avatar Dropdown */}
          <DropdownMenu className="">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 bg-blancoBg">
              <DropdownMenuLabel>
                <div className="flex gap-4 p-2">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-grisText font-semibold text-base">
                      Don Fomularo
                    </p>
                    <p className="text-[12px] text-grisSubText">
                      donfomularo@gmail.com
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-blancoBox" />
              <DropdownMenuItem className="flex gap-4 ml-4 text-grisText">
                <IonIcon icon={person} className="h-5 w-5"></IonIcon>
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-4 ml-4 text-grisText">
                <IonIcon icon={notifications} className="h-5 w-5"></IonIcon>
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-4 ml-4 text-grisText">
                <IonIcon icon={grid} className="h-5 w-5"></IonIcon>
                Dashboards
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-4 ml-4 text-grisText">
                <IonIcon icon={bookmark} className="h-5 w-5"></IonIcon>
                Saved
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-4 ml-4 text-grisText">
                <IonIcon icon={toggle} className="h-5 w-5"></IonIcon>
                Dark Mode
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-4 ml-4 text-grisText">
                <IonIcon icon={desktop} className="h-5 w-5"></IonIcon>
                Downloads
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-blancoBox" />
              <DropdownMenuItem className="flex gap-4 ml-4 text-[#D7586B]">
                <IonIcon icon={logOut} className="h-5 w-5"></IonIcon>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-grow h-full min-h-0">
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
