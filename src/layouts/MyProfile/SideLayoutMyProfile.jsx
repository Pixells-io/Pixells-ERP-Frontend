import React from "react";
import { Outlet, NavLink, useLocation, redirect } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import TopMenu from "../Masters/Menus/TopMenu";
import {
  albumsOutline,
  keyOutline,
  notificationsOutline,
  person,
} from "ionicons/icons";
import {
  destroyGoogleKeys,
  loginAzureToken,
  loginGoogleToken,
  loginMetaToken,
  savePermissionAzure,
  savePermissionGoogle,
  storeChangeNewPassword,
} from "./utils";

function SideLayoutMyProfile() {
  const location = useLocation();
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenu main={"/"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/my-profile"
              className={({ isActive }) =>
                isActive && location.pathname === "/my-profile"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={person} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">My Profile</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/my-profile/security"
              className={({ isActive }) =>
                isActive && location.pathname === "/my-profile/security"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={keyOutline} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Security</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/my-profile/notifications"
              className={({ isActive }) =>
                isActive && location.pathname === "/my-profile/notifications"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={notificationsOutline} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Notifications</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/my-profile/topic-saved"
              className={({ isActive }) =>
                isActive && location.pathname === "/my-profile/topic-saved"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={albumsOutline} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Saved Topics</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutMyProfile;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type_function")) {
    case "1":
      await storeChangeNewPassword(data);
      return redirect("/my-profile");
      break;
    case "2":
      //GOOGLE LOGIN URL
      const responseUrl = await loginGoogleToken();
      if (responseUrl.code != 400) {
        return redirect(responseUrl.data.url);
      } else {
        return "Token already Exist";
      }
      break;
    case "3":
      await savePermissionGoogle(data);
      return redirect("/my-profile/integrations");
      break;
    case "4":
      await destroyGoogleKeys(data);
      return redirect("/my-profile/integrations");
      break;
    case "5":
      //AZURE LOGIN URL
      const responseAzure = await loginAzureToken();
      if (responseAzure.code != 400) {
        return redirect(responseAzure.data.url);
      } else {
        return "Token already Exist";
      }
      break;
    case "6":
      await savePermissionAzure(data);
      return redirect("/my-profile/integrations");
      break;
    case "7":
      const responseUrlMeta = await loginMetaToken();
      if (responseUrlMeta.code != 400) {
        return redirect(responseUrlMeta.data.url);
      } else {
        return "Token already Exist";
      }
      break;
  }
}
