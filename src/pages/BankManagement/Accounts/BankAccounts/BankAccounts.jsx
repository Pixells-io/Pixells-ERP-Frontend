import React, { useEffect, useState } from "react";
import DataTable from "@/components/table/DataTable";
import { AccountsColumns } from "../Table/AccountsColumns";
import { createPusherClient } from "@/lib/pusher";
import { getBankAccounts } from "../utils";

function BankAccounts({ bankAccounts }) {
  const [bankAccountsInfo, setBankAccountInfo] = useState(bankAccounts.data);

  const pusherClient = createPusherClient();

  async function getBankAccountList() {
    let newData = await getBankAccounts();
    setBankAccountInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-bank-accounts");

    pusherClient.bind("fill-bank-accounts", ({ message }) => {
      getBankAccountList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-bank-accounts");
    };
  }, []);

  return (
    <DataTable
      data={bankAccountsInfo}
      columns={AccountsColumns}
      searchFilter={"name"}
      searchNameFilter="Nombre"
      isCheckAll={true}
    />
  );
}

export default BankAccounts;
