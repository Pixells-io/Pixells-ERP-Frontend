import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";

const SearchAccountingAccount = ({ accounts, setAccountsSearch }) => {
  const [search, setSearch] = useState("");

  const searchAccount = (v) => {
    let r = findPrunedPath(accounts, v);
    setSearch(v);
    if (!!r) {
      setAccountsSearch(r);
    } else {
      setAccountsSearch([]);
    }
  };

  useEffect(() => {
    searchAccount(search);
  }, [accounts]);

  function findPrunedPath(data, targetName) {
    // Si el targetName está vacío, devolver todos los datos
    if (!targetName) {
      return data;
    }

    // Recursivamente buscar todas las coincidencias
    const results = [];

    function search(data) {
      for (let account of data) {
        // Verificar si el nombre coincide y si no tiene subcuentas, o si tiene subcuentas que coinciden
        if (account.name.toLowerCase().includes(targetName.toLowerCase())) {
          const result = { ...account, subAccounts: [] };
          if (account.subAccounts) {
            // Buscar coincidencias en las subcuentas
            const filteredSubAccounts = findPrunedPath(
              account.subAccounts,
              targetName,
            );
            if (filteredSubAccounts.length > 0) {
              result.subAccounts = filteredSubAccounts;
            }
          }
          results.push(result);
        } else if (account.subAccounts) {
          // Buscar recursivamente en las subcuentas si el nombre no coincide
          const subResults = findPrunedPath(account.subAccounts, targetName);
          if (subResults.length > 0) {
            results.push({ ...account, subAccounts: subResults });
          }
        }
      }
    }

    search(data);

    return results;
  }

  return (
    <div className="flex w-full justify-end pr-8 pt-3">
      <div className="flex items-center gap-x-2">
        <IonIcon
          icon={searchOutline}
          size="large"
          className="text-grisText"
        ></IonIcon>
        <Input
          type="text"
          value={search}
          className="text-md font-normal text-grisText"
          placeholder={"Nombre Cuenta contable"}
          onChange={(v) => searchAccount(v.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchAccountingAccount;
