import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const CatalogConsole = ({accoutingAccounts}) => {
  const [accountName, setAccountName] = useState("");
  const params = useParams();
  useEffect(() => {
    const level = params.level;
    const findNameAccount = accoutingAccounts.find((account => account.level == level));
    !!findNameAccount && setAccountName(findNameAccount.name);
  }, [params]);

  return (
    <div className="flex h-full justify-center overflow-auto rounded-xl p-0">
      <div className="flex h-full w-full gap-x-6 p-2">
        <div className="flex flex-col gap-4 overflow-y-auto w-[200px]">
          {accoutingAccounts.map((navl, i) => (
            <NavLink
              key={"navLink-" + i}
              to={"/accounting/" + navl.level}
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
          <Outlet context={{accountName}}/>
        </div>
      </div>
    </div>
  );
};

export default CatalogConsole;
