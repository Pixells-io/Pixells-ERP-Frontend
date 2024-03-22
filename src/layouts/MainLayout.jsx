import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function MainLayout() {
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
          <DropdownMenuContent className="grid grid-cols-3 ml-4 gap-4">
            <DropdownMenuItem>
              <div className="flex flex-col">
                <NavLink
                  to="/crm"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center justify-center w-20 h-16 group bg-primario rounded-2xl text-white"
                      : "flex flex-col items-center justify-center w-20 h-16 group bg-blancoBox rounded-2xl text-grisText hover:bg-primario hover:text-white"
                  }
                >
                  <IonIcon icon={disc} className="w-10 h-10"></IonIcon>
                  <p className="hidden group-hover:flex text-[10px]">CRM</p>
                </NavLink>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <NavLink
                  to="/organization"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center justify-center w-20 h-16 group bg-primario rounded-2xl text-white"
                      : "flex flex-col items-center justify-center w-20 h-16 group bg-blancoBox rounded-2xl text-grisText hover:bg-primario hover:text-white"
                  }
                >
                  <IonIcon
                    icon={personCircle}
                    className="w-10 h-10"
                    size="large"
                  ></IonIcon>
                  <p className="hidden group-hover:flex text-[10px]">Users</p>
                </NavLink>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <NavLink
                  to="/project-manager"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center justify-center w-20 h-16 group bg-primario rounded-2xl text-white"
                      : "flex flex-col items-center justify-center w-20 h-16 group bg-blancoBox rounded-2xl text-grisText hover:bg-primario hover:text-white"
                  }
                >
                  <IonIcon
                    icon={flag}
                    className="w-10 h-10"
                    size="large"
                  ></IonIcon>
                  <p className="hidden group-hover:flex text-[10px] text-ellipsis">
                    Project Manager
                  </p>
                </NavLink>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* notification center */}
        <div className="flex justify-evenly items-center gap-16">
          <div className="flex gap-6">
            <div>
              <IonIcon
                icon={calendar}
                size="large"
                className="text-primario"
              ></IonIcon>
            </div>
            <div>
              <IonIcon
                icon={chatbubble}
                size="large"
                className="text-primario"
              ></IonIcon>
            </div>
            <div>
              <IonIcon
                icon={notifications}
                size="large"
                className="text-primario"
              ></IonIcon>
            </div>
          </div>

          {/* Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>
                <div className="flex gap-4 p-2">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p>Don Fomularo</p>
                    <p className="text-sm">donfomularo@gmail.com</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Dashboards</DropdownMenuItem>
              <DropdownMenuItem>Saved</DropdownMenuItem>
              <DropdownMenuItem>Dark Mode</DropdownMenuItem>
              <DropdownMenuItem>Downloads</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-400">
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
