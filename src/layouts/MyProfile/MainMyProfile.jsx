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
import { IonIcon } from "@ionic/react";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
function MainMyProfile() {
  const { data } = useLoaderData();
  const user = data.user;
  const position = data.position;
  const location = useLocation();

  console.log(location.pathname);

  const businessInfo = [
    {
      label: "Work Location",
      value: user.working_center,
    },
    {
      label: "Date of Admission",
      value: user.created_at,
    },
    {
      label: "Phone Number",
      value: user.institutional_phone,
    },
    {
      label: "Email",
      value: user.email,
    },
  ];

  const aboutInfo = [
    {
      label: "Complete Name",
      value: user.name + " " + user.last_name + " " + user.second_last_name,
    },
    {
      label: "Date of Birth",
      value: user.date_of_birth,
    },
    {
      label: "Place of Birth",
      value: user.city_of_birth,
    },
    {
      label: "Personal Phone Number",
      value: user.phone,
    },
    {
      label: "Personal Email",
      value: user.personal_email,
    },
  ];
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">my profile</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              GENERAL SETTINGS
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
                My Profile
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Review your personal information and update your data
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
                Security
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Change your password if necessary. Don't share it.
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
                Notifications
              </span>
              <br />
              <span className="font-roboto text-xs font-light text-grisSubText">
                Explore the notifications you've received and adjust preferences
              </span>
            </div>
          </NavLink>

          <div
            className={
              location.pathname === "/my-profile/estatus"
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
        </div>

        {/*component accion*/}
        <div className="flex h-full gap-10 overflow-auto rounded-xl p-7">
          <div className="flex w-1/3">
            <div className="h-fit w-full rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex">
                <img
                  src={user.user_image}
                  className="h-20 w-20 rounded-full shadow-xl"
                />
                <div className="mt-4 w-3/4 text-center">
                  <span className="text-lsm font-roboto font-medium uppercase text-grisText">
                    {position.position_type} {position.position_name}
                  </span>
                  <br />
                  <span className="font-roboto text-sm font-normal text-grisText">
                    {user.phone}
                  </span>
                </div>
              </div>
              <div className="py-4 text-center">
                <span className="font-poppins text-lg font-bold uppercase text-grisHeading">
                  {user.name} {user.last_name} {user.second_last_name}
                </span>
                <br />
                <span className="font-roboto text-sm font-normal text-grisText">
                  {user.email}
                </span>
              </div>
            </div>
          </div>
          <div className="w-2/3 overflow-scroll rounded-xl bg-[#FBFBFB] p-6">
            <div>
              <span className="text-poppins text-base font-bold text-grisHeading">
                ABOUT ME
              </span>
              <br />
              {aboutInfo.map((info, i) => (
                <div className="border-b border-[#e0e0e0] py-4">
                  <span className="font-roboto text-sm font-normal text-grisHeading">
                    {info.label}
                  </span>
                  <br />
                  <span className="font-roboto text-sm font-light text-grisHeading">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <span className="text-poppins text-base font-bold text-grisHeading">
                BUSINESS INFORMATION
              </span>
              <br />
              {businessInfo.map((info, i) => (
                <div className="border-b border-[#e0e0e0] py-4">
                  <span className="font-roboto text-sm font-normal text-grisHeading">
                    {info.label}
                  </span>
                  <br />
                  <span className="font-roboto text-sm font-light text-grisHeading">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainMyProfile;
