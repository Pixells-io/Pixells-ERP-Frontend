import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const favorites = [
  {
    id: 1,
    path: "general",
    name: "General Notices",
  },
  {
    id: 2,
    path: "information",
    name: "Information",
  },
  {
    id: 3,
    path: "doctors",
    name: "Doctors",
  },
  {
    id: 4,
    path: "example4",
    name: "Example4",
  },
];

const allCategories = [
  {
    id: 5,
    path: "example5",
    name: "Example5",
  },
  {
    id: 6,
    path: "example6",
    name: "Example6",
  },
  {
    id: 7,
    path: "example7",
    name: "Example7",
  },
  {
    id: 8,
    path: "example8",
    name: "Example8",
  },
  {
    id: 9,
    path: "example9",
    name: "Example9",
  },
  {
    id: 10,
    path: "example10",
    name: "Example10",
  },
  {
    id: 11,
    path: "example11",
    name: "Example11",
  },
  {
    id: 12,
    path: "example12",
    name: "Example12",
  },
  {
    id: 13,
    path: "example13",
    name: "Example13",
  },
];
function Categories() {
  return (
    <div className="flex flex-col gap-y-6 overflow-auto rounded-md bg-blancoForms pb-2 pl-4 pr-1 pt-4 min-w-[230px]">
      <h2 className="font-poppins text-xl font-semibold text-grisHeading">
        CATEGORIES
      </h2>
      <div>
        <h3 className="font-poppins text-xl font-semibold text-grisHeading">
          Favorite Categories
        </h3>
        <div className="mt-3 flex flex-col gap-y-4">
          {favorites.map((favorite) => (
            <NavLink
              key={"favorite-" + favorite.id}
              to={"/topics/" + favorite.path}
            >
              {({ isActive }) => (
                <p
                  className={`w-[112px] rounded-3xl px-3 py-2 text-xs font-medium text-center ${
                    isActive
                      ? "bg-primario text-white"
                      : "bg-[#E0E0E0] text-[#44444F]"
                  }`}
                >
                  {favorite.name}
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-poppins text-xl font-semibold text-grisHeading">
          All
        </h3>
        <div className="mt-3 flex max-h-[250px] flex-col gap-y-4 overflow-auto">
          {allCategories.map((allCAtegory) => (
            <NavLink
              key={"allCategory-" + allCAtegory.id}
              to={"/topics/" + allCAtegory.path}
            >
              {({ isActive }) => (
                <div className="flex items-center gap-x-2">
                  <p
                    className={`w-[112px] rounded-3xl px-2 py-2 text-xs font-medium text-center ${
                      isActive
                        ? "bg-primario text-white"
                        : "border border-[#44444F] bg-inherit text-[#44444F]"
                    }`}
                  >
                    {allCAtegory.name}
                  </p>
                  {isActive && (
                    <IonIcon
                      icon={ellipsisHorizontal}
                      size="medium"
                      className="text-grisHeading"
                    ></IonIcon>
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="pr-3 mt-4">
        <div className="flex flex-col gap-y-1 rounded-2xl bg-[#E8E8E8] px-2 py-1">
          <div>
            <label className="text-xs font-medium text-grisText">Created</label>.
            <label className="text-xs font-medium text-grisText">
              12 Jan 2024
            </label>
          </div>
          <div className="flex gap-x-2">
            <img
              src={"https://picsum.photos/id/237/200/300"}
              className="h-5 w-5 rounded-full"
            />
            <span className="text-xs font-medium text-grisText">
              Don Formularo
            </span>
          </div>
          <div>
            <label className="text-xs font-medium text-grisText">1 Post</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
