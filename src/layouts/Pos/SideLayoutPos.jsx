import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { gridOutline, list } from "ionicons/icons";

const SideLayoutPos = () => {
  return (
    <div className="h-full px-4 pb-4 font-roboto">
      <div className="w-full pb-4 font-roboto">
        <div className="grid w-full grid-cols-12 gap-x-2 rounded-lg bg-[#F9F9F9] px-4 py-1.5">
          <div className="col-span-1 flex h-[64px] w-full flex-col items-center justify-center rounded-2xl bg-grisHeading">
            {/* <h2 className="font-poppins text-xl font-bold text-grisHeading">
            Home
          </h2>
          <label className="text-sm font-medium text-grisText">
            21 FEB 2024
          </label> */}
            <h2 className="font-poppins text-xl font-bold text-white">Home</h2>
            <label className="text-sm font-medium text-[#D7D7D7]">
              21 FEB 2024
            </label>
          </div>
          <div className="col-span-8 flex w-full items-center justify-center">
            <div className="flex w-fit gap-6 overflow-x-auto">
              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">
                    CONSULTAR ARTICULO
                  </p>
                </div>
              </NavLink>

              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">
                    VERIFICADOR DE PRECIO
                  </p>
                </div>
              </NavLink>

              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">
                    ENTRADA EFECTIVO
                  </p>
                </div>
              </NavLink>

              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">
                    SALIDA EFECTIVO
                  </p>
                </div>
              </NavLink>

              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">CORTE</p>
                </div>
              </NavLink>

              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">
                    REIMPRIMIR TICKET
                  </p>
                </div>
              </NavLink>

              <NavLink
                to="/pos"
                className={({ isActive }) =>
                  isActive && location.pathname === "/pos"
                    ? "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                    : "rounded-3xl bg-[#F0F0F0] p-3 text-[#44444F] hover:bg-blancoBox2"
                }
              >
                <div className="w-full whitespace-nowrap">
                  <p className="font-roboto text-xs font-medium">DEVOLUCIÓN</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="overflow-y-none col-span-3 flex h-full w-full justify-center">
            <div className="flex h-full w-fit gap-x-6 overflow-x-auto">
              <div className="flex flex-col gap-y-1">
                <div>
                  <label className="text-xs font-semibold text-grisText">
                    Tienda
                  </label>
                </div>
                <div>
                  <label className="rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                    Andares
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div>
                  <label className="text-xs font-semibold text-grisText">
                    Vendedor
                  </label>
                </div>
                <div>
                  <label className="rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                    Catalina
                  </label>
                </div>
              </div>
              <div className="justfiy-center flex items-center gap-x-4">
                <button type="button">
                  <IonIcon
                    icon={gridOutline}
                    className="h-6 w-7 rounded-lg bg-primarioBotones p-1 text-white"
                  ></IonIcon>
                </button>
                <button type="button">
                  <IonIcon
                    icon={list}
                    className="h-6 w-7 rounded-lg bg-blancoBox p-1 text-grisText"
                  ></IonIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default SideLayoutPos;
