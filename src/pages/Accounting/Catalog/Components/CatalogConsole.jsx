import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navLinkArray = [
  {
    name: "PASIVO",
    to: "/accounting/liabilities-account",
  },
  {
    name: "CAPITAL CONTABLE",
    to: "/accounting/equity-account",
  },
  {
    name: "INGRESOS",
    to: "/accounting/income-account",
  },
  {
    name: "COSTO DE VENTAS",
    to: "/accounting/cost-account",
  },
  {
    name: "GASTOS",
    to: "/accounting/expense-account",
  },
  {
    name: "FINANCIEROS",
    to: "/accounting/financial-account",
  },
  {
    name: "OTROS ING Y EGRE",
    to: "/accounting/other-account",
  },
];

const CatalogConsole = () => {
  const location = useLocation();

  return (
    <div className="flex h-full justify-center overflow-auto rounded-xl p-0">
      <div className="flex h-full w-full gap-x-6 p-2">
        <div className="flex flex-col gap-4">
          <NavLink
            to="/accounting"
            className={({ isActive }) =>
              (isActive && location.pathname === "/accounting"
                ? "bg-[#44444F] text-white shadow-xl"
                : "text-[#44444F] hover:bg-[#E8E8E8]") +
              " rounded-3xl border border-[#8F8F8F] w-[150px] px-2 py-2 text-sm "
            }
          >
            <p className="text-center font-medium">ACTIVO</p>
          </NavLink>
          {navLinkArray.map((navl, i) => (
            <NavLink
              key={"navLink-" + i}
              to={navl.to}
              className={({ isActive }) =>
                (isActive
                  ? "bg-[#44444F] text-white shadow-xl"
                  : "text-[#44444F] hover:bg-[#E8E8E8]") +
                " rounded-3xl border border-[#8F8F8F] w-[150px] px-2 py-2 text-sm"
              }
            >
              <p className="text-center font-medium">{navl.name}</p>
            </NavLink>
          ))}
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CatalogConsole;
