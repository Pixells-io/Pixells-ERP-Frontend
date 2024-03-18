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
import { Menu, CalendarDays, MessageCircle, Bell } from "lucide-react";
import IconLucide from "@/components/IconLucide";
import { IonIcon } from "@ionic/react";
import { calendar, chatbubble, notifications, menu } from "ionicons/icons";

const iconosMenu = [
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
  { name: "project manager", icono: "Flag" },
];

function MainLayout() {
  return (
    <div className="flex flex-col h-screen min-h-0">
      <div className="flex justify-between items-center p-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IonIcon icon={menu} size="large" className="text-grisHeading"></IonIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="grid grid-cols-3 ml-4 gap-4">
            <DropdownMenuItem>
              <NavLink to="/crm">CRM</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex justify-evenly items-center gap-16">
          <div className="flex gap-6">
            <div>
              <IonIcon icon={calendar} size="large" className="text-primario"></IonIcon>
            </div>
            <div>
              <IonIcon icon={chatbubble} size="large" className="text-primario"></IonIcon>
            </div>
            <div>
              <IonIcon icon={notifications} size="large" className="text-primario"></IonIcon>
            </div>
          </div>
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
